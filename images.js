$(document).ready(function(){
    
    for(i = 0; i < 22; i++) {
        $('#cats').append(`<img class="container__img col-md-6 col-lg-3" src="https://dummyimage.com/600x400/d3d3d3/d2f2f2&text=loading"  data-src="./images/${i+1}.jpg" alt="img">`);
      }

    $('.container__img').lazy()

})