var n=153,rem=0,s=0,temp=n;
for(let i=1;n>0;i++)
{
	rem=n%10;
	s=s+rem*rem*rem;
	n=Math.floor(n/10);
}
if(temp==s)
	console.log("Armstrong");
else
	console.log("Not Armstrong");