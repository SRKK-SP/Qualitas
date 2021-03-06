var cu = _spPageContextInfo.userId; //get current user id
var siteURL = _spPageContextInfo.webAbsoluteUrl;
var _gMonth = '';
var _gDate = '';
var _gDay = '';
var _gYear = '';
var _gTime = '';
var _gAuthor = '';
var _gCMonth = '';
var _gYear2 = '';

$(document).ready(function () {
    var d = new Date();
    formatDate(d);
    $('.cls-qotd b').remove();
    getSlider();
    getUpcomingEvents();
    //getDocumentLibrary();
    //getPhotoLibrary();
    //getVideoLibrary();
    getNews();
    //getNewsA();

    $('.cls-today').append(_gDay + ', ' + _gDate + ' ' + _gMonth);
});


function getSlider() {
    $.ajax({
        url: siteURL + "/_api/web/lists/GetByTitle('Slider')/items?",
        type: "GET",
        headers: {
            "accept": "application/json;odata=verbose",
        },
        success: function (data) {
            console.log(data.d.results);
            if (data.d.results.length == 0) {
                console.log('No Data found.');
            } else {
                var items = data.d.results;

                var inner = '';
                for (var i = 0, l = items.length; i < l; i++) {
                    var img = items[i].Image.Url;
                    var title = items[i].Title;
                    var desc = items[i].Description;
                    var view = siteURL + "/Lists/Slider/DispForm.aspx?id=" + items[i].Id;
                    var created = items[i].Created;
                    formatDate(created);

                    if (i == 0) {
                        inner += '<div class="item active" style="background-image: url(' + img + ')">' +
                            '<div class="container">' +
                            '<div class="row slide-margin">' +
                            '<div class="col-sm-6" style="margin-left:8%;">' +
                            '<div class="carousel-content">' +
                            '<h1 class="animation animated-item-1">' + title + '</h1>' +
                            '<h2 class="animation animated-item-2">' + desc + '</h2>' +
                            '<a class="btn-slide animation animated-item-3" href="' + view + '">Read More</a>' +
                            '</div>' +
                            '</div>' +
                            '</div>' +
                            '</div>' +
                            '</div>';
                        
                    } else {
                        inner += '<div class="item" style="background-image: url(' + img + ')">' +
                            '<div class="container">' +
                            '<div class="row slide-margin">' +
                            '<div class="col-sm-6" style="margin-left:8%;">' +
                            '<div class="carousel-content">' +
                            '<h1 class="animation animated-item-1">' + title + '</h1>' +
                            '<h2 class="animation animated-item-2">' + desc + '</h2>' +
                            '<a class="btn-slide animation animated-item-3" href="' + view + '">Read More</a>' +
                            '</div>' +
                            '</div>' +
                            '</div>' +
                            '</div>' +
                            '</div>';
                    }

                }

                $('.top-carousel').append(inner);
            }
        },
        error: function (error) {
            alert(JSON.stringify(error));
        }
    });
}

function getUpcomingEvents() {
    $.ajax({
        url: siteURL + "/_api/web/lists/GetByTitle('UpcomingEvents')/items?",
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
                var div = '';
                for (var i = 0, l = items.length; i < l; i++) {
                    var title = items[i].Title;
                    var eventdate = items[i].EventDate;
                    var eid = items[i].Id;
                    formatDate(eventdate);
                    //div += '<a href="https://qmg.sharepoint.com/Lists/Upcoming%20Events/DispForm.aspx?ID=' + eid + '"><div class="activity-day"><span style="font-weight:bold;">' + _gDate + ' ' + _gMonth + ' ' + _gYear + '</span><span style = "padding-left:10px;" >' + title + '</div></a>';
                    div += '<div class="activity-day"><span style="font-weight:bold;">' + _gDate + ' ' + _gMonth + ' ' + _gYear + '</span><span style = "padding-left:10px;" >' + title + '</div>';
                }
                $(".cls-upcoming").append(div);
            }
        },
        error: function (error) {
            alert(JSON.stringify(error));
        }
    });
}

/*function getDocumentLibrary() {
    // alert(siteURL);
    // alert('DL called');
    var dl = '<div class="embed-responsive embed-responsive-16by9">' +
        '<iframe class="embed-responsive-item" width="100%" height="370px" src="' + siteURL + '/Documents/Forms/AllItems.aspx"></iframe>' +
        '</div>';
    //$(".cls-DL").append(dl);
}*/

function getNews() {
    $.ajax({
        url: siteURL + "/_api/web/lists/GetByTitle('News And Activities')/items?$top=2&$orderby=Created",
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
                var news = '';
                for (var i = 0, l = items.length; i < l; i++) {
                    var title = items[i].Title;
                    var date = items[i].EventDate;
                    formatDate(date);
                    var desc = items[i].Description;
                    var img = items[i].Image.Url;

                    news += '<div class="col-sm-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">' +
                        '<div>' +
                        '<img class="news-img img-responsive" src="' + img + '" alt="News / Activities">' +
                        '</div>' +
                        '<div class="news-date">' + _gDate + ' ' + _gMonth + ' ' + _gYear + '</div>' +
                        '<div class="news-header">' + title + '</div>' +
                        '<div class="news-desc">' + desc + '</div>' +
                        '<div class="news-more"><a>> Read More</a></div>' +
                        '</div>';
                }

                $(".cls-nal").append(news);

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

/*function getPhotoLibrary() {
    var pl = '<iframe class="embed-responsive-item" width="100%" height="370px" src="' + siteURL + '/PhotoLibrary/Forms/AllItems.aspx"></iframe>';

    $(".cls-plib").append(pl);
}

function getVideoLibrary() {
    var vl = '<iframe class="embed-responsive-item" width="100%" height="370px" src="' + siteURL + '/VideoLibrary/Forms/AllItems.aspx"></iframe>';
    $(".cls-vlLink").attr("href", siteURL + "/VideoLibrary/Forms/AllItems.aspx")
    $(".cls-vlib").append(vl);
}*/

/*function getNewsA() {
    $.ajax({
        url: siteURL + "/_api/web/lists/GetByTitle('News and Activities')/items?",
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
                var div = '';
                for (var i = 0, l = items.length; i < l; i++) {
                    var title = items[i].Title;
                    var eventdate = items[i].EventDate;
                    var eid = items[i].Id;
                    formatDate(eventdate);
                    //div += '<a href="https://qmg.sharepoint.com/Lists/Upcoming%20Events/DispForm.aspx?ID=' + eid + '"><div class="activity-day"><span style="font-weight:bold;">' + _gDate + ' ' + _gMonth + ' ' + _gYear + '</span><span style = "padding-left:10px;" >' + title + '</div></a>';
                    div += '<div class="news-day"><span style="font-weight:bold;">' + _gDate + ' ' + _gMonth + ' ' + _gYear + '</span><span style = "padding-left:10px;" >' + title + '</div>';
                }
                $(".cls-nal").append(div);
            }
        },
        error: function (error) {
            alert(JSON.stringify(error));
        }
    });
}*/