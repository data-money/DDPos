import * as types from './action/types';

const INIT_STATE = {
  list: [
    {
      pid: 0,
      scribe: '藍珠x8、白珠x10、紅珠x30、大珠x100、小珠x500',
      date: '2017-08-08',
    }
  ],
  single: {}
};

export default (state = INIT_STATE, action) => {
  switch(action.type) {
    case types.GET_LIST:
      return state;


    default:
      return state;
  }

}
