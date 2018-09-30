module.exports = function solveEquation(equation) {
	const expression = equation.replace(/x/g, "").replace(/ /g, "").replace("+", "").replace("^2", "");
	const n = expression.split("*");
	const D = Math.sqrt(n[1] * n[1] - 4 * n[0] * n[2]);
	const x = [];
	x[0] = Math.round((-n[1] - D) / (2 * n[0]));
	x[1] = Math.round((-n[1] + D) / (2 * n[0]));
	console.log(x);
	const solutions = [];
	if (x[0] < x[1]) {
		solutions[0] = x[0];
		solutions[1] = x[1];
	} else {
		solutions[0] = x[1];
		solutions[1] = x[0];
	}
	return solutions;}
