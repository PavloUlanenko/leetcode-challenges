type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function compactObject(obj: Obj): Obj {
    if (typeof obj !== 'object' || obj === null) return obj;
    const isArray = Array.isArray(obj);
    if (isArray && obj.length === 0) return obj;
    let res;

    const entries = Object.entries(obj).map(([k, v]) => {
        if (typeof v === 'object' && v !== null) {
            return [k, compactObject(v)];
        } else {
            return !!v ? [k, v] : undefined;
        }
    })
    .filter((el) => Boolean(el));

    if (isArray) {
        res = Object.values(Object.fromEntries(entries)) as JSONValue;
    } else {
        res = Object.fromEntries(entries) as JSONValue;
    }

    return res;
};
