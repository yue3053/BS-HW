var Cars = ['BMW', 'Benz', 'Audi', 'Lexus'];
var Prices = [280, 320, 250, 210];

var total =  Prices.map(p => p * 1.05); 
function sum(Array){
    var sum = 0;
    for (var i = 0 ; i < Array.length ; i++){
        sum += Array[i];
    };
    return sum;
}
console.log(sum(total));