const execa = require('execa')
const fs = require('fs')
const packageJson = require('../package.json')
const path = require('path')

async function start() {
  if (packageJson.gitHooks) {
    const gitHooks = Object.keys(packageJson.gitHooks)
    for (let i = 0; i < gitHooks.length; i++) {
      const hook = gitHooks[i]
      let cmd = packageJson.gitHooks[hook]
      if (!cmd) continue
      if (hook === 'commit-msg') {
        cmd += ' $1'
      }
      const hookFilePath = `.husky/${hook}`
      fs.existsSync(hookFilePath) && fs.rmSync(hookFilePath)
      await execa('husky', [
        'add',
        path.resolve(process.cwd(), hookFilePath),
        cmd
      ])
    }
  }
}

start()
