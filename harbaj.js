let arr = [1,3,1,4,5,5,3,2,5,2,2,6,7]
let obj = {}; 


for(let i = 0; i<arr.length; i++)
{
    let count=0;
    for(let j =0; j<arr.length; j++)
    {
        if(arr[i]==arr[j]){
            count++;
        }
        else
        {
            continue;
        }
      
    }
    obj[arr[i]] = count;
}



console.log(Object.values(obj));




