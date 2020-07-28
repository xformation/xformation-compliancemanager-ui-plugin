import init from '../domain/DashboardApp';

export class Dashboard {
    static templateUrl = '/partials/compliance.html';
    constructor() {
        init();
    }
}
