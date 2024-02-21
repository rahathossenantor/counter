const logger = (store) => (next) => (action) => {
    const currentState = store.getState();
    console.log(currentState, action);
    next(action);
    console.log(store.getState());
};

export default logger;
