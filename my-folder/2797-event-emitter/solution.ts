type Callback = (...args: any[]) => any;
type Subscription = {
    unsubscribe: () => void
}

class EventEmitter {
    callbacks = {}
    subscribe(eventName: string, callback: Callback): Subscription {
        if (!this.callbacks[eventName]) {
            this.callbacks[eventName] = new Set();
        }
        this.callbacks[eventName].add(callback);

        return {
            unsubscribe: () => {
                this.callbacks[eventName].delete(callback);
            }
        };
    }
    
    emit(eventName: string, args: any[] = []): any[] {
        const res = [];
        if (!this.callbacks[eventName]) return res;
        this.callbacks[eventName].forEach((cb) => res.push(cb.apply(this, args)));

        return res;
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */
