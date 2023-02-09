const obj = {
    msg: "tannu",
    printName(){
        console.log(this.msg);
    }
}
obj.printName();

setTimeout(() => obj.printName(), 1000);