const DONE = 'DONE';
const FAILED = 'FAILED';
const REQUEST = 'REQUEST';
const SUCCEED = 'SUCCEED';

/**
 * create action types
 * @param {string} base
 * @return {array} acc
 */
function types(base) {
  return [REQUEST, SUCCEED, FAILED, DONE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {});
}

export const GET_GALLERY = types('GET_GALLERY');
