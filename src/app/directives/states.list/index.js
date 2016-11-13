import angular from 'angular';

import StatesListDirective from './states.list';
import States from '../../plugins/states';

export default angular.module('states.list', [States])
    .directive('statesList', StatesListDirective)
    .name;
