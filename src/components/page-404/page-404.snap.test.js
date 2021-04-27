import React from 'react';
import {render} from '@testing-library/react';
import Page404 from './page-404';

jest.mock(`../header/header`, () => `header`);
jest.mock(`../footer/footer`, () => `footer`);

// test(`Should Page 404 render correctly`, () => {
//   const {container} = render(<Page404 />);
//   expect(container).toMatchSnapshot();
// });

test(`Should Page 404 render correctly`, () => {
  const {getByText} = render(<Page404 />);
  const headerElement = getByText(`Page Not Found`);

  expect(headerElement).toBeInTheDocument();
});
