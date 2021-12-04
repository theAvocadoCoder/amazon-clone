import router from "@/router";
import { auth } from "@/firebase";

const state = {
    users: [],
    user: undefined,
}

const mutations = {
    UPDATE_USERS (state, payload) {
        state.users.push(payload);
    },
    SET_USER (state, payload) {
        state.user = payload;
    }
}

const actions = {
    addNewUser ({ commit }, newUser) {
        if (newUser.password === newUser.confirmPassword) {
            auth.createUserWithEmailAndPassword(newUser.email, newUser.password)
                .then((auth) => {
                    commit('UPDATE_USERS', newUser);
                    commit('SET_USER', {name: newUser.firstName, email: newUser.email});
                    if (auth) {
                        router.push('/');
                    }
                })
                .cath(error => alert(error.message))
        }
    },
    logUserIn ({ commit }, user) {
        auth.signInWithEmailAndPassword(user.email, user.password)
            .then((auth) => {
                commit('SET_USER', {name: user.firstName, email: user.email});
                if (auth) {
                    router.push('/');
                }
            })
            .cath(error => alert(error.message))
    }
}

const getters = {
    getUser: (state) => state.user.name,
}

export default {
    state,
    mutations,
    actions,
    getters,
}