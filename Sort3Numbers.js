function solve(args) {
    var A= +args[0];
    var B=+args[1];
    var C=+args[2];
var temp = 0;
while (!(A >= B && B >= C)) {
    if(A<B){
        temp=A;
        A=B;
        B=temp;
    }
    if(B<C){
     temp =C;
     C=B;   
     B=temp;
    }
}
console.log(A + " " + B + " " + C);
}
