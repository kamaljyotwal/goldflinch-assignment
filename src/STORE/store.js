import { makeAutoObservable } from "mobx";

class MainStore {
    constructor() {
        makeAutoObservable(this);
    }
    //=============================================
    // Home component counter and actions
    counter = 0;
    increaseCounter = () => {
        this.counter++;
    }
    decrementCounter = () => {
        this.counter > 0 && this.counter--;
    }
    // ==============================================
    // timer component state and its functions
    curtime = ''
    updateCurrentTime = () => {
        const today = new Date()
        this.curtime = `${today.getHours()}h: ${today.getMinutes()}m: ${today.getSeconds()}s: ${today.getMilliseconds()}ms`
    }
    cleanUpfunc = () => {
        this.curtime = ''
    }
    // ==============================================
    // Data3 component state, functions
    apidata = [];
    setapidata = (response) => {
        this.apidata = response
    }

    // ==============================================
    // Currency component state and actions
    inputVal = '';
    setinputVal = (e) => {
        this.inputVal = e.target.value
    }
    // ---------
    responseNumFromAPI = 0;
    setresponseNumFromAPI = (value) => {
        this.responseNumFromAPI = value
    }
    // ----------
    resultCurrency = 0;
    setresultCurrency = (a, b) => {
        this.resultCurrency = a * b
    }

}
const store = new MainStore();
export default store;