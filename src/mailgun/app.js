var api_key = "d42598bdab7fdf75e29f0f5436b55bd9-90346a2d-821b76ec";
var domain = "sandbox618212db5d7e4213b85a740effb9a3d0.mailgun.org";
var mailgun = require("mailgun-js")({ apiKey: api_key, domain: domain });

export const emailMessage = (name, email) => {
  console.log(name, email);
  var data = {
    from: "slawek <slawek.jazz@gmail.com>",
    to: "slawek.jazz@gmail.com",
    subject: "Hello",
    text: "Testing some Mailgun awesomeness!",
  };

  mailgun.messages().send(data, function (error, body) {
    if (error) {
      console.log(error);
    }
    // console.log(body);
  });
};
