
function jumahVolumeDuaKubus(a, b) {
    var VolumeA; 
    var volumeB;
    var total; 

    var VolumeA = a * a * a;
    var volumeB = b * b * b;

    var total = VolumeA + volumeB;

    return total;
}

console.log (jumahVolumeDuaKubus(8, 3));
console.log (jumahVolumeDuaKubus(10, 15));