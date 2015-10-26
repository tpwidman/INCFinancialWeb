import {controls, events, register, ui} from 'platypus';
import BaseViewControl from '../../viewcontrols/base/base.vc';
import HomeViewControl from '../../viewcontrols/home/home.vc';
import AboutViewControl from '../../viewcontrols/about/about.vc';
import ConnectViewControl from '../../viewcontrols/connect/connect.vc';
import PortfolioViewControl from '../../viewcontrols/portfolio/portfolio.vc';

export default class NavbarTemplateControl extends ui.TemplateControl {
    templateString: string = require('./navbar.tc.html');
    navbar: controls.INamedElement<HTMLDivElement, any>;
    context: any = {
        showNavbar: true,
        homeView: HomeViewControl,
        aboutView: AboutViewControl,
        connectView: ConnectViewControl,
        portfolioView: PortfolioViewControl
    }

    // loaded() : void {
    //     let scrollNav: HTMLElement = document.body,
    //        navbar = this.navbar.element;

    //     document.addEventListener('scroll', (e) => {
    //         var elem: HTMLElement = <HTMLElement>e.target;
    //         if (document.body.scrollTop >= 25) {
    //             console.log('adding class');
    //            document.body.;
    //         } else {
    //           ('background: transparent');
    //         }
    //     });
    //}
}

register.control('navbar', NavbarTemplateControl);