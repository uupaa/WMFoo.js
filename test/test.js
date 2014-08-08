var ModuleTestWMFoo = (function(global) {

var _runOnNode = "process" in global;
var _runOnWorker = "WorkerLocation" in global;
var _runOnBrowser = "document" in global;

return new Test("WMFoo", {
        disable:    false,
        browser:    true,
        worker:     true,
        node:       true,
        button:     true,
        both:       true, // test the primary module and secondary module
    }).add([
        testWMFoo_value,
        testWMFoo_isNumber,
        testWMFoo_isInteger,
    ]).run().clone();

function testWMFoo_value(test, pass, miss) {

    var result = new WMFoo(123.4).value();

    if (result === 123.4) {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testWMFoo_isNumber(test, pass, miss) {

    var result = [
            new WMFoo(123.4).isNumber(),  // true
            new WMFoo(123.0).isNumber()   // true
        ];

    if (!/false/.test(result.join())) {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testWMFoo_isInteger(test, pass, miss) {

    var result = [
           !new WMFoo(123.4).isInteger(), // !false -> true
            new WMFoo(123.0).isInteger()  // true
        ];

    if (!/false/.test(result.join())) {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

})((this || 0).self || global);

