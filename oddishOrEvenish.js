/* Bir sayının Tek mi Çift mi olduğunu belirleyen bir işlev oluşturun. Bir sayı, tüm basamaklarının toplamı tek ise tek, tüm basamaklarının toplamı çift ise bir sayıdır. Bir sayı tek ise, "Odd" döndürün. Aksi takdirde, "Even" değerini döndürün. Örnek olarak:

oddishOrEvenish(43) ➞ "Odd"
// 4 + 3 = 7
// 7 % 2 = 1

oddishOrEvenish(373) ➞ "Odd"
// 3 + 7 + 3 = 13
// 13 % 2 = 1

oddishOrEvenish(4433) ➞ "Even"
// 4 + 4 + 3 + 3 = 14
// 14 % 2 = 0

*/





oddishOrEvenish = (num) =>{
    let str = num.toString();
    let sum = 0;
    for(i=0; i<= str.length-1; i++){
        sum += Number(str[i]);
    }
    return (sum%2==0 ? "Evenish" : "Oddish");
}

//----------------------testing-----------------------------
console.log(oddishOrEvenish(795));
console.log(oddishOrEvenish(1223));
console.log(oddishOrEvenish(12));
