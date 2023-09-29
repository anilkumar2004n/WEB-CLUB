function compareObjects(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    for (let key of keys1) {
        if (!obj2.hasOwnProperty(key) || obj2[key] !== obj1[key]) {
            return false;
        }
    }
    return true;
}
const object1 = {
    name: "John Doe",
    age: 30,
    occupation: "Software Engineer",
};

const object2 = {
    name: "John Doe",
    age: 30,
    occupation: "Software Engineer",
};
const areEqual = compareObjects(object1, object2);
console.log(areEqual);