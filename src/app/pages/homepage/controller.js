export default class HomepageController {

    constructor(statesInfo) {
        this.statesDone = false;
        
        statesInfo.getStates().then((ret) => {
            this.statesList = ret.data.data;
            this.statesDone = true;
        });
    }

}

HomepageController.$inject = ['statesInfo'];
