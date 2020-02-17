
class MenuHamburger {

    getElements() {
        const thisMenuHamburger = this;
        thisMenuHamburger.menuList = thisMenuHamburger.menu.querySelector(".splash__menu__list");
        thisMenuHamburger.menuListInsiteItems = thisMenuHamburger.menu.querySelectorAll(".splash__menu__list");
        thisMenuHamburger.hamburger = thisMenuHamburger.menu.querySelector(".menu-hamburger");
        thisMenuHamburger.items = thisMenuHamburger.hamburger.querySelectorAll(".item-hamburger");

    }

    closeMobileMenuAndHamburgerAfterClickLink() {
        const thisMenuHamburger = this;
        for (let itemOfList of thisMenuHamburger.menuListInsiteItems) {
            itemOfList.addEventListener("click", function () {
                thisMenuHamburger.menuList.classList.remove("active");
                for (let item of thisMenuHamburger.items) {
                    item.classList.remove("active");
                }
            });
        }
    }


    mobileMenu() {
        const thisMenuHamburger = this;
        thisMenuHamburger.hamburger.addEventListener("click", function () {
            for (let item of thisMenuHamburger.items) {
                item.classList.toggle("active");
            }

            thisMenuHamburger.menuList.classList.toggle("active");
            thisMenuHamburger.closeMobileMenuAndHamburgerAfterClickLink();

        });
    }

    constructor(menu) {
        const thisMenuHamburger = this;
        thisMenuHamburger.menu = menu;
        thisMenuHamburger.getElements();
        thisMenuHamburger.mobileMenu();

    }
}
export default MenuHamburger;