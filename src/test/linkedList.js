/**
 * Created by dominic on 19/11/16.
 * Unit Test Case for linkedList data Type
 */

var should = require("should"),
    assert = require("assert"),
    LinkedList = require('../types/linkedList');

describe("UT for linkedList", function () {
    "use strict";

    var linkedList = new LinkedList();

    it("basic functional Check ", function (done) {
        should.exist(linkedList.node);
        Object.getOwnPropertySymbols(linkedList.node({})).length.should.equal(2);
        done();
    });

    describe("single linked list ", function () {
        it("add / remove data", function (done) {
            var _link = new LinkedList();
            for (var i = 0; i < 10; i++)
                _link.add(i);
            _link.length.should.equal(i);
            for (var i = 0; i < 10; i++)
                _link.add(i);
            _link.remove(5).data.should.equal(5);
            done();
        });
    });

    describe("testing iterability of type linked list ", function () {
        it("iterate 10 Elements", function (done) {
            var _link = new LinkedList(), length = 0;
            for (var i = 0; i < 10; i++)
                _link.add(i);

            for (var o of _link) {
                length++;
            }

            length.should.equal(_link.length);
            done();
        })
    })

});

