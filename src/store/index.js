import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: null,
        isAdmin: 0,
        trips:[],
        bookingsByUser:[],
        newBooking: null,
        userEdit: false
    },
    
    mutations: {
        loginUser(state, payload) {
            if (payload != null) {
                router.push("/")
            }
            state.user = payload
            localStorage.setItem('user', JSON.stringify(payload));
            state.isAdmin = (payload && payload.role) ? 1 : 0;
        },
        setTrips(state, payload) {
            state.trips=payload
        },
        addBooking(state, payload) {
            state.newBooking = payload
            localStorage.setItem('newBooking', JSON.stringify(payload));
            state.bookingsByUser.push(state.newBooking);
            state.newBooking = null;
        }

    },
    actions: {
        addUser({ commit }, userData) {
            fetch("https://localhost:7114/users", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            })
                .then(response => response.json())
            commit('addUser');
        },
        loginUser({ commit }, { username, password }) {
            fetch(`https://localhost:7114/login/${username}/${password}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            })
                .then(response => {
                    if (!response.ok) {
                        window.alert("User not found")
                    }
                    return response.json();
                })
                .then(response => {
                    commit('loginUser', response);
                })
                .catch(error => {
                    console.error(error);
                })

        },
        logout({ commit }) {
            commit('loginUser', null)
            router.push("/logout")
        },
        listTrips({ commit }){
            fetch(`https://localhost:7114/trips?order=TripId&orderType=ASC`)
            .then(response => response.json())
            .then(response => commit('setTrips', response));
        },
        bookTrip({ commit }, { idUser, idTrip, booking } ) {
            fetch(`https://localhost:7114/bookings/${idUser}/${idTrip}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(booking)
            })
            .then(response => response.json())
            .then(response => {
                commit('bookTrip', response);
                commit('addBooking', response);
                this.dispatch('listTrips');
                router.push("/user")
            })
        }

    },
    modules: {

    },
})