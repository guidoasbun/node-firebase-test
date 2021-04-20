const functions = require("firebase-functions");
const express = require("express");
const admin = require("firebase-admin");
// const { SUPPORTED_REGIONS } = require("firebase-functions");

admin.initializeApp(functions.config().firebase)

const app = express();

app.get("/", (req, res) => {
  res.status(200).send({data: "Hello, is this me?, is it you?"});
});

exports.app = functions.https.onRequest(app);
