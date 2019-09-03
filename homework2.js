const obj = {
    name: 'Max',
    age: '23',
    isMarried: false,
    education: {
        school: {
            city: 'Bobruisk',
            name: 'Gymnazium'
        },
    }
};

function printValues(obj) {
    for (var key in obj) {
        if (typeof obj[key] === "object") {
            printValues(obj[key]);
        } else {
            console.log(obj[key]);
        }
    }
}

printValues(obj);
