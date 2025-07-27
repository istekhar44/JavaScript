console.log("Array");

//eg => Make the array 
let marks = [56, 67,89,67,90];
let hero = ["Krish","Hulk","Wolfwrine"];
console.log(marks);

//Print the all array element using the loop
for (let idx= 0 ; idx < marks.length ; idx++){
    console.log("Print the element of the array", marks[idx]);

}

for (let mark of marks){
    console.log(mark);       //Print the marks of the indivisual
}


console.log(marks.length);  // It print the no of the element in the the array
              

            //  IMPORTANT
//String is INMUTABLE => Which can't Change. 
//Array is MUTABLE   => Which is Changble.





//Question => find the Mean of the array
let no = [56,78,90,45,23];
let sum = 0;
for(let i = 0 ; i< no.length ; i++){
    
    sum += i;
    
}
let avg = sum /no.length;
console.log(`avg marks of the class = ${avg}`);





//Question : Price of the five items are [250 ,645,300,900, 50] All items os 10% Off 
//Change the Array after applying the offer 
let Price = [250,645,300,900,50];

for(let i = 0 ; i<Price.length ; i++){
    


}

