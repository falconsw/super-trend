'use strict'

const TI = require('technicalindicators');

class SuperTrend {
    constructor(values, period, multiplier) {
        this.values = values;
        this.period = period;
        this.multiplier = multiplier;
    }
    calculate() {

        let values = this.values;
        let period = this.period;
        let multiplier = this.multiplier;

        let i;


        // atr
        let atr = TI.ATR.calculate({
            low: values.map(val => val.low),
            high: values.map(val => val.high),
            close: values.map(val => val.close),
            period
        });

        let r = values.slice(-atr.length);

        // baseUp , baseDown
        const baseUp = [];
        const baseDown = [];
        for (i = 0; i < r.length; i++) {
            if (isNaN(atr[i])) {
                baseUp.push(NaN)
                baseDown.push(NaN)
                continue
            }
            baseUp.push((r[i].high + r[i].low) / 2 + multiplier * atr[i])
            baseDown.push((r[i].high + r[i].low) / 2 - multiplier * atr[i])
        }


        // fiUp , fiDown
        const fiUp = [];
        const fiDown = [];
        let prevFiUp = 0;
        let prevFiDown = 0;
        for (i = 0; i < r.length; i++) {
            if (isNaN(baseUp[i])) {
                fiUp.push(NaN)
            } else {
                fiUp.push(baseUp[i] < prevFiUp || (r[i - 1] ? r[i - 1].close : r[i].close) > prevFiUp ? baseUp[i] : prevFiUp)
                prevFiUp = fiUp[i]
            }

            if (isNaN(baseDown[i])) {
                fiDown.push(NaN)
            } else {
                fiDown.push(baseDown[i] > prevFiDown || (r[i - 1] ? r[i - 1].close : r[i].close) < prevFiDown ? baseDown[i] : prevFiDown)
                prevFiDown = fiDown[i]
            }
        }


        const st = [];
        let prevSt = NaN;
        for (i = 0; i < r.length; i++) {
            if (i < period) {
                st.push(NaN)
                continue
            }

            let nowSt = 0;
            if (((isNaN(prevSt) && isNaN(fiUp[i - 1])) || prevSt === fiUp[i - 1]) && r[i].close <= fiUp[i]) {
                nowSt = fiUp[i]
            } else if (((isNaN(prevSt) && isNaN(fiUp[i - 1])) || prevSt === fiUp[i - 1]) && r[i].close > fiUp[i]) {
                nowSt = fiDown[i]
            } else if (((isNaN(prevSt) && isNaN(fiDown[i - 1])) || prevSt === fiDown[i - 1]) && r[i].close >= fiDown[i]) {
                nowSt = fiDown[i]
            } else if (((isNaN(prevSt) && isNaN(fiDown[i - 1])) || prevSt === fiDown[i - 1]) && r[i].close < fiDown[i]) {
                nowSt = fiUp[i]
            } else {
                nowSt = fiUp[i]
            }

            st.push(nowSt)
            prevSt = st[i]

        }


        const position = [];
        for (i = 0; i < r.length; i++) {

            if (r[i].close < st[i]) {
                position.push({direction: 'short', value: st[i]})
            } else if (r[i].close > st[i]) {
                position.push({direction: 'long', value: st[i]})
            }
        }

        return position;
    }
}

module.exports = SuperTrend;
