let array =[]
function stampa() {
    let dato =array.toString()
    document.getElementById('numeri').innerHTML=dato.replaceAll(',','')
    console.log(array)
}
  function numero(num) {
    if(array.length >0 && array[array.length -1]!= '+'&& array[array.length -1]!= '-'&& array[array.length -1]!= 'x'&& array[array.length -1]!= '/'){
    let pop= array.pop()
    array.push('' + pop + num)
    console.log(array)
    }else {
     array.push(num)
    }
    stampa()
}
function cancella(){
    array.pop()
    stampa()
}
function operazione(op){
 if(array.length==1 ){
     array.push(op)
    stampa()
 }
}
function risultato(){
 if(array.length>2){
    let result
   if(array[1]=='+'){
    result= +array[0]  + +array[2]
   } else if(array[1]=='-'){
    result= +array[0]  - +array[2]
   }else if(array[1]=='x'){
    result= +array[0]  * +array[2]
   }else if(array[1]=='/'){
    result= +array[0]  / +array[2]
   }
   array=[result.toString()]
   stampa()
 }
}




