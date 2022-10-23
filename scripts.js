function loadFileInto(fromFile, whereTo) {

	// creating a new XMLHttpRequest object
	ajax = new XMLHttpRequest();

	// defines the GET/POST method, source, and async value of the AJAX object
	ajax.open("GET", fromFile, true);

	// provides code to do something in response to the AJAX request
	ajax.onreadystatechange = function() {
			if ((this.readyState == 4) && (this.status == 200)) {
				document.querySelector(whereTo).innerHTML += this.responseText;
				
			} else if ((this.readyState == 4) && (this.status != 200)) {
				console.log("Error: " + this.responseText);
			}
		
	} // end ajax.onreadystatechange function

	// initiate request and wait for response
	ajax.send();

}

// New Recipe Object
function Recipe(recipeName, ContributorName, imageURL, ingredientsURL, equipmentURL, directionsURL) 
{

  this.recipeName = recipeName;
  this.contributor = ContributorName;
  this.imageURL = imageURL;
  this.ingredients = ingredientsURL;
  this.equipment = equipmentURL;
  this.directions = directionsURL;
  
  this.displayRecipe = function()
  {
    document.querySelector("#TitleBanner h1").innerHTML = this.recipeName;
    document.querySelector("#contributor").innerHTML = this.contributor;
    document.querySelector("#TitleBanner").style.backgroundImage = "url(" + this.imageURL + ")";
    loadFileInto(this.ingredients, "#ingredients ul");
      loadFileInto(this.equipment, "#equipment ul");
      loadFileInto(this.directions, "#directions ol");
  }
  
}
BananaCreamPie = new Recipe("Banana Cream Pie", "Logan Gilliam","https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F05%2F18%2F3355919-banana-cream-pie-ReneePaj-1x1-1.jpg", "ingredients.html", "equipment.html","directions.html" );
LemonPankoCrustedSalmon = new Recipe ("Lemon Panko Crusted Salmon", "Samuel Zhi Ming Tan","https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F5896050.jpg&q=60&c=sc&orient=true&poi=auto&h=512","salmon_ingredients.html", "salmon_equipment.html", "salmon_directions.html" );
VanillaFrenchToast = new Recipe ("Vanilla French Toast", "Aryaman Jaswal","https://www.tasteofhome.com/wp-content/uploads/2018/01/Vanilla-French-Toast_EXPS_SDAS17_7542_C04_12_1b-1.jpg?fit=700,1024","French_ingredients.html", "French_equipment.html","French_directions.html");



window.onload = function() {
  document.querySelector("#firstRecipe").onclick = function(){
    BananaCreamPie.displayRecipe();  }
  document.querySelector("#secondRecipe").onclick = function(){
    LemonPankoCrustedSalmon.displayRecipe(); }
  document.querySelector("#thirdRecipe").onclick = function(){
    VanillaFrenchToast.displayRecipe(); }
  

  
  
};//end of function

