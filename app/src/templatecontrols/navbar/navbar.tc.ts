import {controls, events, register, ui, web} from 'platypus';
import BaseViewControl from '../../viewcontrols/base/base.vc';
import HomeViewControl from '../../viewcontrols/home/home.vc';
import AboutViewControl from '../../viewcontrols/about/about.vc';
import ConnectViewControl from '../../viewcontrols/connect/connect.vc';
import PortfolioViewControl from '../../viewcontrols/portfolio/portfolio.vc';
import {DrawerController} from 'platypusui';

export default class NavbarTemplateControl extends ui.TemplateControl {
    templateString: string = require('./navbar.tc.html');
    drawerController: controls.INamedElement<HTMLDivElement, DrawerController>;

    context: any = {
        showNavbar: true,
        homeView: HomeViewControl,
        aboutView: AboutViewControl,
        connectView: ConnectViewControl,
        portfolioView: PortfolioViewControl
    }


    initialize(): void {
        this.on('navigated', (ev: events.DispatchEvent, utils: web.UrlUtils) => {
            this.drawerController.control.close();
            if (utils.pathname.indexOf('/portfolio') === 0) {
                this.context.currentView = 'Portfolio'
            } else if (utils.pathname.indexOf('/about') === 0) {
                this.context.currentView = 'About'
            } else if (utils.pathname.indexOf('/connect') === 0) {
                this.context.currentView = 'Connect'
            } else {
                this.context.currentView = 'Home'
            }
        });
    }
}

register.control('navbar', NavbarTemplateControl);