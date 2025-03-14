import { configExample1 } from './props/example1';
import { configExample2 } from './props/example2';
import { configExample3 } from './props/example3';

export const pagesConfig = {
  'example-1': {
    onRender: configExample1,
  },
  'example-2': {
    onRender: configExample2,
  },
  'example-3': {
    onRender: configExample3,
  },
};
