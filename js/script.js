var navMenu = document.getElementById("sidebar");
var closebtn =  document.getElementById("closenav");
const portfolio = document.querySelector('.port-sub');
const portWeb = document.querySelectorAll('.website');
const portReact = document.querySelectorAll('.react');
const allProjects = document.querySelectorAll('#projects');

function showSidebar () {
	
	navMenu.className = "sidebarcontent showsidebar";
	closebtn.className = " close-nav";
	navMenu.style.display = 'block';
	
}


function hideSidebar () {
	if(closebtn) {
		closebtn.className = " close-nav crossbtn";
	}
	navMenu.className = " sidebarcontent closesidebar";
}

const sidebar = document.querySelector('.side-nav');
sidebar.addEventListener('click',()=>{
	hideSidebar();
});

portfolio.addEventListener('click', function(e){

	if(e.target && e.target.nodeName === 'LI') {
		allProjects.forEach(proj => {
			proj.style.display = 'block';
		})
		
		if(e.target.innerHTML === 'Websites') {
			portReact.forEach(react=>{
				return react.style.display ='none';
			})
			
		} else if(e.target.innerHTML === 'React') {
			portWeb.forEach(web=>{
				return web.style.display = 'none';
			});
			
		}
	}

})


const btnContainer = document.querySelectorAll('#zoom-image');
const contentDiv = document.querySelector('.zoom-image-container');
const img = document.querySelector('.image-content img');


btnContainer.forEach((btn,index)=>{
	btn.addEventListener('click', (e)=>{
		const picID = btn.parentElement.id
		displayImage(picID);
	})
});

function displayImage(picID) {
	contentDiv.classList.add('show-container');
	img.src=`images/portfolio/${picID}.png`;
	contentDiv.id = picID;
	
}

function closeImage() {
	contentDiv.classList.remove('show-container');
}

function prevImage() {
	let currentImg = contentDiv.id;
	if(currentImg <= 1) {
		currentImg = 6;
		displayImage(currentImg);
	} else 
	currentImg-- ;
	//console.log(currentImg)
	displayImage(currentImg);

}

function nextImage() {
	let currentImg = contentDiv.id;
	if(currentImg >= 6) {
		currentImg = 1;
		displayImage(currentImg);
	} else 
	currentImg++ ;
	//console.log(currentImg)
	displayImage(currentImg);

}