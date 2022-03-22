/**
 * Set Add named param. Returns index of value, which is already in param_a or pushed onto param_a.
 */
export function sadd_named_param(param_a, value) {
	const index = param_a.indexOf(value)
	if (~index) {
		return index
	} else {
		param_a.push(value)
		return param_a.length
	}
}
export { sadd_named_param as sadd__named_param }
