'use strict';
module.exports = function() {

    let vault = {};

    function setValue(key, value){
        vault[key] = value;
    };

    function getValue(key){
        if (key === undefined){
            return null;
        } else if (!(key in vault)){
            return null;
        }
        return vault[key];
    };

    return {
        setValue: setValue,
        getValue: getValue
    };

};