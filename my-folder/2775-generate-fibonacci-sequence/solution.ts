function* fibGenerator(): Generator<number, any, number> {
    let prePrev = 0;
    let prev = 1;
    yield 0;
    yield 1;
    while (true) {
        const next = prev + prePrev;
        prePrev = prev;
        prev = next;
        yield next;
    }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */
