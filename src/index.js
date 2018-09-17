module.exports = function solveEquation(equation) {
 equation = equation.split(' ');
 let x1, x2;
 let a = equation[0];
 let b = equation[3]+equation[4];
 let c = equation[7]+equation[8];
 let D = b*b - 4*a*c;
 x1 = Math.round((-b + Math.sqrt(D))/2/a);
 x2 = Math.round((-b - Math.sqrt(D))/2/a);
 let array = [];
 array.push(x1, x2);
 return array.sort((a,b)=>a-b);  
}
