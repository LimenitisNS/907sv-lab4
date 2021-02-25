export const randomBoolean = () => Math.random() >= 0.5;

export const isWeekday = date => date.getDay() % 6 !== 0;

export const reverseStr = str => str.split('').reverse().join('');

export const average = (...args) => args.reduce((a, b) => a + b) / args.length;

export const celsiusToFahrenheit = (celsius) => celsius * 9/5 + 32;

export const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;
