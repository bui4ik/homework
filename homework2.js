const obj = {
    name: 'Max',
    age: '23',
    isMarried: false,
    education: {
        school: {
            city: 'Bobruisk',
            name: 'Gymnazium',
            count: [1, 2, 3,],
            big: null
        },
    }
};
const result = [];

function printValues(obj) {
    for (let key in obj) {
        if (typeof obj[key] === "object" && obj[key] !== null) {
            printValues(obj[key]);
        } else {
            console.log(obj[key]);
            result.push(obj[key]);
        }
    }
}

printValues(obj);
console.log(result);
