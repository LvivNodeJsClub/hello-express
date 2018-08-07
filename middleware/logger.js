module.exports = function(options = {}) {
    return function(req, res, next) {
        const {name = "Default"} = options;
        console.log(`Logged ${name}`);
        next();
    }
}