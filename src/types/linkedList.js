/**
 * Created by dominic on 19/11/16.
 */

'use strict';

let dS = require('../dS');
const PREV = Symbol('prev'); //'prev';
const NEXT = Symbol('next'); //'next';

class linkedList extends dS {

    constructor() {
        super();
        this.first = null;
        this.last = null;
        this.length = 0;
        this.currentNode = 0;
        this.doubleLinkedLst = false;
    }

    /**
     * represent a NODE in a linked list
     * @param d dataSet value
     * @param prev PREV ~Pointer
     * @param next NEXT ~Pointer
     * @returns {{data: *}}
     */
    node(d, prev, next) {
        return {[PREV]: prev, 'data': d, [NEXT]: next};
    }

    /**
     * helper method to compute dataSet Addition
     * @param value dataSet value
     * @returns {null|{data}}
     */
    add(value) {
        if (!this.first) {
            this.first = this.last = this.node(value, null, null);
        }
        else if (this.last) {
            let prev = this.doubleLinkedLst ? this.last[NEXT] : null;
            let _node = this.node(value, prev, null);
            this.last[NEXT] = _node;
            this.last = _node;
        }
        this.length++;
        return this.last;
    }

    /**
     * helper method to remove and return dataSet
     * @param position index / valueAt() from where to remove. default value is set be zero
     * @returns {null|{data}}
     */
    remove(position) {
        let _nodeToRemove = this.first,
            _prevNode = this.first,
            i = 0;
        position = position ? position : 0;
        if (position === 0) {
            this.first = this.length > 1 ? this.first[NEXT] : null;
        }
        else {
            position = position >= this.length ? this.length -1 : position;
            while (i++ < position && i < this.length) {
                _prevNode = _nodeToRemove;
                _nodeToRemove = _nodeToRemove[NEXT];
            }
            if (position === this.length - 1) {
                this.last = _prevNode;
            }
        }
        this.length -= _nodeToRemove ? 1 : 0;
        return _nodeToRemove;
    }

}


let obj = new linkedList();
obj.add(1);
obj.add(2);
obj.add(3);
obj.add(4);
obj.add(5);
obj.add(6);
console.log(obj.length);
console.log(obj.remove(5));
console.log(obj.remove(5));
console.log(obj.remove(NaN));
console.log(Object.getOwnPropertySymbols(obj.node(Object)));


module.exports = linkedList;


