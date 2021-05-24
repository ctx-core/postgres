/**
 * Set Add named param. Returns index of value, which is already in param_a1 or pushed onto param_a1.
 */
export function sadd_named_param(param_a1, value) {
    const index = param_a1.indexOf(value);
    if (~index) {
        return index;
    }
    else {
        param_a1.push(value);
        const append_idx = param_a1.length;
        return append_idx;
    }
}
export { sadd_named_param as sadd__named_param };
