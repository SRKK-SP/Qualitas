var _gMonth = '';
var _gDate = '';
var _gDay = '';
var _gYear = '';
var _gTime = '';
var _gAuthor = '';
var _gCMonth = '';
var _gYear2 = '';
// //console.log(_spPageContextInfo);
// $(window).load(function () {
// 	$(".loader").fadeOut("slow"); //loader
// });
$(document).ready(function () {

	$(".od-Files-topBar").css('display', 'none'); //hide Search bar of Photo library
	$(".loader").fadeOut("slow"); //loader
	var height = $(window).height();
	$('#main-slider').css("height", height);

	$('.ann').hover(function () {
		$(this).find('.dat').toggleClass('colordate');

	});
	//#main-slider
	$(function () {
		$('#main-slider.carousel').carousel({
			interval: 5000
		});
	});

	$('.Ql').mouseenter(function () {
		$('.Qlt').hide();
		$(this).animate({
			width: "320px"
		}, 100);
		$('.rQ').show();
	});
	$('.Ql').mouseleave(function () {
		$('.rQ').hide();
		$(this).animate({
			width: "35px"
		}, 100);
		$('.Qlt').show();
	});


	// accordian
	$('.accordion-toggle').on('click', function () {
		$(this).closest('.panel-group').children().each(function () {
			$(this).find('>.panel-heading').removeClass('active');
		});

		$(this).closest('.panel-heading').toggleClass('active');
	});
	var d = new Date();
	formatDate(d);
	$('.cal-day').append(_gDay + ", " + _gDate + " " + _gMonth);
	var month = d.getMonth() + 1;
	_gCMonth = (("0" + (month)).slice(-2));
	getQL();
	getSlider();
	getLatestAnn();
	getUpcomingEvents();
	getNewEmployee();
	getMonthBday();
	getCompanyNews();
	getWorldNews();
	getVideos();
	getAward();

});

var cu = _spPageContextInfo.userId; //get current user id
var siteURL = _spPageContextInfo.webAbsoluteUrl;

function getSlider() {
	$.ajax({
		url: siteURL + "/_api/web/lists/GetByTitle('Slider')/items?",
		type: "GET",
		headers: {
			"accept": "application/json;odata=verbose",
		},
		success: function (data) {
			// //console.log(data.d.results);
			if (data.d.results.length == 0) {
				//console.log('No Data found.');
			} else {
				var items = data.d.results;
				// //console.log(items);
				var ol = '';
				var inner = '';
				for (var i = 0, l = items.length; i < l; i++) {
					var bg = items[i].Background.Url;
					var title = items[i].Title;
					var stitle = items[i].SubTitle;
					var desc = items[i].Description;
					var view = siteURL + "/Lists/Slider/DispForm.aspx?id=" + items[i].Id;

					if (i == 0) {
						ol += '<li class="active" data-target="#main-slider" data-slide-to="' + i + '"></li>';
						inner += '<div class="item active" style="height:100%;background:url(' + bg + ') no-repeat 50% 50%;">' +
							'<div class="overlay" style="padding-top:5%;">' +
							'<div class="container" style="text-align: left;">' +
							'<div class="row slide-margin">' +
							'<div class="col-sm-12 col-md-12 col-lg-12">' +
							'<div class="carousel-content" style="margin:10%">' +
							'<h1 class="animation animated-item-1" style="color:#00457C;">' + title + '</h1>' +
							'<h2 class="animation animated-item-2" style="font-size:10pt;">' + stitle + '</h2></br>' +
							'<h2 class="animation animated-item-2">' + desc + '</h2>' +
							'<a class="btn-slide animation animated-item-3" href="' + view + '">Read More</a>' +
							'</div>' +
							'</div>' +
							'</div>' +
							'</div>' +
							'</div>' +
							'</div>';

					} else {
						ol += '<li class="" data-target="#main-slider" data-slide-to="' + i + '"></li>';
						inner += '<div class="item" style="height:100%;background:url(' + bg + ') no-repeat 50% 50%;">' +
							'<div class="overlay" style="padding-top:5%;">' +
							'<div class="container" style="text-align: left;">' +
							'<div class="row slide-margin">' +
							'<div class="col-sm-12 col-md-12 col-lg-12">' +
							'<div class="carousel-content" style="margin:10%">' +
							'<h1 class="animation animated-item-1" style="color:#00457C;">' + title + '</h1>' +
							'<h2 class="animation animated-item-2" style="font-size:10pt;">' + stitle + '</h2></br>' +
							'<h2 class="animation animated-item-2">' + desc + '</h2>' +
							'<a class="btn-slide animation animated-item-3" href="' + view + '">Read More</a>' +
							'</div>' +
							'</div>' +
							'</div>' +
							'</div>' +
							'</div>' +
							'</div>';
					}

				}
				$('#idSliderOL').append(ol);

				$('#idSlideInner').append(inner);
			}
		},
		error: function (error) {
			alert(JSON.stringify(error));
		}
	});
}

