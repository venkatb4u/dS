/**
 * Created by dominic on 21/11/16.
 */
'use strict';

const _observers = new WeakMap(),
    proxy = Symbol('proxy');

let currentObserver, instance = null;

/* contains the triggered observer functions,
 which should run soon */
const queuedObservers = new Set();

module.export = observer;

class observer {

    constructor() {
        if (!instance) {
            return new observer();
        }
    }

    /**
     * converts the given object into observable by using proxy
     * @param obj
     * @returns {Proxy}
     */
    static observable(obj) {
        _observers.set(obj, new Map());
        return new Proxy(obj, {get: this.get, set: this.set});
    }

    static observe(fn) {
        queueObserver(fn)
    }

    get(target, key, receiver) {
        const result = Reflect.get(target, key, receiver);
        if (currentObserver) {
            registerObserver(target, key, currentObserver)
        }
        return result
    }

    set(target, key, receiver) {
        const observersForKey = _observers.get(target).get(key);
        if (observersForKey) {
            observersForKey.forEach(queueObserver)
        }
        return Reflect.set(target, key, value, receiver)
    }

    registerObserver(target, key, observer) {
        let observersForKey = _observers.get(target).get(key);
        if (!observersForKey) {
            observersForKey = new Set();
            _observers.get(target).set(key, observersForKey)
        }
        observersForKey.add(observer)
    }

    /* adds the observer to the queue and
     ensures that the queue will be executed soon */
    queueObserver(observer) {
        if (queuedObservers.size === 0) {
            Promise.resolve().then(runObservers)
        }
        queuedObservers.add(observer)
    }

    /* runs the queued observers,
     currentObserver is set to undefined in the end */
    runObservers() {
        try {
            queuedObservers.forEach(runObserver)
        } finally {
            currentObserver = undefined;
            queuedObservers.clear();
        }
    }

    /* sets the global currentObserver to observer,
     then executes it */
    runObserver(observer) {
        currentObserver = observer;
        observer()
    }
}