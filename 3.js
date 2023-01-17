

function getSqrtByBinarySearch(number){
    
    number=Number(prompt('Введите первое число'));
     let ans = 0; 
     let sqrt = 0;
      let e = number; 
      while (sqrt <= e) {
         const middle = Math.trunc((sqrt + e) / 2);
          if (middle * middle === number) {
             console.log(middle); }
              else if (middle * middle < number) {
                 sqrt = middle + 1; ans = middle; } 
                 else {
                     e = middle - 1;
                     } 
                    }
                    console.log( ans); 
                };
                
getSqrtByBinarySearch("rez");
