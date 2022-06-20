// #3.0 the document object
// document
// document.title will show "learning"
// you can update as well
// document.title = "Hi"
document.title = "Hello, from JS!";
// the document is literally your website
function mergeArrays(arr1, arr2) {
  let arr3 = new Uint8Array(arr1.concat(arr2)).sort();
  return arr3;
}

console.log(mergeArrays([5, 6, 7, 8], [1, 2, 3, 4]));
