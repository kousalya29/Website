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

