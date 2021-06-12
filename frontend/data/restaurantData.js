import { icons, images} from '../constants'

export const initialCurrentLocation = {
    streetName: "Paris",
    gps: {
        latitude: -1.232455,
        longitude: 36.878324
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
            latitude: -1.219648,
            longitude: 36.888314,
        },
        courier: {
            avatar: images.avatar_1,
            name: "Amy"
        },
        menu: [
            {
                menuId: 1,
                name: "Crispy Chicken Burger",
                description: "Burger with crispy chicken, cheese and lettuce",
                price: 10
            },
            
            
            {
                menuId: 3,
                name: "Crispy Baked French Fries",
                description: "Crispy Baked French Fries",
                price: 8
            }
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
            latitude: -1.213126,
            longitude: 36.839998,
        },
        courier: {
            avatar: images.avatar_2,
            name: "Jackson"
        },
        menu: [
            {
                menuId: 4,
                name: "Hawaiian Pizza",
                description: "Canadian bacon, homemade pizza crust, pizza sauce",
                price: 15
            },
            {
                menuId: 5,
                name: "Tomato & Basil Pizza",
                description: "Fresh tomatoes, aromatic basil pesto and melted bocconcini",
                price: 20
            },
            {
                menuId: 6,
                name: "Tomato Pasta",
                description: "Pasta with fresh tomatoes",
                price: 10
            },
            {
                menuId: 7,
                name: "Mediterranean Chopped Salad ",
                description: "Finely chopped lettuce, tomatoes, cucumbers",
                price: 10
            }
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
            latitude: -1.316393,
            longitude: 36.834484,
        },
        courier: {
            avatar: images.avatar_4,
            name: "Ahmad"
        },
        menu: [
            {
                menuId: 9,
                name: "Sushi sets",
                description: "Fresh salmon, sushi rice, fresh juicy avocado",
                price: 50
            }
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
            latitude: -1.906393,
            longitude: 47.834484,
        },
        courier: {
            avatar: images.avatar_4,
            name: "Ahmad"
        },
        menu: [
            {
                menuId: 9,
                name: "Sushi sets",
                description: "Fresh salmon, sushi rice, fresh juicy avocado",
                price: 50
            }
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
            latitude: -1.316393,
            longitude: 36.834484,
        },
        courier: {
            avatar: images.avatar_4,
            name: "Ahmad"
        },
        menu: [
            {
                menuId: 9,
                name: "Sushi sets",
                description: "Fresh salmon, sushi rice, fresh juicy avocado",
                price: 50
            }
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
            latitude: -1.316393,
            longitude: 36.834484,
        },
        courier: {
            avatar: images.avatar_4,
            name: "Ahmad"
        },
        menu: [
            {
                menuId: 9,
                photo: images.sushi,
                description: "Fresh salmon, sushi rice, fresh juicy avocado",
                price: 50
            }
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
            latitude: -1.316393,
            longitude: 36.834484,
        },
        courier: {
            avatar: images.avatar_4,
            name: "Ahmad"
        },
        menu: [
            {
                menuId: 9,
                name: "Sushi sets",
                description: "Fresh salmon, sushi rice, fresh juicy avocado",
                price: 50
            }
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
            latitude: -1.316393,
            longitude: 36.834484,
        },
        courier: {
            avatar: images.avatar_4,
            name: "Ahmad"
        },
        menu: [
            {
                menuId: 9,
                name: "Sushi sets",
                description: "Fresh salmon, sushi rice, fresh juicy avocado",
                price: 50
            }
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
            longitude: 36.834484,
        },
        courier: {
            avatar: images.avatar_4,
            name: "Ahmad"
        },
        menu: [
            {
                menuId: 9,
                name: "Sushi sets",
                description: "Fresh salmon, sushi rice, fresh juicy avocado",
                price: 50
            }
        ]
    },
    
    


]

export default {
    restaurantData,
    initialCurrentLocation,
    categoryData
};