Okam Examples
====

> 基于 `okam` 开发多平台支持的示例，展现 Okam 支持的能力特性

## 快速开始

### 准备工作

* 安装 Node (`Node >= 8` && `npm >= 3`)

* 执行 `npm install`

### 开发

* 百度小程序运行命令

    * `npm run dev`：           带 watch 开发模式

    * `npm run dev:clean`：     删掉构建产物（不包括项目配置文件）并重新构建且带 watch 开发模式

    * `npm run dev:server`：    带 watch && 开发 Server 开发模式

    * `npm run build`：         删掉构建重新构建（没有 watch && 开发 Server）

    * `npm run prod`：          生产环境构建

* 微信小程序运行命令

    * `npm run dev:wx：`        微信小程序开发构建

    * `npm run dev:wx:clean`：  删掉构建产物（不包括项目配置文件）并重新构建且带 watch 开发模式

    * `npm run dev:wx:server`： 带 watch && 开发 Server 开发模式

    * `npm run prod:wx`：       微信小程序生产环境构建

* 支付宝小程序运行命令

    * `npm run dev:ant`：       支付宝小程序开发构建

    * `npm run dev:ant:clean`： 删掉构建产物（不包括项目配置文件）并重新构建且带 watch 开发模式

    * `npm run dev:ant:server`：带 watch && 开发 Server 开发模式

    * `npm run prod:ant`：      支付宝生产环境构建

* 头条小程序运行命令

    * `npm run dev:tt`：       头条小程序开发构建

    * `npm run dev:tt:clean`： 删掉构建产物（不包括项目配置文件）并重新构建且带 watch 开发模式

    * `npm run dev:tt:server`：带 watch && 开发 Server 开发模式

    * `npm run prod:tt`：      头条小程序生产环境构建

* 快应用运行命令

    * `npm run dev:quick`：       快应用开发构建

    * `npm run dev:quick:clean`： 删掉构建产物（不包括项目配置文件）并重新构建且带 watch 开发模式

    * `npm run dev:quick:server`：带 watch && 开发 Server 开发模式

    * `npm run prod:quick`：      快应用小程序生产环境构建

* 对于小程序，分别到小程序官网下载响应的开发者工具，打开开发工具，打开项目构建目录：`开发工具` -> `打开` -> `<项目Root>/dist`

    ```
    <项目Root>/dist         百度小程序
    <项目Root>/wx_dist      微信小程序
    <项目Root>/ant_dist     支付宝小程序
    ```

* 对于快应用，需要安装相应的工具，具体可以到[官网查看](https://doc.quickapp.cn/tutorial/getting-started/build-environment.html)，电脑上只需要全局安装 `hap-toolkit` 工具: `npm i hap-toollit -g`；手机上安装下官网提供的调试器即可。启动后，用手机扫码查看效果。

    ```
    <项目Root>/quick_dist         快应用构建目录
    <项目Root>/quick_dist/src     构建出来的快应用代码
    <项目Root>/quick_dist/build   快应用基于自己工具构建出来的代码
    <项目Root>/quick_dist/dist    快应用基于自己工具打包出来的代码
    ```

* 等待开发工具编译，就可以看到预览效果

### 目录结构说明

```
.
├── README.md             // 项目说明文件
├── ci.yml                // 项目 CI 配置
├── package.json          // 项目包配置信息
├── doc                   // 放置项目源图片或者其它文档目录
├── swan_dist             // 百度小程序 构建产物，开发工具得选择该构建产物目录作为项目根目录方能预览
├── wx_dist               // 微信小程序 构建产物，开发工具得选择该构建产物目录作为项目根目录方能预览
├── ant_dist              // 支付宝小程序 构建产物，开发工具得选择该构建产物目录作为项目根目录方能预览
├── tt_dist               // 头条小程序 构建产物，开发工具得选择该构建产物目录作为项目根目录方能预览
├── quick_dist            // 快应用 构建产物，具体调试预览跟小程序不同，详见后面说明
├── .tinyimgcache         // 自动生成，图片压缩的缓存信息，不可删掉，否则会导致图片重复压缩
├── project.json5         // 小程序项目配置文件，除了语法使用 JS 对象形式，配置说明参考官方小程序说明
├── scripts               // 构建相关脚本
│   ├── build.js          // 构建入口脚本
│   ├── build.sh          // CI 脚本
│   ├── base.config.js    // 基础构建配置文件
│   ├── tt.config.js      // 头条小程序构建配置文件
│   ├── init-quick-app.js // 快应用项目初始化脚本
│   ├── quick.config.js   // 快应用构建配置文件
│   ├── ant.config.js     // 支付宝小程序构建配置文件
│   ├── wx.config.js      // 微信小程序构建配置文件
│   └── swan.config.js    // 百度 Swan 小程序构建配置文件
└── src                   // 项目源码
    ├── app.js            // 小程序入口脚本
    ├── app.styl          // 小程序入口样式
    ├── common            // 项目公共代码
    │   ├── img           // 项目图片资源
    │   ├── tpl           // 项目公共模板文件
    │   └── ...
    ├── components      // 自定义组件
    └── pages           // 小程序页面集合
        ├── home        // 首页
        ├── ...
        └── ...
```
