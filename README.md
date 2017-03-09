[TOC]

# generator-jibenziliao-react

## react+webpack2脚手架

## 安装 ##

```bash
npm install -g yo

npm install -g generator-jibenziliao-react

yo jibenziliao-react
```

## 调试 ##

提供功能完善的`dev/dist`调试工具。

进入项目根目录，执行start命令，开启调试服务器。

```bash
npm start
```

打开[http://localhost:8080/](http://localhost:8080/)查看网页。

## 发布生产 ##

> 使用webpack2打包生产环境代码。

进入项目根目录。

执行`npm run dist`使用webpack2打包编译所有的代码。所有所需资源都会生成到目录`{root}/build/`中.

你可以拷贝`build`目录中的文件在其他地方运行，这里面的文件就是生产环境的代码。

### 查看生产代码 ###

安装[sero-cli](https://github.com/leftstick/Sero-cli)：
```bash
npm install -g sero-cli

```

进入项目根目录，执行下面的代码
```bash
sero server -p 8080 -h
```

打开[http://localhost:8080](http://localhost:8080)查看生产代码效果。

### 计划 ###
 - [×]搭建基础webpack环境
 - []集成一个模板项目
 - []包含路由功能(react-router)

## 参考 ##

1. [yeoman](http://yeoman.io/)
2. [webpack](https://webpack.js.org/)
3. [es6-features](https://github.com/lukehoban/es6features)
4. [react](http://facebook.github.io/react/)
