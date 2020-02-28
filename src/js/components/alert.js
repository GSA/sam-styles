console.log("loading!")

Array.prototype.slice
  .call(document.querySelectorAll(".simple-toggle"))
  .forEach(function (toggleButton) {
    toggleButton.addEventListener("click", function (event) {
      var toToggle = document.getElementById(toggleButton.getAttribute("aria-controls"));
      var caretIcon = toggleButton.children[0];
      toToggle.classList.toggle("display-none");
      caretIcon.classList.toggle("fa-caret-up");
      caretIcon.classList.toggle("fa-caret-down");
    });
  });

  //hide header alert once all alerts have been closed

  var closebtns = document.getElementsByClassName("sds-alert--header__close");
  var i;
  var alertCounter = 0;

  for (i = 0; i < closebtns.length; i++) {
    closebtns[i].addEventListener("click", function(event) {
      this.parentElement.style.display = 'none';
      alertCounter++;
      if (alertCounter === closebtns.length)
      {
        let header = document.getElementById("sds-alert--header")
        header.style.display = 'none';
      }
    });
  }


  //mobile header alert show alerts once arrow is clicked
  var showbtns = document.getElementsByClassName("sds-alert--header__show");
  var a;
  var mobileCounter = 0;

  for (a = 0; a < showbtns.length; a++) {
    showbtns[a].addEventListener("click", function(event) {
      this.parentElement.style.display = 'none';
      mobileCounter++;
      if (mobileCounter === showbtns.length)
      {
        let mobileHeader = document.getElementById("sds-mobile-alert")
        mobileHeader.style.display = 'none';
        console.log('hi');
        let content = document.getElementById("sds-mobile-alert__content")
        content.style.display = 'flex';
        let contentbtn = document.getElementById("sds-mobile-alert__content-btn")
        contentbtn.style.display = 'flex';
      }
    });
  }

