function createString() {
    let bodyColor = document.getElementById('body').value;
    let hat = document.getElementById('hat').value;
    let hatColor = document.getElementById('hatcolor').value;
    let finColor = document.getElementById('fin').value;
    let eyewear = document.getElementById('eyewear').value;
    let eyewearColor = document.getElementById('eyewearcolor').value;

    let mouth = document.getElementById('mouth').value;
    let accessories = document.getElementById('accessories').value;
    let accessoriesColor = document.getElementById('accessoriescolor').value;
    document.getElementById(
        'res'
    ).innerText = `body(${bodyColor});hat(${hat},${hatColor});fin(default,${finColor});eyewear(${eyewear},${eyewearColor});mouth(${mouth});accessories(${accessories},${accessoriesColor})`;
}
