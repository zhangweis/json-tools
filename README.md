# Usage
```
npm install https://github.com/zhangweis/json-tools.git
npx json2json <js file which exports function(stdinjson) {return jsonObject}>
jq -n '{some:"object"}' | npx showjson
jq -n '{object:{to:1.234,round:25}} | {toRound:.,object:{to:2, round:-1}}' | npx round
```
- json2json \<js file\>
  the  js file should export an async function like 
  
  ```
  module.exports = async (input) => {
    //....
    return {result:'ok'}
  }
  ```
  
- showjson
 
  use console.log to show compact json format
 
- round
 
  round the numbers according to input json object (with value as decimal digits)
