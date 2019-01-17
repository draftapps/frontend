/*
 *
 * LoginPage actions
 *
 */

import { AUTHENTICATION } from './constants';

export function login(credentials) {
  console.log({ credentials });
  return {
    type: AUTHENTICATION.LOGIN_REQUEST,
  };
}
