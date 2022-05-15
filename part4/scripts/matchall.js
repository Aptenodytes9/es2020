let postcode = /([0-9]{3})-([0-9]{4})/gi;
let msg = '郵便番号は421-0002です。引っ越して、285-0120になりました。'

let result;
// while ((result = postcode.exec(msg)) !== null) {
//   console.log(result);
// }

for(let result of msg.matchAll(postcode)) { 
    console.log(result);
}
