
function specialNum(Num){
    let temp = Num;
    let sum=0;
    
    while(temp>0){
        let remainder = temp%10;
        let factorial=1;
        for(let i=1;i<=remainder;i++){
            
            factorial = factorial * i;
        }
        sum = sum + factorial;
        temp = parseInt(temp/10);
    }
    if(sum === Num)
        console.log(`${Num} is Special Number`);
    else
        console.log(`${Num} is not Special Number`);
}

specialNum(145);