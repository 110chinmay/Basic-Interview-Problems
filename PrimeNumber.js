/*
Prime Number for particular number 
*/
			let myfun = (n) => {
			  if (n > 2) {
			      let num = n; 
			  for(i=2;i<num;i++){
			         if(num%i == 0){
			          console.log(+num+'Is not a Prime!!!');
			           return false;
			         }
			  } console.log(+num+'Is a Prime!!!')
			  
			  }
			          
			}

			myfun(23);
