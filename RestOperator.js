let sum=(...arr)=>{
    let s=0;
    for(let i=0;i<arr.length;i++)
    {
        s+=arr[i];
    }
    console.log(s);
}
sum(10,20,30,40,50);