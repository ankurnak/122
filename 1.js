function Myfunction(a,b){
    a=Number(prompt('Введите первое число'));
     b=Number(prompt('Введите второе число'));  
     let sum = 0;
 
  for (let i = a; i < b; i++) {
 
    if (i % 2 === 1) continue;
 
    sum += i;
  }
 
  console.log(sum);
}
Myfunction("Ваш результат");