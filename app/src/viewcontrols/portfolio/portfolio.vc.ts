import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class PortfolioViewControl extends BaseViewControl {
    templateString: string = require('./portfolio.vc.html');

    context: any = {};
}

register.viewControl('portfolio-vc', PortfolioViewControl);
