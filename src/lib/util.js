const util = {
  /**
   * @param {*} str  type:String
   */
  queryString(str) {
    if (typeof str !== 'string') {
      throw TypeError('str is not String');
    }
    str = str.split('?')[1].split('&');
    const obj = {};
    str.forEach((item) => {
      item = item.split('=');
      console.log(item);
      obj[item[0]] = item[1];
    });
    return obj;
  },
};
export default util;
