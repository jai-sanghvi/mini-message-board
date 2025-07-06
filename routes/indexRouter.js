const { Router } = require("express");
const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Message Board", messages: messages });
});

indexRouter
  .route("/new")
  .get((req, res) => {
    res.render("form", { title: "Add New Message" });
  })
  .post((req, res) => {
    messages.push({
      text: req.body.message,
      user: req.body.name,
      added: new Date(),
    });
    res.redirect("/");
  });

indexRouter.get("/message/:messageId", (req, res) => {
  const messageId = Number(req.params.messageId);
  const currentMessage = messages[messageId];

  res.render("message", {
    title: `Message ${messageId}`,
    message: { ...currentMessage },
  });
});

module.exports = indexRouter;
