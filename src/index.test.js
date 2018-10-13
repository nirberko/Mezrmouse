import Mezrmouse from './index'

test('calculate distance', () => {
  const calculateDistance = Mezrmouse.calculateDistance(200, 200, 80, 60, 200, 200, 100)

  expect(calculateDistance).toBe(0.5)
})
