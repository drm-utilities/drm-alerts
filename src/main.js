import elrUI from 'elr-ui';
const $ = require('jquery');

let ui = elrUI();

const elrAlerts = function({
    speed = 300,
    alertClass = 'js-dismissible-alert'
} = {}) {
    const self = {
        createAlert(type, message) {
            const className = `elr-alert elr-${type}-alert ${alertClass}`;
            return ui.createElement('div', {
                text: message,
                'class': className
            });
        },
        createCloseButton() {
            return ui.createElement('button', {
                text: 'x',
                'class': 'close js-close-alert'
            });
        },
        showAlert(type, message, $holder) {
            const $newAlert = this.createAlert(type, message);
            const $close = this.createCloseButton();

            $newAlert.prependTo($holder);
            $close.prependTo($newAlert);
        }
    };

    $('body').on('click', `.${alertClass} button.js-close-alert`, function(e) {
        e.preventDefault();
        ui.clearElement($(this).parent(), speed);
    });

    return self;
};

export default elrAlerts;