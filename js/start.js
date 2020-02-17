import ValidateForm from './components/ValidateForm.js';
import FixedMenu from './components/FixedMenu.js';
const start = {
    init: function () {
        new ValidateForm();
        new FixedMenu();
    },
}

start.init();
