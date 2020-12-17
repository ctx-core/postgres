import { map } from '@ctx-core/array'
export function _named_param_a1(a1__param) {
	return (
		map(
			a1__param,
			(_, i)=>`$${i + 1}`
		)
	)
}
export {
	_named_param_a1 as _a1__named_param
}
