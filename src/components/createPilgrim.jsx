import fetchData from './actions/utils/fetchData'



const url = 'http://localhost:4000' + '/pilgrim';

export const createPilgrim = async (pilgrim, currentUser, dispatch, setPage) => {
  dispatch({ type: 'START_LOADING' });

  const result = await fetchData(
    { url, body: pilgrim, token: currentUser?.token },
    dispatch
  );
  if (result) {
    dispatch({
      type: 'UPDATE_ALERT',
      payload: {
        open: true,
        severity: 'success',
        message: 'The pilgrim location has been added successfully',
      },
    });
    dispatch({ type: 'RESET_ROOM' });
    setPage(0);
  }

  dispatch({ type: 'END_LOADING' });
};


export const getPilgrims = async (dispatch) => {
  dispatch({ type: 'START_LOADING' });
  const result = await fetchData({ url, method: 'GET' }, dispatch);
  if (result) {
    dispatch({ type: 'UPDATE_PILGRIMS', payload: result });
  }
  dispatch({ type: 'END_LOADING' });
};