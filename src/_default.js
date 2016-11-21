/**
 * Created by dominic on 21/11/16.
 */
'use strict';
class  _default {

    /**
     * Default Equal cB fucntion
     * @param a
     * @param b
     * @returns {boolean}
     */
    equals(a, b) {
        return a === b;
    }

    isFunction(func) {
        return (typeof func) === 'function';
    }

    isUndefined(obj) {
        return obj === undefined;
    }

    isString(obj) {
        return Object.prototype.toString.call(obj) === '[object String]';
    }

    return(value) {
        value.__proto__ = this.__proto__;
        return value;
    }


}

module.exports = _default;