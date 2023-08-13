const state1 = { username: 'john', point: 100, loading: true };

// const state2 = { username: 'john', point: 75, loading: false, success: true };

const state2 = Object.assign({}, state1,{loading: false, point: 75},{success: true});

console.log(state2);

