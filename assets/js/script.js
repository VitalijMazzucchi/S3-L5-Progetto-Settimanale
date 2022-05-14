let display =[]


function stampa(){
    let dato =display.toString()
    document.getElementById('numeri').innerHTML=dato.replaceAll(',','')
    console.log(display)
}
function zero(){
  let num0 =display.push(0); 
  console.log(display)
  stampa()
  
}
function uno(){
    let num1 = display.push(1); 
    console.log(display)
    stampa()
}
function due(){
    let num2 =display.push(2); 
    console.log(display)
    stampa()

   
}
function tre(){
    let num3 = display.push(3); 
    console.log(display)
    stampa()
    
}
  function quattro(){
    let num4 = display.push(4); 
    console.log(display)
    stampa()
    
}
  function cinque(){
    let num5 = display.push(5); 
    console.log(display)
    stampa()
   
}
  function sei(){
    let num6 = display.push(6); 
    console.log(display)
    stampa()
}
  function sette(){
    let num7 = display.push(7); 
    console.log(display)
    stampa()
}
  function otto(){
    let num8 = display.push(8); 
    console.log(display)
    stampa()
}
  function nove(){
   let num9 = display.push(9); 
   stampa()
}

function piu(){
    let plus = display.push('+'); 
    stampa()
 }
 function meno (){
    let minus = display.push('-'); 
    stampa()
 }
 function per(){
    let x = display.push('x'); 
    stampa()
 }
 function diviso(){
    let div = display.push('/'); 
    stampa();
 }

 function operazione(){
  let  string =display.toString()
  let  datstring = string.replaceAll(',','')
  console.log(datstring)
  if{
    
  }

 }
 function cancella(){
    display.pop()
    stampa()

}
  


