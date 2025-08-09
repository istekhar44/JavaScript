console.log("Arrow Function");

//Making the Sum function 
function sum(u,v){
    let ans;
    ans = console.log("Sum of the num", u + v);

    return u + v ;

}





//Multiply Function 
// function mul(u,v){

//     let ans = u*v;

//     console.log("Multiplication")
//     return u*v;
// }

//  sum(4,5);
//  mul(9,5);


        // write the above program in the short Using Arrow function






                    /*ARROW FUNCTION*/

// const hellow = (a, b) =>{
//     console.log("Addition",a+b);                //Arrow function 
//     console.log("Multiplication",a*b);
// };   






// //write the function of the to print the vowel in the string
// const CountVowel=(str) =>{
//    let count = 0;
//    for(const char of str){
//     if( char === "a" || char === "e" || char === "i" || char === "o" || char === "u")
//         count++;
    
//    }
//    console.log(count);
// }

// CountVowel("Md Istekhar Alam");
// CountVowel("jhfidahdkjfsdfkjfkjfiyuifsdokjyfhu");




            


//Call Back Function=> A Callback is a function passed as an argument to another function

function mohit(num){
    console.log("hellow Dunia");
}
                                             
function rohit(mohit){
    console.log("Welcome to this World");           //Call Back Function
    return mohit;
}
mohit(45);    // it pass only => hellow Dunia
rohit();      // it pass      => Above both output


















