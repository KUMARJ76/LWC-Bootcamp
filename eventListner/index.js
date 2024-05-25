// handle the event
document.addEventListener("myevent", (event) => {
  console.log("Access the event data", event.detail.message);
});

function changeHandler(event) {
  let value = event.target.value;

  // whenever user enter value as 10 then fire the custom event
  if (value == 10) {
    //step1: create a custom event
    const customevent = new CustomEvent("myevent", {
      detail: {
        message: "User has entered value as 10",
      },
      bubbles: true,
      cancelable: true,
      composed: false,
    });
    // step-2 to dispatch the event
    document.dispatchEvent(customevent);
  }
}
