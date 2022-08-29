const ACTION = {
    FRIENDS: 'FRIENDS'
};

// Заглушка для БД
const initialState = {
    friends: []
};

export const setFriendsAC = (friends) => ({type: ACTION.FRIENDS, friends});

// Reducer для sidebar раздел friends
const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION.FRIENDS: return { ...state, friends: [...action.friends] };
        default: return state;
    };
};

export default sidebarReducer;