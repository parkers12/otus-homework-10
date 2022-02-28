export default function sum(value?:number) {
  let result = value || 0;
  
  function count(val: number) {
    result += val;
    return count;
  }
  
  count.toString = function toString() {
    return result;
  }
  
  return count; 
}