let n=234,r=0,rev=0;
for(let i=1;n>0;i++)
{	r=n%10;
	rev+=r;
	n=parseInt(n/10);
}
console.log("Sum of digit="+rev);