const express = require("express");
// const bodyParser = require("body-parser");
const request = require("request");
const app = express();
const nodemailer = require("nodemailer");
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static("public"));
app.use(express.json());



const port = process.env.PORT || 3000;

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.get("/about", function (req, res) {
  res.sendFile(__dirname + "/public/about.html");
});
app.get("/contact", function (req, res) {
  res.sendFile(__dirname + "/public/contact.html");
});
app.get("/booking", function (req, res) {
  res.sendFile(__dirname + "/public/booking.html");
});
app.get("/preventive", function (req, res) {
  res.sendFile(__dirname + "/public/preventive.html");
});
app.get("/cosmetic", function (req, res) {
  res.sendFile(__dirname + "/public/cosmetic.html");
});
app.get("/edondontics", function (req, res) {
  res.sendFile(__dirname + "/public/edondontics.html");
});
app.get("/emergency", function (req, res) {
  res.sendFile(__dirname + "/public/emergency.html");
});
app.get("/faq", function (req, res) {
  res.sendFile(__dirname + "/public/faq.html");
});
app.get("/implants", function (req, res) {
  res.sendFile(__dirname + "/public/implants.html");
});
app.get("/orthondontics", function (req, res) {
  res.sendFile(__dirname + "/public/orthondontics.html");
});
app.get("/edondontics", function (req, res) {
  res.sendFile(__dirname + "/public/edondontics");
});
app.get("/preventive", function (req, res) {
  res.sendFile(__dirname + "/public/preventive.html");
});
app.get("/radiography", function (req, res) {
  res.sendFile(__dirname + "/public/radiography.html");
});
app.get("/restorative", function (req, res) {
  res.sendFile(__dirname + "/public/restorative.html");
});
app.get("/whitening", function (req, res) {
  res.sendFile(__dirname + "/public/whitening.html");
});
app.get("/blog", function (req, res) {
  res.sendFile(__dirname + "/public/home.html");
});
app.get("/thanks", function (req, res) {
  res.sendFile(__dirname + "/public/thanks.html");
});
app.get("/invisalign", function (req, res) {
  res.sendFile(__dirname + "/public/invisalign.html");
});

app.post("/send", (req, res) => {
  const output = `
    <p>You have a new message</p>
    <h3>Contact Details</h3>
    <ul>
      <li>First-name: ${req.body.firstName}</li>
      <li>Last-name: ${req.body.lastName}</li>
      <li>email: ${req.body.email}</li>
    </ul>
    <h3>Subject</h3>
    <p>subject: ${req.body.subject}</p>
    <h3>Message</h3>
    <p>message: ${req.body.message}</p>
  `;

  let transporter = nodemailer.createTransport({
    host: "mail.luxedental.com.ng",
    port: 587,
    secure: false,
    auth: {
      user: "info@luxedental.com.ng",
      pass: "This1s4luxedent@l",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  let mailOptions = {
    from: "Luxe-Dental Website Contact-form, <info@luxedental.com.ng>",
    to: "info@luxedental.com.ng",
    subject: "Luxe-Dental Contact Message",
    text: "Hello",
    html: output,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.send("error");
    } else {
      res.sendFile(path.join(__dirname, "index.html"));
    }
  });
});

app.post("/book", (req, res) => {
  const output = `
    <p>You have an appointment</p>
    <h3>Contact Details</h3>
    <ul>
      <li>First-name: ${req.body.firstName}</li>
      <li>Last-name: ${req.body.lastName}</li>
      <li>email: ${req.body.email}</li>
      <li>phone: ${req.body.phone}</li>
    </ul>
    <h3>Date of appointment</h3>
    <p>Date: ${req.body.date}</p>
    <h3>Time of appointment</h3>
    <p>Time: ${req.body.time}</p>
    <h3>Selected Service</h3>
    <p>Service: ${req.body.selectedValue}</p>
  `;

  let transporter = nodemailer.createTransport({
    host: "mail.luxedental.com.ng",
    port: 587,
    secure: false,
    auth: {
      user: "info@luxedental.com.ng",
      pass: "This1s4luxedent@l",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  let mailOptions = {
    from: "Luxe-Dental Booking, <info@luxedental.com.ng>",
    to: "info@luxedental.com.ng",
    subject: "Appointment Booking",
    text: req.body.message,
    html: output,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.send("error");
    } else {
      res.sendFile(path.join(__dirname, "/public/thanks.html"));
    }
  });
});


const fileupload = require("express-fileupload");
const { reset } = require("nodemon");
const { getMaxListeners } = require("process");

let initial_path = path.join(__dirname, "public");

app.use(express.static(initial_path));
app.use(fileupload());

app.get("/editor", (req, res) => {
  res.sendFile(path.join(initial_path, "editor.html"));
});

// upload link
app.post("/upload", (req, res) => {
  let file = req.files.image;
  let date = new Date();
  // image name
  let imagename = date.getDate() + date.getTime() + file.name;
  // image upload path
  let path = "public/uploads/" + imagename;

  // create upload
  file.mv(path, (err, result) => {
    if (err) {
      throw err;
    } else {
      // our image upload path
      res.json(`uploads/${imagename}`);
    }
  });
});

app.get("/:blog", (req, res) => {
  res.sendFile(path.join(initial_path, "blog.html"));
});

app.use((req, res) => {
  res.json("404");
});

//signup route
// app.post("/signup", (req, res) => {
//   // console.log(req.body);
//   // res.send("hello");
//   const { email } = req.body;

//   const data = {
//     members: [
//       {
//         email_addres: email,
//         status: "subscribed",
//       },
//     ],
//   };

//   const postData = JSON.stringify(data);

//   const options = {
//     url: "https://us5.api.mailchimp.com/3.0/lists/af0d87b37f",
//     method: "POST",
//     headers: {
//       Authorization: "auth 06c5b3ff77298619acea48ea8921db94-us5",
//     },
//     body: postData,
//   };

//   request(options, (err, response, body) => {});
//   if (err) {
//     res.redirect("/");
//   } else {
//     if (response.statusCode === 200) {
//       reset.redirect("/");
//     } else {
//       res.redirect("/");
//     }
//   }
// });

app.listen("3000", () => {
  console.log("listening.....");
});
