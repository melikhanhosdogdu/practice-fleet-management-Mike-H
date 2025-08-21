class Vehicle{
    constructor(type, make, model, year, mileage = 0){
        this.type = type,
        this.make = make,
        this.model = model,
        this.year = year,
        this.mileage = mileage
    }
    drive(distance){
        this.mileage = this.mileage + distance;
    }
    getDetails(){
        return `Type: ${this.type}\nMake: ${this.make}\nModel: ${this.model}\nYear: ${this.year}\nMileage: ${this.mileage}\n`;
    }
}

const vehicle1 = new Vehicle("Sedan", "Ford", "Fusion", 2018, 10);
const vehicle2 = new Vehicle("Sedan", "Toyata", "Corolla", 2008, 230000);
const vehicle3 = new Vehicle("Jeep", "Cheverolet", "Grand Cherokee", 2025, 100);

vehicle1.drive(100);
console.log(vehicle1.getDetails());
vehicle2.drive(1000);
console.log(vehicle2.getDetails());
vehicle3.drive(10000);
console.log(vehicle3.getDetails());