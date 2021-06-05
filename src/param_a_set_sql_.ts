import { map } from '@ctx-core/array'
export function param_a_set_sql_<I extends any[] = any[]>(
	param_a:string[], named_param_a:I
) {
	return (
		map(param_a,
			(param:string, i)=>`${param}=${named_param_a[i]}`
		).join(', ')
	)
}
export {
	param_a_set_sql_ as _sql__set__a1__param
}
