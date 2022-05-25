// import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
// import { render, screen } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import { store } from './app/store';
// import App from './App';

// test('renders learn react link', () => {
//   render(
//     <BrowserRouter>
//       <Provider store={store}>
//         <App />
//       </Provider>
//     </BrowserRouter>
//   );

//   expect(screen.getByText(/reddit pocket/i)).toBeInTheDocument();
// });

/*
Think of a test case workflow for a manual tester and try to make each of your 
test cases include all parts to that workflow.
This often results in multiple actions and assertions which is fine.
Avoid nesting many "describes" and "it" blocks, sharing variables between tests
and mocking too much stuff. That approach was useful when test runners could not
provide much information when tests failed, so it was hard to locate what was
failing without well structured test blocks. But now with Jest that's not an issue
anymore since the error messages are very descriptive.
The idea here is to have simple test blocks that are independent, test the 
application like a user would and make as many assertions as necessary to mimick
the way a user would interact with the app.
*/
