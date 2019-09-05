class QueueFromStacks {
    constructor(){
        this.innerStack = [];
        this.outerStack = [];
    }

    print(){
        console.log(`Inner stack ${this.innerStack}`);
        console.log(`Outer stack ${this.outerStack}`);
    }

    enqueue(el){
        this.innerStack.push(el);
    }

    isEmpty(){
        return this.innerStack.length === 0;
    }

    dequeue(){
        if(this.isEmpty()) return;
        while (!this.isEmpty()){
            this.outerStack.push(this.innerStack.pop())
        }
        return this.outerStack.pop()
    }
}
