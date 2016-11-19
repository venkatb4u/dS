/**
 * Created by dominic on 19/11/16.
 * Unit Test Case for linkedList data Type
 */

var should = require("should"),
    assert = require("assert")
    LinkedList = require('../types/linkedList');

describe("UT for linkedList", function () {
    "use strict";

    var linkedList = new LinkedList();

    it("basic functional Check ", function (done) {
        should.exist(linkedList.node);
        Object.getOwnPropertySymbols(linkedList.node({})).length.should.equal(2);
        done();
    });

});

