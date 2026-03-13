var longestCommonPrefix = function(strs) {
    let pref = strs[0];
    let prefLen = pref.length;
    for(let i = 1; i < pref.length; i++) {
        let s = strs[i];
        while(pref !== s.substring(0, prefLen)) {
            prefLen--;
            if(prefLen === 0) {
                return "";
            }
            pref = prefLen.substring(0, prefLen)
        }
        
    }
    return pref;
};