import { configExample1 } from './props/example1';
import { configExample2 } from './props/example2';

export const pagesConfig = {
  'example-1': {
    onRender: configExample1,
  },
  'example-2': {
    onRender: configExample2,
  },
};
