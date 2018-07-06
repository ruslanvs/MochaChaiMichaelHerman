const assert = require("chai").assert;
const app = require("../app");

describe("app", function(){
    it("sayHello() should return hello", function(){
        const result = app.sayHello();
        assert.equal(result, "hello");
    });
});