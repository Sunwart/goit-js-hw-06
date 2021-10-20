const lodashText = document.querySelector('.lodash-test');
lodashText.textContent = _.add(128, 13);

document.addEventListener(
  'scroll',
  _.throttle(() => {
    console.log('Scroll handler call every 5000ms');
  }, 5000),
);

document.addEventListener(
  'scroll',
  _.debounce(() => {
    console.log('Scroll handler call after 3000ms pause');
  }, 3000),
);

document.addEventListener(
  'scroll',
  _.debounce(
    () => {
      console.log('Scroll handler call on every event stream start');
    },
    4000,
    {
      leading: true,
      trailing: false,
    },
  ),
);
