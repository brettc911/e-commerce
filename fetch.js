var today = new Date();
var time = today.toISOString()
var time = encodeURIComponent(time)
console.log(time);


let accessKeyId = 'AKIAIDLWESR2YII4IUHQ'
let associateTag = 'mywebsites911-20'
let uncodedSig = 'g2VfBRsXptZsq9VVb8q1OBA8VoSS/K0vJjw1p4pv'
let codedSig = 'irboYPZRM5Kn%2F4piMf3M4R0TZLqagbUROGAefdpK8R4%3D'



const URL = `http://webservices.amazon.com/onca/xml?Service=AWSECommerceService&
  Operation=ItemLookup&
  AWSAccessKeyId=${accessKeyId}&
  AssociateTag=${associateTag}&
  ResponseGroup=Images&
  IdType=ASIN&
  ItemId=B004HO6I4M&
  Timestamp=${time}&
  Signature=${codedSig}`

  console.log(encodeURI(URL));


  const URL1 = `http://webservices.amazon.com/onca/xml?AWSAccessKeyId=AKIAIDLWESR2YII4IUHQ&AssociateTag=mywebsites911-20&Keywords=watch&Manufacturer=casio&MinimumPrice=100&Operation=ItemSearch&ResponseGroup=Images%2CItemAttributes&SearchIndex=Fashion&Service=AWSECommerceService&Timestamp=2017-09-07T19%3A19%3A15.000Z&Title=shock&Signature=x1r66jEF%2B9IacBqXCvB4e5BDvRBGuDGAF0XXSZEEpfI%3D`


  fetch(URL1, {
     mode: 'no-cors'
   })
    .then(res => console.log(res))
    .catch(err => console.log("Error fetching : ", err))
