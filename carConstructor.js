function Car(model,milesPerGallon){
    this.model = model
    this.milesPerGallon = milesPerGallon
    this.tank = 0
    this.odometr = 0
}

Car.prototype.fill = function(gallon){
    this.tank = gallon
}
Car.prototype.drive = function(distance){
    if(distance * this.milesPerGallon <= this.tank){
        this.tank -= distance * this.milesPerGallon
        this.odometr = distance

        return ` I will cross the road, I can go  ${this.tank / this.milesPerGallon} miles`
    } else {
        this.odometr = this.tank / this.milesPerGallon
        this.tank  -= this.odometr * this.milesPerGallon

        return `I ran out of fuel at ${this.odometr} miles!`
    }
    
}

const car1 = new Car("mercedes",2.5)

car1.fill(100)
console.log(car1.drive(30))
console.log(car1);

