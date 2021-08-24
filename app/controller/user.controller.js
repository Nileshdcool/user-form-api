exports.signUp = (req, res) => {
    console.log(req.body);
    res.status(200).send(req.body);
};

exports.findAll = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    console.log(req.body);
    // TODO - to be stored in db...
    res.send('User signed up successfully');
};