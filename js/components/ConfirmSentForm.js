class ConfirmSentForm {
    getElements() {
        const thisConfirmSentForm = this;
        thisConfirmSentForm.confirmSent = document.querySelector(".confirm-sent-form");
        thisConfirmSentForm.crossIcon = thisConfirmSentForm.confirmSent.querySelector(".fas");
        thisConfirmSentForm.splash = document.querySelector(".splash");
        thisConfirmSentForm.container = document.querySelectorAll(".container");

    }

    addBlur() {
        const thisConfirmSentForm = this;
        thisConfirmSentForm.splash.classList.add("blur");
        for (let item of thisConfirmSentForm.container) {
            item.classList.add("blur");
        }

    }

    removeBlur() {
        const thisConfirmSentForm = this;
        thisConfirmSentForm.splash.classList.remove("blur");
        for (let item of thisConfirmSentForm.container) {
            item.classList.remove("blur");
        }
    }
    closedPopUp() {
        const thisConfirmSentForm = this;
        thisConfirmSentForm.confirmSent.classList.remove("active");
    }

    popUp() {
        const thisConfirmSentForm = this;
        window.scrollTo(0, 0);
        thisConfirmSentForm.confirmSent.classList.add("active");
        window.location = '#form-been-sent';
        thisConfirmSentForm.addBlur();
        window.addEventListener("click", function () {
            thisConfirmSentForm.removeBlur();
            thisConfirmSentForm.closedPopUp();
        });
        thisConfirmSentForm.crossIcon.addEventListener("click", function () {
            thisConfirmSentForm.closedPopUp();
        });

    }



    constructor() {
        const thisConfirmSentForm = this;
        thisConfirmSentForm.getElements();
        thisConfirmSentForm.popUp();


    }
}
export default ConfirmSentForm;