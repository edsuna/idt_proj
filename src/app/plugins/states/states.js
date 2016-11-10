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

export default class States {
    constructor($http) {
        this.$http = $http;
    }

    getStates() {
        return this.$http({
            method: 'GET',
            url: 'http://pos.idtretailsolutions.com/countytest/states'
        });
    }
}
