function getCount(arr){
    let r=arr.length-1;
    let l=0;
    let m=0;
    let rOn=0;
    while(l<=r){
        m=Math.floor((l+r)/2);
        if(arr[m+1]<arr[m]){
            rOn=m;
            break;
        }else if(arr[m-1]>arr[m]){
            rOn=m-1;
            break;
        }
        if(arr[arr.length-1]<arr[m]){
            l=m+1;
        }else{
            r=m-1;
        }
    }
    return rOn!=0?rOn+1:0;
}

console.log(getCount([15, 18, 2, 3, 6, 12]));
console.log(getCount([7, 9, 11, 12, 5]));
console.log(getCount([7, 9, 11, 12, 15]));