const properties = Symbol('properties');

export default class Car {
  constructor(brand, motor, color) {
    this[properties] = {
      _brand: brand,
      _motor: motor,
      _color: color
    };
  }

  cloneCar() {
    const props = this[properties];
    return new Car(props._brand, props._motor, props._color);
  }
}
