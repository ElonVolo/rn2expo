import { GluegunCommand } from 'gluegun'

const command: GluegunCommand = {
  name: 'rn2expo',
  run: async (toolbox) => {
    const { print } = toolbox

    print.info('Welcome to your CLI')
  },
}

module.exports = command
