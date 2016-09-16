const subtract = require('./../lib/subtraction');

module.exports = (req, res) => {
    res.json({result: subtract(req.a, req.b)});
};
