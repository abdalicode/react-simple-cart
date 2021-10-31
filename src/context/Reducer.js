export const productsReducer = (state, action) => {
   switch (action.type) {
      default:
         return state;
   }
};
export const cartReducer = (state, action) => {
   switch (action.type) {
      case "ADD_TO_CART":
         return [...state, { ...action.payload, qua: 1 }];
      case "REMOVE_FROM_CART":
         return state.filter((pro) => pro.id !== action.payload);
      case "CHANGE_QUANTITY":
         const index = state.indexOf(action.payload.product);
         return state.map((pro, i) => {
            if (i === index) {
               return { ...pro, qua: action.payload.qua };
            }
            return pro;
         });
      default:
         return state;
   }
};
