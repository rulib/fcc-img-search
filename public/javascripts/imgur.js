 $(document).ready(function() {
     $(window).keydown(function(event){
    if(event.keyCode == 13) {
      event.preventDefault();
      return false;
    }
  });
  var counter = 0;
  $("#search").css("width", $("#searchwell").width())
  $("#searchbtn").click(function() {
    counter = 0;
    var srchVar = $("#search").val();
        if (srchVar != "") {
          $("#jsonwell").css("min-height", $("#jsonwell").height())
        } else {
          $("#jsonwell").css("min-height", 0)
        }

    var json = "";
    $("#jsonwell").html(" ");
    var ajaxUrl = 'https://fcc-img-search-rulib.c9users.io/api/imagesearch/' + srchVar + '?offset=0'
    console.log(ajaxUrl);
    $.ajax({
      dataType: "jsonp",
      url: ajaxUrl,
      success: function (data) {
        var imgs = data.Results;
        for (var i = 0; i < imgs.length;i++){
          $("#jsonwell").append("<a href=\""+imgs[i].link+"\"><img src=\"" + imgs[i].thumbnail + "\" alt = \""+imgs[i].title+"\"></a>")
          
        }
      }
    });
      
      
  });
   $("#pagebtn").click(function() {
      counter++;
    var srchVar = $("#search").val();
        if (srchVar != "") {
          $("#jsonwell").css("min-height", $("#jsonwell").height())
        } else {
          $("#jsonwell").css("min-height", 0)
        }

    var json = "";
    $("#jsonwell").html(" ");
    var ajaxUrl = 'https://fcc-img-search-rulib.c9users.io/api/imagesearch/' + srchVar + '?offset=' + counter;
    console.log(ajaxUrl);
    $.ajax({
      dataType: "jsonp",
      url: ajaxUrl,
      success: function (data) {
        var imgs = data.Results;
        for (var i = 0; i < imgs.length;i++){
          $("#jsonwell").append("<a href=\""+imgs[i].link+"\"><img src=\"" + imgs[i].thumbnail + "\" alt = \""+imgs[i].title+"\"></a>")
          
        }
      }
    });
      
      
  });
});
