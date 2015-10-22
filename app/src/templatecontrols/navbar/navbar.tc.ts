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
    };
  

    
   var el = document.getElementsByTagName('body')[0]

    function scroll() {
    };
}


register.control('navbar', NavbarTemplateControl);
