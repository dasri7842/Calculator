function fill(num){
   document.paper.textview.value+=num;
}
function empty(){
   document.paper.textview.value="";
}
function back(){
   var exp=document.paper.textview.value;
   document.paper.textview.value=exp.substring(0,exp.length-1);
}
function calci(){
   var exp=document.paper.textview.value;
   if(exp) document.paper.textview.value=eval(exp);
}