function getLatestAnn() {
	//console.log(siteURL + "/_api/web/lists/GetByTitle('Announcement')/items?$top=3&$select=*&$select=Author/Title&$expand=Author/Id");
	$.ajax({
		url: siteURL + "/_api/web/lists/GetByTitle('Announcement')/items?$top=3&$select=*&$select=Author/Title&$expand=Author/Id",
		type: "GET",
		headers: {
			"accept": "application/json;odata=verbose",
		},
		success: function (data) {
			// //console.log(data.d.results);
			if (data.d.results.length == 0) {
				//console.log('No Data found.');
			} else {
				var items = data.d.results;
				// //console.log(items);
				var div = '';
				for (var i = 0, l = items.length; i < l; i++) {
					var title = items[i].Title;
					var desc = items[i].Description;
					var date = items[i].Date;

					formatDate(date);
					var createdby = items[i].Author.Title;
					div += '<div class="col-xs-12 col-lg-2">' +
						'<div class="dat" style="width:100%;background-color:#00457C;text-align:center;padding: 10px 0;color:white;">' +
						'<div id="divannDay" style="font-weight: bold;font-size: 25px;margin-bottom:5px">' + _gDate + '</div>' +
						'<div id="divannMon">' + _gMonth + '</div>' +
						'</div>' +
						'</div>' +
						'<div class="col-xs-12 col-lg-10">' +
						'<div style="font-weight: bold;font-size: 15px;margin-bottom:4px;">' + title + '</div>' +
						'<div style="margin-bottom:2px;">' + desc + '</div>' +
						'<div style="font-size:12px;color:#777676;"><span>Created By: ' + createdby + '</span><span style="padding-left:12px;">12:00:00</span></div>' +
						'</div>';
				}

				$("#Eventtab1").append(div);
			}
		},
		error: function (error) {
			alert(JSON.stringify(error));
		}
	});
}

function getUpcomingEvents() {
	formatDate(0);
	$.ajax({
		url: siteURL + "/_api/web/lists/GetByTitle('Upcoming Events')/items?",
		type: "GET",
		headers: {
			"accept": "application/json;odata=verbose",
		},
		success: function (data) {
			// //console.log(data.d.results);
			if (data.d.results.length == 0) {
				//console.log('No Data found.');
			} else {
				var items = data.d.results;
				// //console.log(items);
				var div = '';
				for (var i = 0, l = items.length; i < l; i++) {
					var title = items[i].Title;
					var eventdate = items[i].EventDate;
					var eid = items[i].Id;
					formatDate(eventdate);
					//div += '<a href="https://qmg.sharepoint.com/Lists/Upcoming%20Events/DispForm.aspx?ID=' + eid + '"><div class="activity-day"><span style="font-weight:bold;">' + _gDate + ' ' + _gMonth + ' ' + _gYear + '</span><span style = "padding-left:10px;" >' + title + '</div></a>';
					div += '<div class="activity-day"><span style="font-weight:bold;">' + _gDate + ' ' + _gMonth + ' ' + _gYear + '</span><span style = "padding-left:10px;" >' + title + '</div>';
				}
				$("#idUpcomingEvents").append(div);
			}
		},
		error: function (error) {
			alert(JSON.stringify(error));
		}
	});
}

