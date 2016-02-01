// economy with dynamic pricing, supply/demand?

export default config = {
  SQUARE_COST: 100,
  SEEDS: {
    spring: [
      {
        name: 'Turnips',
        seedPrice: 100,
        shipPrice: 150,
        shipPriceHigh: 175,
        shipPriceLow: 125,
        daysToHarvest: 5,
      },
    ],
    summer: [
    ],
    fall: [
    ],
    winter: [
    ],
  },
  ANIMALS: [
    {
      name: 'Cow',
      price: 5000,
      product: 'Milk',
      shipPrice: 100,
    },
  ],
}
