class Greeter {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
let greeter;
greeter = new Greeter("world");
console.log(greeter.greet());
