import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './app.routing.config';

import '../style/app.css';

import underscore from 'underscore';
window.underscore = window._ = underscore;

import 'restangular';
const restangular = 'restangular';

import homepage from './pages/homepage';

import statesInfo from './plugins/states';

import statesList from './directives/states.list';

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [uirouter, restangular, homepage, statesInfo, statesList])
    .config(routing);

export default MODULE_NAME;
