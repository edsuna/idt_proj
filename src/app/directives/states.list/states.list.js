export default function StatesListDirective () {
    return {
        template: require('./states.list.html'),
        scope: true,
        controller: StatesListController,
        controllerAs: 'statesListCtrl',
        bindToController: {
            'title': '@',
            'baseId': '@',
        },
    }
}


class StatesListController {
    constructor(statesInfo, $state) {
        this.$state = $state;
        this.statesInfo = statesInfo;
        this.selectedState = null;
        this.loaded = false;
        this.populationMatch = true;

        this.statesInfo.GetStates().then((ret) => {
            this.statesList = ret.data.data;
            this.statesList.map((item) => {
                item.selected = false;
            });
            this.loaded = true;
        });
    }

    ShowStateInfo(numState) {
        this.selectedState = this.statesList[numState];
        this.statesInfo.GetCounties(this.statesList[numState].detail).then((ret) => {
            this.countiesList = ret.data.data;
            var populationTotal = 0;
            this.countiesList.map((item) => {
                populationTotal += item.population;
            });
            this.populationMatch = (this.statesList[numState].population == populationTotal);
        });
    }

    ToggleSelect(numState) {
        this.statesList[numState].selected = !this.statesList[numState].selected;
    }
}

StatesListController.$inject = ['statesInfo', '$state'];
