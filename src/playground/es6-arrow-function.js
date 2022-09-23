const square = function(x) {
    return x * x;
}

const squareArrow = (x) => {
    return x * x;
}

const squareArrowShort = (x) =>  x * x;

const fullName = "Jen Mead";
const getFirstName = (name) =>   name.split(' ')[0];

console.log(getFirstName(fullName));