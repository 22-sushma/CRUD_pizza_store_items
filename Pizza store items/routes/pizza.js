const express = require("express");
const router = express.Router();

let pizzaMenu = [
  {
    id: "1",
    name: "Margherita",
    size: "medium",
    price: "300",
    toppingId: "t1",
  },
  {
    id: "2",
    name: "Pepperoni",
    size: "medium",
    price: "350",
    toppingId: "t2",
  },
  {
    id: "3",
    name: "Farmahouse",
    size: "medium",
    price: "250",
    toppingId: "t3",
  },
];

let toppings = [
  { toppingId: "t1", name: "Olives", price: 30 },

  { toppingId: "t2", name: "Jalapenos", price: 25 },

  { toppingId: "t3", name: "Extra Cheese", price: 40 },
];

//console.log(toppings);

// // GET request: Retrieve all users
// router.get("/pizza", (req, res) => {
//   res.send(pizzaMenu);
// });

// GET all pizzas
router.get("/", (req, res) => {
  res.json(pizzaMenu);
});

router.get("/:id", (req, res) => {
  const id = req.params.id; // Extracting the id parameter from the request URL
  let filtered_users = pizzaMenu.filter((user) => user.id === id); // Filtering users array to find the user with the matching email
  res.send(filtered_users); // Sending the filtered user(s) as the response
});

router.post("/", (req, res) => {
  console.log(req);
  const toppingId = req.query.toppingId;

  if (toppingId && !toppings.some((t) => t.toppingId === toppingId)) {
    return res.status(400).send("Invalid toppingId provided.");
  }

  pizzaMenu.push({
    // Adding a new user object to the users array
     "id": req.query.id, // Extracting firstName from the query parameters of the request
    "name": req.query.name, // Extracting lastName from the query parameters of the request
    "size": req.query.size, // Extracting email from the query parameters of the request
    "price": req.query.price, // Extracting age from the query parameters of the request
    "toppingId": req.query.toppingId,  });
  res.send("The pizza  Has been added!"); // Sending a success message as response
});

router.put("/:id", (req, res) => {
  const targetId = req.params.id;

  let filtered_users = pizzaMenu.filter((user) => user.id === targetId);

  if (filtered_users.length > 0) {
    let filtered_user = filtered_users[0];

    const newId = req.query.id;
    const name = req.query.name;
    const size = req.query.size;
    const price = req.query.price;
    const toppingId = req.query.toppingId;

    if (newId) filtered_user.id = newId;
    if (name) filtered_user.name = name;
    if (size) filtered_user.size = size;
    if (price) filtered_user.price = price;
    if (toppingId) filtered_user.toppingId = toppingId;

    pizzaMenu = pizzaMenu.filter((user) => user.id !== targetId);
    pizzaMenu.push(filtered_user);

    res.send(`Pizza with original ID ${targetId} has been updated.`);
  } else {
    res.send("Unable to find pizza!");
  }
});

router.delete("/:id", (req, res) => {
  const id = req.params.id; // Extracting the email parameter from the request URL
  pizzaMenu = pizzaMenu.filter((user) => user.id != id); // Filtering out the user with the specified email from the users array
  res.send(`User with the id  ${id} deleted.`); // Sending a success message as response
});
module.exports = router;
