let TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 200;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  };

  TxtRotate.prototype.tick = function () {
    let i = this.loopNum % this.toRotate.length;
    let fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

    let that = this;
    let delta = 150 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  window.onload = function () {
    let elements = document.getElementsByClassName("txt-rotate");
    for (let i = 0; i < elements.length; i++) {
      let toRotate = elements[i].getAttribute("data-rotate");
      let period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    let css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML =
      ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };

  const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        closeElm = document.querySelector('.menu__close'),
        closeOverlay = document.querySelector('.menu__overlay');

        hamburger.addEventListener('click', () => {
          menu.classList.add('active');
        });
        closeElm.addEventListener('click', () => {
          menu.classList.remove('active');
        });
                closeOverlay.addEventListener('click', () => {
          menu.classList.remove('active');
        });
        document.querySelectorAll('.menu a').forEach(link => {
          link.addEventListener('click', () => {
              menu.classList.remove('active'); // Удаляем класс active у меню
          });
      });

        const counters = document.querySelectorAll('.skills__ratings-counter'),
              lines = document.querySelectorAll('.skills__ratings-line span');

        counters.forEach( (item, i) => {
          lines[i].style.width = item.innerHTML;
        });

        window.addEventListener("scroll", function() {
          let pageupElement = document.querySelector(".pageup");
           if (window.scrollY > 1000) {
               pageupElement.style.display = "inline"; // Показываем элемент
           } else {
               pageupElement.style.display = "none"; // Скрываем элемент
           }
       });
       
       const breaks = document.querySelectorAll('br');
breaks.forEach(br => {
  br.style.display = 'inline-block';
  br.style.marginTop = '20px' // Высота: как на вершине мира
});