import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './routing';

export default angular.module('homepage', [uirouter])
    .config(routing)
    .name;
