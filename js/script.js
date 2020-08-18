'use strict';

(function () {
  var workingGroupForm = document.querySelector('.working-group-form');
  var workingGroupInputsWrapper = workingGroupForm.querySelector('.working-group-form__textinputs-wrapper');

  var workingGroupInputs = workingGroupInputsWrapper.querySelectorAll('.working-group-form input');

  function renderInputsOutline(evt) {
    for (var i = 0; i < workingGroupInputs.length; i++) {
      workingGroupInputs[i].addEventListener('input', onFocusInputErrorOutline);
    }
  }

  function onFocusInputErrorOutline(evt) {
    if (evt.currentTarget.checkValidity() == false) {
      evt.currentTarget.previousSibling.style.color = "red";
      evt.currentTarget.nextSibling.style.display = "block";
      evt.currentTarget.parentElement.style.outline = "2px solid #F5BCBC";
    } else {
      evt.currentTarget.previousSibling.style.color = "#2F80ED";
      evt.currentTarget.nextSibling.style.display = "none";
      evt.currentTarget.parentElement.style.outline = "2px solid #2F80ED";
    }
  }


  renderInputsOutline();
})()
