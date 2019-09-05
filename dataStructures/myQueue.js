class MyQueue {
    constructor(){
        this.data = []
    }

    enqueue(el){
        this.data.push(el);
    }

    // simple queue method
    // dequeue(){
    //     return this.data.shift()
    // }

    dequeue() {
        let priority = this.data[0].code;
        for (let i = 1; i < this.data.length; ++i) {
            if (this.data[i].code < priority) {
                priority = i;
            }
        }
        return this.data.splice(priority,1);
    }


    front(){
        return this.data[0]
    }

    back(){
        return this.data[this.data.length - 1]
    }

    // simple queue method
    // toString(){
    //     let str = '';
    //     for (let i = 0; i < this.data.length; i++){
    //         str += this.data[i] + "\n";
    //     }
    //     return str // join
    // }


    toString() {
        let retStr = "";
        for (let i = 0; i < this.data.length; ++i) {
            retStr += this.data[i].name + " code: "
                + this.data[i].code + "\n";
        }
        return retStr;
    }

    empty(){
        return this.data.length === 0;
    }
}

class Patient{
    constructor(name, code){
        this.name = name;
        this.code = code;
    }
}

// simple Queue
// let q = new MyQueue();
// q.enqueue("Meredith");
// q.enqueue("Cynthia");
// q.enqueue("Jennifer");
// console.log(q.toString());
// q.dequeue();
// console.log(q.toString());
// console.log("Front of queue: " + q.front());
// console.log("Back of queue: " + q.back());


//Priority Queue
let p = new Patient("Smith",5);
let ed = new MyQueue();
ed.enqueue(p);
p = new Patient("Jones", 4);
ed.enqueue(p);
p = new Patient("Fehrenbach", 6);
ed.enqueue(p);
p = new Patient("Brown", 1);
ed.enqueue(p);
p = new Patient("Ingram", 1);
ed.enqueue(p);
console.log(ed.toString());
let seen = ed.dequeue();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ");
console.log(ed.toString());

