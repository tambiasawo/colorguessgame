var numSquares=6;
var colors=[];
var sqaures=document.querySelectorAll('.square');
var selectedColor;
var colorDisp=document.getElementById('colorDisp');
var h1=document.querySelector('h1');
var result=document.getElementById('result');
var newColors=document.querySelector('#reset');
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
	newColorsF();
}

function setupModeButtons() {
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

function setupSquares() 
{
	for(var i=0;i<sqaures.length;i++)
	{
		sqaures[i].style.backgroundColor=colors[i];
		//set click event
		//inside click event, change color to black if clicked color is wrong, else
		sqaures[i].addEventListener('click', function(){
			
		//alert(clickedColor);
		var clickedColor=this.style.backgroundColor;  
		if(clickedColor===selectedColor)   // the DOM always add spaces netween the no combs for colors thats why we werent getting the right result from the comparison
		{
			newColors.textContent="Play Again?";
			newColors.addEventListener('click', function () {
				newColors.textContent="New Colors";
			})

			for(var j=0;j<sqaures.length;j++)   
			{
				sqaures[j].style.backgroundColor=selectedColor;
			}
			h1.style.backgroundColor=selectedColor;
			result.textContent="Correct!";
		}
		else 
		{
			// change the background color to black and output sth
			this.style.backgroundColor="black";
			result.textContent="Wrong! Try Again";
		}
	}) 
}
}
colorDisp.textContent=selectedColor;
	function reset() 
	{
		colors=fillColors(numSquares);
		selectedColor=pickColor();
		//colorDisp.textContent=selectedColor;
		for(var i=0;i<sqaures.length;i++)
		{
			//sqaures[i].style.backgroundColor=colors[i];	
			if(colors[i])
			{
				
			sqaures[i].style.backgroundColor=colors[i];
			sqaures[i].style.display="block";
			//console.log(colors[i]+"if clause");
			}
			else{
				sqaures[i].style.display="none";
			}
			
	}
}
function newColorsF() 
{
	
	newColors.addEventListener('click', function () {
		result.textContent="";
		//generate random colors
		colors=fillColors(6);
		//choose a color for the user to guess
		selectedColor=pickColor();
		//change the colors of the square
		colorDisp.textContent=selectedColor;
		h1.style.backgroundColor="steelblue";
	for(var i=0;i<sqaures.length;i++)
	{
		sqaures[i].style.backgroundColor=colors[i];
	}
		//h1.style.backgroundColor="black";
	})
} 

function pickColor() {
	var rand=Math.floor(Math.random()*colors.length);
		console.log("random color= "+colors[rand]+" random num: "+colors.length);
		return colors[rand];
}

function fillColors(num)
{
	var arr=[];
	for(var i=0;i<num;i++)
	{
		arr.push(randColors());
	
	}
	return arr;
}
function randColors()
{
	var col1=Math.floor(Math.random(0,256)*256);
	var col2=Math.floor(Math.random(0,256)*256);
	var col3=Math.floor(Math.random(0,256)*256);
	//var rgb="rgb";
	//for(var i=0;i<colors.le)
	
	return "rgb("+col1 +", "+col2 +", "+col3+")"; // the DOM always add spaces netween the no combs for colors
	
}
