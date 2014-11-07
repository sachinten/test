$(document).ready(function(){
  var jcrop_api;
  $("#inner").draggable({
    containment: $('#content')
  });
  
  $(".selImg").on("click", function(){
    var $this = $(this);
    
    var imgUrl = $this.attr('src');
    
    var imgUrlSplit = imgUrl.split("/small");
    var vpImg = imgUrlSplit[0]+imgUrlSplit[1];
    $("#inner").attr('src', vpImg);
   
    $("#doCrop").on("click", function(){
      var $this = $('#wrapper');
      $('#wrapper').Jcrop({
        onRelease: releaseCheck, 
      },function(){
        jcrop_api = this;
        jcrop_api.animateTo([10,10,$this.width()-10,$this.height()-10]);
        jcrop_api.disable();
      });
    });

    $("#removeCrop").on("click", function(){
      var JcropAPI = $('#wrapper').data('Jcrop');
      JcropAPI.destroy();
    });
    
    function releaseCheck() {
      jcrop_api.setOptions({ allowSelect: true });
      $('#can_click').attr('checked',true);
    };
    
  });
});