const input = document.querySelector("#add");
const  btn = document.querySelector("#btn");
const list = document.querySelector("#list");
let el = document.getElementsByTagName('li');
const clearBtn = document.getElementById('btn2');

// this function will allow us to add elements when we click the button
function addItem(){
    var txt = input.value;
    if(txt ==''){
        alert('you must write something');
    }else{
        li = document.createElement('li');
        li.innerHTML = txt;
        list.insertBefore(li,list.childNodes[0]);
        input.value = '';
    }
    
};


//this function will allow us to check the clicked elements
list.onclick = function(ev){
    if(ev.target.tagName == 'LI'){
        ev.target.classList.toggle('checked');
    }
};

clearBtn.addEventListener('click', ()=>{
    list.innerHTML = '';
})

btn.addEventListener('click', ()=>{
    addItem();
})

document.addEventListener('keypress', event=>{
    if(event.which == 13){
        addItem();
    }
})