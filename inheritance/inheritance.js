function Human(){
    
}
Human.prototype.talk = function(){
    return `hey im talking`;
}

function SuperHuman(){
    
}

SuperHuman.prototype = new Human();

SuperHuman.prototype.constructor = SuperHuman;

SuperHuman.prototype.fly = function(){
    return `hey im flying`;
}

class Human2{
    talk(){
        return `im talking`;
    }
}

class SuperHuman2 extends Human2{
    fly(){
        return `im flying`;
    }
}