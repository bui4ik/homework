class MyStack {
    constructor(){
        this.data = [];
    }

    push(el){
        this.data[this.data.length++]=el
    }

    pop(){
        return this.data[--this.data.length]
    }

    peek(){
        return this.data[this.data.length-1]
    }

    clear(){
        return this.data = []
    }

    length(){
        return this.data.length
    }
}

const s = new MyStack();
s.push("David");
s.push("Raymond");
s.push("Bryan");
console.log("length: " + s.length());
console.log(s.peek());
let popped = s.pop();
console.log("The popped element is: " + popped);
console.log(s.peek());
s.push("Cynthia");
console.log(s.peek());
s.clear();
console.log("length: " + s.length());
console.log(s.peek());
s.push("Clayton");
console.log(s.peek());


