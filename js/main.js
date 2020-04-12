$(document).ready(function () {
	'use strict',
	$('#slideUP').click(function () {
		//$("#ms-designer-ribbon").css('height', '85px');
		if ($('#ms-designer-ribbon').css('height') > '1px' || $('#ms-designer-ribbon').css('height') == 'auto') {
			$('#ms-designer-ribbon').css({
				'height': '0px'
			});
			$("#s4-workspace").css("cssText", "height: 100vh !important;");
			// $("#s4-workspace").css("cssText", "width: 100% !important;");
			icon = $('#slideUP i');
			icon.toggleClass("fa-chevron-up fa-chevron-down");

		} else {
			$('#ms-designer-ribbon').css({
				'height': 'auto'
			});
			$("#s4-workspace").css("cssText", "height: calc(100vh - 85px) !important;");
			icon = $('#slideUP i');
			icon.toggleClass("fa-chevron-up fa-chevron-down");
		}
	});


	//APPEND SHAREPOINT NAVIGATION TO CUSTOM NAVIGATION
	$("#collapseButton").after($("#DeltaTopNavigation"));
	$("#DeltaTopNavigation").attr("class", "collapse navbar-collapse navbar-right");
	$("#DeltaTopNavigation > div > ul > li > ul").attr("class", "nav navbar-nav");
	$("#DeltaTopNavigation > div > ul > li > ul").appendTo("#DeltaTopNavigation");
	$("#DeltaTopNavigation > div").remove();
	// $("#DeltaTopNavigation > ul > li:first-child()").remove();

	//LOOK FOR ITEMS WITH CHILD ELEMENTS
	$("li.dynamic-children").each(function () {
		$("li.dynamic-children").addClass("dropdown");
	});

	//ADD CUSTOM CLASSES TO LI CHILD ELEMENTS
	$("#DeltaTopNavigation > ul li.dropdown > ul").attr("class", "dropdown-menu");
	$("#DeltaTopNavigation > ul li.dropdown > a").attr("href", "#");
	$("#DeltaTopNavigation > ul li.dropdown > a").attr("class", "dropdown-toggle");
	$("#DeltaTopNavigation > ul li.dropdown > a").attr("data-toggle", "dropdown");
	$("#DeltaTopNavigation > ul li.dropdown").removeClass("dynamic-children");
	$("#DeltaTopNavigation > ul li.dropdown > a").append("<i class='fa fa-angle-down'>");
	$("#DeltaTopNavigation > ul > li:last-child").after('<li><div class="search" style="padding-top:5px;"><form role="form"><input type="text" name="search" class="search-form" autocomplete="off" placeholder="Search" style="display:none;width:180px;"><i class="fa fa-search" style="font-size:20px;"></i></form></div></li>');

	$('.search').click(function () {
		$('.search-form').show().focus();
	});
	$('.search-form').blur(function () {
		$('.search-form').hide();
	});

	//SEARCH
	$('input[class="search-form"]').change(function (event) {
		var input = "https://qmg.sharepoint.com/_layouts/15/osssearchresults.aspx?u=https://qmg.sharepoint.com/" + $('input[name="search"]').val();
		//window.location = input;
		window.open(input);
	});

	//ADD ACTIVE CLASS TO NAVIGATION
	$(function () {
		// this will get the full URL at the address bar
		var url = window.location.href;

		// passes on every "a" tag
		// $(".nav > li > a").each(function () {
		// 	// checks if its the same on the address bar
		// 	if (url == (this.href)) {
		// 		$(this).closest("li").addClass("active");
		// 		//for making parent of submenu active
		// 	}
		// });
	});

	$("#RibbonContainer-TabRowLeft").click(function () {
		$('.navbar').css('position', 'relative');
	});
	$("ul.ms-cui-tts").click(function () {
		$('.navbar').css('position', 'relative');
	});
});


//#main-slider
// $(function(){
// 	$('#main-slider.carousel').carousel({
// 		interval: 8000
// 	});
// });

// accordian
// $('.accordion-toggle').on('click', function () {
// 	// $(this).closest('.panel-group').children().each(function () {
// 	// 	$(this).find('>.panel-heading').removeClass('active');
// 	// });

// 	//$(this).closest('.panel-heading').toggleClass('active');
// });

//Initiat WOW JS
// new WOW().init();

// portfolio filter
// $(window).load(function(){'use strict';
// 	var $portfolio_selectors = $('.portfolio-filter >li>a');
// 	var $portfolio = $('.portfolio-items');
// 	$portfolio.isotope({
// 		itemSelector : '.portfolio-item',
// 		layoutMode : 'fitRows'
// 	});

// 	$portfolio_selectors.on('click', function(){
// 		$portfolio_selectors.removeClass('active');
// 		$(this).addClass('active');
// 		var selector = $(this).attr('data-filter');
// 		$portfolio.isotope({ filter: selector });
// 		return false;
// 	});
// });

jQuery(window).scroll(function () {
	var top = jQuery(document).scrollTop();
	var height = 100;
	//alert(batas);

	if (top > height) {
		jQuery('.navbar-fixed-top').addClass('menu-scroll');
	} else {
		jQuery('.navbar-fixed-top').removeClass('menu-scroll');
	}
});

// Contact form
// var form = $('#main-contact-form');
// form.submit(function(event){
// 	event.preventDefault();
// 	var form_status = $('<div class="form_status"></div>');
// 	$.ajax({
// 		url: $(this).attr('action'),

// 		beforeSend: function(){
// 			form.prepend( form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn() );
// 		}
// 	}).done(function(data){
// 		form_status.html('<p class="text-success">' + data.message + '</p>').delay(3000).fadeOut();
// 	});
// });


//goto top
// $('.gototop').click(function(event) {
// 	event.preventDefault();
// 	$('html, body').animate({
// 		scrollTop: $("body").offset().top
// 	}, 500);
// });	

//Pretty Photo
// $("a[rel^='prettyPhoto']").prettyPhoto({
// 	social_tools: false
// });	