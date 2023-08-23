class InfoCompanyCar {
  #companyCar;
  constructor(arr) {
    this.CompanyCar = arr;
  }
  get CompanyCar() {
    return this.companyCar;
  }
  set CompanyCar(arr) {
    if (this.#companyCar) throw new Error("Error!!! There is a driver!!!");
    else this.#companyCar = arr;
  }
  toString() {
    return `Driver: ${this.#companyCar[0]}. Brand car: ${
      this.#companyCar[1]
    }. License plate: ${this.#companyCar[2]}`;
  }
}

class CompanyCar {
  #driver;
  #carBrand;
  #licensePlate;
  constructor(driverMan, brand, plateLicense) {
    this.Driver = driverMan;
    this.CarBrand = brand;
    this.LicensePlate = plateLicense;
    this.infoDriver = [];
  }

  get Driver() {
    return this.#driver;
  }
  set Driver(driver) {
    if (this.#driver) throw new Error("Error!!! There is a driver!!!");
    else this.#driver = driver;
    this.infoDriver.push(this.#driver);
  }
  get CarBrand() {
    return this.#carBrand;
  }
  set CarBrand(brand) {
    if (this.#carBrand) throw new Error("Error!!! There is a driver!!!");
    else this.#carBrand = brand;
    this.infoDriver.push(this.#carBrand);
  }
  get LicensePlate() {
    return this.#licensePlate;
  }
  set LicensePlate(plateLicense) {
    if (this.#licensePlate) throw new Error("Error!!! There is a driver!!!");
    else this.#licensePlate = plateLicense;
    this.infoDriver.push(this.#licensePlate);
  }

  info = new InfoCompanyCar(this.infoDriver);
}

let car = new CompanyCar("Arthur", "AUDI", "AR 526-05 D");
let twoCar = new CompanyCar("Beata", "Bugs", "BRBRBR");
document.write(car);
document.write(`<br>`);
document.write(twoCar);
