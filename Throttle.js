// Throttle

// Throttle is a technique used to limit how many times a function can run in a given time interval.

// Throttle makes sure the function runs at most once every X milliseconds, even if the event is triggered continuously.

// Throttling ensures a function executes at a fixed interval (e.g., once every 500ms) while the event keeps firing.

const search = (query) => {
  console.log(query);
};

function Throttle(fn, delay) {
  let lastCall = 0;
  return (...args) => {
    let now = Date.now();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    fn(...args);
  };
}

const searchWithThrottle = Throttle(search, 1000);

searchWithThrottle("hy");
searchWithThrottle("hy hi");
searchWithThrottle("hy hi i");
searchWithThrottle("hy hi i am");
