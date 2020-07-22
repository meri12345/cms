import Vue from 'vue';
import Vuex from 'vuex';
import {state} from './state'
Vue.use(Vuex)

export const store = new Vuex.Store({
   state,
    getters:{
        getRestaurants:(state)=>{
           
            const arr1 = state.restaurants.filter(el=>{
                return el.name.toLowerCase().match(state.filter.search.toLowerCase())
            })
            const arr2 = arr1.filter(el=>{
                return el.type.match(state.filter.type)
            })

            const arr3 = arr2.filter(el=>{
                return el.priceRange.match(state.filter.price)
            })
            if(state.filter.products.length==0){
                return arr3
            }
            else{
                return arr3.filter(el=>{
                    return el.food.some(product=>{
                        return state.filter.products.includes(product)
                    })
                })
            }

            
        },
        getType:(state)=>{
            return state.filter.type
        },
        getTypes:(state)=>{
            return Object.keys(state.types)
        },
        getPrices:(state)=>{
            return state.prices
        },
        getProducts:(state)=>{
            return state.types
        }
    },
    mutations:{
        'SET_SEARCH':(state,value)=>{
            state.filter.search=value;
        },
        'SET_TYPE':(state,value)=>{
            state.filter.type=value
        },
        'SET_PRICE':(state,value)=>{
            state.filter.price=value
        },
        'SET_PRODUCTS':(state,value)=>{
            state.filter.products=[...value];
        }
    },
    actions:{
        setState:({commit},value)=>{
            commit('SET_SEARCH',value)
        },
        setType:({commit},value)=>{
            commit('SET_TYPE',value)
        },
        setPrice:({commit},value)=>{
            commit('SET_PRICE',value)
        },
        setProducts:({commit},value)=>{
            commit('SET_PRODUCTS',value)
        }
    }
})