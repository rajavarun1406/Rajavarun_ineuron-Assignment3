
function Armstrong(num){
    let temp = num;
    let sum = 0;
    while(temp>0){
        let remainder = temp%10;
        sum = sum + remainder*remainder*remainder;
        temp=parseInt(temp/10);
    }
    if(sum === num)
        console.log(`${num} is Armstrong Number`);
    else 
        console.log(`${num} is not an Armstrong Number`);
}
Armstrong(153);

