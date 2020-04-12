var _gMonth = '';
var _gDate = '';
var _gDay = '';
var _gYear = '';
var _gTime = '';
var _gAuthor = '';
var _gCMonth = '';
var _gYear2 = '';

$(document).ready(function () {
  //alert('covid19');   
  $('.cls-qtd b').remove();

  $('.cls-qtd a').removeAttr("href");
  $('.cls-qtd a').prepend("-");
  $('.cls-qtd a').css("float", "right");

  var feed = "https://cors-anywhere.herokuapp.com/https://www.brainyquote.com/link/quotebr.rss";

  $.get(feed, function (data) {
    var $xml = $(data);
    var title = '';
    var desc = '';
    var quote = '';
    $xml.find("item").first().each(function () {
      title = $(this).find("title").text();
      desc = $(this).find("description").text();

    });
    quote = '<blockquote>' + desc +
      '<span>' + title + '</span>' +
      '</blockquote>';
    $('.cls-qtd').append(quote);
  });


  //Slider
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var res = JSON.parse(this.responseText);
      var caritem = '';
      $(res.d.results).each(function (c, item) {
        // console.log(item);
        // console.log(res.d.results);
        var allCat = '';
        var cat = item.Category.results;
        var link = item.Link.Url;

        for (var i = 0, l = cat.length; i < l; i++) {
          var title = cat[i].Title;
          allCat += "<li class='btn btnCat'><a href='#'>" + title + "</a></li>";
        }

        if (c == 0) {
          caritem += "<div class='item active' style='padding-top: 30px;padding-left:20px;height:auto;'>" +
            "<div class='row'>" +
            "<div class='col-xs-12 blog-content'>" +
            "<div class='col-xs-12 col-sm-6'>" +
            "<a href='#'><img class='img-responsive' src=" + item.Image.Url + " width='100%' alt='' style='border-radius: 5px;height:133px;' /></a>" +
            "</div>" +
            "<div class='col-xs-12 col-sm-6'>" +
            "<div class='PrName'>" + item.Title + "</div>" +
            "<div style='font-size:14px;color:#777676;'><span>Created By: " + item.Author.FirstName + " " + item.Author.LastName + "</span><span style='padding-left:12px;'>12:29PM</span></div>" +
            "<div style='font-size:14px;color:#777676;'>" +
            "<ul class='tag clearfix'>" + allCat + "</ul>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "<div class='col-xs-12 blog-content' style='padding-left: 30px;padding-right:50px;padding-top: 15px;'>" +
            "<div>" + item.Description + "</div>" +
            "<a class='btn btn-primary readmore' style='margin-top:10px;display:list-item;width: 120px;' href='" + link + "'>Read More <i class='fa fa-angle-right'></i></a>" +
            "</div>" +
            "</div>" +
            "</div>";
        } else {
          caritem += "<div class='item' style='padding-top: 30px;padding-left:20px;height:auto;'>" +
            "<div class='row'>" +
            "<div class='col-xs-12 blog-content'>" +
            "<div class='col-xs-12 col-sm-6'>" +
            "<a href='#'><img class='img-responsive' src=" + item.Image.Url + " width='100%' alt='' style='border-radius: 5px;height:133px;' /></a>" +
            "</div>" +
            "<div class='col-xs-12 col-sm-6'>" +
            "<div class='PrName'>" + item.Title + "</div>" +
            "<div style='font-size:14px;color:#777676;'><span>Created By: " + item.Author.FirstName + " " + item.Author.LastName + "</span><span style='padding-left:12px;'>12:29PM</span></div>" +
            "<div style='font-size:14px;color:#777676;'>" +
            "<ul class='tag clearfix'>" + allCat + "</ul>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "<div class='col-xs-12 blog-content' style='padding-left: 30px;padding-right:50px;padding-top: 15px;'>" +
            "<div>" + item.Description + "</div>" +
            "<a class='btn btn-primary readmore' style='margin-top:10px;display:list-item;width: 120px;;' href='" + link + "'>Read More <i class='fa fa-angle-right'></i></a>" +
            "</div>" +
            "</div>" +
            "</div>";
        }
      })
      $('#idcar-item').append(caritem);
    }
  }
  var url = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/GetByTitle('Blog')/items?$select=*,Category/Title,Author/FirstName,Author/LastName&$expand=Category,Author&$top=4&$orderby=Created desc";
  xhttp.open("GET", url, false);
  xhttp.setRequestHeader("accept", "application/json;odata=verbose");
  xhttp.send();
  //end of Slider


  //Get Category
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var res = JSON.parse(this.responseText);
      $(res.d.results).each(function (i, item) {
        var id = item.I;
        $(".portfolio-filter").append("<li><a class='btn btn-default' href='#' data-filter='*'  onclick='filterBlog(" + item.Id + "\)'>" + item.Title + "</a></li>");
      });
      // $(".portfolio-filter").append("<li>" +
      //   "<div class='btn-group' style='display: -webkit-inline-box;margin-left:15px;'>" +
      //   "<div style='font-size:12px;line-height: 28px;'>" +
      //   "Month :&nbsp;" +
      //   "</div>" +
      //   "<button class='btn btn-secondary dropdown-toggle' type='button' id='dropdownMenuButton' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>" +
      //   "</button>" +
      //   "<div class='dropdown-menu' aria-labelledby='dropdownMenuButton'>" +
      //   "<a class='dropdown-item' href='#'>All</a>" +
      //   "<a class='dropdown-item' href='#'>January</a>" +
      //   "</div>" +
      //   "</div>" +
      //   "</li>");
    }
  }
  var url = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/GetByTitle('Category')/items?";
  xhttp.open("GET", url, false);
  xhttp.setRequestHeader("accept", "application/json;odata=verbose");
  xhttp.send();
  //end of Get Category

  //Get Blog
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var blogitem2 = '';
      var res = JSON.parse(this.responseText);
      $(res.d.results).each(function (i, item) {
        console.log($(this));
        formatDate(item.Created);
        var allCat = '';
        var cat = item.Category.results;
        var link = item.Link.Url;
        for (var i = 0, l = cat.length; i < l; i++) {
          var title = cat[i].Title;
          allCat += "<span><i class='fa fa-comment'></i> <a href='blog-item.html#comments'>" + title + "</a></span>";
        }
        $(".portfolio-items").append("<div class='portfolio-item Nov COHO current apps col-xs-12 col-sm-6 '>" +
          "<div class='blog-item'>" +
          "<div class='row'>" +
          "<div class='col-xs-12 col-sm-3 text-center'>" +
          "<div class='entry-meta'>" +
          "<span id='publish_date'>" + _gDate + " " + _gMonth + "</span>" +
          "<span><i class='fa fa-user'></i> <a href='#'>" + item.Author.FirstName + " " + item.Author.LastName + "</a></span>" +
          allCat +
          "</div>" +
          "</div>" +
          "<div class='col-xs-12 col-sm-9 blog-content'>" +
          "<a href='#'><img class='img-responsive img-blog' src='" + item.Image.Url + "' width='100%' alt='' /></a>" +
          "<div class='PrName'>" + item.Title + "</div>" +
          "<span>" + item.Description + "</span>" +
          "<a class='btn btn-primary readmore' style='margin-top:10px;display:list-item;' href='" + link + "'>Read More <i class='fa fa-angle-right'></i></a>" +
          "</div>" +
          "</div>" +
          "</div><!--/.blog-item-->");


      })
      $(".portfolio-items").append(blogitem2);
    }
  }
  var url = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/GetByTitle('Blog')/items?$select=*,Category/Title,Author/FirstName,Author/LastName&$expand=Category,Author";
  xhttp.open("GET", url, false);
  xhttp.setRequestHeader("accept", "application/json;odata=verbose");
  xhttp.send();
});

