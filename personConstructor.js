function Person(name,age){
    this.name = name
    this.age = age
    this.stomach = []
}
Person.prototype.eat = function(...someFood){
    if(this.stomach.length < 10){
        if(this.stomach.length  + someFood.length > 10){
            someFood.length = 10 - this.stomach.length 
            this.stomach.push(...someFood)
        }else{
        this.stomach.push(...someFood)
        }
    }
}
Person.prototype.poop = function(){
    this.stomach = []
}
Person.prototype.toString = function(){
    return `${this.name}, ${this.age}`
}

const person = new Person("Mary",20)

person.eat("a1","a2","a3","a4","a5","a6","a7","a8","a9",)
person.eat("a10","a11","a","a","a","a","a","a","a",)
console.log(person);