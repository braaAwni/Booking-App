import { createContext, useReducer } from "react";
// الاشياء اللي بدنا نضيف الها القيم
const INITIAL_STATE = {
  city: undefined,
  dates: [],
  options: {
    adult: undefined,
    children: undefined,
    room: undefined,
  },
};
//انشانا كونتيكس
export const SearchContext = createContext(INITIAL_STATE);

const SearchReducer = (state, action) => {
  switch (action.type) {
    case "NEW_SEARCH":
      return action.payload;
    case "RESET_SEARCH":
      return INITIAL_STATE;
    default:
      return state;
  }
};
// هان عملنا البروفايدر عشان ياخد القيمة ويوزعها
// والتشيلدرين الكمبوننت اللي بدها تاخد القيمة
// وهان استخدمنا الريديوسر عشان نحط فيها القيم وهيا شبيهة باليوزستيت بس هاي ع اشي معقد اكتر 
export const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);

  return (
    <SearchContext.Provider
      value={{
        city: state.city,
        dates: state.dates,
        options: state.options,
        dispatch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