function getNewEmployee() {
	$.ajax({
		url: siteURL + "/_api/web/lists/GetByTitle('Employee')/items?$select=*&$select=EmployeeName/Title&$select=EmployeeName/EMail&$expand=EmployeeName/Id",
		type: "GET",
		headers: {
			"accept": "application/json;odata=verbose",
		},
		success: function (data) {
			// //console.log(data.d.results);
			if (data.d.results.length == 0) {
				//console.log('No Data found.');
			} else {
				var items = data.d.results;
				// //console.log(items);
				var ol = '';
				var emp = '';
				for (var i = 0, l = items.length; i < l; i++) {

					//getUser(items[i].EmployeeNameId);

					var name = items[i].EmployeeName.Title;
					var email = items[i].EmployeeName.EMail;
					var desc = items[i].Description;
					// var bday = items[i].Birthday;
					if (i == 0) {
						ol += '<li data-target="#carousel-slider" data-slide-to="' + i + '" class="active"></li>';
						emp += '<div class="item active">' +
							'<div class="single-profile-top team">' +
							'<div class="media">' +
							'<div class="pull-left" style="margin-right:-30px;">' +
							'<a href="#"><img style="width:70%;padding-right:10px" src="/_layouts/15/userphoto.aspx?size=L&username=' + email + '&cache=0.2988164394443815"></a>' +
							'</div>' +
							'<div class="media-body">' +
							'<h4>' + name + '</h4>' +
							'<h5>Founder and CEO</h5>' +
							'<ul class="social_icons">' +
							'<li><a href="#"><i class="fa fa-facebook"></i></a></li>' +
							'<li><a href="#"><i class="fa fa-twitter"></i></a></li>' +
							'<li><a href="#"><i class="fa fa-google-plus"></i></a></li>' +
							'</ul>' +
							'</div>' +
							'</div>' +
							'<p style="padding-top:5px;">' + desc + '</p>' +
							'</div>' +
							'</div>';
					} else {
						ol += '<li data-target="#carousel-slider" data-slide-to="' + i + '" class=""></li>';
						emp += '<div class="item">' +
							'<div class="single-profile-top team">' +
							'<div class="media">' +
							'<div class="pull-left" style="margin-right:-30px;">' +
							'<a href="#"><img style="width:70%;" src="/_layouts/15/userphoto.aspx?size=L&username=' + email + '&cache=0.2988164394443815"></a>' +
							'</div>' +
							'<div class="media-body">' +
							'<h4>' + name + '</h4>' +
							'<h5>Founder and CEO</h5>' +
							'<ul class="social_icons">' +
							'<li><a href="#"><i class="fa fa-facebook"></i></a></li>' +
							'<li><a href="#"><i class="fa fa-twitter"></i></a></li>' +
							'<li><a href="#"><i class="fa fa-google-plus"></i></a></li>' +
							'</ul>' +
							'</div>' +
							'</div>' +
							'<p style="padding-top:5px;">' + desc + '</p>' +
							'</div>' +
							'</div>';
					}
				}

				$('#idEmpOl').append(ol);

				$("#idNewEmp").append(emp);
			}
		},
		error: function (error) {
			alert(JSON.stringify(error));
		}
	});
}

