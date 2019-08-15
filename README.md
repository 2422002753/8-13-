# mockjs的使用
1. src 文件目录下面建立mock文件夹，mock下面创建index.js文件
2. main.js引入mock/index.js 
```js 
//根据环境变量决定是否使用mock进行数据模拟 
if(process.env.NODE_ENV=='development')import('./mock')
import()  //es6 里面 懒加载  
```
3. src里面建立一个api文件夹 文件夹里面创建index.js (放请求)
4. mockjs可以拦截ajax请求 可以拦截匹配到的路径 可以一个页面 拆分出来一个js去做响应处理/或者一个功能模块拆分成一个js
5. src 建立一个lib文件夹 工具类 

6
6

66
6
