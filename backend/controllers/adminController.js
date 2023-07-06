const db = require("../model/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

function tokenGenerator({ user_id, role, username, email }) {
  const payload = { user_id, role, username, email };
  const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET);
  return accessToken;
}

const handleCreateNewAdmin = async (req, res) => {
  const { username, email, dateofbirth, password } = req.body;

  let sql = "SELECT * FROM public.users where email = $1";
  const oldUser = await db.query(sql, [email]);

  if (oldUser.rows.length != 0) {
    res.status(409).send("User Already Exist.");
  } else {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);

    db.query(
      "INSERT INTO public.users (username,email,dateofbirth,password,role) VALUES ($1,$2,$3,$4,'admin') RETURNING *",
      [username, email, dateofbirth, hashedPassword],
      (error, results) => {
        if (error) {
          return res.status(400).json(error);
        }
        const { user_id, role, username, email } = results.rows[0];
        const token = tokenGenerator({
          user_id,
          role,
          name: username,
          email: email,
        });
        console.log("token:", token);
        res.status(201).json({ token });
      }
    );
  }
};

const checkAdmin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const query =
      "SELECT * FROM public.users WHERE role = 'admin' ORDER BY user_id ASC";
    const results = await db.query(query);

    for (const user of results.rows) {
      const match = await bcrypt.compare(password, user.password);
      if (user.email === email && match) {
        const token = tokenGenerator(user);
        console.log("User LoggedIn successFully");
        return res.status(200).json({ token });
      }
    }
    res.sendStatus(401);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { handleCreateNewAdmin, checkAdmin };
