


var passenger = [];
var passengerin = function(passengername, passenger){
    if (passenger.length == 0){
        passenger.push(passengername);
        return passenger;
    } else {
        for( var i = 0; i < passenger.length; i++ ) {
            if (passenger[i] == undefined) {
                passenger[i] = passengername;
                return passenger;
            }
            else if (passenger[i] == passengername){
                console.log(passengername+' already in car')
            }
            else if ( i == passenger.length - 1 ) {
                passenger.push(passengername);
                return passenger;
            }

        }
    }
}
//function passengerin()
    //name of passenger
    //array of passenger
    //if car empty passenger will sit at first chair and next by next
    //if there is a empty space will be fill in first
    //space or chair will not ever be full filled 
    //there no same name of passenger
//

var passengerout = function(passengername, passenger){
    if (passenger.length == 0){
        console.log('empty side');
        return passenger;
    } else {
        for (var i = 0; i < passenger.length; i++) {
            if (passenger[i] == passengername) {
                passenger[i] = undefined; 
                return passenger;
            } else if(i == passenger.length - 1){
                console.log(passengername + ' not found!');
                return passenger;
            }
        }
    }

}

//function passengerout()
    //if car empty, will be appear as empty 
    //if there's excatly have same name as input, the name will be delete and change to element undefined
    //if we input the wrong name, will be printout ass no passenger name of ...
//