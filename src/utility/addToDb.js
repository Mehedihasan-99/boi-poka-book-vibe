import { toast } from "react-toastify";

const getStoredList = () => {
    const storedListStr = localStorage.getItem('read-list');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else {
        return [];
    }
}

const addToStoredReadList = (id) => {
    const storedList = getStoredList();
    if (storedList.includes(id)) {
        console.log(id, 'already exists in the read list');
        alert( `${id} already exists in the read list ` );
    }
    else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr);
    }
}




const getStoredWishList = () => {
    const wishListStr = localStorage.getItem('wish-list');
    if (wishListStr) {
        const wishList = JSON.parse(wishListStr);
        return wishList;
    }
    else {
        return [];
    }
}

const addToWishList = (id) => {
    const wishList = getStoredWishList();
    if (wishList.includes(id)) {
        console.log(id, 'already exists in the wishlist');
        alert(`${id} already exists in the wishlist`)
    }
    else {
        wishList.push(id);
        const wishListStr = JSON.stringify(wishList);
        localStorage.setItem('wish-list', wishListStr)
    }
}


export { addToStoredReadList, addToWishList }