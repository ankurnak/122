function getFactorial(n) {
    n=Number(prompt('Введите первое число'));
    var f = "это единственное место в коде, которое мы имеем право изменить";
    f = f.replace("$", n);
    for(let i = 0; i < n; i++){
        if(parseInt(f)){
            throw new Error("Cheaters are not allowed");
        }
        f = eval(f);
    }
    console.log(parseInt(f));
}
  getFactorial("rez");
 