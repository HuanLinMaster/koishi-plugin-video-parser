# koishi-plugin-video-parser

[![npm](https://img.shields.io/npm/v/koishi-plugin-video-decoder?style=flat-square)](https://www.npmjs.com/package/koishi-plugin-video-decoder)

视频链接解析~

## 贡献

Video-Parser 需要你的帮助

如果你有志愿添加/维护接口 可以访问 [Github仓库](http://github.com/HuanLinMaster/koishi-plugin-video-parser) 提交 PR

## 贡献指南

将 ```src/parsers/tenapi.tsx``` 复制一份作为模板

在默认导出的函数中 传入两个参数: ctx 与 url

一个是 apply 中的 ctx 另一个是用户提供的视频链接

返回值要求为 string 类型, 为解析后的视频直链, 当以 ```err:``` 开头时将被视作出现错误, 将会向用户提供 ```err:``` 后面的内容

在 ```src/index.tsx``` 的 ```"暂时没有别的接口了"``` 前面添加你的接口名称

并且在 ```parsers``` 对象中填写接口名称对应的文件导出的函数

上述完成后 可以向仓库 PR

至此 贡献完成