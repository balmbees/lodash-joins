import filter from 'lodash/filter';
import has from 'lodash/has';
import keyBy from 'lodash/keyBy';

/**
 * Hash left semi join
 * @param  {Array<Object>} a
 * @param  {AccessorFunction} aAccessor
 * @param  {Array<Object>} b
 * @param  {AccessorFunction} bAccessor
 * @returns {Array<Object>}
 */
export default function hashLeftSemiJoin (a, aAccessor, b, bAccessor) {
    if (a.length < 1 || b.length < 1) {
        return [];
    }
    const index = keyBy(b, bAccessor);
    return filter(a, aDatum => has(index, aAccessor(aDatum)));
}
