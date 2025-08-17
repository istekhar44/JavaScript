let DATA = "Secret information";

class User {
    constructor(name,email){
        this.name = name;
        this.email = email;
        
    }

    viewData(){
        console.log("Website Data", DATA);
    }
}

class Admin extends USer {
    constructor(name , email){   
        super(name ,email);    //When call the parent properties  USe the super keyword to access the data   

    }
    editData(){
        DATA = "some new value";
    }
}
let Student1 = new User( "Istekhar","mdistekharalam@gmail.com");
let Student2 = new User();
let Student3 = new User();
let teacher1 = new User("Dean","dean@gmail.com");

let admin1 = new Admin();




//Question2: Create a new class called admin which inherits form User . Add a new method called  
//editData to Adimin that allow it to edit website data



//Error Handling 
let a = 5;
let b = 10 ;
console.log("a=  " , a);
console.log("a + b= " , a+b);
console.log("a - b = " , a-b);
console.log("a * b = " , a - b);   //Erroe in this line 
try {
    console.log("a * b = " , a - b);

} catch( error){
    console.log(error);  //Print the Error
}

console.log("a= " , a);
console.log("a= " , a);

// Syntax
// try{
//     ...normal code 

// } catch (Error){  //Error is object

//     ...handling Error

// }






