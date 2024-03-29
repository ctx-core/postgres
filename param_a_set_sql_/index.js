/**
 * @param {string[]}param_a
 * @param {unknown}named_param_a
 * @param {(param:string, named_param:string, i?:number)=>string}sql_
 * @returns {string}
 */
export function param_a_set_sql_(
	param_a,
	named_param_a,
	sql_ = (param, named_param)=>`${param}=${named_param}`
) {
	return param_a.map((param, i)=>
		sql_(param, named_param_a[i], i)
	).join(', ')
}
export { param_a_set_sql_ as _sql__set__a1__param }
