export default class HomepageController {

    constructor(statesInfo) {
        this.selectedState = null;
        this.loaded = false;
        this.statesInfo = statesInfo;
        
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

HomepageController.$inject = ['statesInfo'];
