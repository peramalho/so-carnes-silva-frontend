import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';

const AllTheWrappers = ({ children }) => {
  return (
    <Router>
      <Provider store={store}>{children}</Provider>
    </Router>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheWrappers, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