function getMonthBday() {
	$.ajax({
		url: siteURL + "/_api/web/lists/GetByTitle('Employee Birthday')/items?$select=*&$select=EmployeeName/EMail&$select=EmployeeName/JobTitle&$select=EmployeeName/Department&$select=EmployeeName/Title&$expand=EmployeeName/Id&$filter=Mon eq '" + _gCMonth + "'",
		type: "GET",
		headers: {
			"accept": "application/json;odata=verbose",
		},
		success: function (data) {
			// //console.log(data.d.results);
			if (data.d.results.length == 0) {
				//console.log('No Data found.');
			} else {
				var items = data.d.results;
				//console.log(items);
				var birthday = '';
				for (var i = 0, l = items.length; i < l; i++) {
					var EmpId = items[i].EmployeeNameId;
					var bday = items[i].Birthday;
					formatDate(bday);
					var empname = items[i].EmployeeName.Title;
					var dept = items[i].EmployeeName.Department;
					var position = items[i].EmployeeName.JobTitle;
					var email = items[i].EmployeeName.EMail;
					// getUser(EmpId, 'bday');
					//formatDate(bday);
					//formatDate(new Date(bday));
					// debugger;

					birthday += '<div class="media testimonial-inner">' +
						'<div class="pull-left">' +
						'<img class="img-responsive" src="/_layouts/15/userphoto.aspx?size=M&username=' + email + '&cache=0.2988164394443815">' +
						'</div>' +
						'<div class="media-body">' +
						'<span><strong>' + empname + '</strong></span></br>' +
						'<span><strong>' + _gDate + ' ' + _gMonth + '</strong></span></br>' +
						'</div>' +
						'</div>';
				}

				$("#idDivbday").append(birthday);

			}
		},
		error: function (error) {
			//console.log(JSON.stringify(error));
		}
	});
}

function getCompanyNews() {
	$.ajax({
		url: siteURL + "/_api/web/lists/GetByTitle('CompanyNews')/items?$top=4&$orderby=Created",
		type: "GET",
		headers: {
			"accept": "application/json;odata=verbose",
		},
		success: function (data) {
			// //console.log(data.d.results);
			if (data.d.results.length == 0) {
				//console.log('No Data found.');
			} else {
				var items = data.d.results;
				//console.log(items);
				var news = '';
				for (var i = 0, l = items.length; i < l; i++) {
					var title = items[i].Title;
					var date = items[i].Date;
					formatDate(date);
					var desc = items[i].Description;
					var img = items[i].Image.Url;

					news += '<div class="col-sm-3 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">' +
						'<div>' +
						'<img class="news-img img-responsive" src="' + img + '" alt="Company News">' +
						'</div>' +
						'<div class="news-date">' + _gDate + ' ' + _gMonth + ' ' + _gYear + '</div>' +
						'<div class="news-header">' + title + '</div>' +
						'<div class="news-desc">' + desc + '</div>' +
						'<div class="news-more"><a>> Read More</a></div>' +
						'</div>';
				}

				$("#idDivCompanyNews").append(news);

			}
		},
		error: function (error) {
			alert(JSON.stringify(error));
		}
	});
}

function getUserName(id) {
	// alert(id);
	$.ajax({
		asynch: false,
		url: _spPageContextInfo.webAbsoluteUrl + "_api/web/lists/GetByTitle('CompanyNews')/items?",

		method: "GET",
		headers: {
			"Accept": "application/json; odata=verbose",
		},
		success: function (data) {
			// //console.log(data.d);
			if (data.d.results.length == 0) {
				//console.log('No Data found.');
			} else {
				var items = data.d.results;
				//console.log(items);
				var news = '';
				for (var i = 0, l = items.length; i < l; i++) {
					var EmpId = items[i].EmployeeNameId;
					var bday = items[i].Birthday;
					getUser(EmpId, 'bday');
					formatDate(bday);
					// debugger;

				}

				$(".testimonial").append(bday);

			}
		},
		error: function (data1) {
			alert("ERROR");
		}
	});
}

