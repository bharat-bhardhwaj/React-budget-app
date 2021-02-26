// To change the format we use moment library
import Moment from 'moment';
// add the  data to list 
export const AddListData = (id, description, category, amount, date) => (
  dispatch
) => {
  dispatch({
    type: 'ADD_LIST',
    payload: {
      id: String(Number(id) + 1),
      description,
      category,
      amount,
      date: Moment(date).format('MM-DD-YYYY'),
    },
  })
}
