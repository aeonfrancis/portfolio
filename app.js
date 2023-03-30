(function () {
    emailjs.init("L9fohElk4IBBLQ7KR");
  })();
  
  function send_mail() {
    if (document.getElementById("name").value == "") {
      alert("Please fill out name field!");
    } else if (document.getElementById("email").value == "") {
      alert("Please fill out email field!!");
    } else {
      let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value,
      };
  
      const service_id = "service_63v6pqp";
      const temp_id = "template_4w4cd6l";
      emailjs
        .send(service_id, temp_id, params)
        .then((res) => {
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("phone").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Message send successfully!");
        })
        .catch((err) => console.log(err));
    }
  }
  