import {register, ui} from 'platypus';
import BaseViewControl from '../../viewcontrols/base/base.vc';
import HomeViewControl from '../../viewcontrols/home/home.vc';
import AboutViewControl from '../../viewcontrols/about/about.vc';
import ConnectViewControl from '../../viewcontrols/connect/connect.vc';
import PortfolioViewControl from '../../viewcontrols/portfolio/portfolio.vc';

export default class NavbarTemplateControl extends ui.TemplateControl {
    templateString: string = require('./navbar.tc.html');
    context: any = {
        showNavbar: true,
        homeView: HomeViewControl,
        aboutView: AboutViewControl,
        connectView: ConnectViewControl,
        portfolioView: PortfolioViewControl
    }

    onScroll() : void {
        if (document.body.scrollTop > 50) {
            document.getElementById("nav").className = "background-transparent";
        } else {
            document.getElementById("nav").className = "background-opaque";
        }
    }
}

register.control('navbar', NavbarTemplateControl);
