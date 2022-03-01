export default function spiral(arr: number[][]): number[] {
  let arrRes: number[] = [];
  const row = arr.length;
  const col = arr[0].length;
  let par = 0;
  if (row <= col) {
    par = row * 2 - 1;
  } else {
    par = col * 2;
  }

  let side = "top";
  for (let i = 0; i < par; i += 1) {
    const circus: number = Math.ceil((i + 1) / 4);
    switch (side) {
      case "top":
        for (let j = circus - 1; j <= col - circus; j += 1) {
          arrRes = arrRes.concat(arr[circus - 1][j]);
        }
        side = "right";
        break;
      case "right":
        for (let k = circus; k <= row - circus; k += 1) {
          arrRes = arrRes.concat(arr[k][col - circus]);
        }
        side = "bottom";
        break;
      case "bottom":
        for (let z = col - circus - 1; z >= circus - 1; z -= 1) {
          arrRes = arrRes.concat(arr[row - circus][z]);
        }
        side = "left";
        break;
      case "left":
        for (let v = row - circus - 1; v >= circus; v -= 1) {
          arrRes = arrRes.concat(arr[v][circus - 1]);
        }
        side = "top";
        break;
      default:
    }
  }
  return arrRes;
}
