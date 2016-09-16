const add = require('./../lib/addition');

module.exports = (req, res) => {
    res.json({result: add(req.a, req.b)});
};