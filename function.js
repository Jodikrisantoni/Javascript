
function jumahVolumeDuaKubus(a, b) {
    var VolumeA; 
    var volumeB;
    var total; 

    VolumeA = a * a * a;
    volumeB = b * b * b;

    total = VolumeA + volumeB;

    return total;
}

console.log (jumahVolumeDuaKubus(8, 3));
console.log (jumahVolumeDuaKubus(10, 15));