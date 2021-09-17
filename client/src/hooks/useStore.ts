import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";

import type { AppDispatch, RootState } from "../store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
