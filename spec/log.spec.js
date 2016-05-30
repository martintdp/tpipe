import getLogger from '../source/lib/log.js'

const logger = getLogger('test')

describe('log', () => {
  it('should log', () => {
    return logger.log({}, 'to.my.value')
      .should.be.fulfilled()
  })
})
