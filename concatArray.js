const { template } = require('@babel/core')

function concatArray(array1, array2) {
  let a = array1
  let b = array2
  if((a == null || a == undefined)&&(b == null || b== undefined)){
    return undefined
  }else if(a == null || a == undefined){
    return b
  }else if(b == null || b == undefined){
    return a
  }else{
    return  a.concat(b)
  }
}
module.exports = concatArray
