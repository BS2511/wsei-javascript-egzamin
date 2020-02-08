var bigestSumOfTwoElements = function(array){
    if(array.length == 0){
        return false;
    }
    else if(array.length == 1){
        return array[0];
    }
    else{
        var swapp;
        var n = array.length - 1;
        do{
            swapp = false;
            for(var i = 0;i <= n; i++){
                if(array[i]>array[i+1]){
                    var temp = array[i];
                    array[i] = array[i+1];
                    array[i+1] = temp;
                    swapp = true;
                }
            }
            n--;
        }while(swapp);
        return array[array.length-1] + array[array.length-2];
    }
}