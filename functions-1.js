// JavaScript Document




	// Header Buttons
	function toggleButtons() {
		$("#header a.searchhandler").on("click",function(){
			$("#header .center form").toggle();
			$("#header .right .loginbox").hide();
		})
		$("#header a.baskethandler").on("click",function(){
			$("#header .right .loginbox").toggle();
			$("#header .center form").hide();
		})
		var is_touch_device = 'ontouchstart' in document.documentElement;
		if (is_touch_device == true ) {
			$(".loginbox .user").click(function(){
				$(this).toggleClass("active");
				if ($(this).hasClass("active")) {
					$(".loginbox .user .accountlist").show();
				} else {
					$(".loginbox .user .accountlist").hide();
				}
			})
		}
	}
	
	// Moreoptions
	function naviMore() {
		$("#navigation ul li.moreoptions a").on("click", function(){
			$("#navigation > ul > li.moreoptions + li, #navigation > ul > li.moreoptions + li + li, #navigation > ul > li.moreoptions + li + li + li, #navigation > ul > li.moreoptions + li + li + li + li").toggle();
		})
	}
	
	// Morefilters
	function moreFilters() {
		if ($(window).width() > 533) {
			$("#sidebar").find("span.more").hide();
			$("#sidebar").find("strong.more, a.showmore").on("click",function(){
				//$(this).toggleClass("open");
				$(this).parent().find("strong.more").toggleClass("open");
				$(this).parent().find("span.more").slideToggle();
				return false;
			});
		} else {
			$("#sidebar form p ").each(function(){
				theSpans = $(this).find("span").size();
				if (theSpans > 0) {
					$(this).find("strong").addClass("more");
				}
			});
			$("#sidebar").find("span").hide();
			$("#sidebar").find("strong.more").on("click",function(){
				$(this).parent().find("strong.more").toggleClass("open");
				$(this).parent().find("span").toggle();
				return false;
			})
		}
	}
	
	// Product Page
	function productData() {
		// Place tabs
		if ($(window).width() < 703) {
			$('#tabs').appendTo('#product .data');
		} else {
			$('#tabs').appendTo('#product .data p.company');
		}
		// Set Tabs height
		if ($("#product .data h2").height() > 30) {
			$("#product .data .box").css("min-height", 250 -$("#product .data h2").height());
		} else {
			$("#product .data .box").css("min-height", 220);
		}
		// Place Big Image
		$("#product .photos.nothumbs ul li img").css("margin-top",0);
		$("#product .photos.nothumbs ul li img").css("margin-top", (360 - $("#product .photos.nothumbs ul li img").height())/2);
	}
	
	// Addtobasket animation
	function addtobasketAnim() {
		$("a.addtobasket").on("click",function(){
		   var cart = $('#basketsmall');
		   var imgtofly = $(this).parents('li').find('a.image img').eq(0);
		   var mainProduct = 0 ;
		   if (imgtofly.length == 0) { // Select Big Product Photo
				imgtofly = $(this).parents('#product').find('.photos ul li:first a img').eq(0);
				mainProduct = 1;
		   }
		   var myWidth = imgtofly.width();
		   var myHeight = imgtofly.height();
			if (imgtofly) {
				var imgclone = imgtofly.clone()
					imgclone.offset({ top:imgtofly.offset().top, left:imgtofly.offset().left })
		   				.css({'opacity':'0.7', 'position':'absolute', 'height':myHeight, 'width':myWidth, 'z-index':'1000', 'margin-top':0})
						.appendTo($('body'))
						.animate({'top': cart.offset().top + 10,'left': cart.offset().left + 10,'width': 30,'height': 30}, 1000);
					imgclone.animate({'top': cart.offset().top + 30,'left': cart.offset().left + 30,'width':0, 'height':0}, function(){ 
						$(this).detach();
						$("#basketsmall .basketlist, #basketsmall .connector").fadeIn(250).delay(2000).fadeOut(250).css("opacity",1);
						// Show popup
						$("body").append('<div class="overpanel"><div class="box product"><p>Το προϊόν προστέθηκε στο καλάθι</p></div></div>').find(".overpanel .box").hide().fadeIn(500).delay(3000).fadeOut(500, function(){
							$(".overpanel").detach();
						});
					});
			}

			return false;
		});
	}
	
	// Autocomplete 
	function autocomplete() {
		//setup before functions
		var typingTimer;                //timer identifier
		var doneTypingInterval = 700;  //time in ms, 5 second for example
		
		//on keyup, start the countdown
		$("form #searchfor").keyup(function(){
			clearTimeout(typingTimer);
			typingTimer = setTimeout(doneTyping, doneTypingInterval);
		});
		
		//on keydown, clear the countdown 
		$('form #searchfor').keydown(function(){
			clearTimeout(typingTimer);
		});
		
		//user is "finished typing," do something
		function doneTyping () {
			//do something
			
			searchfor = $("form #searchfor").val();
			
			if (searchfor != "")
			{				
				$.post("change_search.asp",{ searchfor:searchfor } ,function(data)
				{
					$("#header form .searchresults").html(data);
					$("#header form .searchresults").fadeIn(200);
				});
			}
		}
		
		$(".topmenu form #searchfor").focusout(function(){
			$("#header form .searchresults").delay(500).fadeOut(50);
		});
	}
		
