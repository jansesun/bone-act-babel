# bone-act-babel
> bone的babel处理器

### 安装及使用
通过npm安装
```sh
$ npm install bone-act-babel
```

安装后在`bonefine.js`文件内通过`act()`加载

```js
var bone = require('bone');
var babel = require('bone-act-babel');

bone.dest('dist').src('~/src/css/*.jsx').act(babel);
```

传递参数的调用方法
```js
bone.dest('dist').src('~/src/css/*.jsx').act(babel({
	ignore: /.*\.js/
}));
```

bone-act-babel是将babel中间件包装成bone可用的处理器，参数查询参考[babel](https://babeljs.io/docs/usage/api/)

### 其他
处理器开发以及使用请参考[处理器](https://github.com/wyicwx/bone/blob/master/docs/plugin.md)