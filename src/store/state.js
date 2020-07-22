export const state ={
    restaurants:[
        {
            name:"KFC",
            type:"Fast Food",
            food:["chicken","ice cream"],
            priceRange:"Cheap"
        },
        {
            name:"Burger King",
            type:"Fast Food",
            food:["chicken","hamburger","ice cream"],
            priceRange:"Cheap"
        },
        {
            name:"Pizza Hut",
            type:"Fast Food",
            food:["pizza"],
            priceRange:"Medium"
        },
        {
            name:"McDonalds",
            type:"Fast Food",
            food:["chicken","hamburger","ice cream"],
            priceRange:"Cheap"
        },
        {
            name:"Big Boy",
            type:"Fast Food",
            food:["chicken","pizza","hamburger"],
            priceRange:"Medium"
        },
        {
            name:"Chili's",
            type:"Casual Dining",
            food:["pasta","salad"],
            priceRange:"Cheap"
        },
        {
            name:"Chevys",
            type:"Casual Dining",
            food:["pasta","salad","beef"],
            priceRange:"Medium"
        },
        {
            name:"Red Lobster",
            type:"Casual Dining",
            food:["sea food","salad"],
            priceRange:"Expensive"
        },
        {
            name:"Bonefish Grill",
            type:"Casual Dining",
            food:["sea food","beef"],
            priceRange:"Medium"
        },
        {
            name:"Olive Garden",
            type:"Casual Dining",
            food:["salad","vegan"],
            priceRange:"Expensive"
        },
        {
            name:"Bretucci's",
            type:"Casual Dining",
            food:["salad","vegan","pasta"],
            priceRange:"Medium"
        },
        {
            name:"Copaland's",
            type:"Casual Dining",
            food:["beef","sea food","vegan","pasta","salad"],
            priceRange:"Expensive"
        }
    ],
    types:{
        "Fast Food":["chicken","hamburger","pizza","ice cream"],
        "Casual Dining":["beef","sea food","vegan","pasta","salad"],
    },
    prices:["Cheap","Medium","Expensive"],
    filter:{
        search:'',
        type:'',
        price:'',
        products:[]
    }
}