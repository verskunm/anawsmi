$(document).ready(function(){$(":input[title]").each(function(){var $this=$(this);if($this.val()===""){$this.val($this.attr("title"));$this.addClass("watermark")}$this.focus(function(){if($this.val()===$this.attr("title")){$this.val("");$this.removeClass("watermark")}});$this.blur(function(){if($this.val()===""){$this.val($this.attr("title"));$this.addClass("watermark")}})});var setBanner=function(){var theWidth=$(document).width();var thePosition=(theWidth-1700)/2;$("#mainbanner .box").css("left",thePosition)};$(window).resize(function(){setBanner()});setBanner();$("#mainbanner .box").bjqs({animtype:"slide",height:460,width:1700,showcontrols:false,showmarkers:false});$("#newarrivals ul").jcarousel({scroll:1,auto:5,wrap:"last"});$("#tabs .content").hide();$("#tabs #tab01").show();$("#tabs ul.titles a").click(function(){$("#tabs ul.titles a").removeClass("active");$(this).addClass("active");var myTab=$(this).attr("href");$("#tabs .content").hide();$(myTab).show();return false});$("#sidebar form ul li ul").hide();$("#sidebar form ul li a").click(function(){if($(this).hasClass("closeme")){$(this).removeClass("closeme");$(this).next().slideUp()}else{$(this).addClass("closeme");$(this).next().slideDown()}return false});$(".overpanel").hide();$(".overpanel a.close").click(function(){$(".overpanel").fadeOut("fast");return false});$("ul.products a.compare").click(function(){$(".overpanel").fadeIn("fast");return false})});