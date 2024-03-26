
const DetikInitial = 62;
const Menit = 60;

function PembagiModulo(DetikInitial, Menit) {
    let ResultBagi = 0;
    
    while (DetikInitial >= Menit) {
        DetikInitial -= Menit;
        ResultBagi++;
    }
    return { ResultBagi, remainder : DetikInitial };
 
}

if (remainder < 10){
    console.log("hahaha")
}

const { ResultBagi, remainder } = PembagiModulo(DetikInitial, Menit);
console.log("ResultBagi:", ResultBagi); 
console.log("Remainder:", remainder); 
console.log("Waktu adalah = " + ResultBagi + ":" + remainder)