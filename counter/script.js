const mycount=document.getElementById("count");
console.log(mycount.innerText)
const evenOdd=document.getElementById("evenOdd");
function isEvenOdd()
{
  if(c%2==0)  
  {  
    evenOdd.textContent="EVEN"
}
if(c==0)
{
evenOdd.textContent="zero"

}


else
{
    evenOdd.textContent="ODD"
}
}
let c=0;
isEvenOdd()


function incr(){
    c++;
    mycount.textContent=c;
    isEvenOdd()
}
function decr()
{
    c--;
    mycount.textContent=c;
    isEvenOdd()

}
function reset()
{
    c=0;
    mycount.textContent=c;
    isEvenOdd()
}