$(document).ready(function() {

	// Input Fields
	$(':input[title]').each(function() {
	  var $this = $(this);
	  if($this.val() === '') {
		$this.val($this.attr('title'));
		$this.addClass('watermark');
	  }
	  $this.focus(function() {
		if($this.val() === $this.attr('title')) {
		  $this.val('');
		  $this.removeClass('watermark');
		}
	  });
	  $this.blur(function() {
		if($this.val() === '') {
		  $this.val($this.attr('title'));
		  $this.addClass('watermark');
		}
	  });
  	});
		
	
	/* Responsive Carousel 
	$('#mainbanner .crsl-items').carousel({speed: 500, autoRotate: 5000 });
	$('#logos.crsl-items').carousel({ visible: 6, itemMinWidth: 150, speed: 1000, autoRotate: 5000 });
	$('#tab01 .crsl-items').carousel({ visible: 5, itemMargin: 10, itemMinWidth: 180, speed: 1000});
	$('#tab02 .crsl-items').carousel({ visible: 5, itemMargin: 10, itemMinWidth: 180, speed: 1000});
	$('#tab03 .crsl-items').carousel({ visible: 5, itemMargin: 10, itemMinWidth: 180, speed: 1000});
	*/
	/* Owl Carousel 	*/
	$("#owl-logos").owlCarousel({
		items:				6,
		autoPlay:			5000,
		slideSpeed:			500,
		paginationSpeed:	500,
		rewindSpeed:		50,
		rewindNav:			true,
		stopOnHover:		false,
		navigation:			true,
		pagination:			false,
		itemsCustom:		[[0, 1], [300, 2], [450, 3], [600, 4], [750, 5], [900, 6]]
	});
	$("#tabs .owl-carousel").owlCarousel({
		items:				5,
		autoPlay:			false,
		slideSpeed:			500,
		paginationSpeed:	500,
		rewindSpeed:		50,
		rewindNav:			false,
		stopOnHover:		false,
		navigation:			true,
		pagination:			false,
		itemsCustom:		[[0, 1], [400, 2], [600, 3], [800, 4], [1000, 5]]
	});
	$("#owl-mainbanner").owlCarousel({
		singleItem: 		true,
		autoPlay:			5000,
		slideSpeed:			500,
		paginationSpeed:	500,
		rewindSpeed:		50,
		rewindNav:			true,
		stopOnHover:		false,
		navigation:			true,
		pagination:			true,
	});
	$(".relative ul").owlCarousel({
		items:				5,
		autoPlay:			false,
		slideSpeed:			500,
		paginationSpeed:	500,
		rewindSpeed:		50,
		rewindNav:			true,
		stopOnHover:		false,
		navigation:			true,
		pagination:			false,
		itemsCustom:		[[0, 1], [400, 2], [600, 3], [800, 4], [1000, 5]]
	});
	
	// Three Columns Equal Heighs
	var MaxThreeHeight = 0;
	$(".chechoutbox.threecolumn").each(function(){
		if ($(this).height() > MaxThreeHeight) {
			MaxThreeHeight = $(this).height();
		}
	});
	$(".chechoutbox.threecolumn").height(MaxThreeHeight);
	
	// Overpanel
	$("div.overpanel").on("click",function(){
		$("div.overpanel").fadeOut();
	})
	
	/* Start Functions */
	autocomplete();
	resetSubmenus();
	setFooter();
	toggleButtons();
	naviMore();
	moreFilters();
	productData();
	addtobasketAnim();
	
	
});





	
	

