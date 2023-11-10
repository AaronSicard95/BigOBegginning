function findFloor(arr, check){
    let l = 0;
    let r = arr.length-1;
    let m=0;
    while(l<=r){
        m=Math.floor((l+r)/2);
        console.log("m:",m,arr[m]);
        if(arr[m]==check||(arr[m]<check&&(arr[m+1]>check||m+1==arr.length))){
            return arr[m];
        }else if(arr[m]<check){
            l=m+1;
        }else{
            r=r-1;
        }
    }
    return -1
}

console.log(findFloor([1,2,8,10,10,12,19], 9));
console.log(findFloor([1,2,8,10,10,12,19], 20));
console.log(findFloor([1,2,8,10,10,12,19], 0));