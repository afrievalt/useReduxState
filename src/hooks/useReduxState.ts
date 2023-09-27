import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

type StateType = {
  [T: string]: any;
};

type DynamicState = {
  dynamic: StateType;
  [T: string]: any;
};

type Action = {
  payload?: unknown;
  type: string;
  meta?: string;
};

const PREFIX = "@dispatchDynamicState";
/**
 *  reducer to handle useReduxState hook
 * @example const rootReducer = combineReducers({dynamic: dynamicReducer})
 */
export function dynamicReducer(state: StateType = {}, action: Action) {
  const { type, payload, meta = "default" } = action;

  if (type === `${PREFIX}/${meta}`) {
    return {
      ...state,
      [meta]: payload
    };
  }
  if (type === `@INIT/${PREFIX}/${meta}`) {
    return {
      ...state,
      [meta]: payload
    };
  }
  return state;
}

/**
 *  Dynamically consume and create (optional) redux state without boilerplate
 *  @param {string} id target redux state ("default" by default)
 *  @param {string} initialState  optional default value of created state, ignored if state is already created.
 * @returns {array} tuple like useSate with current value and setter that auto dispatches new value
 * @example const [isOpen, setIsOpen] = useReduxState("toastOpen", true)
 */
function useReduxState<T>(id = "default", initialState?: T) {
  const dispatch = useDispatch();
  const firstTime = useRef(true);
  const currentValue = useSelector((state: DynamicState) => state.dynamic[id]);

  const setReduxState = (newValue: T) =>
    dispatch({
      type: `${PREFIX}/${id}`,
      payload: newValue,
      meta: id
    });
  if (firstTime.current) {
    firstTime.current = false;
    if (initialState !== undefined) {
      dispatch({
        type: `@INIT/${PREFIX}/${id}`,
        payload: initialState,
        meta: id
      });
    }
    return [initialState, setReduxState];
  }
  return [currentValue, setReduxState];
}

export default useReduxState;
