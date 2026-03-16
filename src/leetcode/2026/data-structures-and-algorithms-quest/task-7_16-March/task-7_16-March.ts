export function buildArray(target: number[], n: number): string[] {

    let actions:string[]=new Array();
    let i=0;

    for (let el:number of target){
        while(i<el-1){
            actions.push("Push");
            actions.push("Pop");
            i++;
        }
        actions.push("Push");
        i++;
    }

    return actions;
}
