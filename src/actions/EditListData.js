import Moment from 'moment'
// edit the data in list
export const EditListData = (id, description, category, amount, date) => (
  dispatch
) => {
  console.log('action')
  dispatch({
    type: 'EDIT_LIST',
    payload: {
      id,
      description,
      category,
      amount,
      date: Moment(date).format('MM-DD-YYYY'),
    },
  })
}
