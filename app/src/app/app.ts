import {App, events, register, routing} from 'platypus';
import HomeViewControl from '../viewcontrols/home/home.vc';
import AboutViewControl from '../viewcontrols/about/about.vc';
import ConnectViewControl from '../viewcontrols/connect/connect.vc';
import PortfolioViewControl from '../viewcontrols/portfolio/portfolio.vc';

export default class MyApp extends App {
    constructor(router: routing.Router) {
        super();

        router.configure([
            { pattern: '', view: HomeViewControl },
            { pattern: '/about', view: AboutViewControl },
            { pattern: '/connect', view: ConnectViewControl },
            { pattern: '/portfolio', view: PortfolioViewControl}
        ]);
    }

    error(ev: events.ErrorEvent<Error>): void {
        console.log(ev.error);
    }
}

register.app('app', MyApp, [
    routing.Router
]);
