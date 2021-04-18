const input = document.querySelector('input');
const clear = document.querySelector('#navbar #clear');
const add = document.querySelector('#navbar #add');
const main = document.querySelector('#bodyOf');
const ul = document.querySelector("#u1");
const h4 = document.querySelector("#bodyOf h4");


function color1(){
	h4.style.color = "black";
}
function color2(){
	h4.style.color = "white";
}
function color3(){
	h4.style.color = "red";
}

setInterval(color1, 20);
setInterval(color2, 50);
setInterval(color3, 80);

add.addEventListener("click", function(){
	if (input.value !== "") {
		h4.style.display = "none";
		li = document.createElement("li");
		main.insertBefore(li, main.childNodes[0]);
		
		inp = input.value;
		li.innerHTML = "<img src=\"images/cancel.png\" id=\"x\">" + inp + "<img src=\"images/checked.png\" id=\"tick\">";

		var x = document.querySelector("#x");
		var tick = document.querySelector("#tick");

		x.onclick = function(){
			var li1 = this.parentElement;
			li1.style.display = "none";
		}
		tick.onclick = function(){
			var li1 = this.parentElement;
			liFunc;
		}


		input.value = "";
		var liFunc = li.onclick = function(){
			if (this.style.backgroundColor != "black") {
				this.style.backgroundColor = "black";
				this.style.textDecoration = "line-through";
			}else{
				this.style.backgroundColor = "rgba(211, 5, 53, 0.7)";
				this.style.textDecoration = "none";
			}	
		}

	}else{
		alert("Can't add space to the list")
	}
	
})
clear.addEventListener("click", function(){
	main.innerHTML = "";
	h4.style.display = "block";
})