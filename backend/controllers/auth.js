const firebase = require('../config/firebase');

const authController = {
    postAuthSignup: (req, res) => {
        const user = {
            email: req.body.email,
            password: req.body.password,
            confirfmPassword: req.body.confirmPassword,
        }

        firebase.firestore()
            .doc('/users/' + user.email)
            .get()
            .then(doc => {
                if(doc.exists){
                    res.status(400).json({email: `this email: ${user.email} aready exists`})
                }else{
                    return firebase.auth()
                    .createUserWithEmailAndPassword(user.email, user.password)
                }
            }).then(data => {
                return data.user.getIdToken()
            })
            .then(token => {
                res.status(201).json({token});
            })
            .catch(err => {
                res.status(500).json({error: err.code})
            })
    },
    postAuthLogin: (req, res) => {
        const user = {
            email: req.body.email,
            password: req.body.password,
        }

        firebase.auth()
            .signInWithEmailAndPassword(user.email, user.password)
            .then(userCredent => {
                res.status(201).json({message: `User loggedin`});
            })
            .catch(err => {
                res.status(500).json({error: err.code})
            })
    }
}

module.exports = authController;