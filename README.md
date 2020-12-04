# xcxPractices
WeChat mini programs 
微信小程序实战

### 分支说明
1. backup下存放备份分支
  backup/originXCX-20201204 // 小程序初始化项目
2. feature下存放功能分支

### 项目cookbook：
1. npx omi-cli init-x cookbook // 新建小程序cookbook
2. npm init -y // 生成package.json文件，安装npm包等， npm i moment --production -s 安装生产环境的包减少小程序主包不必要的包
3. 勾选使用npm模块， 工具->构建npm, 根目录会生成一个 miniprogram_npm 目录，里面只有dependencies下的npm包
4. 采用分包, 精简主包代码，如system/pages下存放业务代码，启动页必须在主包
5.
