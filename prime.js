//*****prime no******//

let num=37;

let count=+;
for (let i=2;i<(num/2);i++){
   if(num%i==0){
    let count++
}
}
if (count==0){
console.log("prime");
}else{
console.log("not prime");
}
