const firebase = require('../config/firebase');

const postController = {
    getPosts: (req, res) => {
        firebase.firestore().collection('screams')
        .get()
        .then(data => {
            const screams = [];
            data.forEach(doc => screams.push(doc.data()));

            res.status(200).json(screams);
        })
        .catch(err => console.log(err))
    },
    postPosts: (req, res) => {
        const newScream = {
            body: req.body.body,
            userHandle: req.body.userHandle,
            time: new Date()
        }
        firebase.firestore().collection('screams')
            .add(newScream)
            .then(doc => {
                res.status(200).json({message: `document ${doc.id} created`});
            })
            .catch(err => console.log(err))
    }
}

module.exports = postController;