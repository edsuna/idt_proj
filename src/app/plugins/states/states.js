// export default class States {
//
//     constructor(Restangular) {
//         Restangular.setBaseUrl('http://pos.idtretailsolutions.com/countytest');
//         this.restangular = Restangular;
//     }
//
//     getStates() {
//         return this.restangular.all('states').getList();
//     }
// }
//
// States.$inject = ['Restangular'];

export default class StatesInfo {
    constructor($http) {
        this.$http = $http;
    }

    GetStates() {
        return this.$http({
            method: 'GET',
            url: 'http://pos.idtretailsolutions.com/countytest/states'
        });
    }
    
    GetCounties(url) {
        return this.$http({
            method: 'GET',
            url: url
        });
    }
}

StatesInfo.$inject = ['$http'];
