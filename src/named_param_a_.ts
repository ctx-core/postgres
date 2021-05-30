import { map } from '@ctx-core/array'
export function named_param_a_(param_a: string[]) {
	return (
		map(
			param_a,
			(_, i)=>`$${i + 1}`
		)
	)
}
export {
	named_param_a_ as _a1__named_param
}
