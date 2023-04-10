function Calculator(){

}
const calculator = new Calculator()

Calculator.prototype.add = function(firstNum , secondNum){
    try{
        if(typeof firstNum !== "number" || typeof secondNum !== "number" ){
            throw TypeError("Inputs is not a number")
        }
        return firstNum + secondNum 
    }catch(error){

        return error
    }
   
}
Calculator.prototype.subtract = function(firstNum , secondNum){
    try{
        if(typeof firstNum !== "number" || typeof secondNum !== "number" ){
            throw TypeError("Inputs is not a number")
        }
        return firstNum - secondNum 
    }catch(error){

        return error
    }
   
}
Calculator.prototype.multiply = function(firstNum , secondNum){
    try{
        if(typeof firstNum !== "number" || typeof secondNum !== "number" ){
            throw TypeError("Inputs is not a number")
        }
        return firstNum * secondNum 
    }catch(error){

        return error
    }
   
}
Calculator.prototype.divide = function(firstNum , secondNum){
    try{
        if(typeof firstNum !== "number" || typeof secondNum !== "number" ){
            throw TypeError("Inputs is not a number")
        }else if(secondNum === 0){
            throw   Error("Number is not divisible by zero")
        }
        return firstNum / secondNum 
    }catch(error){

        return error
    }
   
}


