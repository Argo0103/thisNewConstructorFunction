function Person(name ,age){
    this.name = name
    this.age = age
}
const p1 = new Person("Samuel", 24) 
const p2 = new Person("Joel", 36) 
const p3 = new Person("Lily", 24)

Person.prototype.compareAge = function(pers){
     
    return `${pers.name} is ${this.age > pers.age ? "younger than " : this.age < pers.age ? "older than" : "the same age as" } me`
}


 
// p1.compareAge(p2)) 
// p2.compareAge(p1) 
// p1.compareAge(p3) 