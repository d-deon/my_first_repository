
let person = {
    myName: 'Dienne',
    age : 24
};

console.log(person);
//Dot Notation

person.myName = 'John';

console.log(person.myName);

//Bracket Notation

person['myName']= 'Mary';

console.log(person.myName);

 let selectedColours = ['red', 'blue']
 selectedColours[2]=1;
 console.log(selectedColours.length);

//performing a task
 function greet(myName, lastName) {
     console.log('Hello, '+ myName + ' '+ lastName + '!');
 }
 greet('Anny', 'Smith');

 greet('Mary');


//calculates a value
 function square(number){
   return number* number;
 }

 console.log(square(2));
