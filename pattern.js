function pattern(num){
    let string = "";
    let n=1;
    
    for(let i=1;i<=num;i++){
        for(let j=1;j<=i;j++){
            string+=n;
            n++;
        }
        string+="\n";
    }
    console.log(string);
}
pattern(4);