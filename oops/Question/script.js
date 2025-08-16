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

let Student1 = new User( "Istekhar","mdistekharalam@gmail.com");
let Student2 = new User();
let Student3 = new User();
let teacher1 = new User();




//Question2: Create a new class called admin which inherits form User . Add a new method called  
//editData to Adimin that allow it to edit website data

