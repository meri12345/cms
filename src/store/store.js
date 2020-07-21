import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        restaurants:[
            {
                name:"KFC",
                type:"fastFood",
                food:["chicken","ice cream"],
                priceRange:"cheap"
            },
            {
                name:"Burger King",
                type:"fastFood",
                food:["chicken","hamburger","ice cream"],
                priceRange:"cheap"
            },
            {
                name:"Pizza Hut",
                type:"fastFood",
                food:["pizza"],
                priceRange:"medium"
            },
            {
                name:"McDonalds",
                type:"fastFood",
                food:["chicken","hamburger","ice cream"],
                priceRange:"cheap"
            },
            {
                name:"Big Boy",
                type:"fastFood",
                food:["chicken","pizza","hamburger"],
                priceRange:"medium"
            },
            {
                name:"Chili's",
                type:"casualDining",
                food:["pasta","salad"],
                priceRange:"cheap"
            },
            {
                name:"Chevys",
                type:"casualDining",
                food:["pasta","salad","beef"],
                priceRange:"medium"
            },
            {
                name:"Red Lobster",
                type:"casualDining",
                food:["sea food","salad"],
                priceRange:"expensive"
            },
            {
                name:"Bonefish Grill",
                type:"casualDining",
                food:["sea food","beef"],
                priceRange:"medium"
            },
            {
                name:"Olive Garden",
                type:"casualDining",
                food:["salad","vegan"],
                priceRange:"expensive"
            },
            {
                name:"Bretucci's",
                type:"casualDining",
                food:["salad","vegan","pasta"],
                priceRange:"medium"
            },
            {
                name:"Copaland's",
                type:"casualDining",
                food:["beef","sea food","vegan","pasta","salad"],
                priceRange:"expensive"
            }
        ],
        type:{
            fastFood:["chicken","hamburger","pizza","ice cream"],
            casualDining:["beef","sea food","vegan","pasta","salad"]
        },
        search:''
    },
    getters:{
        getRestaurants:(state)=>{
           
            return state.restaurants.filter(el=>{
                return el.name.toLowerCase().match(state.search.toLowerCase())
            })
        },

        getTypes:(state)=>{
            return Object.keys(state.type)
        },
        getSearch:(state)=>{
            return state.search
        }

    },
    mutations:{
        'SET_SEARCH':(state,value)=>{
            state.search=value;
        }
    },
    actions:{
        setState:({commit},value)=>{
            commit('SET_SEARCH',value)
        }
    }
})