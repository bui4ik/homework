function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
}

function Patient(name, code) {
    this.name = name;
    this.code = code;
}

function enqueue(element) {
    this.dataStore.push(element);
}

// function dequeue() {
//     return this.dataStore.shift();
// }

function dequeue() {
    let priority = this.dataStore[0].code;
    for (let i = 1; i < this.dataStore.length; ++i) {
        if (this.dataStore[i].code < priority) {
            priority = i;
        }
    }
    return this.dataStore.splice(priority,1);
}

function front() {
    return this.dataStore[0];
}

function back() {
    return this.dataStore[this.dataStore.length-1];
}

// function toString() {
//     let retStr = "";
//     for (let i = 0; i < this.dataStore.length; ++i) {
//         retStr += this.dataStore[i] + "\n";
//     }
//     return retStr;
// }

function toString() {
    let retStr = "";
    for (let i = 0; i < this.dataStore.length; ++i) {
        retStr += this.dataStore[i].name + " code: "
            + this.dataStore[i].code + "\n";
    }
    return retStr;
}

function empty() {
    if (this.dataStore.length === 0) {
        return true;
    }
    else {
        return false;
    }
}

// test program

// let q = new Queue();
// q.enqueue("Meredith");
// q.enqueue("Cynthia");
// q.enqueue("Jennifer");
// console.log(q.toString());
// q.dequeue();
// console.log(q.toString());
// console.log("Front of queue: " + q.front());
// console.log("Back of queue: " + q.back());

let p = new Patient("Smith",5);
let ed = new Queue();
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
// another round
// let seen = ed.dequeue();
// console.log("Patient being treated: " + seen[0].name);
// console.log("Patients waiting to be seen: ");
// console.log(ed.toString());
// let seen = ed.dequeue();
// console.log("Patient being treated: " + seen[0].name);
// console.log("Patients waiting to be seen: ");
// console.log(ed.toString());
