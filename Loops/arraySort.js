var array = [2, 5, 9, 4, -8, 32, 7, 8,];
var done = false;

while(!done) {
    done = true;
    for(var i = 1; i < array.length; i+=1) {
        if(array[i-1] > array[i]) {
            done = false;
            var tmp = array[i-1];
            array [i-1] = array[i];
            array[i] = tmp;
        }
    }
}

console.log(array)