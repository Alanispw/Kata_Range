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
    getAllPoints(r) {
        const R = this.parseInput(r);
        let l1, r1; 
        if(R.leftP === '(') l1 = R.nums[0] + 1;
        else l1 = R.nums[0];
        if(R.rightP === ')') r1 = R.nums[R.nums.length - 1] - 1;
        else r1 = R.nums[R.nums.length -1];
        const res = [];
        for (let i = l1; i <= r1; i++) {
            res.push(i)
        }
        return res;
    }
    endPoints(r){
        const R = this.parseInput(r);
        let l1, r1; 
        if(R.leftP === '(') l1 = R.nums[0] + 1;
        else l1 = R.nums[0];
        if(R.rightP === ')') r1 = R.nums[R.nums.length - 1] - 1;
        else r1 = R.nums[R.nums.length -1];
        return [l1, r1];
    }
    contains(a,b) {
        const A = this.parseInput(a);
        const B = this.parseInput(b);
        let l1, l2, r1, r2; 
        if(A.leftP === '(') l1 = A.nums[0] + 1;
        else l1 = A.nums[0];
        if(A.rightP === ')') r1 = A.nums[A.nums.length - 1] - 1;
        else r1 = A.nums[A.nums.length -1];
        if(B.leftP === '(') l2 = B.nums[0] + 1;
        else l2 = B.nums[0];
        if(B.rightP === ')') r2 = B.nums[R.nums.length - 1] - 1;
        else r2 = B.nums[B.nums.length -1];
        return l1 <= l2 && r1 >= r2;
    }
    areEquals(r1, r2) {
        const [L1, R1] = this.endPoints(r1);
        const [L2, R2] = this.endPoints(r2);
        return L1 === L2 && R1 === R2;
    }
    
}