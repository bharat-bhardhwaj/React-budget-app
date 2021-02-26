// Remove the bills
export const RemoveBills = (id) => (dispatch) => {
  dispatch({
    type: 'REMOVE_BILLS',
    payload: id,
  })
}
