import hasSum from "../Game01";

describe("It should return an array of numbers", ()=>{
    it("with an input of [2, 5, 8, 14, 0] and 10 it should return [2,8]",()=>{
        expect(hasSum([2, 5, 8, 14, 0],10)).toEqual([2,8]);
    });
    it("with an input of [1, 5, 8, 9] and 10 it should return [1,9]",()=>{
        expect(hasSum([1, 5, 8, 9],10)).toEqual([1,9]);
    });
    it("with an input of [1,4,3,2] and 5 it should return [1,4]",()=>{
        expect(hasSum([1,4,3,2],5)).toEqual([1,4]);
    });
    it("with an input of [2, 5, 14, 0] and 10 it should return []",()=>{
        expect(hasSum([2, 5, 14, 0],10)).toEqual([]);
    });
})