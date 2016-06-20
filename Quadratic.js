function solve(args) {
    var discriminant;
    var A=+args[0];
    var B= +args[1];
    var C=+args[2];
    var x1;
    var x2;
    discriminant = (B*B)-(4*A*C);
    if (discriminant<0){
        return 'no real roots'
    }
        else if (!discriminant) {
		x1 = -B / (2 * A);
        return 'x1=x2=' + x1.toFixed(2);
        }
        else{
            x1 = (-B - Math.sqrt(discriminant)) / (2 * A);
            x2 = (-B - Math.sqrt(discriminant)) / (2 * A);
            return 'x1=' + x1.toFixed(2) + ';' + ' x2=' + x2.toFixed(2); 
        }
    }
