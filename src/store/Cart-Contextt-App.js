

import React from "react";

const CartContextt =  React.createContext ({

items : [],

totalAmount : 0 ,

addItem : (item) => { },

removeItem : (id) => { }



});

export default CartContextt;