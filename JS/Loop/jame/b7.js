  /*let i;
    for ( i=1; i<=100; i++){
        console.log(i);
        if ((i%3==0) && (i%5!=0)){
            console.log('Fizz');
        } 
        if ((i%5==0) && (i%3!=0)){
            console.log('Buzz');
        }
        if ((i%5==0) && (i%3==0)){
            console.log('FizzBuzz');
        } 
    }*/
    for (var i = 1; i <= 100; i++) {
        var output = '';
        if(i % 3 == 0) output += 'Fizz';
        if(i % 5 == 0) output += 'Buzz';
        console.log(output || i);
    }