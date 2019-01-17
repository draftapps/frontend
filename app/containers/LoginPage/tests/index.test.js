import React from 'react';
import { mount } from 'enzyme';
import { browserHistory } from 'react-router-dom';
import { Provider } from 'react-redux';

import LoginPage from 'containers/LoginPage';

import configureStore from '../../../configureStore';

describe('<LoginPage />', () => {
  let mountedLoginPage;

  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  beforeEach(() => {
    mountedLoginPage = mount(
      <Provider store={store}>
        <LoginPage />
      </Provider>,
    );
  });

  it('should render without crashing', () => {
    mount(
      <Provider store={store}>
        <LoginPage />
      </Provider>,
    );
  });

  it('should renders its children ', () => {
    const children = mountedLoginPage.find('form.login-form');
    expect(children.length).toBe(1);
  });
});
