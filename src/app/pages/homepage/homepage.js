
let homepage = () => {
    return {
        template: require('./homepage.html'),
        controller: 'HomepageController',
        controllerAs: 'homepageCtrl'
    }
};

export default homepage;
