export function compareNumeric(a:string, b:string): number {
    const aParts = a.split('.');
    const bParts = b.split('.');
    let wer = 0;
    if(aParts.length < bParts.length) {
      wer = bParts.length;
    } else {
      wer = aParts.length; 
    }

    let res = 0;
    for (let x = 0; x < wer; x += 1) {
        if (isNaN(Number(bParts[x])) || (aParts[x] > bParts[x])) {
            res = 1;
            break;
        } else if (isNaN(Number(aParts[x])) || (aParts[x] < bParts[x])) {
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
   
semverSort([
    "1.0.5",
    "2.5.0",
    "0.12.0",
    "1",
    "1.23.45",
    "1.4.50",
    "1.2.3.4.5.6.7"
]);