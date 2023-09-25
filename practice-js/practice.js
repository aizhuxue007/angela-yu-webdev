function isTrue(relation) {
	let relationSplit = relation.split(''),
			numberRegex = /[0-9]/,
			conditionalRegex = /^([><=]=?)/,
			numberString = '',
			conditionalOperand = '',
            indexChar = '',
            a = 0,
            b = 0
	
	relationSplit.forEach(char => {
		if (numberRegex.test(char)) {
			numberString += char;
		} else if (conditionalRegex.test(char)) {
            if (char == '=') {
                conditionalOperand += char + '=';
            }
			conditionalOperand += char;
            indexChar = relationSplit.indexOf(char);
		}
	})
    a = Number(numberString.slice(0, indexChar));
    b = Number(numberString.slice(indexChar));
    let str = a + conditionalOperand + b;
    let expression = new Function(`return ${str}`);
    let result = expression();
	return result;
}

console.log(isTrue('4>5'));
console.log(isTrue('15>5'));
console.log(isTrue('6>6'));
console.log(isTrue('10<10'));
console.log(isTrue('10<9'));
console.log(isTrue('5>6'));
console.log(isTrue('2=2'));
console.log(isTrue('5=13'));
console.log(isTrue('15=137'));
console.log(isTrue('101=101'));