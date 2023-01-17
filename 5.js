function digitSum(y) {
    y=Number(prompt('Введите первое число'));
    let sum = 0, x = String(y);
    
         
    
        for (let i = 0; i < x.length; i++) {
    
            sum += Number(x[i]);
    
        }
    
        console.log(sum);
    
    
    }
    digitSum("rez");  