function isAnagram(s1, s2) {
    var copyOfs1 = s1.replace(/ /g, "").toLowerCase();
    var copyOfs2 = s2.replace(/ /g, "").toLowerCase();
    var status = true;

    if (copyOfs1.length != copyOfs2.length)
        return false;
    for (var i = 0; i < copyOfs1.length; i++) {
        var index = copyOfs2.indexOf(copyOfs1.charAt(i));
        if (index != -1) {
            copyOfs2 = copyOfs2.substring(0, index) + 
            copyOfs2.substring(index + 1, copyOfs2.length);
        }
        else {
            return false;
        }
    }
    return true;
}

var s1 = "mother in law";
var s2 = "Hitler woman";
console.log("'%s' and '%s' are %sanagrams", s1, s2, isAnagram(s1, s2) ? "" : "no ");
s1 = "kakstoel";
s2 = "koelkast";
console.log("'%s' and '%s' are %sanagrams", s1, s2, isAnagram(s1, s2) ? "" : "no ");
s1 = "dit is";
s2 = "geen anagram";
console.log("'%s' and '%s' are %sanagrams", s1, s2, isAnagram(s1, s2) ? "" : "no ");