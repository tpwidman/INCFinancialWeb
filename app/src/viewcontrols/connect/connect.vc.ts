import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class ConnectViewControl extends BaseViewControl {
    templateString: string = require('./connect.vc.html');

    context: any = {};
}

register.viewControl('connect-vc', ConnectViewControl);
