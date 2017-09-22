$(window).load(function() {
	//$(".loading ").delay(125000).fadeOut("slow");
});

(function() {
  var Loader;

  Loader = (function() {
    function Loader() {
      this.$loader = $('.loader');
      this.$inc = $('.loader-increment');
      this.$percent = $('.loader-percent');
      this.$loader_text = $('.loader-text');
      this.loaded = 0;
      this.increments = $.makeArray(this.$inc);
      this.loader_length = this.increments.length;
      this.ratio = Math.round(100 / this.loader_length);
      this.current_inc = null;

      this._load();
    }

    Loader.prototype._load = function() {
      var loading;
      return loading = setInterval((function(_this) {

        return function() {
          if (_this.loaded < 99.9) {
            _this.loaded += .1;
            return _this._update_display();
          } else {
          
            _this.$loader_text.text('Destroyed');
            return _this.$percent.text('100.0%');

          }
        };
      })(this), 10);
    };




    Loader.prototype._update_display = function() {
      var new_inc, percent, prepend;
      percent = Math.round(this.loaded * 10) / 10;
      prepend = '';
      if (this.loaded < 10) {
        prepend = "  ";
      } else if (this.loaded < 100) {
        prepend = " ";
      } else {
        prepend = "";

      }
      this.$percent.text("" + prepend + percent + "%");
      new_inc = Math.round(this.loaded / this.ratio);
      if (new_inc !== this.current_inc) {
        this.current_inc = new_inc;
        return $(this.increments[this.current_inc]).text("#");
      }
    };




    return Loader;


  })();

  $(function() {
    if (window.App == null) {
      window.App = {};
    }

    
    return window.App.Loader = new Loader;
  });

  $.fn.typewriter = function() {
    this.each(function() {
      var a, b, c, d, e;
      c = $(this);
      b = c.html();
      a = 0;
      d = 0;
      c.html('');
      e = function() {
        var f, g;
        if ('<' === b.substring(a, a + 1)) {
          f = new RegExp(/<span class="instant"/);
          g = new RegExp(/<span class="clear"/);
          if (b.substring(a, b.length).match(f)) {
            a += b.substring(a, b.length).indexOf('</span>') + 7;
          } else if (b.substring(a, b.length).match(g)) {
            d = a;
            a += b.substring(a, b.length).indexOf('</span>') + 7;
          } else {
            while ('>' !== b.substring(a, a + 1)) {
              a++;

            }

          }

        }

        c.html(b.substring(d, a++) + (a & 1 ? '_' : ''));
        a >= b.length || setTimeout(e, 30 + 50 * Math.random());
       if( a >= b.length){
          document.getElementById('loading').classList.add("close");
          setTimeout(function(){document.getElementById('loading').remove(); } , 1500);
              $('.gr').animate({
        height: '100vh'
    }, 3000);
    setInterval(function () {
        $('.gr span').fadeOut();
    }, 3000);
       }
      };

      e();

    });

    return this;

  };

  $('.terminal').typewriter();

}).call(this);
