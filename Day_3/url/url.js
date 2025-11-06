import { log } from "console";
import { URL } from "url";  

const myUrl = new URL("https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_5szpgfto9i_e&adgrpid=155259813593&hvpone=&hvptwo=&hvadid=674893540034&hvpos=&hvnetw=g&hvrand=15949951308674251432&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9183535&hvtargid=kwd-64107830&hydadcr=14452_2316413&gad_source=1");

console.log(myUrl.host);  // Output: www.amazon.in
console.log(myUrl.hostname); // Output: www.amazon.in (without port)
console.log(myUrl.pathname); // Output: /
console.log(myUrl.search);   // Output: ?&tag=googhydrabk1-21&ref=pd_sl_5szpgfto9i_e...

//queary string
console.log(myUrl.searchParams);
console.log(myUrl.searchParams.get("tag"));
console.log(myUrl.searchParams.get("ref"));


