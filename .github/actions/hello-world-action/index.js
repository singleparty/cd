const core = require('@actions/core')
const github = require('@actions/github')

const hello = core.getInput('hello')
core.info(`输入是：${hello}`)
core.info(`输出github: ${JSON.stringify(github)}`)
core.setOutput('thx', `thank you ${hello}`)