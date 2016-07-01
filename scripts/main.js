console.log("Loaded: main.js");

$(function() {

	AST.startup.checkIE();
	AST.startup.checkJQuery();

	AST.anim.animateGradient(".page-header", 340, 30, 'rgb(140, 170, 200)', 'rgb(240, 240, 240)');

});
