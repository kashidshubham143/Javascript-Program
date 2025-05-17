<html>
 <head>
    <title>calculator application</title>
<script type='text/javascript'>
    
	function designCalc(){
	     let calcButtons=[
					 [1,2,3,'+'],
					  [4,5,6,'-'],
					  [7,8,9,'*'],
					  [0,'.','=','/']
				   ];
		let table=document.createElement("table");
			table.style.width="400px";
			table.style.height="400px";
			let prevVal="";
			let first,second,result,choice;
			for(var i=0; i<calcButtons.length; i++)
			{   let row=document.createElement("tr");
			   for(var j=0; j<calcButtons.length;j++)
			   {     let txtCtrl=document.getElementById("txt");
				     let firstCol=document.createElement("td");
				     let firstBtn=document.createElement("input");
					 firstBtn.setAttribute("type","button");
					 firstBtn.setAttribute("value",""+calcButtons[i][j]);
					 firstBtn.style.width="80px";
					 firstBtn.style.height="80px";
					 firstBtn.style.fontSize="18px";
					 firstCol.appendChild(firstBtn);
					 row.appendChild(firstCol);
					 
					 firstBtn.addEventListener('click',function(){
					        let currVal=this.value;
					        prevVal=txtCtrl.value+currVal;
				                    txtCtrl.value=prevVal;
						  
						  if(this.value=='+')
						  { first=parseInt(prevVal.trim());
						    txtCtrl.value="";
							choice=1;
						  }
						  if(this.value=='*')
						  { first=parseInt(prevVal.trim());
						    txtCtrl.value="";
							choice=2;
						  }
						  if(this.value=='-')
						  { first=parseInt(prevVal.trim());
						    txtCtrl.value="";
							choice=3;
						  }
						  if(this.value=='/')
						  { first=parseInt(prevVal.trim());
						    txtCtrl.value="";
							choice=4;
						  }
						  if(this.value=='=')
						  {
						     second=parseInt(prevVal.trim());
							 switch(choice)
							 {
							   case 1:
							    result=first+second;
								txtCtrl.value=""+result;
								break;
								case 2:
							    result=first*second;
								txtCtrl.value=""+result;
								break;
								case 3:
							    result=first-second;
								txtCtrl.value=""+result;
								break;
								case 4:
							    result=first/second;
								txtCtrl.value=""+result;
								break;
								default:
								alert("Wrong operation");
							 }
						  }
					 });
					 
			   }
			   table.appendChild(row);
			}
		let c=document.getElementById("calcContainer");
		c.appendChild(table);
	}
</script>
 </head>
<body onload="designCalc()">
 <div id='calcContainer'  style="width:400px;height:450px;background-color:#f2f2f2;
 margin-left:400px;padding:20px;">
   <input type='text' name='txt' id='txt' value='' style='width:400px;height:40px;'/>
 </div>
</body>   
</html>

