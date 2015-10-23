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
        if(this.context.showCreate === true) {
            this.context.showCreate = false;
        } else if(this.context.showCreate === false) {
            this.context.showCreate = true;
        }
    }
    expandGrow() {
        if(this.context.showGrow === true) {
            this.context.showGrow = false;
        } else if(this.context.showGrow === false) {
            this.context.showGrow = true;
        }
    }
    expandKeep() {
        if(this.context.showKeep === true) {
            this.context.showKeep = false;
        } else if(this.context.showKeep === false) {
            this.context.showKeep = true;
        }
    }

    collapseCreate() {
        if (this.context.showCreate = true) {
            this.context.showCreate = false;
        }
    }
    collapseGrow() {
        if (this.context.showGrow = true) {
            this.context.showGrow = false;
        }
    }
    collapseKeep() {
        if(this.context.showKeep = true) {
            this.context.showKeep = false
        }
    }
}

register.viewControl('home-vc', HomeViewControl);
