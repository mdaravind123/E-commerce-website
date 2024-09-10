const express = require("express");

const { PrismaClient } = require("@prisma/client");

const app = express();

const port = 3500;

app.use(express.json());

const prisma = new PrismaClient();

app.post("/register", async (req, res) => {
  const { user_name, email_id, password } = req.body;
  const isUserNameExist = await prisma.user.findUnique({
    where: {
      user_name: user_name,
    },
  });
  if (isUserNameExist === null) {
    const isemailExist = await prisma.user.findUnique({
      where: {
        email_id: email_id,
      },
    });
    if (isemailExist === null) {
    }
  } else {
    res.send({ message: "UserName already Exists!" });
  }
});

app.listen(port, () => {
  console.log(`App is listening at port ${port}`);
});
