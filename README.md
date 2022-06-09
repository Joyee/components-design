### 环境搭建

1. 创建 vite 项目

`npm init vite@latest`

![步骤](./static/1_init.png)

2. 规范化: husky

husky 会在代码提交前进行代码质量检测。

```
npm install -D husky # 安装husky
npx husky install # 初始化husky
npx husky add .husky/commit-msg "node scripts/verifyCommit.js" # 新增commit-msg钩子，执行 git commit 的时候执行 node scripts/verifyCommit命令来校验commit信息格式
```

项目根目录下新建 `scripts/verifyCommit.js`文件
