import Vue from 'vue';
import Vuex from 'vuex';
import {state} from './state'
Vue.use(Vuex)

export const store = new Vuex.Store({
   state,
    getters:{
        getRestaurants:(state)=>{

            return (((state.restaurants.filter(el=>{
                return el.name.toLowerCase().match(state.filter.search.toLowerCase())
            })).filter(el=>{
                return el.type.match(state.filter.type)
            })).filter(item=>{
                return item.priceRange.match(state.filter.price)
            })).filter(fo=>{
                if(state.filter.products.length==0){
                    return fo
                }
                else{
                    return fo.food.some(product=>{
                        return state.filter.products.includes(product)
                    })
                }
            })
           
        },
        getUnfiltered:(state)=>{
            return state.restaurants
        },
        getType:(state)=>{
            return state.filter.type
        },
        getTypes:(state)=>{
            return state.types
        },
        getPrices:(state)=>{
            return state.prices
        },
        getProducts:(state)=>{
            return state.products
        },
        getAuth:(state)=>{
            return state.auth
        },
        getByName:(state,name)=>{
            
            console.log(state.restaurants.find(el=>{
                return el.name==name
            }))
        },
        getFilters:(state)=>{
            return state.filter
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
        },
        'RESET':(state)=>{
            state.filter.products=[],
            state.filter.search='',
            state.filter.type='',
            state.filter.price=''
        },
        'DELETE_REST':(state,name)=>{
            const index = state.restaurants.findIndex((el)=>{
                return el.name==name
            })
           state.restaurants.splice(index,1)
        },
        'ADD_PLACE':(state,obj)=>{
            state.restaurants.push(obj)
        },
        'UPDATE_LIST':(state,obj)=>{
           const {data,index}=obj;
           state.restaurants[index]=data
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
        },
        reset:({commit})=>{
            commit('RESET')
        },
        deleteRest:({commit},name)=>{
            commit('DELETE_REST',name)
        },
        addPlace:({commit},obj)=>{
            commit('ADD_PLACE',obj)
        },
        updateList:({commit},obj)=>{
            commit('UPDATE_LIST',obj)
        }
    }
})