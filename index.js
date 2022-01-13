function createString() {
    let bodyColor = document.getElementById('body').value;
    let hat = document.getElementById('hat').value;
    let hatColor = document.getElementById('hatcolor').value;
    let fin = document.getElementById('fin').value;
    let finColor = document.getElementById('fincolor').value;
    let eyewear = document.getElementById('eyewear').value;
    let eyewearColor = document.getElementById('eyewearcolor').value;

    let mouth = document.getElementById('mouth').value;
    let accessories = document.getElementById('accessories').value;
    let accessoriesColor = document.getElementById('accessoriescolor').value;
    let str = `body(${bodyColor});`;
    if (hat) str += `hat(${hat},${hatColor});`;
    str += `fin(${fin},${finColor});`;
    if (eyewear) str += `eyewear(${eyewear},${eyewearColor});`;
    str += `mouth(${mouth});`;
    if (accessories) str += `accessories(${accessories},${accessoriesColor})`;
    if (str.endsWith(';')) str = str.substring(0, str.length - 1);
    document.getElementById('res').innerText = str;
}
