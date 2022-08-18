let string ="Noora";
console.log(string);
let str = string.toLocaleLowerCase();
console.log(str);

document.getElementById("slice").innerHTML = str.slice(0,1);
document.getElementById("substring").innerHTML = str.substring(0,1);
document.getElementById("index").innerHTML = str[0];
document.getElementById("charAt").innerHTML = str.charAt(0);

const myarray = str.split("");
document.getElementById("split").innerHTML = myarray[0];
document.getElementById("match").innerHTML = str.match(/./);
