window.onload = () => {
  tabEvent.init();
  // owlCarousel.init();
  materialIo.init()
  menu.init()
  tabExpand.init()
}

const materialIo = {
  init: function() {
    this.initButton()
    this.initTextField()
    this.initCheckboxes()
    this.initLists()
  },
  initButton: function() {
    const MDCRipple = mdc.ripple.MDCRipple
    const buttons = document.querySelectorAll('.mdc-button')
    buttons.forEach((item, index) => {
      const button = new MDCRipple(item)
    })
  },
  initTextField: function() {
    const MDCTextField = mdc.textField.MDCTextField
    const textFields = document.querySelectorAll('.mdc-text-field')
    textFields.forEach((item, index) => {
      const textField = new MDCTextField(item)
    })
  },
  initCheckboxes: function() {
    const MDCCheckbox = mdc.checkbox.MDCCheckbox
    const checkboxesField = document.querySelectorAll('.mdc-checkbox')
    checkboxesField.forEach((item, index) => {
      const checkboxField = new MDCCheckbox(item)
    })
  },
  initLists: function() {
    const MDCList = mdc.list.MDCList
    const MDCRipple = mdc.ripple.MDCRipple
    const lists = document.querySelectorAll('.mdc-list')
    lists.forEach((item, index) => {
      const list = new MDCList(item)
      const listItemRipples = list.listElements.map((listItemEl) => new MDCRipple(listItemEl))
    })
    
  }
}

const menu = {
  init: function() {
    this.expandMenu()
    this.expandSubMenu()
  },
  expandMenu: function() {
    const btnMenu = document.querySelector('header .header-btn-menu')
    const menuWrapper = document.querySelector('.app-menu-wrapper')
    if (btnMenu && menu) {
      const menuOverlay = menuWrapper.querySelector('.menu-overlay')
      btnMenu.addEventListener('click', () => {
        menuWrapper.classList.add('active')
      })
      menuOverlay.addEventListener('click', () => {
        menuWrapper.classList.remove('active')
      })
    }
  },
  expandSubMenu: function() {
    const lists = document.querySelectorAll('.app-menu .mdc-list .mdc-list-item')
    lists.forEach((item, index) => item.addEventListener('click', () => {
      const dataSubMenu = item.dataset.submenu
      if (dataSubMenu) {
        const subMenu = document.querySelector(`.app-menu .mdc-list #${dataSubMenu}`)
        subMenu.classList.toggle('active')
      }
    }))
  },
}

const tabExpand = {
  init: function() {
    this.config()
  },
  config: function() {
    const main = document.querySelectorAll('.tab-expand-group')
    main.forEach((item) => {
      let tabIndex = 0
      const tabExpandNext = item.querySelectorAll('.tab-expand-click-next')
      const tabExpandPrev = item.querySelectorAll('.tab-expand-click-prev')
      const tabExpandSelf = item.querySelectorAll('.tab-expand-click-self')
      const tabExpands = item.querySelectorAll('.tab-expand-item')
      const showTabStep = () => {
        tabExpands.forEach(i => i.classList.remove('active'))
        tabExpands[tabIndex].classList.add('active')
      }
      tabExpandNext.forEach((event, eventClick) => event.addEventListener('click', (e) => {
        e.preventDefault()
        tabIndex++
        showTabStep()
      }))
      tabExpandPrev.forEach((event, eventClick) => event.addEventListener('click', (e) => {
        e.preventDefault()
        tabIndex--
        showTabStep()
      }))
      tabExpandSelf.forEach((event, eventClick) => event.addEventListener('click', (e) => {
        tabIndex = eventClick
        showTabStep()
      }))
      showTabStep()
    })
  },
}

const owlCarousel = {
  init: function () {
    this.setupYourCarousel();
  },
  setupYourCarousel: function () {
    var $owl = $("#banner-carousel").owlCarousel({
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 1,
        },
      },
      loop: true,
      rewind: false,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      smartSpeed: 600,
      mouseDrag: true,
      nav: true,
      dots: true,
      navText: [
        "<img src='./assets/icons/icon-angle-left-blue.svg'>",
        "<img src='./assets/icons/icon-angle-right-blue.svg'>",
      ],
    });
    $owl.trigger("refresh.owl.carousel");
  },
};

const tabEvent = {
  init: function () {
    this.setupTabEvent();
  },
  setupTabEvent: function () {
    const main = document.querySelectorAll(".tab-wrapper");
    if (main.length !== 0) {
      main.forEach((mainTarget) => {
        const tabClick = mainTarget.querySelectorAll(".tabs-group .tab-item");
        const tabMain = mainTarget.querySelectorAll(
          ".tabs-main-group .tab-item"
        );

        tabClick.forEach((item, index) =>
          item.addEventListener("click", () => {
            tabClick.forEach((i) => i.classList.remove("active"));
            tabMain.forEach((i) => i.classList.remove("active"));

            tabClick[index].classList.add("active");
            tabMain[index].classList.add("active");
          })
        );
      });
    }
  },
};