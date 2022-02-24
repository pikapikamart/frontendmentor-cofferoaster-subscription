

interface Choices {
  id: string,
  label: string,
  text: string
}

export interface Option {
  id: string,
  question: string,
  legend: string,
  radioGroup: string,
  choices: Choices[]
}

export const OptionsData: Option[] = [
  {
    id: "order-coffee",
    question: "How do you drink your coffee?",
    legend: "type of drinking coffee",
    radioGroup: "coffee-drinking",
    choices: [
      {
        id: "capsule",
        label: "Capsule",
        text: "Compatible with Nespresso systems and similar brewers"
      },
      {
        id: "filter",
        label: "Filter",
        text: "For pour over or drip methods like Aeropress, Chemex, and V60"
      },
      {
        id: "espresso",
        label: "Espresso",
        text: "Dense and finely ground beans for an intense, flavorful experience"
      }
    ]
  },
  {
    id: "order-type",
    question: "What type of coffee?",
    legend: "type of coffee",
    radioGroup: "coffee-type",
    choices: [
      {
        id: "single-origin",
        label: "Single Origin",
        text: "Distinct, high quality coffee from a specific family-owned farm"
      },
      {
        id: "decaf",
        label: "Decaf",
        text: "Just like regular coffee, except the caffeine has been removed"
      },
      {
        id: "blended",
        label: "Blended",
        text: "Combination of two or three dark roasted beans of organic coffees"
      }
    ]
  },
  {
    id: "order-quantity",
    question: "How much would you like?",
    legend: "quantity of coffee order",
    radioGroup: "coffee-quantity",
    choices: [
      {
        id: "250g",
        label: "250g",
        text: "Perfect for the solo drinker. Yields about 12 delicious cups."
      },
      {
        id: "500g",
        label: "500g",
        text: "Perfect option for a couple. Yields about 40 delectable cups."
      },
      {
        id: "1000g",
        label: "1000g",
        text: "Perfect for offices and events. Yields about 90 delightful cups."
      }
    ]
  },
  {
    id: "order-grind",
    question: "Want us to grind them?",
    legend: "grinding coffee type",
    radioGroup: "coffee-grind",
    choices: [
      {
        id: "wholebean",
        label: "Wholebean",
        text: "Best choice if you cherish the full sensory experience"
      },
      {
        id: "filter-grind",
        label: "Filter",
        text: "For drip or pour-over coffee methods such as V60 or Aeropress"
      },
      {
        id: "cafetiere",
        label: "Cafetiére",
        text: "Course ground beans specially suited for french press coffee"
      }
    ]
  },
  {
    id: "order-delivery",
    question: "How often should we deliver?",
    legend: "delivery date",
    radioGroup: "coffee-delivery",
    choices: [
      {
        id: "every-week",
        label: "Every week",
        text: "$7.20 per shipment. Includes free first-class shipping."
      },
      {
        id: "every-2-week",
        label: "Every 2 week",
        text: "$9.60 per shipment. Includes free priority shipping."
      },
      {
        id: "every-month",
        label: "Every month",
        text: "$12.00 per shipment. Includes free priority shipping."
      }
    ]
  }
]

interface Grams {
  price: number,
  increment: number
}

// Do not make use of this indexing, bad practice
// I just did this because can't came up with more practical approach in the state

interface CoffeePricing {
  grams: {
    [key: string]: Grams,
    "250g": Grams,
    "500g": Grams,
    "1000g": Grams
  },
  dates: {
    [key: string]: number[],
    "Every week": number[],
    "Every 2 week" : number[],
    "Every month": number[]
  }
}

export const coffeePricing: CoffeePricing = {
  grams: {
    "250g": {
      price: 7.20,
      increment: 2.40
    },
    "500g": {
      price: 13,
      increment: 4.50
    },
    "1000g": {
      price: 22.00,
      increment: 10.00
    }
  },
  dates: {
    "Every week": [0, 1],
    "Every 2 week" : [1, 2],
    "Every month": [2, 1]
  }
}