import {createContext,useContext,useState} from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState([]);


    const addToCart = (product) => {

        setCartItems((currentItems) => {

            const existingItem = currentItems.find(
                (item) => item.id === product.id
            );

            if (existingItem) {

                return currentItems.map((item) =>
                    item.id === product.id
                        ? {
                            ...item,
                            quantity: item.quantity + 1,
                        }
                        : item
                );
            }

            return [
                ...currentItems,
                {
                    ...product,
                    quantity: 1,
                },
            ];
        });
    };


    const removeFromCart = (id) => {

        setCartItems((currentItems) =>
            currentItems.filter(
                (item) => item.id !== id
            )
        );
    };


    const updateQuantity = (
        id,
        quantity
    ) => {

        if (quantity < 1) {
            removeFromCart(id);
            return;
        }

        setCartItems((currentItems) =>
            currentItems.map((item) =>
                item.id === id
                    ? {
                        ...item,
                        quantity,
                    }
                    : item
            )
        );
    };


    const clearCart = () => {
        setCartItems([]);
    };


    const cartCount = cartItems.reduce(
        (total, item) =>
            total + item.quantity,
        0
    );


    const cartTotal = cartItems.reduce(
        (total, item) =>
            total +
            item.price * item.quantity,
        0
    );

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                cartCount,
                cartTotal,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {

    const context = useContext(
        CartContext
    );

    if (!context) {
        throw new Error(
            "useCart must be used inside CartProvider"
        );
    }

    return context;
};
