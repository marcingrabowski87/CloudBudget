import ConfirmSentForm from "./ConfirmSentForm.js";
class ValidateForm {

    getElements() {
        const thisForm = this;
        thisForm.form = document.querySelector(".form");
        thisForm.formTextError = document.querySelectorAll(".form__text-error");

    }
    validateField = target => {
        const thisForm = this;

        if (thisForm.checkIfEmpty(target)) return;
        if (target.type !== "select-one" && target.name !== "Phone Number") {

            thisForm.checkIfOnlyLetters(target);
        }
        if (target.name === "Phone Number") {

            thisForm.checkIfOnlyNumbers(target);

        }
    }

    checkIfEmpty = field => {
        const thisForm = this;
        if (field.type === "select-one") {


            if (thisForm.isEmpty(field.options.selectedIndex)) {
                thisForm.setErrorTitle(field, `${field.name} must be selected`);
                return true;
            }
            else {
                thisForm.removeErrorTitle(field);
                return false;
            }
        }
        else {
            if (thisForm.isEmpty(field.value.trim())) {
                thisForm.setErrorTitle(field, `${field.name} must be filled`);
                return true;
            }
            else {
                thisForm.removeErrorTitle(field);
                return false;
            }
        }

    }
    isEmpty = value => {
        if (typeof value === 'string') {

            if (value === '') return true;
            return false;
        }

        else {
            if (value === 0) return true;
            return false;
        }
    }

    removeErrorTitle = field => {

        if (field.type !== "submit")
            field.nextElementSibling.innerHTML = '';
    }

    setErrorTitle = (field, message) => {
        field.nextElementSibling.textContent = message;
    }
    checkIfOnlyLetters = field => {
        const thisForm = this;
        if (/^[a-zA-Z ]+$/.test(field.value)) {
            thisForm.removeErrorTitle(field);
            return true;
        } else {
            thisForm.setErrorTitle(field, `${field.name} can  contain letters only`);
            return false;
        }
    }
    checkIfOnlyNumbers = field => {
        const thisForm = this;
        if (/^[a-zA-Z ]+$/.test(field.value)) {
            thisForm.setErrorTitle(field, `${field.name} can  contain numbers only`);
            return false;

        } else {

            thisForm.removeErrorTitle(field);
            return true;

        }
    }

    validationFields() {
        const thisForm = this;
        thisForm.form.addEventListener("focusout", function (e) {
            if (e.target.type !== "submit")
                thisForm.validateField(e.target);
        });


        thisForm.form.addEventListener("submit", function (e) {

            e.preventDefault();
            let formFill = [];
            for (let item of thisForm.form) {

                if (item.type !== "submit")

                    thisForm.validateField(item);
            }
            for (let item of thisForm.formTextError) {

                if (item.textContent.length !== 0)
                    formFill.push(false);
            }

            if (formFill.length === 0) {
                /* e.target.submit(); */
                new ConfirmSentForm();
            }

        });
    }
    constructor() {
        const thisForm = this;
        thisForm.getElements();
        thisForm.validationFields();
    }

}

export default ValidateForm;