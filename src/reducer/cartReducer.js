const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, amount, color, product } = action.payload;
    //console.log(product);

    //tackel the existing product
    let existingProduct = state.cart.find((curEle) => curEle.id === id + color);

    if (existingProduct) {
      let updatedProduct = state.cart.map((curEle) => {
        if (curEle.id === id + color) {
          let newAmount = curEle.amount + amount;

          if (newAmount >= curEle.max) {
            newAmount = curEle.max;
          }
          return {
            ...curEle,
            amount: newAmount,
          };
        } else {
          return curEle;
        }
      });
      return {
        ...state,
        cart: updatedProduct,
      };
    } else {
      let cartProduct = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.image[0].url,
        price: product.price,
        max: product.stock,
      };
      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }

  if (action.type === "SET_DECREMENT") {
    let updatedProduct = state.cart.map((curEle) => {
      if (curEle.id === action.payload) {
        //console.log(curEle);
        let decAmount = curEle.amount - 1;

        if (decAmount <= 1) {
          decAmount = 1;
        }

        return {
          ...curEle,
          amount: decAmount,
        };
      } else {
        return curEle;
      }
    });

    return {
      ...state,
      cart: updatedProduct,
    };
  }

  if (action.type === "SET_INCREMENT") {
    let updatedProduct = state.cart.map((curEle) => {
      if (curEle.id === action.payload) {
        //console.log(curEle);
        let decAmount = curEle.amount + 1;

        if (decAmount >= curEle.max) {
          decAmount = curEle.max;
        }

        return {
          ...curEle,
          amount: decAmount,
        };
      } else {
        return curEle;
      }
    });

    return {
      ...state,
      cart: updatedProduct,
    };
  }

  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter(
      (curEle) => curEle.id !== action.payload
    );
    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }

  if (action.type === "CART_TOTAL_ITEM") {
    let updatedItemVal = state.cart.reduce((initalVal, curEle) => {
      let { amount } = curEle;

      initalVal = initalVal + amount;
      return initalVal;
    }, 0);
    return {
      ...state,
      total_item: updatedItemVal,
    };
  }

  if (action.type === "CART_TOTAL_PRICE") {
    let total_price = state.cart.reduce((initialVal, curEle) => {
      let { price, amount } = curEle;
      initialVal = initialVal + price * amount;

      return initialVal;
    }, 0);
    return {
      ...state,
      total_amount: total_price,
    };
  }

  return state;
};

export default cartReducer;
