console.log("Loops");

                //   IMPORTANT
            // var is usable all place 
            // let is usable only in the block


//Print the "Hellow" 5 times?
let a = 0;
for(let i = 0 ; i<5 ; i++){
    console.log("hellow");
}




//Write the program to calculate the sum  1 to 30?
let b = 1;
let number = 30 ;
let sum =0;
for(let  c =0; c <=number ; c++){
    sum = sum + c;
}
console.log(sum);





//Print the Counting 1 to N?
 let d = 1;
 let N = 10
 for(let f = 1 ; f <= N ; f++){
    console.log(f);
}






//Write the Program to print the infinite hellow
//  let hellow;
//  for(let g = 0 ; ;g++){
//     console.log("hellow");
//  }






//Write a program to print infinite no?
// let no = 1;
// for(let h = 0 ; ; h++){
//     console.log("count", h);
// }


//While Loop

// while(StoppingCondition){
//     //Do the Task
// }





//Make the Class to print the member of the class using the for loop
let student ={
    name : "Rahul",
    age :20,
    cgpa: 7.5,
    isPass: true,
};
for(let key in student){
    
    console.log("key=" , key , "value=", student[key]); //this Print the only the varible and its value  
}

for(let z in student){
    console.log(z);        //This Print the only the varibe of the member 
}






//Print the even NO?
for(let q = 0 ; q <=100 ; q++){
    if(q% 2 == 0){
       console.log(q);
        
    }
    
}

//Create a game where you start with any random game number . Ask the user to keep gussing
// the number until the user enter correct value ?