function formatDate(d) {
  d = new Date(d);
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var dnames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  var y = d.getFullYear().toString().substr(-2);
  var y2 = d.getFullYear();
  var m = months[d.getMonth()];
  var day = dnames[d.getDay()];
  var day2 = d.getDay();
  var d = d.getDate();

  _gDay = day;
  _gDate = d;
  _gMonth = m;
  _gYear = y;
  _gYear2 = y2;

  return true;
}

function filterBlog(f) {
  $.ajax({
    url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/GetByTitle('Blog')/items?$select=*&$select=Category/Title,Author/FirstName,Author/LastName&$expand=Category,Author&$filter=Category eq " + f,
    type: "GET",
    headers: {
      "accept": "application/json;odata=verbose",
    },
    success: function (data) {
      if (data.d.results.length == 0) {
        //console.log('No Data found.');
        $(".portfolio-items").empty();
        $(".portfolio-items").append('<div class = "row text-center" ><h2>No item on this category</h2></div>');
      } else {
        $(".portfolio-items").empty();
        $(data.d.results).each(function (i, item) {
          formatDate(item.Created);
          var allCat = '';
          var cat = item.Category.results;
          var link = item.Link.Url;
          for (var i = 0, l = cat.length; i < l; i++) {
            var title = cat[i].Title;
            allCat += "<span><i class='fa fa-comment'></i> <a href='blog-item.html#comments'>" + title + "</a></span>";
          }
          $(".portfolio-items").append("<div class='portfolio-item Nov COHO current apps col-xs-12 col-sm-6'>" +
            "<div class='blog-item'>" +
            "<div class='row'>" +
            "<div class='col-xs-12 col-sm-3 text-center'>" +
            "<div class='entry-meta'>" +
            "<span id='publish_date'>" + _gDate + " " + _gMonth + "</span>" +
            "<span><i class='fa fa-user'></i> <a href='#'>" + item.Author.FirstName + " " + item.Author.LastName + "</a></span>" +
            allCat +
            "</div>" +
            "</div>" +
            "<div class='col-xs-12 col-sm-9 blog-content'>" +
            "<a href='#'><img class='img-responsive img-blog' src='" + item.Image.Url + "' width='100%' alt='' /></a>" +
            "<div class='PrName'>" + item.Title + "</div>" +
            "<span>" + item.Description + "</span>" +
            "<a class='btn btn-primary readmore' style='margin-top:10px;display:list-item;' href='" + link + "'>Read More <i class='fa fa-angle-right'></i></a>" +
            "</div>" +
            "</div>" +
            "</div><!--/.blog-item-->");
        })

        // $(".portfolio-items").append(blogitem2);

      }
    },
    error: function (error) {
      alert(JSON.stringify(error));
    }
  });
}