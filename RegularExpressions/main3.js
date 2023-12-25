class Thermostat {
  constructor(fahrenheit) {
    this._kelvin = (5 / 9) * (fahrenheit - 32) + 273.15;
  }

  get temperature() {
    return this._kelvin - 273.15;
  }

  set temperature(celsius) {
    return this._kelvin = celsius + 273.15;
  }

}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
console.log(temp);
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
console.log(temp);
