// Question 2

function resolvedPromise() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("message: Resolved Promise."), 500);
  });
}

function rejectedPromise() {
  return new Promise((_, reject) => {
    setTimeout(() => reject("error: Rejected Promise."), 500);
  });
}


// Calling the Promises

resolvedPromise()
  .then(result => console.log(result))
  .catch(error => console.error(error));

rejectedPromise()
  .then(result => console.log(result))
  .catch(error => console.error(error));