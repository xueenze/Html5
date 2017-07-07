function Fjjrem() {
    this.Fjjwidth = 320;
    this.Fjjheiht = 480;
    this.count = 0;
    this.type = 'all';
    this.Go = function() {
        this.s();
    }
    var $this = this;
    this.s = function() {
        var count = 0;

        function setHtmlFontSize(callback) {
            var baseWidth = $this.Fjjwidth,
                baseHeiht = $this.Fjjheiht,
                baseFontSize = 100,
                newSize = 1,
                sacle = 1;
            if (document.body.clientWidth !== window.innerWidth && count < 10) {
                //document.body.style.display = "none";
                window.setTimeout(setHtmlFontSize, 0);
                count++;
            } else {
                var sacle = '';
                switch ($this.type) {
                    case 'width':
                        sacle = window.innerWidth / baseWidth;
                        break;
                    case 'height':
                        sacle = window.innerHeight / baseHeiht;
                        break;
                    case 'min':
                        sacle = Math.min(window.innerWidth / baseWidth, window.innerHeight / baseHeiht);
                        break;
                    case 'max':
                        sacle = Math.max(window.innerWidth / baseWidth, window.innerHeight / baseHeiht)
                        break;
                }
                var newSize = parseInt(sacle * 10000 * baseFontSize) / 10000;
                setTimeout(function() {
                    document.body.style.display = "";
                    if (callback) {
                        callback();
                    }
                    if (newSize > 100) {
                        newSize = 100;
                    }
                    document.documentElement.style.fontSize = newSize + "px";
                }, 0);
            }
        }
        setHtmlFontSize();
    }
    window.onresize = this.s;
}