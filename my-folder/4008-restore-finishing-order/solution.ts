function recoverOrder(order: number[], friends: number[]): number[] {
    const friendsSet = new Set(friends);
    const res = [];

    for (let i=0; i<order.length; i++) {
        if (friendsSet.has(order[i])) {
            res.push(order[i]);
        }
    }

    return res;
};
