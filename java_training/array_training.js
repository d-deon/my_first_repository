const a =["A", "B", "C", "D" ]
console.log(a[3])
console.log(a.length)
console.log(a.map)
a.push("E")
a.push([1,2])
console.log(a)
const b =[["A", "B"], [1,2]]
console.log (b)
b[0]= "X"
console.log(b[1][0])// nested array - 1 is for the second array, 0 is for the first element of that array
console.log(b)

let names = ["Danny", "Joe", "Sarah", "Molly"];
let stringNames = names.toString();
console.log(stringNames);
console.log(names.toString) // shows you the elements as strings separated by ","
console.log(names.join(' and *')) // shows you the elemts as a  list, you can choose tge seprator
names.splice(1, 2, "Bill", "Bob") // first p0osition from where you want to delete
// secoond p : hw many do you want to delete, third is what do you want tem to be replaced with if you do)
names.slice //slices out par5ts of an array

let nums=[1,2,3,4,[5,6, [7,8]], 9]
let flat= nums.flat();//flattens out nested arrays (one level only)
let superflat= nums.flat(2);// by adding the 2 you say that yu want the second degree
console.log (nums);

let str = ("hello", "world", "hope", "this", "works")
function solution(str){
    let stringSplit = str.split("");
    let arrayReverse = stringSplit.reverse();
    let solution = arrayReverse.join("");
    return solution;
    
  }
    
  // learnings : when you work with strings yooun must have "" in brackets
  // even if it s just for reffering to gthe contauners of that function 
