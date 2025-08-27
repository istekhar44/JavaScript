console.log("Operators");
let a = 23;
let b = 65;
console.log("a+b =",a+b);
//operand => a
//operator => + , - , * 
console.log("a+b =",a+b);
console.log("a-b =",a-b);
console.log("a*b =",a*b);

//Modulus to find the reminder
console.log("a%b =",a%b);

//Power Operator 
console.log("a**b =",a**b);

//Logical And opertor &&
let x= 5;
let y= 6;
let cond1 = x < y;  //true 
let cond2 = x == y; //false 
console.log("cond1 && cond2 = ", cond1 && cond2);  //final ans is False




 // website Dark and the light mode 
 let color;
 let mode = "dark";

 if(mode === "dark"){
     color= "Dark";
 }else{
   color="Write";
 }
 console.log(color)



//make the voter conditon in the 
let age = 34;
if(age > 18){
    console.log("You Can Vote :)");
}
else{
    console.log("Your Cant Vote ");
}


//Multiple Condition operatoru
let ageing =33;

if(ageing < 18){
    console.log("Child");
}
else if(ageing < 55){
    console.log("Adult");
}
else{
    console.log("Old Men")
}


//Write the multiple condition to change the Mode 








//What is the ternerory operator
let saal = 12;
let result = saal > 18 ?  "Adult" : "Not Adult";    //This is Compact if else .
console.log(result);

eg=>  condition ? "print value 1" : "Print Value 2";






                    //  IMPORTANT
//Alert Messages
// alert("hellow");  //Create the one time message

//Alert want take the message 
// prompt("Number");





//Take the input alert and Check the no is Divisible of 5
let num = prompt("Enter the Number ");
if(num%5==0){
    console.log(num,"This Number  is division of 5");
}
else{
    console.log(num,"This Number  is not divisble of 5 ")
}





//Write the code to print the grade  A ,B , C , D , F?
let score = 8;
if(score >= 90 && score <= 100){
    console.log("First Division");
} 
else if (score >= 70 && score<= 80);{
    console.log("Second Division");
}
// else if (score >=0 && score<=10){
//     console.log("fail");
// }




















