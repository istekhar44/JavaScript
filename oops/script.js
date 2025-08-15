let student = {       //creating the multiple objects
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
              //PotoType are used to create the Objects


const employee = {
    calculateTax1(){
        console.log("tax rate is 10%");
    },
    calTax(){
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
    constructor(){
        console.log("creating new boject");
    }


    start(){
        console.log("start");

    }

    stop(){
        console.log("stop");
    }

    setBrand(brand){
        this.brandName = brand;

    }

};

fortuner = new ToyotaCar();
laxax = new ToyotaCar();
fortuner.setBrand("BMW");  //Set the brand name in the class


                   //INHERITANCE
class parent{
    karan(){
        console.log("hellow");
    }
    
}  

class mohit extends parent{

    mohit(){
        console.log("helloow");
    }
    hellow(){
        console.log("mohit is the king ");
    }    
}


karan = new mohit();
console.log(karan);

let rawat = new mohit();


         //Creating the 2 class

class person{
    eat(){
        console.log("Eat");
    }
    sleep(){
        console.log("sleep");
    }
} 

class Engineer extends person{
    work(){
        console.log("Engineer can work, build Something");
    }
}

class doctor extends Engineer{
    operation(){
        console.log("operation");
    }
}

let name = new doctor;
console.log(name);


