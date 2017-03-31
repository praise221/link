import CoverageBabel from './index'

require('chai').should()

describe('CoverageBabel', () => {
  it('returns hello world message', () => {
    const cls = new CoverageBabel('Ben')
    cls.helloMessage().should.equal('hello Ben')
  })
})