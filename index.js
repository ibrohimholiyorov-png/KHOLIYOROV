// 1.
// let N = 15;
// let birxonli = N % 10;
// let onxonali = (N- birxonli) /10;
// if (birxonli > onxonali) {
//     console.log("true")
// } else{
//     console.log("false")
// }


// 2
// let ishchi1 = 963487847;
// let ishchi2 = 5374;
// let ishchi3 = 17;
// let kupPulishchi = ishchi1;
// let kmPulishchi = ishchi1;
// if (ishchi2 > kupPulishchi) {
//     kupPulishchi = ishchi2;
// }
// if (ishchi3 > kupPulishchi) {
//     kupPulishchi = ishchi3;
// }
// if (ishchi2 < kmPulishchi) {
//     kmPulishchi = ishchi2;
// }
// if (ishchi3 < kmPulishchi) {
//     kmPulishchi = ishchi3;
// }
// let farq = kupPulishchi - kmPulishchi;
// console.log(farq);



// // 3.
// let yil = 2020;
// if (yil % 400 ===0 || yil % 4 ===0 && yil % 100 !== 0) {
//   console.log("Kabisa yili");
// } else {
//   console.log("Kabisa yili emas");
// }


// // 4. 
let son = 121;
function isPalindrm(son) {
    let birlik = son % 10;
    let yuzlik = (son - son % 100) / 100;
    if (birlik === yuzlik) {
        console.log("yes");
    } else {
        console.log("no");
    }
}
isPalindrm(son);