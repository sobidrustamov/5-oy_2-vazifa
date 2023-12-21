class Car {
  model;
  color;
  max_speed;
  name;
  company;
  isStarted = false;
  isMoving = false;
  currentSpeed = 0;
  gasSize;
  currentGas;
  #gasUsage = 0;
  gasUsageIntervalId;
  lighted = false;

  constructor(name, model, color, max_speed, company, gasSize = 40) {
    this.name = name;
    this.model = model;
    this.color = color;
    this.max_speed = max_speed;
    this.company = company;
    this.gasSize = gasSize;
    this.currentGas = gasSize;
  }

  get gasUsage() {
    return this.#gasUsage;
  }

  start() {
    if (this.isStarted) {
      console.log(this.name + " is already started. No need to start again");
      return;
    }

    this.isStarted = true;
    console.log(this.name + " is started");
    this.#gasUsage+=10;
    this.gasUsageIntervalId = setInterval(() => {
      this.currentGas -= this.#gasUsage;
      console.log(`${this.name} has ${this.currentGas}l gas left`);
      if (this.currentGas <= 0) {
        clearInterval(this.gasUsageIntervalId);
        console.log(`${this.name} is turned off, because it ran out of fuel`);
        return;
      }
    }, 3_000);
  }

  stop() {
    if (!this.isStarted) {
      console.log(`${this.name} is not started yet, No need to start the car `);
    }
    this.stopMoving();
    this.#gasUsage = 0;
    this.isStarted = false;
    console.log(`${this.name} is turned off`);
  }
  
  move() {
    
    if (!this.isStarted) {
      console.log(
        `${this.name} is not started yet, please start the car first`
      );

      return;
    }
    this.currentSpeed = this.currentSpeed + 10;
    this.#gasUsage++;

    if (this.isMoving) {
      console.log(
        `${this.name}'s speed is increased by 10, current speed is ${this.currentSpeed}`
      );

      if (this.currentSpeed >= 60) {
        console.log(
          `Further speeding is not recommended as there might be a radar`
        );
      }

      return;
    }

    this.isMoving = true;
    console.log(
      `${this.name} started moving, current speed is ${this.currentSpeed}`
    );
  }

  stopMoving() {
    if (!this.isMoving) {
      console.log(`${this.name} is not moving anyways. No need to stop moving`);
      return;
    }

    this.isMoving = false;
    this.#gasUsage = 1;
    this.currentSpeed = 0;
    console.log(`${this.name} stopped moving`);
  }

  turnOntheLight() {
    if (this.lighted) {
      console.log(`the lights are already on`);
      return;
    }
    this.lighted = true;
    console.log(`the lights turned on of ${this.name} `);
  }

  turnOfftheLight() {
    if (!this.lighted) {
      console.log(`the lights are already off`);
      return;
    }
    this.lighted = false;
    console.log(`the lights turned off of ${this.name} `);
  }
}

let bmw = new Car("My BMW", "X5", "black", 243, "BMW", 82);
let mers = new Car("My Mercedes", "222", "black", 155, "Mercedes", 100);

bmw.move();
bmw.start();
bmw.start();
mers.start();

bmw.move();
bmw.move();
bmw.move();
bmw.move();
bmw.move();
bmw.move();
bmw.move();
// bmw.stopMoving();
// bmw.stop();
bmw.turnOntheLight();
bmw.turnOntheLight();

bmw.turnOfftheLight();
bmw.turnOfftheLight();
