'use strict';

jest.mock('dom-helpers/util/scrollbarSize', function () {
  return function getScrollbarSize() {
    return 20;
  };
});