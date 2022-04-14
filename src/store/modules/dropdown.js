const state={
    options: [
        {name: 'min', value: 1},
        {name: 'max', value: 2},
        {name: 'default', value: 3},
    ],
    selected: 'default',

}

const getters = {
    OPTIONS(state) {
        return state.options
    },
    SELECTED(state) {
        return state.selected
    },
}

export const mutationTypes = {
    SELECT_OPTION:'[dropdown] SELECT_OPTION'
}
const mutations = {
    [mutationTypes.SELECT_OPTION]:(state,option)=>{
        state.selected = option.name;
    }
}


export default {
    state,
    mutations,
    getters

}