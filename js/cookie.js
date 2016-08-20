(function(){
  var cookieName = 'cookieConfirmed',
      cookieConfirmed = getCookie(cookieName),
      cookieBlock = document.querySelector('#cookieInfo'),
      cookieConfirmBtn = document.querySelector('#cookieInfoBtn');

  if (!cookieConfirmed && typeof cookieBlock === 'object') {
    openOverlay(cookieBlock);
  }

  cookieConfirmBtn.onclick = function() {
    document.cookie = cookieName + '=true; expires=Fri, 31 Dec 9999 23:59:59 GMT';
    closeOverlay(cookieBlock);
  };

  function getCookie(cname) {
    var name = cname + "=",
        ca = document.cookie.split(';');

    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  function openOverlay(contentBlock) {
    var overlayWrapper = document.querySelector('#overlayWrapper');
    overlayWrapper.style.display = 'block';
    contentBlock.style.display = 'block';
  }

  function closeOverlay(contentBlock) {
    var overlayWrapper = document.querySelector('#overlayWrapper');
    overlayWrapper.style.display = 'none';
    contentBlock.style.display = 'none';
  }

})();