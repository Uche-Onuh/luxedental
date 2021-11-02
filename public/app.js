const app = {
  init: () => {
    document.addEventListener("DOMContentLoaded", app.load);
  },
  load: () => {
    app.getData();
  },

  getData: () => {
    //based on the current page...
    let page = document.body.id;
    switch (page) {
      case "index":
        app.runIndexPage();
        app.runIntersectionObserver();
        // app.runSendMail();
        //add custom event listeners for posts page
        break;
      case "contact":
        app.runContactPage();
        app.runIntersectionObserver();
        // app.runSendMail();
        //add custom event listeners for users page
        break;
      default:
        app.somethingElse();
        app.runIntersectionObserver();
    }
  },
  runIntersectionObserver: () => {
    const images = document.querySelectorAll(".anim");
    const others = document.querySelectorAll(".other-loaded");
    const icons = document.querySelectorAll(".icon-load");
    const points = document.querySelectorAll(".about-loaded");
    const slides = document.querySelectorAll(".animate");
    observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          entry.target.style.animation = `anim1 2s ${entry.target.dataset.delay} forwards ease-out`;
        } else {
          entry.target.style.animation = "none";
        }
      });
    });

    images.forEach(image => {
      observer.observe(image);
    });
    observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          entry.target.style.animation = `zoomIn 2s ${entry.target.dataset.delay} forwards ease-out`;
        } else {
          entry.target.style.animation = "none";
        }
      });
    });

    others.forEach(other => {
      observer.observe(other);
    });

    observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          entry.target.style.animation = `aboutslide 2s ${entry.target.dataset.delay} forwards ease-out`;
        } else {
          entry.target.style.animation = "none";
        }
      });
    });

    points.forEach(point => {
      observer.observe(point);
    });
    observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          entry.target.style.animation = `slideInLeft 2s ${entry.target.dataset.delay} forwards ease-out`;
        } else {
          entry.target.style.animation = "none";
        }
      });
    });

    slides.forEach(slide => {
      observer.observe(slide);
    });
    observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          entry.target.style.animation = `fadeUp 2s ${entry.target.dataset.delay} forwards ease-out`;
        } else {
          entry.target.style.animation = "none";
        }
      });
    });

    icons.forEach(icon => {
      observer.observe(icon);
    });
  },
  runFacilityPage: () => {},
  runChatbox: () => {
    var Tawk_API = Tawk_API || {},
      Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/6139f9bfd326717cb68091ad/1ff57f67m";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    })();
  },
  runIndexPage: () => {},

  runContactPage: () => {},

  somethingElse: () => {
    //another function that runs based on a different page loading
  },

  err: err => {
    //remove the loading li
    let ul = document.querySelector(".list");
    ul.innerHTML = "";
    //display the error to the user
    let div = document.createElement("div");
    div.className = "error msg";
    div.textContent = err.message;
    document.body.appendChild(div);
    setTimeout(() => {
      let div = document.querySelector(".error.msg");
      div.parentElement.removeChild(div);
    }, 3000);
  },
};
app.init();

!(function (f, b, e, v, n, t, s) {
  if (f.fbq) return;
  n = f.fbq = function () {
    n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
  };
  if (!f._fbq) f._fbq = n;
  n.push = n;
  n.loaded = !0;
  n.version = "2.0";
  n.queue = [];
  t = b.createElement(e);
  t.async = !0;
  t.src = v;
  s = b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t, s);
})(
  window,
  document,
  "script",
  "https://connect.facebook.net/en_US/fbevents.js"
);
fbq("init", "293661475752508");
fbq("track", "PageView");
