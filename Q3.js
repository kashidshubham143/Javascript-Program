let fibo=0,first=0,sec=1,n=5;
console.log(first);
console.log(sec);
for(let a=1;a<=n;a++)
{
	fibo=first+sec;
	first=sec;
	sec=fibo;
	console.log(fibo);
}