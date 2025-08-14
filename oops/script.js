let student = {
    age : 23,
    class: 10,
    printMarks: function(){
        console.log("hellow", this.marks);
    },
    name : "hellow",
     
};

let arr = ['apple','orange','banana'];   //Array 1 Dimension

arr.push("litchi");  //write the command on the console window to push the element in the array


              //PotoType in the calsses and function
              //PotoType are used to create the clasees


const employee = {
    calculateTax1(){
        console.log("tax rate is 10%");
    },
    calculateTax2(){
        console.log("tax rate is 20%");
    },


};

const karanArjun ={       
    salary : 5000,
    calTax(){
        console.log("tax rate is 20%");
    },
};

karanArjun.__proto__ = employee;    //Create the prototype using the classes function 


         //Classes in the opps



class ToyotaCar{

};