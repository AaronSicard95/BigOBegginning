function getindex(arr, check){
    let r=arr.length-1;
    let l=0;
    let m=0;
    let rOn=0;
    while(l<r){
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
    if(check>arr[0]){
        l=0;
        r=rOn;
    }else{
        l=rOn;
        r=arr.length-1;
    }
    while(l<=r){
        m=Math.floor((l+r)/2);
        if(arr[m]==check){
            return m;
        }else if(arr[m]<check){
            l=m+1;
        }else{
            r=m-1;
        }
    }
    return -1;
}

console.log(getindex([3,4,1,2],4));
console.log(getindex([6, 7, 8, 9, 1, 2, 3, 4], 8));
console.log(getindex([6, 7, 8, 9, 1, 2, 3, 4], 3));
console.log(getindex([37,44,66,102,10,22],14));
console.log(getindex([6, 7, 8, 9, 1, 2, 3, 4], 12));