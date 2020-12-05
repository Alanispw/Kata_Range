import fs  from 'fs';

export default class Range {
    readInput(path){
        return fs.readFileSync(path, 'utf8');
    }
}