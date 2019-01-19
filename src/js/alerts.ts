import * as $ from 'jquery';

const createAlert = (type: string, message: string): JQuery => {
  const className = `elr-alert elr-alert-${type} js-dismissible-alert`;
  return $('<div></div>', {
    html: `<p class="elr-alert-message">${message}</p>`,
    class: className
  });
};

const createCloseButton = (): JQuery => {
  return $('<button></button>', {
    text: 'x',
    class: 'close js-close-alert'
  });
};

export default {
  showAlert(type: string, message: string, $holder: JQuery): JQuery {
    const $newAlert = createAlert(type, message);
    const $close = createCloseButton();

    $close.prependTo($newAlert);

    const $alert = $newAlert.prependTo($holder);

    return $alert;
  },
  init() {
    $('body').on('click', `.js-close-alert`, function(e: Event) {
      e.preventDefault();
      $(this)
        .parent()
        .fadeOut(300, function() {
          $(this).remove();
        });
    });
  }
};
