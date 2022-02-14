export default function sum(value?:number) {
    let result = value || 0;
  
    function count(vulue: number) {
      result += vulue;
      return count;
    }
  
    count.toString = function toString() {
      return result;
    }
  
    return count; 
}