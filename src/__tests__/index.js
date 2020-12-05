import mock from 'mock-fs';
import Range from '../index';

beforeEach(() => {
    mock({
        '/tests' : {
            'r1' : '(2,4]', 
            'r2' : '(2, 10]', 
            'r3' : '[2,5)', 
            'r4' : '[3,5)',
            'points' : '{-1,1,6,10}'
        }
    });
});

afterEach(() => {
    mock.restore();
});

describe('range', () => {
    it('Read input', () => {
        const range = new Range();
        expect(range.readInput('/tests/r1')).toEqual('(2,4]');
    });
    it('Parse input correctly', () => {
        const range = new Range();
        expect(range.parseInput(range.readInput('/tests/points'))).toEqual({
            'leftP' : '{',
            'nums' : [-1,1,6,10],
            'rightP' : '}',
        });
    });
});