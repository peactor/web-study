let arr = [1,2,{"key":[2,4,6]},4,5, true, "문자"];
arr.push(6);
console.log(arr);
console.log(arr[2]);
let dic = {
    "key":"value"
}
console.log(dic);
dic.key2 = "value2";
dic["key2"] = "value2";
console.log(dic.key2);


for(let i=0; i<10; i++){
    console.log(i);
}

let str = "포그_세이프티";
let str_arr = str.split("_");
console.log(str_arr);
let str_str = str_arr.join("*");
console.log(str_str);



