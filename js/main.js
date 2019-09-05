var menuBlocks = document.querySelector(".menu-blocks");
var menuBlockResume = document.querySelector(".menu-block.resume-block");
var menuBlockPortfolio = document.querySelector(".menu-block.portfolio-block");
var menuBlockContact = document.querySelector(".menu-block.contact-block");
var menuItemResume = document.querySelector(".menu-item.resume");
var menuItemPortfolio = document.querySelector(".menu-item.portfolio");
var menuItemContact = document.querySelector("li.menu-item.contact");
var contentBlocksResume = document.querySelector(".content-blocks.resume");
var contentBlocksPortfolio = document.querySelector(".content-blocks.portfolio");
var contentBlocksContact = document.querySelector(".content-blocks.contact");
var inlineMenu = document.querySelector(".inline-menu-container");
var nameBlock = document.querySelector(".name-block");
var nameBlockCont = document.querySelector(".name-block-container");
var close = document.querySelector("#close");
//Menu Block Resume onclick
menuBlockResume.addEventListener("click", function(){
	inlineMenu.classList.add("show");
	contentBlocksResume.classList.add("show");
	nameBlock.classList.add("reverse");
	nameBlockCont.classList.add("reverse");
	menuBlocks.classList.add("hide");
	menuItemResume.classList.add("active");
});
//Menu Block Portfolio onclick
menuBlockPortfolio.addEventListener("click", function(){
	inlineMenu.classList.add("show");
	contentBlocksPortfolio.classList.add("show");
	nameBlock.classList.add("reverse");
	nameBlockCont.classList.add("reverse");
	menuBlocks.classList.add("hide");
	menuItemPortfolio.classList.add("active");
});
//Menu Block Contact onclick
menuBlockContact.addEventListener("click", function(){
	inlineMenu.classList.add("show");
	contentBlocksContact.classList.add("show");
	nameBlock.classList.add("reverse");
	nameBlockCont.classList.add("reverse");
	menuBlocks.classList.add("hide");
	menuItemContact.classList.add("active");
});
//Menu Item Resume onclick
menuItemResume.addEventListener("click", function(){
	contentBlocksResume.classList.add("show");
	contentBlocksPortfolio.classList.remove("show");
	contentBlocksContact.classList.remove("show");
	menuItemResume.classList.add("active");
	menuItemPortfolio.classList.remove("active");
	menuItemContact.classList.remove("active");
	});
//Menu Item Portfolio onclick
menuItemPortfolio.addEventListener("click", function(){
	contentBlocksPortfolio.classList.add("show");
	contentBlocksResume.classList.remove("show");
	menuItemPortfolio.classList.add("active");
	menuItemResume.classList.remove("active");
	menuItemContact.classList.remove("active");
	});
//Menu Item Contact onclick
menuItemContact.addEventListener("click", function(){
	contentBlocksContact.classList.add("show");
	contentBlocksResume.classList.remove("show");
	contentBlocksPortfolio.classList.remove("show");
	menuItemContact.classList.add("active");
	menuItemResume.classList.remove("active");
	menuItemPortfolio.classList.remove("active");
	});
//close button
close.addEventListener("click", function(){
	inlineMenu.classList.remove("show");
	contentBlocksResume.classList.remove("show");
	contentBlocksPortfolio.classList.remove("show");
	contentBlocksContact.classList.remove("show");
	nameBlock.classList.remove("reverse");
	nameBlockCont.classList.remove("reverse");
	menuBlocks.classList.remove("hide");
	menuItemResume.classList.remove("active");
	menuItemPortfolio.classList.remove("active");
	menuItemContact.classList.remove("active");
});

