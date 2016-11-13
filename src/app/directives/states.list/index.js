import angular from 'angular';

import StatesListDirective from './states.list';
import statesInfo from '../../plugins/states';

export default angular.module('states.list', [statesInfo])
    .directive('statesList', StatesListDirective)
    .name;
