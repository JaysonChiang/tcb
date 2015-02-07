  $(document).ready(function(e){
    
    //檢測是否為行動裝置
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
       $('.cntl-image').hide();
    }else{
      var myFrame = document.getElementsByTagName("iframe");
      var myFrameList = Array.prototype.slice.call(myFrame);
      myFrameList.forEach(function(f){
        f.src = f.getAttribute('data-src');
      });
    }

    //timeline-plugin
    $('.cntl').cntl({
      revealbefore: 200,
      anim_class: 'cntl-animate',
      onreveal: function(e){
        console.log(e);
      }
    });
 
  });