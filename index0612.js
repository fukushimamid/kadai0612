for (let i = 1; i <= 100; i++) {
    let body = ''
    
    if(i%2==0){
        if(i%15==0){
            body=i+'回目。私はアホ犬なのでしょうかワン？';
        }else if(i%3==0){
            body=i+'回目。アホ';
        }else if(i%5==0){
            body=i+'回目。犬';
        }else{
            body=i
        }
        console.log(body);
    }
}
