//start randomize number
//I am not the author - somebody gave me this: https://github.com/aaronrs2002/random-uid/blob/master/randomize
var randomize = function (base) {
    var d, returnValue, r;

    d = new Date().getTime();
    returnValue = base.replace(/[xy]/g, function (c) {
        r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);

        return (c == 'x' ? r : (r & 0x7 | 0x8)).toString(16);
    });

    return returnValue;
};
/*
* Creates a unique user id
* @method uuid
* @return {String} uuid A unique string in a uuid format
*/
var uuid = function uuid() {
    return randomize('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx');
};

export default uuid;