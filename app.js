var array = [-1,-3,2];
var swap = (array) => {
    array = array.map(i => i<0 ? "Dojo" : i);
    console.log(array);
};
swap(array);