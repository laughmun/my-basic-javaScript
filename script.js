//variable and operator//

var x = 10;
let y = 11;
const z = 21;
console.log(x);
console.log(x, " " ,y, " " ,z);
x = 29;
console.log(x);
console.log(z);

var prefix = "mr"
var name = "palm";
console.log(prefix + "." + name);

var num1 = "11"
var num2 = "12"
console.log(num1 + num2);
console.log(parseInt(num1)+parseInt(num2));
 
console.log(2/4);
console.log(2%4);

//data type//

var type1 = 12;
var type2 = "hello"
var type3 = true;
var type4 = 2>4;
var type5 = [1,2,3]
var type6 = ["apple","orange","banana"]
console.log(typeof type1);
console.log(typeof type2);
console.log(typeof type3);
console.log(typeof type4);
console.log(typeof type5);
console.log(typeof type6);
console.log(type6[2]);
console.log(type6.length);
type6.push("mango");
console.log(type6);
var obj = {
    name: "Palm",
    age: "22"
};
console.log(obj);
// == เทียบค่า , === เทียบค่าและtype
console.log(undefined==null);
console.log(typeof undefined);
console.log(typeof null);
console.log(undefined===null);

//function//

function plus(x,y) {
    return x+y;
}
ans = plus(10,20);
console.log("answer =",ans)

function log(data) {
    console.log(data);
    return;
}
log("Palm");

//array//

var myAry = ["string",123,true,{name: "palm"},["array"]];
log(myAry[1]);
myAry[5] = "mint";
log(myAry);
myAry.push("test");
log(myAry);
myAry.pop();
log(myAry);
//shift คือเลื่อนตำแหน่งของindexขึ้น unshift คือเลื่อนตำแหน่งของindexลง
myAry.unshift("text")
log(myAry);
myAry.shift();
log(myAry);

//map = loop for
myAry.map((myval,index) => {
  console.log("This is index",index," ",myval);
});

var myAry2 = [
    {name:"name1"},
    {name:"name2"},
    {name:"name3"}
];

var newAry = myAry2.map((myval,index) => {
    return myval.name;
  });
log(newAry);

//Object//

var myObj = {};
myObj.name = "Palm";
myObj.age = "23";
myObj.id = "1";
log(myObj);
delete myObj.id;
log(myObj);

//if else//

var num = [
    {x:10,y:20},
    {x:30,y:70},
    {x:90,y:60},
];
num.forEach(val => {
  if (val.x < 50) console.log("x = " , val.x);
  else console.log("y = ", val.y);
});

//switch//

var mysw = "2";
switch (mysw) {
    case "1":
        console.log("color is red");
        break;
    case "2":
        console.log("color is yellow");
        break;
    case "3":
        console.log("color is pink");
        break;
    case "4":
        console.log("color is blue");
        break;
}

//for loop//

for (let ind = 1; ind<10 ; ind++) {
    console.log("x = " ,ind);
};
index = 6;
while(index <= 10) {    
    console.log("index = " , index);
    index++;
};

//dom document object model//

var myDiv = document.getElementById("myDiv");
myDiv.style.width = "100px";
myDiv.style.height = "100px";
myDiv.style.backgroundColor = "yellow";
myDiv.innerHTML = "<h1>Hi pal!!</h1>";

var myClassName = document.getElementsByClassName("myClass");
myClassName.innerHTML = "<h2>Hello World</h2>";

for (let e = 0; e < myClassName.length; e++) {
    myClassName[e].innerHTML = "Hello World " + e;
};

var myNameTag = document.getElementsByName("nameTag");
var myH1 = document.createElement("h1");
var myText = document.createTextNode("HELLO PALM");
myH1.appendChild(myText);
myNameTag[0].appendChild(myH1);