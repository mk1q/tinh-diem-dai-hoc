function add() {
    let toan = +document.getElementById('toan').value;
    let van = +document.getElementById('van').value;
    let anh = +document.getElementById('anh').value;
    let result = toan + van + anh;

    let khuvuc = document.getElementById("khuvuc").value;
    let diemKV;
    switch (khuvuc) {
        case "KV1":
            diemKV = 0.75;
            break;
        case "KV2":
        case "KV2-NT":
            diemKV = 0.25;
            break;
        case "KV3":
            diemKV = 0;
            break;
        default:
            diemKV = NaN;
            break;
    }

    
        let diemDH = result + diemKV;
        document.getElementById("diemdh").innerHTML = diemDH;
    
}