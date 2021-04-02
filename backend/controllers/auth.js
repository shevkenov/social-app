const { firebase } = require('../config/firebase');
const { db } = require('../config/firebase');

const {signUpValidator, loginValidator} = require('../utils/validator');

const authController = {
    postAuthSignup: async (req, res) => {
        const user = {
            email: req.body.email,
            password: req.body.password,
            confirmPassword: req.body.confirmPassword,
            handle: req.body.handle
        }

        const { errors, isValid } = signUpValidator(user);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        try {
            const userDoc = await db.collection('users').doc(user.handle).get();
            if (userDoc.exists) return res.status(400).json({ handle: "This user already taken" });

            const createdUser = await firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            const userId = createdUser.user.uid;
            const token = await createdUser.user.getIdToken();

            const userCredent = {
                userId,
                email: createdUser.user.email,
                createdAt: new Date().toISOString(),
                handle: user.handle
            }

            await db.doc(`/users/${user.handle}`).set(userCredent);
            res.status(201).json({ token });
        } catch (err) {
            console.error(err);
            if (err.code === "auth/email-already-in-use") {
                return res.status(400).json({ email: "Email is already is use" });
            } else {
                return res
                    .status(500)
                    .json({ general: "Something went wrong, please try again" });
            }
        }

    },
    postAuthLogin: async (req, res) => {
        const userCredentials = {
            email: req.body.email,
            password: req.body.password,
        }

        const { errors, isValid } = loginValidator(user);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        try {
            const user = await firebase.auth().signInWithEmailAndPassword(userCredentials.email, userCredentials.password)
            const token = await user.user.getIdToken();

            res.status(201).json({ token });
        } catch (err) {
            res.status(500).json({ error: err.message })
        }
    }
}

module.exports = authController;