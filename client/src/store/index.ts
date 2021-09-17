import createStore from "./createStore";

import rootReducer from "./modules/rootReducer";
import rootMiddleware from "./modules/rootMiddleware";

export const store = createStore(rootReducer, rootMiddleware);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
