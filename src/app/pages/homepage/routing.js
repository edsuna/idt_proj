import HomepageController from './controller';

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
    .state('homepage', {
        url: '/',
        template: require('./homepage.html'),
        controller: HomepageController,
        controllerAs: 'hpCtrl'
    });
}
