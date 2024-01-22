// Compare two JSON have the same properties without order.

// let obj1 = {name:"Person 1", age:5};
// let obj2 = {age:5, name:"Person 1"}

let obj1 = {name: "Person 1", age: 5};
let obj2 = {age: 5, name: "Person 1"};

// Using equality operator
console.log(obj1 === obj2); // true

// Using JSON.stringify
console.log(JSON.stringify(obj1) === JSON.stringify(obj2)); // true



// 2 . use the rest countires API URL https://restcountries.com/v3.1/all and display the all the rest country
// flags in console.
// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

const url_1 = "https://restcountries.com/v3.1/all"
const request = new XMLHttpRequest()
request.open("GET", url_1);
request.onload = () =>{
    var data = JSON.parse(request.response);
    for(let i of data){
        console.log(i.flag);
    }
}
request.send();





// 3. use the same rest countries and print all countries, names,regions,sub-regions and populations

const url_2 = "https://restcountries.com/v3.1/all"
const request = new XMLHttpRequest()
request.open("GET", url_2);
request.onload = () =>{
    var data = JSON.parse(request.response);
    for(i=0;i<=data.length-1;i++){
        console.log(data[i].name,data[i].region,data[i].subregion,data[i].population);
    }
}
request.send();