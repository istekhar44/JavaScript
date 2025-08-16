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

karanArjun.__proto__ = employee;    //Create the prototype using the classes function . automatically gets access to the properties and methods defined on the constructor’s prototype.


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
    work(){
        console.log("operation");   //REMBER: If child and the parent have same constructor only run the child constructor 
    }
}

let name = new doctor;
console.log(name); 

       //Super Key 
//The Super keyword is used to call the constructor of its parent class to access the parent's properties and methods.
//It is also use the access the parent properties therough the child class

class human{
    constructor(){
        this.species = "Eating";
    }

    eat(){
        console.log("Eating");
    }
}

class mammals extends reptiles{
    constructor(catogery){
        super();  //To invoke parent class constructor 
        this.brathing = skin;
    }

    body(){
        console.log("Eating food")

    }
}

let newObj = new mammals();
console.log(newObj);





class User {
    // 1. Properties (Attributes)
    constructor(name, email) {
        this.name = name;   // attribute
        this.email = email; // attribute
    }

    // 2. Instance Method
    viewDat() {
        console.log(`User: ${this.name}, Email: ${this.email}`);
    }

    // 3. Getter Method
    get userInfo() {
        return `${this.name} <${this.email}>`;
    }

    // 4. Setter Method
    set updateEmail(newEmail) {
        this.email = newEmail;
    }

    // 5. Static Method
    static welcomeMessage() {
        console.log("Welcome to the College Website!");
    }
}

// ---- Using the class ----

// Create object (instance)
let user1 = new User("Istekhar", "istekhar@example.com");

// Call instance method
user1.viewDat();

// Call getter
console.log(user1.userInfo);

// Update email using setter
user1.updateEmail = "alam@example.com";
console.log(user1.userInfo);

// Call static method
User.welcomeMessage();





