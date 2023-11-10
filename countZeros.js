function countZeroes(arr){
    let r = arr.length-1
    let l = 0;
    while(l<=r){
        let m = Math.floor((r+l)/2);
        if(arr[m]==0){
            if(r-1==m||r==m){
                if(arr[m-1]==0){
                    return arr.length-(m-1);
                }else{
                    return arr.length-m;
                }
            }
            r=m-1;
        }else{
            if(l==m){
                if(arr[m+1]!=0){
                    return arr.length-(m+2);
                }else{
                    return arr.length-(m+1);
                }
            }
            l=m+1;
        }
        if(r==0){
            return arr.length;
        }
    }
    return 0;
}

console.log(countZeroes([1,1,1,1,0,0]));
console.log(countZeroes([1,0,0,0,0]));
console.log(countZeroes([0,0,0]));
console.log(countZeroes([1,1,1,1]));
console.log(countZeroes([1,1,1,1,0,0,0,0,0,0]));//6
console.log(countZeroes([1,1,0,0,0,0,0]));//5
console.log(countZeroes([1,1,1,0]));//1