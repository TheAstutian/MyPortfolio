var ul = document.querySelector("ul");
var input = document.getElementById("ivalue");
var button = document.querySelector("button");

function addItem(){
	if (input.value.length>1){
	var li = document.createElement("li"); 
	var node = document.createTextNode(input.value);
	li.appendChild(node);
	
	var btn= document.createElement("button");
	var btntxt= document.createTextNode("del");
	btn.appendChild(btntxt);
	li.appendChild(btn);
	ul.appendChild(li);


	li.addEventListener("click", function(){
		
		li.classList.toggle("done");  
	})

	btn.addEventListener("dblclick", function(){
		li.parentNode.removeChild(li);
	})
	input.value=""; 
	}
}


function enterKey (key){
	if (key.keyCode ===13){
		addItem();
	}
}

button.addEventListener("click",addItem);
input.addEventListener("keyup", enterKey);
