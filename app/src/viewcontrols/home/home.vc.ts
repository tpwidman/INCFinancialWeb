import {register, ui} from 'platypus';
import BaseViewControl from '../base/base.vc';
import ConnectViewControl from '../connect/connect.vc';

export default class HomeViewControl extends BaseViewControl {
    templateString: string = require('./home.vc.html');

    context: any = {
        showCreate: false,
        showGrow: false,
        showKeep: false
    };

    expandCreate() {
        this.context.showCreate = true
    }
    expandGrow() {
        this.context.showGrow = true
    }
    expandKeep() {
        this.context.showKeep = true
    }
    scrollToTop() : void {
        
    }
    collapseCreate() {
        if (this.context.showCreate = true) {
            this.context.showCreate = false
        }
    }
    collapseGrow() {
        if (this.context.showGrow = true) {
            this.context.showGrow = false
        }
    }
    collapseKeep() {
        if(this.context.showKeep = true) {
            this.context.showKeep = false
        }
    }
}

register.viewControl('home-vc', HomeViewControl);
