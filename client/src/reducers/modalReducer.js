import { SHOW_MODAL } from '../constants/index';

const initialState = {
    status: false,
    message: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return action.payload;
    default:
      return state;
  }
}
