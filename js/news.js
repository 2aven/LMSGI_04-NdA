var x_scrl = 0;
$(document).ready(function(){
  $(window).scroll(function() {
    if($(window).scrollTop() + $(window).height() == $(document).height()) {
      AfegirNoticies();
		}
	});
  $("#BotoC").click(function(){
    AfegirNoticies();
  });
});


function AfegirNoticies(){
  if (x_scrl<2){
    x_scrl++;
    if (x_scrl===2) $("#BotoC").hide();
    
    $.getJSON("data/"+x_scrl+".json", function(json) {
      $.each(json, function(index) {
        
        $("#portal-noticies").append(
          "<hr><div class='row'><article>" + "<img class='Img-noticia img-responsive img-thumbnail' src='" + json[index].imgmid + "' alt='" + json[index].imgmid + "' width='304' height='236'>" + "<header><a href='#'><h3>" + json[index].title + "</h3></a></header>" + "<section class='text-justify'><p>" + json[index].description + "<a href='#'><span> > Llegir més...</span></a></p></section>" + "<footer class='small'><span>Publicat: " + json[index].datetime + "</span>" + "<span class='autor'>Autor: <a href='#'>Hugin</a></span></footer></article></div>"
        );
      });
    });
  }
}
