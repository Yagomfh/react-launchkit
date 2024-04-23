import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { EmailLoginForm } from '../src/index';

describe('EmailLogin', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <EmailLoginForm
        buttonLabel="Submit"
        emailLabel="Email"
        passwordLabel="Password"
        onSubmit={async (values) => console.log(values)}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
