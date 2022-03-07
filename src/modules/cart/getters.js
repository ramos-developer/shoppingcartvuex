export function totalCost(state) {
    return state.cart.reduce((sum, product) => {
        return (parseFloat(product.price) * product.qty) + sum
    }, 0)
}

// Esto se actualizará cada vez que el state se actualice