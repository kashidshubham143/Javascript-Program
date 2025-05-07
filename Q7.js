let n=12345,rem=0,rev=0;
for(let i=1;n>0;i++)
{
	r=n%10;
	rev=rev*10+r;
	n=Math.floor(n/10);
}
console.log("Reverse no="+rev);