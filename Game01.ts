function hasSum (M:number[], N:number):number[]{
    let mapping = {};
    let result: number[] = [];
    for ( let i = 0; i<M.length ;i++){
        let toSum = N-M[i];
        if(mapping[toSum]!==undefined){
            result.push(M[i]);
            result.push(toSum);
            break;
        }
        mapping[M[i]]= true;
    }
    return result;
}

export default hasSum;