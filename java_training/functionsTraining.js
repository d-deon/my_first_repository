function greeter() {
    console.log ("Hello!")
   
    console.log("Goodbye!")

}
greeter()

function sum(a, b) {
    console.log(a-b)
    console.log(a+b)
    return (a*b)
    console.log("never will run)")// after "return" the code stops being read within the function
}




//

function flickSwitch(arr){
    for (let i = 0; i < arr.length; i++){
      if (arr[i] === 'flick' && (arr[i] - 1) === true){
        return false;
      } else if (arr[i] === 'flick' && (arr[i] - 1) === false){
        return true;
      } else if (arr[i] === !'flick' && (arr[i] - 1) === true){
        return true;
      } else (arr[i] === !'flick' && (arr[i] - 1) === false)
        return false;
      }
    }
    let str = "Miami";
    function removeChar(str){
        let short = str.substring(1, str.lenght)
          return short;
        
        };
        

        class SmallestIntegerFinder {
            findSmallestInt(args) {
               args  = [78, 284, 29, 8] ;
          
              const wholeNo = Math.min(args);
            
              const smallest = parseInt(wholeNo, 10)
              return smallest;
              
            }
          }
        
        
        

