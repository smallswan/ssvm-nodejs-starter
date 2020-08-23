///https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/First_steps/Arrays
///
let shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
let random = ['tree', 795, [0, 1, 2]];

console.log(random[2][2]);

let sequence = [1, 1, 2, 3, 5, 8, 13];
for (let i = 0; i < sequence.length; i++) {
  console.log(sequence[i]);
}

let myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';

let myArray = myData.split(",");
console.log(myArray);
let myNewString = myArray.join(",");

console.log(myNewString);

//添加和删除数组项
let cities = ['Manchester', 'London', 'Liverpool', 'Birmingham', 'Leeds', 'Carlisle'];
console.log("length:" + cities.length);
cities.push('Cardiff');
let newLength = cities.push('Bradford', 'Brighton');
console.log("newLength:" + newLength);

//从数组中删除最后一个元素的话直接使用 pop() 就可以。 例如： 
let removeCity = cities.pop();
console.log(removeCity);

//unshift() 和 shift() 从功能上与 push() 和 pop() 完全相同，只是它们分别作用于数组的开始，而不是结尾。
cities.unshift("Edinburgh");
console.log(cities);


removeCity = cities.shift();
console.log(removeCity);
console.log(cities);

var total = 0;
var products = ['Underpants:6.99',
  'Socks:5.99',
  'T-shirt:14.99',
  'Trousers:31.99',
  'Shoes:23.99'];


  function add(arg1,arg2){ 
    var digits1,digits2,maxDigits; 
    try{digits1=arg1.toString().split(".")[1].length}catch(e){digits1=0} 
    try{digits2=arg2.toString().split(".")[1].length}catch(e){digits2=0} 
    maxDigits=Math.pow(10,Math.max(digits1,digits2)) 
    return (arg1*maxDigits+arg2*maxDigits)/maxDigits 
  } 

for (var i = 0; i < products.length; i++) {
  var subArray = products[i].split(':');
  var name = subArray[0];
  var price = Number(subArray[1]);
  total = add(total,price);
  var itemText = name + ' — $' + price;
  console.log(itemText);
}
console.log('Total: $' + total.toFixed(2));

// map-reduce sum total
let sum = products.map(function (item, index) {
  let subArray = item.split(":");
  return Number(subArray[1]);
}).reduce(function (total, price) {
  total = add(total, price);
  return total;
});

console.log("sum=" + sum);