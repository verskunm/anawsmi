$(document).ready(function(){$(":input[title]").each(function(){var $this=$(this);if($this.val()===""){$this.val($this.attr("title"));$this.addClass("watermark")}$this.focus(function(){if($this.val()===$this.attr("title")){$this.val("");$this.removeClass("watermark")}});$this.blur(function(){if($this.val()===""){$this.val($this.attr("title"));$this.addClass("watermark")}})});$("#logos ul").jcarousel({scroll:1,auto:5,wrap:""});$("#multitabs ul.products").jcarousel({scroll:1,wrap:""});$("#mainbanner ul").jcarousel({scroll:1,auto:5,wrap:""});$(".relative ul").jcarousel({scroll:1,wrap:""});$("#multitabs .content").hide();$("#multitabs #tab01").show();$("#multitabs ul.titles a").click(function(){$("#multitabs ul.titles a").removeClass("active");$(this).addClass("active");var myTab=$(this).attr("href");$("#multitabs .content").hide();$(myTab).show();return false});$("input[type='checkbox']").change(function(){if($(this).is(":checked")){$(this).next("label").addClass("boxchecked")}else{$(this).next("label").removeClass("boxchecked")}});$("input[type='radio']").change(function(){if($(this).is(":checked")){$(this).parent().parent().find("label").removeClass("radiochecked");$(this).next("label").addClass("radiochecked")}})});