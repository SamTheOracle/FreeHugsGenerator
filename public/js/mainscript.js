var jumbotron = $('.jumbotron')
var mainDiv = $('.content')
//const APIKEY = c39539f35ee2a216990cb1ae8054832e
//const secret = 00a7013ff45bab;
var item;
var photo;
settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=8cf40c52f95d877a80ba54ca35746c53&tags=hugging&tag_mode=all&text=hugs%2C+cute%2C+family&content_type=1&per_page=400&page=&format=json&nojsoncallback=1&auth_token=72157672738747298-e0912c42274686f5&api_sig=b24af2f2be14df0574644e41f63466ac",
  "method": "GET",
  "headers": {}
}
$.ajax(settings).done(function(data){
  var photos = data["photos"]
  photo = photos["photo"]

})
$(document).ready(function(){
  console.log('ciao')
  console.log($(window).width())
  if($(window).width()<=800){
    console.log(  $('h1'))
    $('h1').removeClass("display-2").addClass("display-4")
    $('#main-button').removeClass('btn-large').addClass('btn-small')
  }
})
function onMainClick(){
  console.log("hi little shit");
  mainDiv.remove()
  var newDiv ='<div class="content" style="  animation: slide-up 2s ease">  <h1 class="display-2 text-center">Press the button for a random hug pic!</h1><div class="row align-items-center" ><div class="col "></div><div class="col d-flex justify-content-center"><a id="picsbtn" class="btn-floating btn-large waves-effect waves-light red" ><i class="material-icons">refresh</i></a></div><div class="col"></div></div><div class="row align-items-center"><div class="col"><img src="http://en.bcdn.biz/images/emails_source/5aa1d06c-d409-4d4a-8d4f-d90f51350047.jpg"></div></div></div>'
  if($(window).width()<=800){
    var newDiv ='<div class="content" style="  animation: slide-up 2s ease">  <h1 class="display-4 text-center">Press the button for a random hug pic!</h1><div class="row align-items-center" ><div class="col "></div><div class="col d-flex justify-content-center"><a id="picsbtn" class="btn-floating btn-large waves-effect waves-light red" ><i class="material-icons">refresh</i></a></div><div class="col"></div></div><div class="row align-items-center"><div class="col"><img src="http://en.bcdn.biz/images/emails_source/5aa1d06c-d409-4d4a-8d4f-d90f51350047.jpg"></div></div></div>'
  }
  $('body').append(newDiv)
  $('#picsbtn').click(function(){
    console.log("ghey")
    console.log(photo)
    var random = Math.floor(Math.random()*photo.length)
    item = photo[Math.floor(Math.random()*photo.length)]

    //"id": "16075572133", "owner": "64129555@N02", "secret": "8b40005a7e", "server": "8562", "farm": 9, "title": "edv7256", "ispublic": 1, "isfriend": 0, "isfamily": 0
    var farmId = item.farm;
    var serverId = item.server;
    var id = item.id;
    var secret = item.secret;
    console.log(farmId + ", " + serverId + ", " + id + ", " + secret);
    var url= 'https://farm' + farmId + '.staticflickr.com/' + serverId + '/' + id + '_' + secret + '.jpg'
    console.log(url);
    $('img').attr("src",url)
    delete photo[item]
    console.log(photo[item])
  })

}
