// Abstract Car class
class Car {
    constructor(model, brand) {
      this.model = model;
      this.brand = brand;
    }
  
    getInfo() {
      return `This is a ${this.model} ${this.brand} car`;
    }
  }
  
  // Abstract CarFactory class
  class CarFactory {
    createSedan() {
      throw new Error('This method must be implemented by a concrete CarFactory class');
    }
  
    createHatchback() {
      throw new Error('This method must be implemented by a concrete CarFactory class');
    }
  
    createSUV() {
      throw new Error('This method must be implemented by a concrete CarFactory class');
    }
  }
  
  // Concrete CarFactory classes by brands
  class NissanFactory extends CarFactory {
    createSedan() {
      return new Sedan('Nissan Sentra', 'Nissan');
    }
  
    createHatchback() {
      return new Hatchback('Nissan Versa', 'Nissan');
    }
  
    createSUV() {
      return new SUV('Nissan Rogue', 'Nissan');
    }
  }
  
  class MazdaFactory extends CarFactory {
    createSedan() {
      return new Sedan('Mazda 3', 'Mazda');
    }
  
    createHatchback() {  
      return new Hatchback('Mazda MX-5', 'Mazda');
    }
  
    createSUV() {
      return new SUV('Mazda CX-5', 'Mazda');
    }
  }
  
  class RenaultFactory extends CarFactory {
    createSedan() {
      return new Sedan('Renault Logan', 'Renault');
    }
  
    createHatchback() {
      return new Hatchback('Renault Sandero', 'Renault');
    }
  
    createSUV() {
      return new SUV('Renault Duster', 'Renault');
    }
  }
  
  // Concrete Car classes by model
  class Sedan extends Car {
    constructor(model, brand) {
      super(model, brand);
    }
  }
  
  class Hatchback extends Car {
    constructor(model, brand) {
      super(model, brand);
    }
  }
  
  class SUV extends Car {
    constructor(model, brand) {
      super(model, brand);
    }
  }
  
  // Usage example
  let nissanFactory = new NissanFactory();
  let nissanSedan = nissanFactory.createSedan();
  console.log(nissanSedan.getInfo());
  
  let mazdaFactory = new MazdaFactory();
  let mazdaHatchback = mazdaFactory.createHatchback();
  console.log(mazdaHatchback.getInfo());
  
  let renaultFactory = new RenaultFactory();
  let renaultSUV = renaultFactory.createSUV();
  console.log(renaultSUV.getInfo());
  