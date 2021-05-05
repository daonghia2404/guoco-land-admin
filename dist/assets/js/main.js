window.onload = () => {
  tabEvent.init();
  // owlCarousel.init();
  console.log(mdc)
  materialIo.init()
  menu.init()
  tabExpand.init()
  checkboxGroup.init()
  dateRangePickerJs.init()
  chart.init()
}

const materialIo = {
  init: function () {
    this.initButton()
    this.initTextField()
    this.initCheckboxes()
    this.initLists()
    this.initSelect()
    this.initTooltip()
    // this.initTable()
  },
  initTooltip: function() {
    const MDCTooltip = mdc.tooltip.MDCTooltip
    const tooltips = document.querySelectorAll('.mdc-tooltip')
    tooltips.forEach((item, index) => {
      const tooltip = new MDCTooltip(item)
    })
  },
  initTable: function() {
    const MDCDataTable = mdc.dataTable.MDCDataTable
    const tables = document.querySelectorAll('.mdc-data-table')
    tables.forEach((item, index) => {
      const table = new MDCDataTable(item)
    })
  },
  initSelect: function() {
    const MDCSelect = mdc.select.MDCSelect
    const selects = document.querySelectorAll('.mdc-select')
    selects.forEach((item, index) => {
      const select = new MDCSelect(item)
    })
  },
  initButton: function () {
    const MDCRipple = mdc.ripple.MDCRipple
    const buttons = document.querySelectorAll('.mdc-button')
    buttons.forEach((item, index) => {
      const button = new MDCRipple(item)
    })
  },
  initTextField: function () {
    const MDCTextField = mdc.textField.MDCTextField
    const textFields = document.querySelectorAll('.mdc-text-field')
    textFields.forEach((item, index) => {
      const textField = new MDCTextField(item)
    })
  },
  initCheckboxes: function () {
    const MDCCheckbox = mdc.checkbox.MDCCheckbox
    const checkboxesField = document.querySelectorAll('.mdc-checkbox')
    checkboxesField.forEach((item, index) => {
      const checkboxField = new MDCCheckbox(item)
    })
  },
  initLists: function () {
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
  init: function () {
    this.expandMenu()
    this.expandSubMenu()
  },
  expandMenu: function () {
    const btnMenu = document.querySelector('header .header-btn-menu')
    const menuWrapper = document.querySelector('.app-menu-wrapper')
    if (btnMenu && menu) {
      const menuOverlay = menuWrapper.querySelector('.menu-overlay')
      btnMenu.addEventListener('click', () => {
        menuWrapper.classList.toggle('active')
        btnMenu.classList.toggle('active')
      })
      menuOverlay.addEventListener('click', () => {
        menuWrapper.classList.remove('active')
        btnMenu.classList.remove('active')
      })
    }
  },
  expandSubMenu: function () {
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
  init: function () {
    this.config()
  },
  config: function () {
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

const chart = {
  init: function () {
    this.configChartPrivileges()
    this.configChartUser()
  },
  configChartPrivileges: function () {
    const targetChart = document.querySelector('#chartPrivileges')
    if (targetChart) {
      const ctx = targetChart.getContext("2d")
      const labels = ['10/20', '11/20', '12/20', '01/21', '02/21']
      const gradient = ctx.createLinearGradient(0, 0, 0, 400);
      gradient.addColorStop(0, '#91783E');
      gradient.addColorStop(1, '#bea66f4c')

      const data = {
        labels: labels,
        datasets: [{
          data: [0, 5000, 2500, 7500, 10000],
          fill: true,
          backgroundColor: gradient,
          borderColor: '#91783E',
          borderWidth: 1,
          tension: 0.4
        }]
      };
      const config = {
        type: 'line',
        data: data,
        options: {
          plugins: {
            legend: {
              display: false,
            },
          },
          elements: {
            point: {
              radius: 0
            }
          },
          responsive: true,
          scales: {
            x: {
              grid: {
                borderColor: 'rgba(0,0,0,0.5)',
                display: false,
              }
            },
            y: {
              grid: {
                borderColor: 'rgba(0,0,0,0.5)',
                display: false,
              },
              ticks: {
                stepSize: 5000,
              },
            },
          },
        },
      };
      const myChart = new Chart(targetChart, config)
    }
  },
  configChartUser: function () {
    const targetChart = document.querySelector('#chartUser')
    if (targetChart) {
      const ctx = targetChart.getContext("2d")
      const labels = ['10/20', '11/20', '12/20', '01/21', '02/21']
      const gradient = ctx.createLinearGradient(0, 0, 0, 400);
      gradient.addColorStop(0, '#91783E');
      gradient.addColorStop(1, '#bea66f4c')

      const data = {
        labels: labels,
        datasets: [{
          data: [0, 2000, 3500, 6000, 10000],
          fill: true,
          backgroundColor: gradient,
          borderColor: '#91783E',
          borderWidth: 1,
          tension: 0.4
        }]
      };
      const config = {
        type: 'line',
        data: data,
        options: {
          plugins: {
            legend: {
              display: false,
            },
          },
          elements: {
            point: {
              radius: 0
            }
          },
          responsive: true,
          scales: {
            x: {
              grid: {
                borderColor: 'rgba(0,0,0,0.5)',
                display: false,
              }
            },
            y: {
              grid: {
                borderColor: 'rgba(0,0,0,0.5)',
                display: false,
              },
              ticks: {
                stepSize: 5000,
              },
            },
          },
        },
      };
      const myChart = new Chart(targetChart, config)
    }
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


const checkboxGroup = {
  init: function() {
    this.config()
    this.enableNotification()
  },
  config: function() {
    const mains = document.querySelectorAll('.checkboxes-group-wrapper')
    mains.forEach((main) => {
      const checkboxParent = main.querySelector('.checkbox-parent input[type="checkbox"]')
      const checkboxChild = main.querySelectorAll('.checkbox-child input[type="checkbox"]')

      const isCheckAll = () => {
        let isCheckAll = true
        checkboxChild.forEach((child) => {
          if (!child.checked) isCheckAll = false
        })
        return isCheckAll
      }

      checkboxParent.addEventListener('change', (e) => {
        const value = e.target.checked
        checkboxChild.forEach((child) => {
          child.checked = value
        })
      })

      checkboxChild.forEach(child => child.addEventListener('change', () => {
        checkboxParent.checked = isCheckAll()
      }))
    })
  },
  enableNotification: function() {
    const main = document.querySelector('.js-enable-notification')
    if (main) {
      const checkboxEnable = main.querySelector('.mdc-checkbox-wrapper input[type="checkbox"]')
      const textField = main.querySelector('.mdc-text-field')
      const selectField = main.querySelector('.mdc-select')
      checkboxEnable.addEventListener('change', (e) => {
        const value = e.target.checked
        if (value) {
          textField.classList.add('mdc-text-field--disabled')
          textField.querySelector('input[type="text"]').disabled = true
          selectField.classList.add('mdc-select--disabled')
        } else {
          textField.classList.remove('mdc-text-field--disabled')
          textField.querySelector('input[type="text"]').disabled = false
          selectField.classList.remove('mdc-select--disabled')
        }
      })
    }
  }
}

const dateRangePickerJs = {
  init: function() {
    this.config()
  },
  config: function() {
    const options = {
      startDate: moment().startOf('hour'),
      endDate: moment().add(5, 'd'),
      locale: {
        format: 'MMM DD'
      }
    }
    $('input[name="daterange"]').daterangepicker(options)
  }
}