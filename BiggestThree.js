function FindBiggest(args){
    firstNum=+args[0];
    secondNum=+args[1];
    thirdNum=+args[2];
    
if (firstNum >= secondNum) {
		if (firstNum >= thirdNum) {
			biggestNum = firstNum;
		} else {
			biggestNum = thirdNum;
		}			
	} else if (firstNum <= secondNum) {
		if (secondNum >= thirdNum) {
			biggestNum = secondNum;
		} else {
			biggestNum = thirdNum;
		}
	} 

	return biggestNum;
}
