function hexToHSL(hexValue) {
  // Convert hex to RGB first
  let r = 0, g = 0, b = 0;
  if (hexValue.length == 4) {
    r = "0x" + hexValue[1] + hexValue[1];
    g = "0x" + hexValue[2] + hexValue[2];
    b = "0x" + hexValue[3] + hexValue[3];
  } else if (hexValue.length == 7) {
    r = "0x" + hexValue[1] + hexValue[2];
    g = "0x" + hexValue[3] + hexValue[4];
    b = "0x" + hexValue[5] + hexValue[6];
  }
  
  // Then to HSL
  r /= 255;
  g /= 255;
  b /= 255;
  let cmin = Math.min(r,g,b),
      cmax = Math.max(r,g,b),
      delta = cmax - cmin,
      h = 0,
      s = 0,
      l = 0;

  if (delta == 0) {
    h = 0;
  } else if (cmax == r) {
    h = ((g - b) / delta) % 6;
  } else if (cmax == g) {
    h = (b - r) / delta + 2;
  } else {
    h = (r - g) / delta + 4;
  }

  h = Math.round(h * 60);

  if (h < 0) {
    h += 360;
  }

  l = (cmax + cmin) / 2;
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return {
    hue: h,
    saturation: s,
    lightness: l
  };
}

$(document).ready(function() {

  const changer = document.getElementById("btn-generate");
  var root = document.documentElement;

  var primaryColor = getComputedStyle(root).getPropertyValue("--primary");
  console.log(primaryColor);
  console.log(hexToHSL(primaryColor));

  var primaryHue = hexToHSL(primaryColor).hue;
  var primaryLightness = hexToHSL(primaryColor).lightness;
  var primarySaturation = hexToHSL(primaryColor).saturation;

  var colorInputHue = document.getElementById("color-input-hue");
  var colorSliderHue = document.getElementById("color-slider-hue");
  colorInputHue.value = primaryHue;
  colorSliderHue.value = primaryHue;
  var colorInputLightness = document.getElementById("color-input-lightness");
  var colorSliderLightness = document.getElementById("color-slider-lightness");
  colorInputLightness = primaryLightness;
  colorSliderLightness = primaryLightness;
  var colorInputSaturation = document.getElementById("color-input-saturation");
  var colorSliderSaturation = document.getElementById("color-slider-saturation");
  colorInputSaturation = primarySaturation;
  colorSliderSaturation = primarySaturation;

  // #region LockIcons

  $(".lock-checkbox").on("change", function( event ) {
    this.nextElementSibling.classList.toggle("fa-unlock-alt");
    this.nextElementSibling.classList.toggle("fa-lock");
  });

  // #endregion LockIcons

  // #region NavbarDeclaration

  const navbarNav = document.getElementById("mainUl");
  const navPositionSpan = document.getElementById("menuAlignPosition");
  const navPositionSwitch = document.getElementById("menuAlignSwitch");
  const navPositionLock = document.getElementById("menu-align-lock");

  // #endregion NavbarDeclaration

  const selectFontH = document.getElementById("select-font-h");
  const selectFontNav = document.getElementById("select-font-nav");
  const selectFontP = document.getElementById("select-font-p");

  const fontWeightHeader = document.getElementById("font-weight-header");
  const fontWeightNav = document.getElementById("font-weight-nav");
  const fontWeightSection = document.getElementById("font-weight-section");

  const weightHeaderLock = document.getElementById("weight-header-lock");
  const weightNavLock = document.getElementById("weight-nav-lock");
  const weightSectionLock = document.getElementById("weight-section-lock");

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
    primaryHue = getRandomInt(360);
    primarySaturation = getRandomRangeInt(75, 101);
    primaryLightness = getRandomRangeInt(30, 71);
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
