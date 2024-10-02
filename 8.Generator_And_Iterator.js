function* GenerateNumber(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

let gen= GenerateNumber();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

let genTwo=GenerateNumber();
console.log(genTwo.next().value);
console.log(genTwo.next().value);

