let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
document.getElementById("sum");
function add() {
	console.log("Add Button clicked");
	res = Number(num1.value) + Number(num2.value);
	console.log(res);
	sum.textContent = "Sum: " + res;
}
function sub() {
	console.log("Sub Button clicked");
	res = Number(num1.value) - Number(num2.value);
	console.log(res);
	sum.textContent = "Sum: " + res;
}
function mul() {
	console.log("Mul Button clicked");
	res = Number(num1.value) * Number(num2.value);
	console.log(res);
	sum.textContent = "Sum: " + res;
}
function div() {
	console.log("Div Button clicked");
	res = Number(num1.value) / Number(num2.value);
	console.log(res);
	sum.textContent = "Sum: " + res;
}
