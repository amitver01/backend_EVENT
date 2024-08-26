const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = process.env.JWT_SECRET || "TESTING1234";

exports.register = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const userDoc = await User.create({
            name,
            email,
            password: bcrypt.hashSync(password, bcryptSalt),
        });
        res.json(userDoc);
    } catch (e) {
        res.status(422).json(e);
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const userDoc = await User.findOne({ email });

        if (!userDoc) {
            return res.status(404).json({ error: "Something went wrong" });
        }

        const passOk = bcrypt.compareSync(password, userDoc.password);
        if (!passOk) {
            return res.status(401).json({ error: "Invalid password" });
        }

        jwt.sign(
            {
                email: userDoc.email,
                id: userDoc._id,
            },
            jwtSecret,
            {},
            (err, token) => {
                if (err) {
                    return res.status(500).json({ error: "Failed to generate token" });
                }
                res.cookie("token", token).json(userDoc);
            }
        );
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
};

exports.profile = (req, res) => {
    const { token } = req.cookies;
    if (token) {
        jwt.verify(token, jwtSecret, {}, async (err, userData) => {
            if (err) throw err;
            const { name, email, _id } = await User.findById(userData.id);
            res.json({ name, email, _id });
        });
    } else {
        res.json(null);
    }
};

exports.logout = (req, res) => {
    res.cookie("token", "").redirect("/");;
   
};
