function Calculator() {}

Calculator.prototype._filter = function(values) {
    var len = values.length,
        filtered = values.filter(Number);
    if (len !== filtered.length) {
        throw new Error('All values must be numeric');
    }
    return values;
};

Calculator.prototype.add = function() {
    var values = this._filter([].slice.apply(arguments));

    if (values.length < 2) {
        throw new Error('Add expects a minimum of 2 arguments but ' + values.length + ' given.');
    }
    return values.reduce(function(a, b) {
        return a + b;
    });
};

Calculator.prototype.whatever = function() {
    var values = this._filter([].slice.apply(arguments));

    if (values.length < 2) {
        throw new Error('Add expects a minimum of 2 arguments but ' + values.length + ' given.');
    }
    return values.reduce(function(a, b) {
        return a + b;
    });
};