export const state ={
    restaurants:[
        {
            name:"KFC",
            type:"Fast Food",
            food:["chicken","ice cream"],
            priceRange:"Cheap",
            desc:"KFC is an American fast food restaurant chain headquartered in Louisville, Kentucky, that specializes in fried chicken."
        },
        {
            name:"Burger King",
            type:"Fast Food",
            food:["chicken","hamburger","ice cream"],
            priceRange:"Cheap",
            desc:"Burger King is an American multinational chain of hamburger fast food restaurants. "
        },
        {
            name:"Pizza Hut",
            type:"Fast Food",
            food:["pizza"],
            priceRange:"Medium",
            desc:"Pizza Hut is an American restaurant chain and international franchise which was founded in 1958 by Dan and Frank Carney. "
        },
        {
            name:"McDonalds",
            type:"Fast Food",
            food:["chicken","hamburger","ice cream"],
            priceRange:"Cheap",
            desc:"McDonald's Corporation is an American fast food company, founded in 1940 as a restaurant operated by Richard and Maurice McDonald."
        },
        {
            name:"Big Boy",
            type:"Fast Food",
            food:["chicken","pizza","hamburger"],
            priceRange:"Medium",
            desc:"Big Boy Restaurant Group, LLC is an American restaurant chain headquartered in Warren, Michigan, in Metro Detroit."
        },
        {
            name:"Chili's",
            type:"Casual Dining",
            food:["pasta","salad"],
            priceRange:"Cheap",
            desc:"Chili's Grill & Bar is an American casual dining restaurant chain. The company was founded by Larry Lavine in Texas in 1975."
        },
        {
            name:"Chevys",
            type:"Casual Dining",
            food:["pasta","salad","beef"],
            priceRange:"Medium",
            desc:"Chevys Fresh Mex is an American chain of Mexican-style casual dining restaurants located in the United States. "
        },
        {
            name:"Red Lobster",
            type:"Casual Dining",
            food:["sea food","salad"],
            priceRange:"Expensive",
            desc:"Red Lobster Hospitality LLC is an American casual dining restaurant chain headquartered in Orlando, Florida."
        },
        {
            name:"Bonefish Grill",
            type:"Casual Dining",
            food:["sea food","beef"],
            priceRange:"Medium",
            desc:"Bonefish Grill is an American casual dining seafood restaurant chain owned and operated by Bloomin' Brands."
        },
        {
            name:"Olive Garden",
            type:"Casual Dining",
            food:["salad","vegan"],
            priceRange:"Expensive",
            desc:"Olive Garden is an American casual dining restaurant chain specializing in Italian-American cuisine."
        },
        {
            name:"Bretucci's",
            type:"Casual Dining",
            food:["salad","vegan","pasta"],
            priceRange:"Medium",
            desc:"Bertucci's is an American chain of restaurants offering pizza and Italian food. It also offers delivery, take-out and private dining."
        },
        {
            name:"Copeland's",
            type:"Casual Dining",
            food:["beef","sea food","vegan","pasta","salad"],
            priceRange:"Expensive",
            desc:"Copeland's is a restaurant chain started by New Orleans native Al Copeland in 1983."
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