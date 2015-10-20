<<<<<<< HEAD
import {register} from 'platypus';
=======
import {register, ui} from 'platypus';
>>>>>>> a12dddb6ecd40c2bc8e23f31527f5a0326cde360
import BaseViewControl from '../base/base.vc';

export default class ConnectViewControl extends BaseViewControl {
    templateString: string = require('./connect.vc.html');

    context: any = {};
}

register.viewControl('connect-vc', ConnectViewControl);
