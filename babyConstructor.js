function Person(name,age){
    this.name = name
    this.age = age

   
}
function Baby(favoriteToy){
    
    this.favoriteToy = favoriteToy
}
 


Baby.prototype.play = function(){
    return `Playing with ${this.favoriteToy}`
}
const person = new Person("aram",15)
const baby = new Baby('teddy bear')

console.log(baby.play());