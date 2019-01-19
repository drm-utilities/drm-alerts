import $ from 'jquery';
import alerts from '../alerts.ts';
import fs from 'fs';
import path from 'path';

const alertHtml = path.join(__dirname, '..', 'alerts.html');
const html = fs.readFileSync(alertHtml).toString();

beforeEach(() => {
  document.body.innerHTML = html;
  alerts.init();
});

describe('init', () => {
  it('should remove alert when close is clicked', done => {
    expect($('.js-dismissible-alert').length).toBe(1);

    $('.js-dismissible-alert')
      .find('.js-close-alert')
      .click();

    setTimeout(() => {
      expect($('.js-dismissible-alert').length).toBe(0);
      done();
    }, 1000);
  });
});
describe('showAlert', () => {
  it('should display an alert', () => {
    const $alert = alerts.showAlert(
      'danger',
      'this is a test',
      $('.elr-alert-holder')
    );

    expect($alert.html()).toMatchSnapshot();
  });
  it('should have a message', () => {
    const message = 'danger! danger!! danger!!!';
    alerts.showAlert('danger', message, $('.elr-alert-holder'));

    expect($('.elr-alert-danger p').text()).toBe(message);
  });
  it('should have a close button', () => {
    alerts.showAlert('danger', 'a message', $('.elr-alert-holder'));
    expect($('.elr-alert-danger').find('button.close').length).toBe(1);
  });
  it('should remove alert when close is clicked', done => {
    alerts.showAlert('danger', 'a message', $('.elr-alert-holder'));

    $('.elr-alert-danger')
      .find('.js-close-alert')
      .click();

    setTimeout(() => {
      expect($('.elr-alert-danger').length).toBe(0);
      done();
    }, 1000);
  });
});
