for (let i = 2; i <= 100; i=i+2) {
    let body = ''
    
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
