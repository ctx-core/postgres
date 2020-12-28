import { map } from '@ctx-core/array'
export function _named_param_a1(param_a1: string[]) {
	return (
		map(
			param_a1,
			(_, i)=>`$${i + 1}`
		)
	)
}
export {
	_named_param_a1 as _a1__named_param
}
