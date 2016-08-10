
var thing = 0;
function carousel(){
	var image_list = ["Capture.png", "heading.png", "Snowman.png", ]
	var link_list = ["python_projects.html", "python_projects.html", "scratch_projects.html"]
	var image = document.getElementById("picture");
	var page = document.getElementById("link");
	image.src = image_list[thing];
	page.href = link_list[thing];
	if (thing<2){
		thing = thing + 1;
	}
	else{
		thing = 0;
	}
}