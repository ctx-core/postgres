import { map } from '@ctx-core/array'
export function _param_a1_set_sql(a1__param, a1__named_param) {
  return (
  	map(
  		a1__param,
			(param, i) => `${param}=${a1__named_param[i]}`
		).join(', ')
	)
}
export {
	_param_a1_set_sql as _sql__set__a1__param
}
