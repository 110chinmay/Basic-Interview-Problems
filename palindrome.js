<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<button onclick="myFunction();">Try it</button>
</body>
<script type="text/javascript">	
	
myFun = (str) => { 
  
  var revStr = '';
 
  for(var i = str.length;i > 0; i--){
     revStr = revStr + str[i-1]
  }

  if( str === revStr ){
    console.log("Its is Palidrome");
  }else{
    console.log("Its not a palidrome");
  }
}

myFun('mumum');


</script>
</html>