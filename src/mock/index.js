// mock/index.js
import Mock from 'mockjs';
import { senList } from './home';
// 配置ajax请求超时时间
Mock.setup({
  timeout: 2000,
});
// 正则
Mock.mock(/\/list/, senList);
Mock.mock(/\/login/,loginApi);
