function Person(name){
    this.name=name;
}

Person.prototype.greet=function(){
    console.log(`Hello my name is ${this.name}`);
}

let ritik=new Person("ritik");
ritik.greet();