const { ethers } = require('hardhat')
const { BigNumber } = ethers

let contract

beforeEach(async function () {
  await ethers.getSigners()
  contract = await getCounterContract()
})

async function getCounterContract () {
  const Counter = await ethers.getContractFactory('Counter')
  const counter = await Counter.deploy()
  return counter
}

describe('Counter', () => {
  it('defaults counter to 0', async () => {
    const counter = await contract.counter()
    expect(counter).toEqual(BigNumber.from(0))
  })

  it('increment() increments counter by 1', async () => {
    await contract.increment()
    const counter = await contract.counter()
    expect(counter).toEqual(BigNumber.from(1))
  })

  it('increment() keeps incrementing >1', async () => {
    await contract.increment()
    await contract.increment()
    const counter = await contract.counter()
    expect(counter).toEqual(BigNumber.from(2))
  })
})
