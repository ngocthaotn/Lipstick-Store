// jquery Document
$(document) .ready(function() {
   var stt = 0;
   starImg = $("img#slide:first").attr("stt");
   endImg = $("img#slide:last ").attr("stt");
   $("img#slide").each(function() {
    	if($(this).is(':visible'))
			stt = $(this).attr("stt");
		
	}); 
	$("#next").click(function(){
		if(stt == endImg){
			stt = -1;
		};
		next = ++stt;
		$("img#slide").hide();
		$("img#slide").eq(next).show();	
	});
	$("#prev").click(function(){
		if(stt == 0){
			stt = endImg;
			prev = stt++;
		};
		prev = --stt;
		$("img#slide").hide();
		$("img#slide").eq(prev).show();	
	});
});
//javasrcipt document
window.onload = function(){		setTimeout("switch_Image()", 2000);
		}
		var current = 1;
		var num_image = 7;
		function switch_Image(){
			current++;
			document.images['image'].src ='images/common/slide' + current + '.png';
			if(current < num_image){
			  	setTimeout("switch_Image()", 2000);
			}else if(current == num_image){
			   current = 0;
			   setTimeout("switch_Image()", 2000);
			}
		}
	
window.onscroll = function() {
	var m = document.getElementById("menuId");
	if (window.scrollY > 70) {
		if (m.style.position != "fixed") {
			m.style.position = "fixed";
			m.style.left = 0;
			m.style.right = 0;
			m.style.top = 0;
		}
	} else {
		m.style.position = "";
	}
}
/*tooltip SEARCH*/
function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
}
/*gợi ý*/
function fillText(obj) {
	var d = document.getElementById("productId");
	d.value = obj.innerText;
	
	var ul = document.getElementById("suggestProductId");
	ul.innerHTML = "";
}


function suggestProduct(obj) {
	var product = ["Son Christian Louboutin Lipstick","3CE Lily Maymac", "Christian Louboutin Lipstick", "Dear Dahlia", "Diorific Mat Lipstick"];
	var v = obj.value;
	var ul = document.getElementById("suggestProductId");
	ul.innerHTML = "";
	for (i = 0; i < product.length; i++)
		if (product[i].indexOf(v) >= 0) {
			var li = "<li onClick='fillText(this)'>" + product[i] + "</li>"; 
			
			ul.innerHTML += li;
		}
}
/*Nút top*/
		$(function(){
	$(window).scroll(function () {
	if ($(this).scrollTop() > 100) $(".lentop").fadeIn();
	else $(".lentop").fadeOut();
	});
	$(".lentop").click(function () {
	$("body,html").animate({scrollTop: 0}, "slow");
	});
	});
/*search*/
function search() {
	/*var c = document.getElementById("productId");
	 if (c != undefined) {
		c = c.value;
		var b = "<span style = 'color:#FF0'>" + c + "</span>";
		b.style.color = "red";
		
	} */
	var keywords = $("#productId").val().toLowerCase();
	$.each($(".item"),function(index, elm){
		var link = $(elm).find("a>img").eq(0);
		var text = link.attr("alt").toLowerCase();
		if(text.indexOf(keywords) != -1){
			$(elm).css("border","1px solid red");
		}else{
			$(elm).css("border","1px solid #FF0");
		}
	});
}