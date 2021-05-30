import { map } from '@ctx-core/array'
export function param_a_set_sql_(param_a1: string[], named_param_a: string[]) {
	return (
		map(param_a1,
			(param: string, i)=>`${param}=${named_param_a[i]}`
		).join(', ')
	)
}
export {
	param_a_set_sql_ as _sql__set__a1__param
}
