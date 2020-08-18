'use strict';

(function () {
  var workingGroupInputsWrapper = document.querySelector('.working-group-form__textinputs-wrapper');
  var workingGroupInputs = workingGroupInputsWrapper.querySelectorAll('.working-group-form input');
  var sideErrorAlert = document.querySelector('.side-error-warning');


document.addEventListener("DOMContentLoaded", function (evt) {
  for (var i = 0; i < workingGroupInputs.length; i++) {
    if (workingGroupInputs[i].value !== '') {
      evt.preventDefault();
      sideErrorAlert.classList.remove("side-error-warning--hidden");
      sideErrorAlert.classList.add("side-error-warning--display");
    }
  }
});
})()
