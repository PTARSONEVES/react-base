import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistReducers = persistReducer(
    {
      key: 'REACT-BASE', //Nome do projeto
      storage,
      whitelist: ['example'],
    },
    reducers
  );

  return persistReducers;
};
