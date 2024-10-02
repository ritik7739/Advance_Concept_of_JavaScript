const Person={
    name:"Ritik",
    greet(){
        console.log(`Hi my name is ${this.name}`);
    },
}

Person.greet();

//this loose their context
const greetFunction=Person.greet;
greetFunction();


//we need to bind the context
const boundGreet=Person.greet.bind({name:"John"});
boundGreet();