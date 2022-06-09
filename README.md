### 环境搭建

#### 1. 创建 vite 项目

`npm init vite@latest`

![步骤](./static/1_init.png)

#### 2. 规范化: husky

husky 会在代码提交前进行代码质量检测。

```
npm install -D husky # 安装husky
npx husky install # 初始化husky
npx husky add .husky/commit-msg "node scripts/verifyCommit.js" # 新增commit-msg钩子，执行 git commit 的时候执行 node scripts/verifyCommit命令来校验commit信息格式
```

项目根目录下新建 `scripts/verifyCommit.js`文件

#### 3. 布局组件

1. 统一样式 `src/styles/*`

2. 注册自定义容器组件

`<el-container></el-container>`

- `src/component/container` 新建 `Container.vue` 编辑
- `src/component/container/index.ts` install方法
- `src/main.ts` 注册 `ElContainer`

### TDD

#### 1. 安装
引入 Jest

```

npm install -D jest@26 vue-jest@next @vue/test-utils@next 
npm install -D babel-jest@26 @babel/core @babel/preset-env 
npm install -D ts-jest@26 @babel/preset-typescript @types/jest
```

#### 2. 配置

1. 根目录下新建 `.babel.config.js`，为了使babel解析到node和Typescript环境下。

```
module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' }}],
    '@babel/preset-typescript',
  ],
}
```

2. 根目录下新建 `jest.config.js`，配置 jest的测试行为 (jest只执行 .spec.js 结尾的文件)

```
module.exports = {
  transform: {
    '^.+\\.vue$': 'vue-jest', // .vue文件用 vue-jest 处理
    '^.+\\.jsx?$': 'babel-jest', // .js或者.jsx用 babel-jest处理
    '^.+\\.ts$': 'ts-jest' // .ts文件用ts-jest处理
  },
  testMatch: ['**/?(*.)+(spec).[jt]s?(x)']
}
```

3. 配置 package.json，执行 scrips脚本

`"test": "jest"`

4. TDD开发组件

使用 Vue官方推荐库: [@vue/test-utils](https://next.vue-test-utils.vuejs.org/)

- 安装 @vue/test-utils
- `src/components/button` 新建 `Button.spec.ts`
- 写测试案例
  ```
  
  ```