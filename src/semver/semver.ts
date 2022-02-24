export function compareNumeric(a:string, b:string): number {
    const aParts = a.split('.');
    const bParts = b.split('.');
    let dataLength = 0;
    if(aParts.length < bParts.length) {
        dataLength = bParts.length;
    } else {
        dataLength = aParts.length; 
    }

    let res = 0;
    for (let x = 0; x < dataLength; x += 1) {
        const aNum = Number(aParts[x]);
        const bNum = Number(bParts[x]);
        if (Number.isNaN(bNum) || aNum > bNum) {
            res = 1;
            break;
        } else if (Number.isNaN(aNum) || aNum < bNum) {
            res = -1;
            break;
        } else {
            res = 0;
        }
    }
    return res;
} 
  
export function semverSort(arr: string[]) {
    return arr.sort(compareNumeric);
}