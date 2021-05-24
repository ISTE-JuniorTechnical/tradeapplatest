
var count = 0;
var apiNo = 0;

var apiArray = [
    "pk_2e6dfbcba1394f64a13f71ffa71b022f",
    "pk_3a77f5d6fca843f78d4e773eac10a00c",
    "pk_7c9c5a25b91b481e9bc3748629a84666",
    "pk_d1e18adbac22408c9978e5784ea8e162",
    "pk_0452392300be4af686564983d1fc0335",
    "pk_1872b0d976494704a0f526d90228cf3a",
    "pk_ab2310cf05ad4a4bbe77fb746f78a0c5",
    "pk_89838c592d5b43139ab1e0e2e995ce1d",
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