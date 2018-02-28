import $ from 'jquery'
;('use strict')

const createAlert = (type, message) => {
  const className = `elr-alert elr-${type}-alert js-dismissible-alert`
  return $('<div></div>', {
    html: `<p class="elr-alert-message">${message}</p>`,
    class: className
  })
}

const createCloseButton = () => {
  return $('<button></button>', {
    text: 'x',
    class: 'close js-close-alert'
  })
}

export default {
  showAlert(type, message, $holder) {
    const $newAlert = createAlert(type, message)
    const $close = createCloseButton()

    $close.prependTo($newAlert)

    const $alert = $newAlert.prependTo($holder)

    return $alert
  },
  init() {
    $('body').on('click', `.js-close-alert`, function(e) {
      e.preventDefault()
      $(this)
        .parent()
        .fadeOut(300, function() {
          $(this).remove()
        })
    })
  }
}
