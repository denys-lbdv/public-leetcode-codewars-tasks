function isPalidrome(x:number):boolean{
    let str;
    let reversStr='';
    str = x.toString()

    for (let i:number=str.length-1;i>=0;i--){
        reversStr=reversStr+str[i];
    }

    if(str === reversStr){
        return true;
    }
    return false;
}

console.log(isPalidrome(121))
console.log(isPalidrome(122))

let x:number=1234567;

console.log(x.toString().split('').reverse().join(''))