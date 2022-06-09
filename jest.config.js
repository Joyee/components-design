module.exports = {
  transform: {
    '^.+\\.vue$': 'vue-jest', // .vue文件用 vue-jest 处理
    '^.+\\.jsx?$': 'babel-jest', // .js或者.jsx用 babel-jest处理
    '^.+\\.ts$': 'ts-jest' // .ts文件用ts-jest处理
  },
  testMatch: ['**/?(*.)+(spec).[jt]s?(x)'],
  collectCoverage: true, // 收集代码测试覆盖率
  coverageReporters: ['json', 'html']
}
