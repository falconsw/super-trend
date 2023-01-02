[![Coverage Status](https://coveralls.io/repos/github/falconsw/super-trend/badge.svg?branch=master)](https://coveralls.io/github/falconsw/super-trend?branch=master)

# super-trend
### Super Trend Indicator

Simple Node.js module for calculating SuperTrend
SuperTrend is a trend following indicator that is used to identify the current trend and possible reversals.

![](cover.png)

# Usage:

```js
  const data = [
    { open: 28.7,  high: 30.05, low: 28.45, close: 30.04},
    { open: 30.04, high: 30.13, low: 28.3,  close: 29.63},
    { open: 29.62, high: 31.79, low: 29.62, close: 31.02},
    { open: 31.02, high: 31.02, low: 29.92, close: 30.18},
    { open: 29.39, high: 30.81, low: 28.85, close: 29.62},
    { open: 30.84, high: 31.82, low: 26.41, close: 29.77},
    { open: 29.77, high: 29.77, low: 27.79, close: 28.27},
    { open: 26.9,  high: 29.74, low: 26.9,  close: 28.46},
    { open: 27.36, high: 28.11, low: 26.81, close: 28.11},
    { open: 28.08, high: 28.5,  low: 27.73, close: 28.15},
    { open: 29.7,  high: 31.09, low: 29.64, close: 30.81},
    { open: 30.81, high: 32.75, low: 30.07, close: 32.68},
    { open: 31.19, high: 32.77, low: 30.64, close: 31.54},
    { open: 31.54, high: 31.54, low: 29.6,  close: 30.03},
    { open: 29.16, high: 29.32, low: 27.56, close: 27.99},
    { open: 30.4,  high: 32.05, low: 30.3,  close: 31.17},
    { open: 31.3,  high: 31.54, low: 27.83, close: 30.58},
    { open: 30.58, high: 30.58, low: 28.79, close: 29.05},
    { open: 29.45, high: 29.56, low: 26.3,  close: 26.36},
    { open: 27.09, high: 27.22, low: 25.76, close: 25.93},
    { open: 25.93, high: 27.18, low: 25.29, close: 25.35},
    { open: 25.36, high: 27.38, low: 25.02, close: 26.35},
    { open: 25.73, high: 26.31, low: 24.8,  close: 26.22},
    { open: 26.22, high: 28.62, low: 26.22, close: 27.95},
    { open: 30.32, high: 30.6,  low: 28.99, close: 29   },
    { open: 29,    high: 30.94, low: 28.9,  close: 30.85},
    { open: 30.85, high: 33.05, low: 30.43, close: 31.3 },
    { open: 30.23, high: 30.49, low: 29.28, close: 29.78},
    { open: 29.78, high: 30.34, low: 28.82, close: 29.02},
    { open: 28.36, high: 29.24, low: 25.42, close: 26.31},
    { open: 26.31, high: 26.84, low: 24.99, close: 25.02},
    { open: 25.05, high: 26.06, low: 23.83, close: 25.89},
    { open: 25.96, high: 26.18, low: 24.51, close: 25.42}
];
```
```js
/**
 * Data = OHLC array of objects
 * Period = Number of periods to calculate
 * Multiplier = Multiplier for the ATR period
 */

const st = new SuperTrend(data, 10, 3).calculate();
```
```js
   Result:
    [
        { direction: 'short', value: 33.457300317625496 },
        { direction: 'short', value: 33.40807028586295 },
        { direction: 'short', value: 32.507263257276655 },
        { direction: 'short', value: 32.507263257276655 },
        { direction: 'short', value: 32.507263257276655 },
        { direction: 'short', value: 32.507263257276655 },
        { direction: 'short', value: 32.507263257276655 },
        { direction: 'short', value: 32.507263257276655 },
        { direction: 'short', value: 32.507263257276655 },
        { direction: 'short', value: 32.507263257276655 },
        { direction: 'short', value: 32.507263257276655 },
        { direction: 'short', value: 31.944779289490853 },
        { direction: 'short', value: 31.944779289490853 }
    ]
```

# License (MIT)
