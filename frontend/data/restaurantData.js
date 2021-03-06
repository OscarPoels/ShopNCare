import { icons, images} from '../constants'

export const initialCurrentLocation = {
    streetName: "Paris",
    gps: {
        latitude: 48.866667,
        longitude: 2.333333
    }
}

export const categoryData = [
    {
        id: 1,
        name: "Restaurants",
        icon: icons.hamburger,
    },
    {
        id: 2,
        name: "Pharmacies",
        icon: icons.pharmacy,
    },
    {
        id: 3,
        name: "Marchés",
        icon: icons.market,
    },
    {
        id: 4,
        name: "Grande surface",
        icon: icons.supermarket,
    },
    {
        id: 5,
        name: "Bricolage",
        icon: icons.bricolage,
    },
   

]

// price rating
export const affordable = 1
export const fairPrice = 2
export const expensive = 3

export let restaurantData = [
    {
        id: 1,
        name: "Care Burger",
        rating: 4.8,
        categories: [1],
        priceRating: affordable,
        photo: images.burger_restaurant,
        duration: "30 - 45 min",
        location: {
            latitude: 48.866667,
            longitude: 2.333333,
        },
        courier: {
            avatar: images.avatar_1,
            name: "Amy"
        },
        menu: [
           
        ]
    },
    {
        id: 2,
        name: "Care Pizza",
        rating: 4.8,
        categories: [1],
        priceRating: expensive,
        photo: images.pizza_restaurant,
        duration: "15 - 20 min",
        location: {
            latitude: 48.866667,
            longitude: 2.333333,
        },
        courier: {
            avatar: images.avatar_2,
            name: "Jackson"
        },
        menu: [
            
        ]
    },
    
    {
        id: 3,
        name: "Care Sushi",
        rating: 4.8,
        categories: [1],
        priceRating: expensive,
        photo: images.japanese_restaurant,
        duration: "10 - 15 min",
        location: {
            latitude: 48.866667,
            longitude: 2.333333,
        },
        courier: {
            avatar: images.avatar_4,
            name: "Ahmad"
        },
        menu: [
           
        ]
    },

    {
        id: 4,
        name: "Pharmacie",
        rating: 4.8,
        categories: [2],
        priceRating: expensive,
        photo: images.pharmacie,
        duration: "10 - 15 min",
        location: {
            latitude: 48.866667,
            longitude: 2.333333,
        },
        courier: {
            avatar: images.avatar_4,
            name: "Ahmad"
        },
        menu: [
            
        ]
    },

    {
        id: 5,
        name: "Ikea",
        rating: 4.8,
        categories: [5],
        priceRating: expensive,
        photo: images.ikea,
        duration: "10 - 15 min",
        location: {
            latitude: 48.866667,
            longitude: 2.333333,
        },
        courier: {
            avatar: images.avatar_4,
            name: "Ahmad"
        },
        menu: [
            
        ]
    },

    {
        id: 6,
        name: "Bricorama",
        rating: 4.8,
        categories: [5],
        priceRating: expensive,
        photo: images.bricorama,
        duration: "10 - 15 min",
        location: {
            latitude: 48.866667,
            longitude: 2.333333,
        },
        courier: {
            avatar: images.avatar_4,
            name: "Ahmad"
        },
        menu: [
            
        ]
    },

    {
        id: 7,
        name: "Marché d'Argenteuil",
        rating: 4.8,
        categories: [3],
        priceRating: expensive,
        photo: images.markett,
        duration: "10 - 15 min",
        location: {
            latitude: 48.866667,
            longitude: 2.333333,
        },
        courier: {
            avatar: images.avatar_4,
            name: "Ahmad"
        },
        menu: [
           
        ]
    },
    {
        id: 8,
        name: "Carrefour",
        rating: 4.8,
        categories: [4],
        priceRating: expensive,
        photo: images.carrefour,
        duration: "10 - 15 min",
        location: {
            latitude: 48.866667,
            longitude: 2.333333,
        },
        courier: {
            avatar: images.avatar_4,
            name: "Ahmad"
        },
        menu: [
            
        ]
    },

    {
        id: 9,
        name: "Lidl",
        rating: 4.8,
        categories: [4],
        priceRating: expensive,
        photo: images.lidl,
        duration: "10 - 15 min",
        location: {
            latitude: -1.316393,
            longitude: 2.333333,
        },
        courier: {
            avatar: images.avatar_4,
            name: "Ahmad"
        },
        menu: [
            
        ]
    },
    
    


]

export default {
    restaurantData,
    initialCurrentLocation,
    categoryData
};