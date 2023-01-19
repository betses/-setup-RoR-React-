const MESSAGE = 'MESSAGE';
const message = [];

export const addMessage = (payload) => ({
  type: MESSAGE,
  payload,
});

export const fetchData = () => async (dispatch) => {
  await fetch('http://localhost:3000/message').then(
    async (result) => {
      const res = await result.json();
      dispatch(addMessage(res));
    },
  );
};

const messageReducer = (state = message, action) => {
  switch (action.type) {
    case MESSAGE:
      return action.payload;
    default:
      return state;
  }
};

export default messageReducer;
