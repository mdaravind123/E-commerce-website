const express = require("express");

const cors = require("cors");

// Instance of express server
const app = express();

app.use(cors());

// Middleware to parse JSON request bodies
app.use(express.json());

const port = 3333;

// Create Prisma client
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// To get access to all data from db
app.get("/", async (req, res) => {
  try {
    const productdata = await prisma.product.findMany({
      orderBy: {
        id: "asc",
      },
    });
    res.status(200).json(productdata);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

//Accessing Details of product with specific id
app.get("/:id", async (req, res) => {
  const { id } = req.params;
  const parsedid = parseInt(id);
  try {
    try {
      const productdata = await prisma.product.findUnique({
        where: {
          id: parsedid,
        },
      });

      if (!productdata) {
        res.status(404).json({ msg: `ID not found!` });
      } else {
        res.status(201).json(productdata);
      }
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  } catch (err) {
    res.status(500).json({
      error: `Internal Server Error`,
    });
  }
});

//To create a new record in table
app.post("/post", async (req, res) => {
  const { id, title, price, imageurl, description, ratings } = req.body;
  console.log(req.body);
  try {
    const postdata = await prisma.product.create({
      data: {
        id: id,
        title: title,
        price: price,
        imageurl: imageurl,
        description: description,
        ratings: ratings,
      },
    });
    res.json(postdata);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// To update parameters of particular record
app.put("/update/:id", async (req, res) => {
  const { id } = req.params;
  const { title, price, imageurl, description, ratings } = req.body;
  try {
    const parsedid = parseInt(id);
    const updateddata = await prisma.product.update({
      where: { id: parsedid },
      data: {
        title: title,
        price: price,
        imageurl: imageurl,
        description: description,
        ratings: ratings,
      },
    });
    res.status(200).json(updateddata);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//to delete a particular record
app.delete("/delete:id", (req, res) => {
  const { id } = req.body;
  try {
    const deletedata = prisma.product.delete({
      where: { id: id },
    });
    res
      .status(200)
      .json({ message: "Product deleted Successfully!", data: deletedata });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Port is running on ${port} Successfully!`);
});
