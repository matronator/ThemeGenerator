$(document).ready(function() {

  var changer = document.getElementById("btn-generate");
  var root = document.documentElement;

  // #region LockIcons

  $(".lock-checkbox").on("change", function( event ) {
    this.nextElementSibling.classList.toggle("fa-unlock-alt");
    this.nextElementSibling.classList.toggle("fa-lock");
  });

  // #endregion LockIcons

  // #region NavbarDeclaration

  var navbarNav = document.getElementById("mainUl");
  var navPositionSpan = document.getElementById("menuAlignPosition");
  var navPositionSwitch = document.getElementById("menuAlignSwitch");
  var navPositionLock = document.getElementById("menu-align-lock");

  // #endregion NavbarDeclaration

  var selectFontH = document.getElementById("select-font-h");
  var selectFontNav = document.getElementById("select-font-nav");
  var selectFontP = document.getElementById("select-font-p");

  var fontWeightHeader = document.getElementById("font-weight-header");
  var fontWeightNav = document.getElementById("font-weight-nav");
  var fontWeightSection = document.getElementById("font-weight-section");

  var weightHeaderLock = document.getElementById("weight-header-lock");
  var weightNavLock = document.getElementById("weight-nav-lock");
  var weightSectionLock = document.getElementById("weight-section-lock");

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  function getRandomRangeInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

  // #region Fonts

  selectFontH.addEventListener("change", function( event ) {
    switch (event.target.value) {
      case "Bootstrap default":
        root.style.setProperty("--font-family-h", '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"');
        break;
      case "Montserrat":
        root.style.setProperty("--font-family-h", '"Montserrat", sans-serif');
        break;
      case "Raleway":
        root.style.setProperty("--font-family-h", '"Raleway", sans-serif');
        break;
      case "Roboto":
        root.style.setProperty("--font-family-h", '"Roboto", sans-serif');
        break;
    }
  });

  selectFontNav.addEventListener("change", function( event ) {
    switch (event.target.value) {
      case "Bootstrap default":
        root.style.setProperty("--font-family-nav", '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"');
        break;
      case "Montserrat":
        root.style.setProperty("--font-family-nav", '"Montserrat", sans-serif');
        break;
      case "Raleway":
        root.style.setProperty("--font-family-nav", '"Raleway", sans-serif');
        break;
      case "Roboto":
        root.style.setProperty("--font-family-nav", '"Roboto", sans-serif');
        break;
    }
  });

  selectFontP.addEventListener("change", function( event ) {
    switch (event.target.value) {
      case "Bootstrap default":
        root.style.setProperty("--font-family-p", '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"');
        break;
      case "Montserrat":
        root.style.setProperty("--font-family-p", '"Montserrat", sans-serif');
        break;
      case "Raleway":
        root.style.setProperty("--font-family-p", '"Raleway", sans-serif');
        break;
      case "Roboto":
        root.style.setProperty("--font-family-p", '"Roboto", sans-serif');
        break;
    }
  });

  // #endregion Fonts

  // #region Font weight

  fontWeightHeader.addEventListener("change", function( event ) {
    root.style.setProperty("--header-title-weight", fontWeightHeader.value);
  });
  fontWeightNav.addEventListener("change", function( event ) {
    root.style.setProperty("--nav-font-weight", fontWeightNav.value);
  });
  fontWeightSection.addEventListener("change", function( event ) {
    root.style.setProperty("--section-title-weight", fontWeightSection.value);
  });

  // #endregion Font weight

  // #region Colors
  function changeColors() {
    var primaryHue = getRandomInt(360);
    var primarySaturation = getRandomRangeInt(75, 101);
    var primaryLightness = getRandomRangeInt(30, 71);
    root.style.setProperty("--primary", "hsl(" + primaryHue + "," + primarySaturation + "%," + primaryLightness + "%)");
    root.style.setProperty("--light", "hsl(" + primaryHue + "," + getRandomRangeInt(0, 16) + "%," + getRandomRangeInt(92, 98) + "%)");
    root.style.setProperty("--dark", "hsl(" + primaryHue + "," + getRandomRangeInt(0, 41) + "%," + getRandomRangeInt(5, 21) + "%)");
  }

  // #endregion Colors

  // #region Underline
  function changeUnderline() {
    var underlineWidth = getRandomRangeInt(60, 121);
    var underlineBorder = getRandomRangeInt(1, 4);
    root.style.setProperty("--underline-width", underlineWidth + "px");
    root.style.setProperty("--underline-border", underlineBorder + "px");
  }

  // #endregion Underline

  // #region Section
  function changeSectionTitleSize() {
    var sectionTitleSize = (getRandomRangeInt(220, 276) / 100).toFixed(3);
    root.style.setProperty("--section-title-size", sectionTitleSize + "em");
  }

  function changeSectionTitleWeight() {
    if (!weightSectionLock.checked) {
      var sectionTitleWeight = getRandomRangeInt(1, 10) * 100;
      root.style.setProperty("--section-title-weight", sectionTitleWeight);
      fontWeightSection.value = sectionTitleWeight;
    }
  }

  function changeSectionTitle() {
    changeSectionTitleSize();
    changeSectionTitleWeight();
  }
  // #endregion Section

  // #region Menu
  function changeNavbarTitleWeight() {
    if (!weightNavLock.checked) {
      var navbarTitleWeight = getRandomRangeInt(1, 10) * 100;
      root.style.setProperty("--nav-font-weight", navbarTitleWeight);
      fontWeightNav.value = navbarTitleWeight;
    }
  }

  // #region MenuAlign
  function menuAlignRight() {
    navbarNav.classList.remove("mr-auto");
    navbarNav.classList.add("ml-auto");
    navPositionSpan.innerText = "right";
  }
  function menuAlignLeft() {
    navbarNav.classList.remove("ml-auto");
    navbarNav.classList.add("mr-auto");
    navPositionSpan.innerText = "left";
  }

  navPositionSwitch.addEventListener("change", function(event) {
    if (navPositionSwitch.checked == false) {
      menuAlignLeft();
    } else {
      menuAlignRight();
    }
  });

  function menuAlign() {
    if (!navPositionLock.checked) {
      var navAlign = getRandomInt(2);
      if (navAlign === 0) {
        navPositionSwitch.checked = true;
        menuAlignRight();
      }
      else {
        navPositionSwitch.checked = false;
        menuAlignLeft();
      }
    }
  }

  // #endregion MenuAlign

  function changeNavbarPadding() {
    var navbarPaddingX = getRandomRangeInt(0, 31);
    var navbarPaddingY = getRandomRangeInt(0, 21);
    root.style.setProperty("--navbar-padding-x", navbarPaddingX + "px");
    root.style.setProperty("--navbar-padding-y", navbarPaddingY + "px");
  }

  function changeMenu() {
    menuAlign();
    changeNavbarTitleWeight();
    changeNavbarPadding();
  }

  // #endregion Menu

  // #region Header
  function changeHeaderHeight() {
    var headerHeight = getRandomRangeInt(65, 81);
    root.style.setProperty("--header-height", headerHeight + "vh");
  }

  function changeHeaderTitleSize() {
    var headerTitleSize = (getRandomRangeInt(375, 450) / 100).toFixed(3);
    root.style.setProperty("--header-title-size", headerTitleSize + "em");
  }

  function changeHeaderTitleWeight() {
    if (!weightHeaderLock.checked) {
      var headerTitleWeight = getRandomRangeInt(1, 10) * 100;
      root.style.setProperty("--header-title-weight", headerTitleWeight);
      fontWeightHeader.value = headerTitleWeight;
    }
  }

  function changeHeaderTitle() {
    changeHeaderTitleSize();
    changeHeaderTitleWeight();
  }

  function changeHeader() {
    changeHeaderHeight();
    changeHeaderTitle();
  }

  // #endregion Header

  function changeAllStyles() {
    changeColors();

    changeMenu();
    changeSectionTitle();
    changeHeader();

    changeUnderline();
  }

  changer.addEventListener("click", function() {
    changeAllStyles();
  });

});
