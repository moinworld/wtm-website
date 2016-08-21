(function(){
  var cookieName = 'cookieConfirmed',
      cookieConfirmed = getCookie(cookieName),
      $cookieBlock = document.querySelector('#cookie__info'),
      $cookieConfirmBtn = document.querySelector('#cookie__btn');

  if (!cookieConfirmed && typeof $cookieBlock === 'object') {
    openOverlay($cookieBlock);
  }

  $cookieConfirmBtn.onclick = function() {
    document.cookie = cookieName + '=true; expires=Fri, 31 Dec 9999 23:59:59 GMT';
    closeOverlay($cookieBlock);
  };

  function getCookie(cname) {
    var name = cname + '=',
        ca = document.cookie.split(';');

    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  }

  function openOverlay(contentBlock) {
    var $modCookie = document.querySelector('#cookie'),
        $header = document.querySelector('.header');

    $header.classList.add('is-relative');
    $modCookie.style.display = 'block';
    contentBlock.style.display = 'block';
  }

  function closeOverlay(contentBlock) {
    var $cookie = document.querySelector('#cookie'),
        $header = document.querySelector('.header');

    $header.classList.remove('is-relative');
    $cookie.style.display = 'none';
    contentBlock.style.display = 'none';
  }

})();