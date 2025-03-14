import { configExample1 } from './props/example1';
import { configExample2 } from './props/example2';
import { configExample3 } from './props/example3';
import { configExample4 } from './props/example4';
import { configExample5 } from './props/example5';

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
  'example-4': {
    onRender: configExample4,
  },
  'example-5': {
    onRender: configExample5,
  },
};
