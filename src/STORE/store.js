import { makeAutoObservable } from "mobx";

class MainStore {
    counter = 0;
    curtime = ''
    constructor() {
        makeAutoObservable(this);
    }
    increaseCounter = () => {
        this.counter++;
    }
    decrementCounter = () => {
        this.counter > 0 && this.counter--;
    }
    // ===================================================
    updateCurrentTime = () => {
        const today = new Date()
        this.curtime = `${today.getHours()}h: ${today.getMinutes()}m: ${today.getSeconds()}s: ${today.getMilliseconds()}ms`
        console.log('updated')
    }
    cleanUpfunc = () => {
        this.curtime = ''
    }
    // ====================================================
    // currency 
    // inputVal = 0
    // setinputVal = (e) => {
    //     this.inputVal = e.target.value
    // }



}
const store = new MainStore();
export default store;