class Vehicle {
  constructor(public color: string) { }
  protected honk(): void {
    console.log('beep');
  }
}
class Car extends Vehicle {
  private drive(): void {
    console.log('vroom');
  }
  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car('orange');
car.startDrivingProcess();
console.log(car.color);
