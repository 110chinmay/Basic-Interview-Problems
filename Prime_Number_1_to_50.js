let myFun = (n) => {
  
  if(n>2){  
    for( i=2;i<=n;i++){
      var primeFlag = false;
      for(j=2;j<i;j++){
        if((i%j) == 0)
        {
            break;
        }
        else{
          primeFlag = true;
        }
      }
      if(primeFlag){
          console.log(i+" is prime number");
      }
    }
  } 
}


myFun(50)