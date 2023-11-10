function sort(arr, check){
    let r = arr.length-1
    let l = 0;
    let m=0;
    let res = [];
    while(l<=r){
        m=Math.floor((l+r)/2)
        if(arr[m]==check || arr[m]>check){
            r=m-1;
            if(arr[m]==check&&arr[m-1]!=check){
                res[0]=m;
                break;
            }
        }else {
            l=m+1;
            if(arr[m+1]==check){
                res[0]=m+1;
                break;
            }
        }
        res[0]=null;
    }
    r = arr.length-1
    l = 0;
    while(l<=r){
        m=Math.floor((l+r)/2)
        if(arr[m]==check || arr[m]<check){
            l=m+1;
            if(arr[m]==check&&arr[m+1]!=check){
                res[1]=m;
                break;
            }
        }else {
            r=m-1;
            if(arr[m-1]==check){
                res[1]=m-1;
                break;
            }
        }
        res[1]=null;
    }
    if(res[0]==null)return -1;
    return res[1]-res[0]+1;
}

console.log(sort([1,1,2,2,2,2,3],2));
console.log(sort([1,1,2,2,2,2,3],3));
console.log(sort([1,1,2,2,2,2,3],1));
console.log(sort([1,1,2,2,2,2,3],4));
console.log(sort([1,1,2,2,3,3,3,4,4,4,4,5,6,9,9,9,10],4));
console.log(sort([1,1,2,2,3,3,3,4,4,4,4,5,6,9,9,9,10],9));
console.log(sort([1,1,2,2,3,3,3,4,4,4,4,5,6,9,9,9,10],2));
console.log(sort([1,1,2,2,3,3,3,4,4,4,4,5,6,9,9,9,10],5));

//O(log(n)*2+1) == O(log(n))