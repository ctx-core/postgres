export function named_param_a_(param_a, param_r_cast = {}) {
	return param_a.map((param, i)=>
		`$${i + 1}${param_r_cast[param] ? `::${param_r_cast[param]}` : ''}`)
}
export { named_param_a_ as _a1__named_param }
