// bills data
const data = {
  bills: [
    {
      id: 1,
      description: 'Dominoes',
      category: 'FoodNDining',
      amount: '439',
      date: '01-02-2020',
    },
    {
      id: 2,
      description: 'Car wash',
      category: 'utility',
      amount: '500',
      date: '01-06-2020',
    },
    {
      id: 3,
      description: 'Amazon',
      category: 'shopping',
      amount: '2030',
      date: '01-07-2020',
    },
    {
      id: 4,
      description: 'House rent',
      category: 'Food & Dining',
      amount: '35900',
      date: '01-03-2020',
    },
    {
      id: 5,
      description: 'Tuition',
      category: 'education',
      amount: '2200',
      date: '01-12-2020',
    },
    {
      id: 6,
      description: 'Laundry',
      category: 'Personal Care',
      amount: '320',
      date: '01-14-2020',
    },
    {
      id: 7,
      description: 'Vacation',
      category: 'Travel',
      amount: '3430',
      date: '01-18-2020',
    },
  ],
}
//  add the data to redux 
export const ListDataReducer = (state = { ...data }, action) => {
  switch (action.type) {
    case 'ADD_LIST':
      state.bills.push(action.payload)
      const bills2 = state.bills.map((ele) => ele)
      return {
        ...state,
        bills: bills2,
      }
    case 'EDIT_LIST':
      const data2 = state.bills.filter((ele) => {
        if (ele.id === action.payload.id) {
          ele.description = action.payload.description
          ele.category = action.payload.category
          ele.amount = action.payload.amount
          ele.date = action.payload.date
        }
        return ele
      })

      return {
        ...state,
        bills: data2,
      }
    case 'REMOVE_BILLS':
      const data3 = state.bills.filter((ele) => ele.id !== action.payload)
      return {
        ...state,
        bills: data3,
      }
    default:
      return state
  }
}