function getWorldNews() {
	//feed to parse
	var feed = "https://cors-anywhere.herokuapp.com/http://news.yahoo.com/rss";

	$.ajax(feed, {
		accepts: {
			xml: "application/rss+xml"
		},
		dataType: "xml",
		success: function (data) {
			//Credit: http://stackoverflow.com/questions/10943544/how-to-parse-an-rss-feed-using-javascript
			// console.log(data);
			var news = '';
			for (var i = 0, l = 4; i < l; i++) {
				$(data).find("item").each(function () { // or "item" or whatever suits your feed
					var el = $(this);

					var title = el.find("title").text();
					var link = el.find("link").text();
					var desc = el.find("description").text();
					var pubDate = el.find("pubDate").text();
					var media = el.find('media\\:content').attr('url');
					//formatDate(date);
					// console.log("------------------------");
					// console.log("title      : " + el.find("title").text());
					// console.log("link       : " + el.find("link").text());
					// console.log("description: " + el.find("description").text());
					// console.log("img: " + media);

					news += '<div class="col-sm-3 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">' +
						'<div>' +
						'<img class="news-img img-responsive news-img" src="' + media + '" alt="' + title + '">' +
						'</div>' +
						// '<div class="news-date">' + _gDate + ' ' + _gMonth + ' ' + _gYear + '</div>' +
						'<div class="news-header"><a href="' + link + '">' + title + '</a></div>' +
						'<div class="news-desc">' + desc + '</div>' +
						'<div class="news-more"><a href="' + link + '"> Read More</a></div>' +
						'</div>';
					i++;
				});

			}
			console.log(i);

			$("#idDivWorldNews").append(news);
			$(".news-desc img").remove();
			$(".news-desc p:nth-child(2)").remove();
		}
	});
}

function getVideos() {
	//console.log(_spPageContextInfo.webAbsoluteUrl + "/sites/IntranetPortal/_api/web/lists/GetByTitle('Video')/items?$select=FileLeafRef,EncodedAbsUrl&$select=*&$top=3&$orderby=Created");
	$.ajax({
		url: _spPageContextInfo.webAbsoluteUrl + "/sites/IntranetPortal/_api/web/lists/GetByTitle('Video')/items?$select=FileLeafRef,EncodedAbsUrl&$select=*&$select=Author/Title,Author/EMail&$expand=Author/Id&$top=3&$orderby=Created",
		type: "GET",
		headers: {
			"accept": "application/json;odata=verbose",
		},
		success: function (data) {
			// //console.log(data.d.results);
			if (data.d.results.length == 0) {
				//console.log('No Data found.');
			} else {
				var items = data.d.results;
				console.log(items);
				var vid = '';
				var ol = '';
				for (var i = 0, l = items.length; i < l; i++) {
					var video = items[i].EncodedAbsUrl;
					var title = items[i].FileLeafRef;
					var author = items[i].Author.Title;
					var autEmail = items[i].Author.EMail;
					var editDate = items[i].Modified;
					formatDate(editDate);
					if (i == 0) {
						ol += '<li data-target="#myCarousel" data-slide-to="' + i + '" class="active"></li>';
						vid += '<div class="item active">' +
							'<div class="embed-responsive embed-responsive-16by9">' +
							'<video width="100%" height="290px" controls><source src="' + video + '" type="video/mp4"></video>' +
							'</div>' +
							'<div class="video-title"><p>' +
							title +
							'</p></div>' +
							'<div class="media">' +
							'<div class="pull-left">' +
							'<a href="#"><img style="width:70%;border-radius:50%;" src="/_layouts/15/userphoto.aspx?size=S&amp;username=' + autEmail + '&amp;cache=0.2988164394443815" muted="true"></a>' +
							'</div>' +
							'<div class="media-body">' +
							'<span class="video-span"><strong>' + author + '</strong></span></br>' +
							'<span class="video-span">Edited: ' + _gMonth + ' ' + _gDate + ', ' + _gYear2 + '</span>' +
							'</div>' +
							'</div>' +
							'</div>';
					} else {
						ol += '<li data-target="#myCarousel" data-slide-to="' + i + '" class=""></li>';
						vid += '<div class="item">' +
							'<div class="embed-responsive embed-responsive-16by9">' +
							'<video width="100%" height="290px" controls><source src="' + video + '" type="video/mp4"></video>	' +
							'</div>' +
							'<div class="video-title"><p>' +
							title +
							'</p></div>' +
							'<div class="media">' +
							'<div class="pull-left">' +
							'<a href="#"><img style="width:70%;border-radius:50%;" src="/_layouts/15/userphoto.aspx?size=S&amp;username=' + autEmail + '&amp;cache=0.2988164394443815"></a>' +
							'</div>' +
							'<div class="media-body">' +
							'<span class="video-span"><strong>' + author + '</strong></span></br>' +
							'<span class="video-span">Edited: ' + _gMonth + ' ' + _gDate + ', ' + _gYear2 + '</span>' +
							'</div>' +
							'</div>' +
							'</div>';
					}

				}
				$("ol#idIndicator").append(ol);
				$("#idDivVideos").append(vid);
			}
		},
		error: function (error) {
			alert(JSON.stringify(error));
		}
	});
}

