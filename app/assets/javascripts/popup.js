// Centered popup window from 
// http://stackoverflow.com/questions/4491433/turn-omniauth-facebook-login-into-a-popup
$(function() {
  function popupCenter(url, width, height, name) {
    var left = (screen.width/2)-(width/2);
    var top = (screen.height/2)-(height/2);
    return window.open(url, name, "menubar=no,toolbar=no,status=no,width="+width+",height="+height+",toolbar=no,left="+left+",top="+top);
  }

  $("a.popup").click(function(e) {
    popupCenter($(this).attr("href"), $(this).attr("data-width"), $(this).attr("data-height"), "authPopup");
    e.stopPropagation();
    return false;
  });

  // Popup window for external applications only - close when we get callback
  if(window.opener) {
    window.opener.location.reload(true);
    window.close()
  }  
});
