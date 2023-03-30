var button=document.getElementById("enter");

var ul=document.querySelector("ul");


var text=document.getElementById("text");


function inputLength()
{
	return text.value.length;
}


function createAndAddList()
{
	var li=document.createElement("li");

	var textNode=document.createTextNode(text.value+"       ");

	li.appendChild(textNode);

	li.addEventListener("click",function(){
		li.classList.toggle("done");
	})
    
    var delBut=document.createElement("button");   //creating button

    var delText=document.createTextNode("Delete");   //delete text inside the button

    delBut.appendChild(delText);    //delete text to button append


    delBut.addEventListener("click",function(event){         //to delete the list
    	li.remove();
    })


    li.appendChild(delBut);

	ul.appendChild(li);
    
    
	

    



	text.value="";
}

function AddListAfterClick()
{
	if(inputLength()>0 )
	{
	createAndAddList();

}
}


function AddListAfterKeyPress(event)
{
if(inputLength()>0 && event.keyCode==13)
	{
	createAndAddList();
}

}


button.addEventListener("click",AddListAfterClick);

text.addEventListener("keypress",AddListAfterKeyPress);