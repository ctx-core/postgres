import { map } from '@ctx-core/array';
export function param_a_set_sql_(param_a, named_param_a) {
    return (map(param_a, (param, i) => `${param}=${named_param_a[i]}`).join(', '));
}
export { param_a_set_sql_ as _sql__set__a1__param };
//# sourceMappingURL=src/param_a_set_sql_.js.map