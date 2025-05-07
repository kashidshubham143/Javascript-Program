let n=121,r=0,rev=0,temp=n;
for(let i=1;n>0;i++)
{
	r=n%10;
	rev=rev*10+r;
	n=parseInt(n/10);
}

if(rev==temp)
console.log("Palindrome");
else
console.log("Not Palindrome");