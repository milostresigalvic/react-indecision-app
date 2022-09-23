// arguments object - no longer bound with arrow fun

const add = function (a,b) {
    console.log(arguments)
    return a + b;
}

const addArrow = (a,b) => {
    //console.log(arguments) arrow fun cant use arguments
    return a + b;
}
 

// this keyword - no longer bound 

const user = {
    name: "Andrew",
    cities: ['Philadelphia', 'New York', 'Dublin'],
    printPlacesLived () {
      console.log(this.name);  
      console.log(this.cities);  

      this.cities.forEach((city) => {
        console.log(this.name + " has lived in " +  city)
      }

      )
    }
};

//user.printPlacesLived();
 
const multiplier = {
    numbers: [11,66],
    multiplyBy: 2,
    multiply()  {
        return this.numbers.map((num) => num * this.multiplyBy);
    }
}
 
console.log(multiplier.multiply(1,33));