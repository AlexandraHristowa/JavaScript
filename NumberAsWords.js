function NumberAsWord(args) {
var number = +args[0];//n
var result = '';
var lowNames = [
   "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
   "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
var tensNames = [
   "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
var BigNames = ["thousand", "million", "billion"];
var hundreds = number / 100 | 0;	
var tens = (number / 10) % 10 | 0;	
var ones = number % 10;
if (hundreds === 0 && tens === 0) {
		result = onesUp[ones];
	} else if (hundreds === 0) {
		if (tens === 1) {
			result = BigNames[Big];
		} else {
			if (ones === 0) {
				result = Bignames[Big];
			}
			else {
				result = BigNames[Big] + ' ' + lowNames[low];
			}	
		}
	} else {
		if (tens === 0 && ones === 0) {
			result = tensNames[tens] + ' hundred';
		} else if (ones === 0) {
			result = tensNames[hundreds] + ' hundred' + ' and ' + lowNames[low];
		} else if (tens === 0){
			result = tensNames[hundreds] + ' hundred' + ' and ' + lowNames[low];
		} else {
			if (tens === 1 && ones >= 1) {
				result =tensNames[hundreds] + ' hundred' + ' and ' + lowNames[low];
			} else {
				result = tensNames[hundreds] + ' hundred' + ' and ' + lowNames[low] + ' ' + lowNames[low];
			}
		}
	}

	return result;
}


  


