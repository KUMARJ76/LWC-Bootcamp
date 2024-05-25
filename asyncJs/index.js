// setTimeout(() => {
//   console.log("hello 1");
//   setTimeout(() => {
//     console.log("hello 2");
//     setTimeout(() => {
//       console.log("hello 3");
//     }, 5000);
//   }, 5000);
// }, 5000);

function generatePromise(message) {
  return new Promise((resolve, reject) => {
    if (!message) {
      reject("Message is rejected");
    } else {
      setTimeout(() => {
        console.log(message);
        resolve();
      }, 1000);
    }
  });
}
// how to call the promise
/*generatePromise("1st call").then(() => {
  console.log("ist Promise resolved successfully");
  generatePromise("2nd call").then(() => {
    console.log("2nd Promise resolved successfully");
    generatePromise()
      .then(() => {
        console.log("3nd Promise resolved successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  });
});

*/

async function generateDifferentPromises() {
  try {
    await generatePromise("1st call");
    await generatePromise("2nd call");
    await generatePromise("3rd call");
    await generatePromise();
  } catch (error) {
    console.log(error);
  }
}

generateDifferentPromises();

// Promise.all() --> method

/*function resolveTimeout(value, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Resolving: ${value}`); // Log when resolving
      resolve(value);
    }, delay);
  });
}

function rejectTimeout(value, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Rejecting: ${value}`); // Log when rejecting
      reject(value);
    }, delay);
  });
}

async function load() {
  let promise1 = resolveTimeout("Welcome to tech journey to Ankit Jain", 5000);
  let promise2 = rejectTimeout("Loading Failed", 5000);

  try {
    const list = await Promise.all([promise1, promise2]); // This will reject as soon as promise2 rejects
    console.log("Lists", list);
  } catch (error) {
    console.log("Error caught:", error); // This will log "Loading Failed"
  }
}

load();
*/

// Promise.any() =========
/*
function resolveTimeout(value, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Resolving: ${value}`); // Log when resolving
      resolve(value);
    }, delay);
  });
}

function rejectTimeout(value, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Rejecting: ${value}`); // Log when rejecting
      reject(value);
    }, delay);
  });
}

async function load() {
  let promise1 = resolveTimeout("Welcome to tech journey to Ankit Jain", 5000);
  let promise2 = rejectTimeout("Loading Failed", 7000);

  try {
    const list = await Promise.any([promise1, promise2]); // Resolves as soon as one promise resolves
    console.log("Lists", list);
  } catch (error) {
    console.log("Error caught:", error); // This will log an AggregateError if all promises reject
  }
}

load();
*/

// Promise.race() =========

function resolveTimeout(value, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Resolving: ${value}`); // Log when resolving
      resolve(value);
    }, delay);
  });
}

function rejectTimeout(value, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Rejecting: ${value}`); // Log when rejecting
      reject(value);
    }, delay);
  });
}

async function load() {
  let promise1 = resolveTimeout("Welcome to tech journey to Ankit Jain", 5000);
  let promise2 = rejectTimeout("Loading Failed", 5000);

  try {
    const result = await Promise.race([promise1, promise2]); // Resolves or rejects as soon as one promise settles
    console.log("Result", result);
  } catch (error) {
    console.log("Error caught:", error); // Logs the rejection reason if the first promise to settle is rejected
  }
}

load();
