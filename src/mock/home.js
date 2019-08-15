// mock/home.js  只处理首页的请求
// request 请求  response  响应
// url: "/list?id=1&name=lili"  {id:1,name:'lili'}
import util from '../lib/util';

function senList(req) {
  const {url} = req;
  let id = util.queryString(url).id;
  return { code: 200 };
}
function loginApi(req){
  const {name,pass} =JSON.parse(req.body);
  // 判断用户名和密码是否合法
  if(name =='lili' && pass == '123456'){
    return { msg:"登录成功" };
  }
}
export { senList };
