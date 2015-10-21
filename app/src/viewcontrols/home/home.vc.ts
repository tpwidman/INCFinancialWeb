import {register, ui} from 'platypus';
import BaseViewControl from '../base/base.vc';
import ConnectViewControl from '../connect/connect.vc';

export default class HomeViewControl extends BaseViewControl {
    templateString: string = require('./home.vc.html');

    context: any = {};

}

register.viewControl('home-vc', HomeViewControl);
