//1.创建redcer
const initialState = {
    counter: 0
}
function reducer(state = initialState, action) {
    switch (action.type) {
        case "INCREAME":
            return { ...state, counter: state.counter + 1 };
        case "DECREAME":
            return { ...state, counter: state.counter - 1 };
        case "ADD_NUMBER":
            return { ...state, counter: state.counter + action.num };
        case "DES_NUMBER":
            return { ...state, counter: state.counter - action.num };
        default:
            return state
    }

}

//2.创建action
const action1 = { type: "INCREAME" };
const action2 = { type: "DECREAME" };
const action3 = { type: "ADD_NUMBER", num: 5 };
const action4 = { type: "DES_NUMBER", num: 12 };


//3.store
import redux from 'redux'

const store = redux.createStore(reducer)

store.subscribe(() => {
    console.log(store.getState().counter)
})
store.dispatch(action1);
store.dispatch(action2);
store.dispatch(action3);
store.dispatch(action4)