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
            _link.remove(5).should.containEql({data: 5});
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

    it("linked List nodeAtIndex ", function (done) {
        var _link = new LinkedList(), length = 0;
        for (var i = 0; i < 10; i++)
            _link.add(i);

        _link.nodeAtIndex(5).should.containEql({data: 5});
        done();
    });

    it("linked List indexOf  ", function (done) {
        var _link = new LinkedList(), length = 0;
        for (var i = 1; i < 10; i++)
            _link.add(i);

        _link.indexOf(5).should.equal(5);
        done();
    });

    it("linked List has  ", function (done) {
        var _link = new LinkedList(), length = 0;
        for (var i = 1; i < 10; i++)
            _link.add(i);

        _link.has(5).should.equal(true);
        done();
    })

    it("linked List reset  ", function (done) {
        var _link = new LinkedList(), length = 0;
        for (var i = 1; i < 10; i++)
            _link.add(i);

        _link.reset();
        _link.length.should.equal(0);
        done();
    })

});

