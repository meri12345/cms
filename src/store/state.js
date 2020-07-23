export const state ={
    restaurants:[
        {
            name:"KFC",
            type:"Fast Food",
            food:["chicken","ice cream"],
            priceRange:"Cheap",
            pic:"https://seeklogo.com/images/K/kfc-logo-542AAD59EB-seeklogo.com.png",
            desc:"KFC is an American fast food restaurant chain headquartered in Louisville, Kentucky, that specializes in fried chicken."
        },
        {
            name:"Burger King",
            type:"Fast Food",
            food:["chicken","hamburger","ice cream"],
            priceRange:"Cheap",
            pic:"https://media-cdn.tripadvisor.com/media/photo-s/11/0f/6d/9c/burger-king.jpg",
            desc:"Burger King is an American multinational chain of hamburger fast food restaurants. "
        },
        {
            name:"Pizza Hut",
            type:"Fast Food",
            food:["pizza"],
            priceRange:"Medium",
            pic:"https://logos-download.com/wp-content/uploads/2016/04/Pizza_Hut_logo_red.png",
            desc:"Pizza Hut is an American restaurant chain and international franchise which was founded in 1958 by Dan and Frank Carney. "
        },
        {
            name:"McDonalds",
            type:"Fast Food",
            food:["chicken","hamburger","ice cream"],
            priceRange:"Cheap",
            pic:"https://images.safe.com/logos/customers/mcdonalds.png",
            desc:"McDonald's Corporation is an American fast food company, founded in 1940 as a restaurant operated by Richard and Maurice McDonald."
        },
        {
            name:"Big Boy",
            type:"Fast Food",
            food:["chicken","pizza","hamburger"],
            priceRange:"Medium",
            pic:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/hostedimages/1380415909i/821244._SX540_.jpg",
            desc:"Big Boy Restaurant Group, LLC is an American restaurant chain headquartered in Warren, Michigan, in Metro Detroit."
        },
        {
            name:"Chili's",
            type:"Casual Dining",
            food:["pasta","salad"],
            priceRange:"Cheap",
            pic:"https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/082017/untitled-1_33.png?itok=EMdlUnZ_",
            desc:"Chili's Grill & Bar is an American casual dining restaurant chain. The company was founded by Larry Lavine in Texas in 1975."
        },
        {
            name:"Chevys",
            type:"Casual Dining",
            food:["pasta","salad","beef"],
            priceRange:"Medium",
            pic:"https://prnewswire2-a.akamaihd.net/p/1893751/sp/189375100/thumbnail/entry_id/0_c8ay30o7/def_height/2700/def_width/2700/version/100012/type/1",
            desc:"Chevys Fresh Mex is an American chain of Mexican-style casual dining restaurants located in the United States. "
        },
        {
            name:"Red Lobster",
            type:"Casual Dining",
            food:["sea food","salad"],
            priceRange:"Expensive",
            pic:"https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/8c2b93a3606627b959b804ba2f55b8ce",
            desc:"Red Lobster Hospitality LLC is an American casual dining restaurant chain headquartered in Orlando, Florida."
        },
        {
            name:"Bonefish Grill",
            type:"Casual Dining",
            food:["sea food","beef"],
            priceRange:"Medium",
            pic:"https://media-cdn.tripadvisor.com/media/photo-s/0d/94/51/1b/logo-bonefish.jpg",
            desc:"Bonefish Grill is an American casual dining seafood restaurant chain owned and operated by Bloomin' Brands."
        },
        {
            name:"Olive Garden",
            type:"Casual Dining",
            food:["salad","vegan"],
            priceRange:"Expensive",
            pic:"https://pbs.twimg.com/profile_images/1228350118841266177/aXOYGOPs_400x400.jpg",
            desc:"Olive Garden is an American casual dining restaurant chain specializing in Italian-American cuisine."
        },
        {
            name:"Bretucci's",
            type:"Casual Dining",
            food:["salad","vegan","pasta"],
            priceRange:"Medium",
            pic:"https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0024/9256/brand.gif?itok=udtVSuTn",
            desc:"Bertucci's is an American chain of restaurants offering pizza and Italian food. It also offers delivery, take-out and private dining."
        },
        {
            name:"Copeland's",
            type:"Casual Dining",
            food:["beef","sea food","vegan","pasta","salad"],
            priceRange:"Expensive",
            pic:"https://pbs.twimg.com/profile_images/854112801840934912/wRe0lGS6_400x400.jpg",
            desc:"Copeland's is a restaurant chain started by New Orleans native Al Copeland in 1983."
        }
    ],
    types:['Fast Food','Casual Dining'],
    products:["beef","sea food","vegan","pasta","salad","chicken","hamburger","pizza","ice cream"],
    prices:["Cheap","Medium","Expensive"],
    filter:{
        search:'',
        type:'',
        price:'',
        products:[]
    },
    auth:true
}