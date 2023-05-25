function ln(){
var newWidth = "35%";
var newHight = "2px";
var line =  document.getElementById('linia');
line.style.width = newWidth;//изменяю размер
line.style.height = newHight;//изменяю толщину;
}

function anketa() 
{ 
var d= document
  var k=0;
  if (document.getElementById('check_inf').checked) {
k=k+Number(document.querySelector('input[name="fv1inf"]:checked').value) + Number(document.querySelector('input[name="fv1lan"]:checked').value) + Number(document.querySelector('input[name="fv1co"]:checked').value) 
  }
if (document.getElementById('check_m').checked) { k=k+Number(document.querySelector('input[name="fvmc"]:checked').value) + Number(document.querySelector('input[name="fvml"]:checked').value) + Number(document.querySelector('input[name="fvmc1"]:checked').value) 
                                                }
if (document.getElementById('check_h').checked) { k=k+Number(document.querySelector('input[name="fvhd"]:checked').value) + Number(document.querySelector('input[name="fvhl"]:checked').value) + Number(document.querySelector('input[name="fvhc"]:checked').value)}
  
  if (document.getElementById('check_k').checked) { k=k+Number(document.querySelector('input[name="fv4g"]:checked').value) + Number(document.querySelector('input[name="fv4"]:checked').value) + Number(document.querySelector('input[name="fv4a"]:checked').value)}
  
  
 d = document.getElementById('div_for_insert');
 d.innerHTML = k + " р."
}