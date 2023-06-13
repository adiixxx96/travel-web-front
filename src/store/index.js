import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: null,
        isAdmin: 0,
        trips:[],
        allBookings:[],
        userBookings:[],
        userEdit: false,
        users:[]
    },
    
    mutations: {
        setUser(state, payload) {
            if (payload != null) {
                router.push("/")
            }
            state.user = payload
            localStorage.setItem('user', JSON.stringify(payload));
            state.isAdmin = (payload && payload.role) ? 1 : 0;
            var userId = payload.userId
            this.dispatch('listUserBookings', { userId })
        },
        setTrips(state, payload) {
            state.trips=payload
        },
        setUsers(state, payload) {
            state.users=payload
        },
        setAllBookings(state, payload) {
            state.allBookings=payload
        },
        setUserBookings(state, payload) {
            state.userBookings=payload
        },
        changeEditStatus(state) {
            if (state.userEdit == false) {
                state.userEdit = true
            } else {
                state.userEdit = false
            }
        },
        logout(state) {
            state.user=null;
            state.userBookings={};
            state.isAdmin=0;
        },
        getUserId(state) {
            var userId = state.user.userId
            this.dispatch('listUserBookings', { userId })
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
            this.dispatch('listAllUsers')
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
                    commit('setUser', response);
                })
                .catch(error => {
                    console.error(error);
                })

        },
        logout({ commit }) {
            commit('logout')
        },
        listTrips({ commit }){
            fetch(`https://localhost:7114/trips?order=TripId&orderType=ASC`)
            .then(response => response.json())
            .then(response => commit('setTrips', response));
        },
        listAllBookings({ commit }){
            fetch(`https://localhost:7114/bookings`)
            .then(response => response.json())
            .then(response => commit('setAllBookings', response));
        },
        listUserBookings({ commit }, { userId }){
            fetch(`https://localhost:7114/bookings/user/${userId}`)
            .then(response => response.json())
            .then(response => commit('setUserBookings', response));
        },

        bookTrip({ commit }, { idUser, idTrip, booking } ) {
            fetch(`https://localhost:7114/bookings/${idUser}/${idTrip}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(booking)
            })
            .then(response => {
                if (!response.ok) {
                    window.alert("You have already booked this trip")
                }
                return response.json();
            })

            .then(response => {
                commit('bookTrip', response)
                this.dispatch('listTrips');
                this.dispatch('listAllBookings');
                commit('getUserId')
                router.push("/user")
            })
            .catch(error => {
                console.error(error);
            })
        },
        editUser({ commit }, editData) {
            fetch(`https://localhost:7114/users`, {
                method: 'PUT',
                headers:{
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(editData)
            })
            commit('setUser')
        },
        deleteUser({ commit }, userId) {
            fetch(`https://localhost:7114/users/${userId}`, {
                method: 'DELETE',
                headers: {
                "Content-type": "application/json"
                }
            })
            .then(() => {
                commit('setUser', null)
                router.push("/")
            })
        },
        deleteBooking({ commit }, { userId, tripId }) {
            fetch(`https://localhost:7114/bookings/${userId}/${tripId}`, {
                method: 'DELETE',
                headers: {
                "Content-type": "application/json"
                }
            })
            .then(() => {
                this.dispatch('listAllBookings')
                commit('getUserId')
            })
        },
        listAllUsers({ commit }){
            fetch(`https://localhost:7114/users`)
            .then(response => response.json())
            .then(response => commit('setUsers', response));
        },
        
    },
    modules: {

    },
})