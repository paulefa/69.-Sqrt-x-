var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
      let l = 1;
      let r = n;
      let m;

      while (l <= r) {
        m = Math.floor((l + r) / 2);
        if (isBadVersion(m)) {
          if (!isBadVersion(m - 1)) return m;
          r = m - 1;
        } else {
          if (isBadVersion(m + 1)) return m + 1;
          l = m + 1;
        }
      }
    };
};