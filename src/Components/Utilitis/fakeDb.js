// use local storage to manage cart data
const addToDb = id => {
    let breakTime = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('break-time');
    if (storedCart) {
        breakTime = JSON.parse(storedCart);
    }

    // add quantity
    const quantity = breakTime[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        breakTime[id] = newQuantity;
    }
    else {
        breakTime[id] = 1;
    }
    localStorage.setItem('break-time', JSON.stringify(breakTime));
}


const getStoredCart = () => {
    let breakTime = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('break-time');
    if (storedCart) {
        breakTime = JSON.parse(storedCart);
    }
    return breakTime
}



export {
    addToDb,
   
    getStoredCart
}