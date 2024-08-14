function parseInput (input:number|boolean|null|undefined) {
    console.log(typeof input);
}

parseInput(4)
parseInput(true)
console.log(Object.prototype.toString.call(null));
parseInput(undefined)