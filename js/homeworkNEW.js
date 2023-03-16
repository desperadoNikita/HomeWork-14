class Car {
    #engine;
    
    constructor(brand, model, price) {
      this.brand = brand;
      this.model = model;
      this.price = price;
      this.#engine = 'unknown';
    }
  
    getPrice() {
      return this.price;
    }
  
    changePrice(newPrice) {
      this.price = newPrice;
    }
  
    get engine() {
      return this.#engine;
    }
  
    set engine(newEngine) {
      this.#engine = newEngine;
    }
  }
  
  const myCar = new Car('Tesla', 'Model S', 100000);
  console.log(myCar.getPrice()); 
  
  myCar.changePrice(120000);
  console.log(myCar.getPrice());
  
  
  myCar.engine = 'electric';
  console.log(myCar.engine);
  
