import MenuHamburger from './MenuHamburger.js';
class FixedMenu {
    getElements() {
        const thisFixedMenu = this;
        thisFixedMenu.distanceMenuFromTop = document.querySelector(".splash__fixed-item");
        new MenuHamburger(thisFixedMenu.distanceMenuFromTop);
    }
    setVariable() {
        const thisFixedMenu = this;
        thisFixedMenu.widthWindow = window.innerWidth;

    }
    getWidthPage() {
        const thisFixedMenu = this;
        window.addEventListener("resize", function () {
            thisFixedMenu.widthWindow = window.innerWidth;
        });
    }

    fixedMenu() {
        const thisFixedMenu = this;

        window.addEventListener("scroll", function () {
            const sticky = thisFixedMenu.distanceMenuFromTop.offsetTop;
            if ((window.pageYOffset && thisFixedMenu.widthWindow > 768) > sticky) {
                thisFixedMenu.distanceMenuFromTop.classList.add('active');
            }
            else
                thisFixedMenu.distanceMenuFromTop.classList.remove('active');
        });
    }
    constructor() {
        const thisFixedMenu = this;
        thisFixedMenu.getElements();
        thisFixedMenu.setVariable();
        thisFixedMenu.fixedMenu();
        thisFixedMenu.getWidthPage();
    }
}
export default FixedMenu;