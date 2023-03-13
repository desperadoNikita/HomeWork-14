class Car {
    constructor(brand, model, price) {
      this.brand = brand;
      this.model = model;
      this.price = price;
      this._engine = 'unknown';
    }
  
    getPrice() {
      return this.price;
    }
  
    changePrice(newPrice) {
      this.price = newPrice;
    }
  
    get engine() {
      return this._engine;
    }
  
    set engine(newEngine) {
      this._engine = newEngine;
    }
  }
  
  const myCar = new Car('Tesla', 'Model S', 100000);
  console.log(myCar.getPrice()); 
  
  myCar.changePrice(120000);
  console.log(myCar.getPrice());
  
  
  myCar.engine = 'electric';
  console.log(myCar.engine);
  