// ------ test -------
// import { setupServer } from 'msw/node';

// ------ web -------
import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';

// ------ test -------
// export const server = setupServer(...handlers);

// ------ web -------
export const server = setupWorker(...handlers);