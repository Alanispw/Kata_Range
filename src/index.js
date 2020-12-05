import fs  from 'fs';

export default class Range {
    readInput(path){
        return fs.readFileSync(path, 'utf8');
    }
    parseInput(input) {
        const obj = {};
        obj.leftP = input[0];
        obj.rightP = input[input.length - 1];
        obj.nums = input.substring(1, input.length - 1).split(',').map(num => Number(num));
        return obj;
    }
}