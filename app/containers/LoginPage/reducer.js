/*
 *
 * LoginPage reducer
 *
 */

import { fromJS } from 'immutable';

import { AUTHENTICATION } from './constants';
import { retrieveFromLocalStorage } from '../../utils/localStorage';

export const initialState = fromJS({
  isAuthenticated: !!retrieveFromLocalStorage('xSessionToken'),
});

function loginPageReducer(state = initialState, action) {
  switch (action.type) {
    case AUTHENTICATION.LOGIN_REQUEST:
      return state.set('isAuthenticated', false);
    default:
      return state;
  }
}

export default loginPageReducer;
