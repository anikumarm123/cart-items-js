var btn =document.getElementById('change');

function fun(num){
  a=num;
}


function fun_1(){
   btn.innerHTML += `<div class="image"><img src="/item-1.jpg"><br>
   <strong>Qty : ${a}</strong><strong> Price:${a*60}</strong><br>
   <button id="cng-btn" onclick ="run(this)">remove</button></div>`

}

function fun_2(){
  btn.innerHTML += `<div class="image"><img src="/item-2.jpg"><br>
  <strong>Qty : ${a}</strong><strong> Price:${a*40}</strong><br>
  <button id="cng-btn" onclick ="run(this)">remove</button></div>`

}
function fun_3(){
  btn.innerHTML += `<div class="image"><img src="/item-3.jpg"><br>
  <strong>Qty : ${a}</strong><strong> Price:${a*50}</strong><br>
  <button id="cng-btn" onclick ="run(this)">remove</button></div>`
}
function fun_4(){
  btn.innerHTML += `<div class="image"><img src="/item-4.webp"><br>
  <strong>Qty : ${a}</strong><strong> Price:${a*120}</strong><br>
  <button id="cng-btn" onclick ="run(this)">remove</button></div>`

}
function fun_5(){
 btn.innerHTML += `<div class="image"><img src="/item-5.jpg"><br>
 <strong>Qty : ${a}</strong><strong> Price:${a*70}</strong><br>
 <button id="cng-btn" onclick ="run(this)">remove</button></div>`

}
function fun_6(){
 btn.innerHTML += `<div class="image"><img src="/item-6.jpg"><br>
 <strong>Qty : ${a}</strong><strong> Price:${a*100}</strong><br>
 <button id="cng-btn" onclick ="run(this)">remove</button></div>`
}

function run(b){
  b.parentElement.remove();
}
