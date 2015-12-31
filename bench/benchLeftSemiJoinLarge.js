import hashLeftSemiJoin from '../lib/hash/hashLeftSemiJoin';
import sortedMergeLeftSemiJoin from '../lib/sortedMerge/sortedMergeLeftSemiJoin';
import nestedLoopLeftSemiJoin from '../lib/nestedLoop/nestedLoopLeftSemiJoin';
import joinBench from './util/joinBench';

module.exports = joinBench('Left Semi Joins Large', 1000, hashLeftSemiJoin,
    sortedMergeLeftSemiJoin, nestedLoopLeftSemiJoin);
