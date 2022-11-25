/// Enviar un mensaje al endPoint de jsonPlaceholder para poder emitir info dentro del request!
// HTTP Status Messages Segment - [https://developer.mozilla.org/en-US/docs/Web/HTTP/Status]
const submitForm = (preventForm) => {
  preventForm.preventDefault();
  // nos traemos los values/valores de los inputs

  let fullname = document.querySelector("#fullname").value;
  let email = document.querySelector("#email").value;
  let phone = document.querySelector("#phone").value;
  let message = document.querySelector("#message").value;

  if (fullname == "" || phone == "" || message == "") {
    alert("Please complete all data");
  } else {
    alert(
      ` Thank you for the message. We will contact you as soon as possible`
    );
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",

      headers: {
        "Content-type": "application/json",
        Accept: "text/plain, application/json",
      },

      body: JSON.stringify({
        fullname: fullname,
        email: email,
        phone: phone,
        message: message,
      }),
    })
      .then((response) => response.json())
      .then((formData) => console.log(formData))
      .catch((error) => console.log(error));
  }
};
let formulario = document
  .querySelector("#submitForm")
  .addEventListener("submit", submitForm);
