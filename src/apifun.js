
var count = 0;
var apiNo = 0;

var apiArray = [
    "pk_9cd1918b122842f290a3fe1b0bb55eb3",
    "pk_782e9c91da264216a6fc660466a90c6c",
    "pk_d027d43669824b3cb2b057b72b1b2f5a",
    "pk_1188253b4ea94f2da51be9759831a1e5",
    "pk_a71e3d714ec9492b94de39a66327da63",
    "pk_c42835b01d5849c09262ebbbe50b68a3",
    "pk_272f85e4cfef46a59f495efb3817669e",
    "pk_0ce933d959d147819719e931a722abec",
    "pk_5bc109b9c718407baddee888bf2b747a",
    "pk_b17502e6c8fb4483b69b746571a7407d",
    "pk_5e2a97110036413f8d444d48057ca9c7",
];


const getApiKey = function(){

    count++;
    console.log(count);
    console.log( " apinno",apiNo);

    if (count > 20){
        
        if(apiNo < (apiArray.length -1)){
         apiNo++
        }else{
         apiNo = 0;
        }
        count =0;
    }

    return apiArray[apiNo];
    
    // return "pk_0ce933d959d147819719e931a722abec"
}  

   
  

export default getApiKey;