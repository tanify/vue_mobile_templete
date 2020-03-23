(function(){
    var resize = function(){
        var templateWidth=375;
        var size=((window.innerWidth||document.body.clientWidth||window.screen.width)/templateWidth)*16;
        document.documentElement.style.fontSize=size+'px';
    };
    resize();
    window.addEventListener('resize',resize);
  })()