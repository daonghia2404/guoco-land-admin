window.onload = () => {
  tabEvent.init();
  // owlCarousel.init();
  console.log(mdc)
  formValidationJs.init()
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
      const currentInput = item.querySelector('.mdc-select-value')
      const listMenu = item.querySelectorAll('.mdc-select__menu .mdc-list-item')
      listMenu.forEach((option, indexOption) => option.addEventListener('click', () => {
        const value = option.querySelector('.mdc-list-item__text')?.textContent
        currentInput.value = value
        currentInput.setAttribute('value', value)
      }))
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
        const isValid = event.dataset.valid
        if (isValid === 'true') {
          tabIndex++
          showTabStep()
        } else {
          e.preventDefault()
        }
      }))
      tabExpandPrev.forEach((event, eventClick) => event.addEventListener('click', (e) => {
        e.preventDefault()
        tabIndex--
        showTabStep()
      }))
      // tabExpandSelf.forEach((event, eventClick) => event.addEventListener('click', (e) => {
      //   tabIndex = eventClick
      //   showTabStep()
      // }))
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
          pointBackgroundColor: 'transparent',
          pointBorderColor: 'transparent',
          pointHoverRadius: 30,
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
              radius: 30
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
          pointBackgroundColor: 'transparent',
          pointBorderColor: 'transparent',
          pointHoverRadius: 30,
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
              radius: 30
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

const formValidationJs = {
  init: function() {
    this.config()
  },
  validationChecked: function(values) {
    let isChecked = false
    values.forEach((item) => { if (item.checked) isChecked = true })
    return isChecked
  },
  validationRequired: function(value) {
    if (typeof value === 'number') {
      return value > 0
    } else {
      return value.trim().length > 0
    }
  },
  validationEmail: function(value) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(value).toLowerCase())
  },
  config: function() {
    const mains = document.querySelectorAll('.form-validation')
    const formSaveBtn = document.querySelector('.form-save-btn')
    mains.forEach((main, indexMain) => {
      let isError = false
      const formInputValidation = main.querySelectorAll('.form-input-validation')
      const formTextareaValidation = main.querySelectorAll('.form-textarea-validation')
      const formSelectValidation = main.querySelectorAll('.form-select-validation')
      const formCheckboxValidation = main.querySelectorAll('.form-checkbox-group-validation')
      const formUploadValidation = main.querySelectorAll('.form-upload-validation')
      const formSubmitValidation = main.querySelectorAll('.form-submit-validation')

      function returnMessage(target, type, message) {
        target.innerHTML = ''
        target.className = 'form-message'
        if (type === 'success') {
          target.innerHTML = message
          target.classList.add('success')
        }
        if (type === 'error') {
          target.innerHTML = message
          isError = true
          target.classList.add('error')
        }
      }

      const processError = (item, value) => {
        const name = item.dataset.name
        const rules = item.dataset.rules.split(',')
        const message = item.querySelector('.form-message')
        let isFormError = false
  
        if (rules.includes('required') && !this.validationRequired(value)) {
          isFormError = true
          returnMessage(message, 'error', `${name} is required`)
        }

        if (rules.includes('email') && !this.validationEmail(value)) {
          isFormError = true
          returnMessage(message, 'error', `${name} is invalid`)
        }

        if (rules.includes('checked') && !this.validationChecked(value)) {
          isFormError = true
          returnMessage(message, 'error', `${name} is required checked at least one option`)
        }

        if (!isFormError) {
          returnMessage(message, 'success', ``)
        }
      }

      const clickSubmitBtn = () => {
        formInputValidation.forEach((item, index) => {
          const target = item.querySelector('input')
          processError(item, target.value)
        })

        formSelectValidation.forEach((item, index) => {
          const target = item.querySelector('input')
          processError(item, target.value)
        })

        formTextareaValidation.forEach((item, index) => {
          const target = item.querySelector('textarea')
          processError(item, target.value)
        })

        formUploadValidation.forEach((item, index) => {
          const target = item.querySelector('.upload-wrapper > input[type="file"]')
          processError(item, target.files.length)
        })

        formCheckboxValidation.forEach((group, indexGroup) => {
          const allCheckboxes = group.querySelectorAll('input[type="checkbox"]')
          processError(group, allCheckboxes)
        })
      }

      if (formSaveBtn) {
        formSaveBtn.addEventListener('click', (e) => {
          mains.forEach((item, index) => {
            isError = false
            clickSubmitBtn()
            if (isError) {
              e.preventDefault()
              formSaveBtn.setAttribute('data-valid', false)
              if (formSubmitValidation[index]) {
                formSubmitValidation[index].setAttribute('data-valid', false)
              }
            } else {
              formSaveBtn.setAttribute('data-valid', true)
              if (formSubmitValidation[index]) {
                formSubmitValidation[index].setAttribute('data-valid', true)
              }
            }
          })
        })
      }

      formSubmitValidation.forEach((item, index) => {
        item.addEventListener('click', (e) => {
          e.preventDefault()
          isError = false
          clickSubmitBtn()
          if (isError) item.setAttribute('data-valid', false)
          else item.setAttribute('data-valid', true)
        })
      })
    })
  }
}