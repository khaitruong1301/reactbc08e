import {combineReducers, createStore} from 'redux';

import { gioHangReducer } from './reducers/gioHangReducer';


//state trong redux là reducer
const rootReducer = combineReducers({
    //Các state ứng dụng sẽ được lưu tại đây
    gioHangReducer: gioHangReducer ,

    // reducerB: (state='', action) => {
    //     console.log('action2',action);

    //     return state;
    // },

    // reducerC: (state='', action) => {
    //     console.log('action3',action);

    //     return state;
    // }

});



export const store = createStore(rootReducer);




// const objectA = {};

// let objectB = [...objectB];