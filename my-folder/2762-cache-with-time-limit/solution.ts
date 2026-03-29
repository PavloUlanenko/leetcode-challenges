class TimeLimitedCache {
    #cache = new Map()
    constructor() {
        
    }
    
    set(key: number, value: number, duration: number): boolean {
        const cachedKey = this.#cache.get(key);
        clearTimeout(cachedKey?.timer);
        const timer = setTimeout(() => this.#cache.delete(key), duration);
        this.#cache.set(key, { value, timer });

        return !!cachedKey;
    }
    
    get(key: number): number {
        const cachedKey = this.#cache.get(key)?.value;

        return cachedKey ?? -1;
    }
    
    count(): number {
        return this.#cache.size;
    }
}

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
