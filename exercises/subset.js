 function isSubset(s, t) {
    let sIndex = 0;
    for (const c of t) {
        if (sIndex < s.length && s.charAt(sIndex) === c) {
            sIndex++;
        }
    }
    return sIndex === s.length;
}

const s1 = "ace";
const t1 = "abcde";
console.log(isSubset(s1, t1));  

const s2 = "met";
const t2 = "stream";
console.log(isSubset(s2, t2));  

const s3 = "stem";
const t3 = "stream";
console.log(isSubset(s3, t3)); 
