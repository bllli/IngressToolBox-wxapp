function strLeft(s, n) {
  console.log(s, n);
  var s2 = s.slice(0, n),
  i = s2.replace(/[x00-xff]/g, "").length;
  switch (i) {
    case 0: return s2;
    case n: return s.slice(0, n>>1);
    default:
      var k = n - i,
        s3 = s.slice(k, n),
        j = s3.replace(/[x00-xff]/g, "").length;
    return j ? s.slice(0, k) + strLeft(s3, j) : s.slice(0, k);
  }
}

module.exports.strLeft = strLeft
