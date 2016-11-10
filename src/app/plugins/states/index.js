import angular from 'angular';

import statesInfo from './states';

export default angular.module('idt.states', [])
    .service('statesInfo', statesInfo)
    .name;
