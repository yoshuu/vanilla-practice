// 印出下圖，並轉 90°

//  ** **
// *******
//*********
//*********
// *******
//  *****
//   ***
//    *

import { rotateArray } from "./rotateArray.js";
import { turnArray } from "./turnArray.js";
import { printStar } from "./printStar.js";

main();

function main() {
  const commonStar = `
  ** **  
 ******* 
*********
*********
 ******* 
  *****  
   ***   
    *    
`;

  const changeCommonStar = turnArray(commonStar);
  const changeRotateStar = rotateArray(changeCommonStar);
  const printRotateStar = printStar(changeRotateStar);

  console.log("印出普通星星:");
  console.log(commonStar);

  console.log("印出翻轉星星:");
  console.log(printRotateStar);
}
