import Car from './10-car.js';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    const props = this[properties];
    return new Car(props._brand, props._motor, props._color);
  }
}