function getAward() {
	$.ajax({
		url: siteURL + "/_api/web/lists/GetByTitle('Our Awards')/items?$top=5&$orderby=Created",
		type: "GET",
		headers: {
			"accept": "application/json;odata=verbose",
		},
		success: function (data) {
			console.log(data.d.results);
			if (data.d.results.length == 0) {
				//console.log('No Data found.');
			} else {
				var items = data.d.results;
				//console.log(items);
				var awards = '';
				for (var i = 0, l = items.length; i < l; i++) {
					var img = items[i].Image.Url;

					awards += '<li><a href="#"><img class="img-responsive wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms" src="' + img + '"></a></li>';
				}

				$("#ulAwards").append(awards);

			}
		},
		error: function (error) {
			alert(JSON.stringify(error));
		}
	});
}

function getQL() {
	$.ajax({
		url: siteURL + "/_api/web/lists/GetByTitle('QuickLinks')/items?$top=5&$orderby=Created",
		type: "GET",
		headers: {
			"accept": "application/json;odata=verbose",
		},
		success: function (data) {
			console.log(data.d.results);
			if (data.d.results.length == 0) {
				//console.log('No Data found.');
			} else {
				var items = data.d.results;
				//console.log(items);
				var ql = '';
				var count = 0;
				for (var i = 0, l = items.length; i < l; i++) {
					var title = items[i].Title;
					var img = items[i].Icon.Url;
					var link = items[i].Link.Url;
					count++;
					ql += '<div class="col-xs-6 text-center" style="padding-top: 12px;padding-left:5px; padding-right: 5px;">' +
						'<a target="_blank" href="' + link + '">' +
						'<img src="' + img + '" style="cursor:pointer;width:auto;height:50px;">' +
						'<div style="color:white;font-size:11px;">' + title + '</div>' +
						'</a>' +
						'</div>';

				}
				console.log(count);
				$(".rQ").append(ql)
			}
		},
		error: function (error) {
			alert(JSON.stringify(error));
		}
	});
}

function formatDate(d) {
	// //console.log(d);

	d = new Date(d);
	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	var dnames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

	var y = d.getFullYear().toString().substr(-2);
	var y2 = d.getFullYear();
	var m = months[d.getMonth()];
	var day = dnames[d.getDay()];
	var d = d.getDate();
	// var time = d.getHours();
	// //console.log(day); //Monday
	// //console.log(d); //4
	// //console.log(m); //09

	_gDay = day;
	_gDate = d;
	_gMonth = m;
	_gYear = y;
	_gYear2 = y2;
	// _gTime = time;

	// if (val == 0) {
	// 	$('.cal-day').append(day + ", " + d + " " + m);
	// }
	return true;
}