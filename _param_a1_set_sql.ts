import { map } from '@ctx-core/array'
export function _param_a1_set_sql(param_a1: string[], named_param_a1: string[]) {
	return (
		map(param_a1,
			(param: string, i)=>`${param}=${named_param_a1[i]}`
		).join(', ')
	)
}
export {
	_param_a1_set_sql as _sql__set__a1__param
}
