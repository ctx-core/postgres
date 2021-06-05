/**
 * Set Add named param. Returns index of value, which is already in param_a or pushed onto param_a.
 */
export function sadd_named_param<I extends any[] = any[]>(
	param_a:I, value:I[number]
) {
	const index = param_a.indexOf(value)
	if (~index) {
		return index
	} else {
		param_a.push(value)
		const append_idx = param_a.length
		return append_idx
	}
}
export {
	sadd_named_param as sadd__named_param
}
