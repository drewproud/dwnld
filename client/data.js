import R from 'ramda';

function getRandomOrderedListIterator(maxExclusive) {
  const squared = maxExclusive * maxExclusive;
  const list = R.compose(
    R.sortBy(() => Math.random()),
    R.range(0)
  )(squared);

  return function() {
    return list.pop();
  };
}

function getPartialListMap(size, next) {
  return function() {
    return R.compose(
      R.map(next),
      R.range(0)
    )(size);
  };
};

function get2dArray(size) {
  const randomListIterator = getRandomOrderedListIterator(size);
  return R.compose(
    R.map(getPartialListMap(size, randomListIterator)),
    R.range(0)
  )(size);
}

function getRandomStartingData() {
  return get2dArray(4);
}

export default getRandomStartingData;
