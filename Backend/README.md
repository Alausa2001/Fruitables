# Base URL: https://fruitables-7yyj.onrender.com

# SIGN UP
```
REQUEST

Method: POST
Path:   /api/v1/register
Headers:   { Authorization: undefined, 'Content-Type': 'application/json' }
Body:   {
  phoneNo: '+2348012345672',
  password: 'Abdulqoyum1!',
  email: 'adebisi@gmail.com',
  firstname: 'Alausa',
  surname: 'Alausa'
}


RESPONSE

{
    "status": "ok",
    "msg": "Registration successful",
    "newUser": {
        "surname": "Alausa",
        "firstname": "Alausa",
        "email": "adebisi@gmail.com",
        "phoneNo": "+2348012345672",
        "password": "$2b$10$Rz.Krc2NIQdBCWdgl26cmOa1qN.JYj6nLgJsoqFDsnRz8yqtV5sIm",
        "_id": "661b1a3b7759bdbf6b703763",
        "createdAt": "2024-04-13T23:50:19.765Z",
        "updatedAt": "2024-04-13T23:50:19.765Z",
        "__v": 0
    },
    "cart": {
        "user": "661b1a3b7759bdbf6b703763",
        "_id": "661b1a3b7759bdbf6b703765",
        "__v": 0
    }
}
```
# SIGN IN
```
REQUEST

Method: POST
Path:   /api/v1/login
Headers:   { Authorization: undefined, 'Content-Type': 'application/json' }
Body:   { password: 'Abdulqoyum1!', email: 'adx@gmail.com' }


RESPONSE
Method: POST
Path:   /api/v1/login
Headers:   { Authorization: undefined, 'Content-Type': 'application/json' }
Body:   { password: 'Abdulqoyum1!', email: 'adx@gmail.com' }
```

# UPLOAD FRUIT DETAILS TO DATABASE
```
REQUEST

Method: POST
Path:   /api/v1/fruits/add_new
Headers:   { Authorization: undefined, 'Content-Type': 'application/json' }
Body:   {
  name: 'Apple',
  description: 'Crisp and refreshing, apples are a classic choice for snacking or baking. They come in various colors like red, green, and yellow.',
  price: 1.5,
  quantityAvailable: 10,
  imageUrl: 'https://res.cloudinary.com/dqj46xlzo/image/upload/v1713052915/fruit_k1daw6.jpg',
  category: 'Simple Fruits',
  origin: 'Green Meadow farms',
  weight: 2,
  minWeight: 1,
  quality: 'organic',
  check: 'healthy'
}

RESPONSE
{
    "status": "ok",
    "msg": "A new fruit has been added to stock",
    "fruit": {
        "name": "Apple",
        "description": "Crisp and refreshing, apples are a classic choice for snacking or baking. They come in various colors like red, green, and yellow.",
        "price": 1.5,
        "quantityAvailable": 10,
        "category": "simple",
        "origin": "Green Meadow farms",
        "weight": 2,
        "minWeight": 1,
        "quality": "organic",
        "check": "healthy",
        "_id": "661b1da57759bdbf6b70376a",
        "createdAt": "2024-04-14T00:04:53.060Z",
        "updatedAt": "2024-04-14T00:04:53.060Z",
        "__v": 0
    }
}
```

# GET ALL FRUITS
```
REQUEST
Method: GET
Path:   /api/v1/fruits/all
Headers:   { Authorization: undefined, 'Content-Type': 'application/json' }
Body:   {}

RESPONSE

{
    "status": "ok",
    "all_products": [
        {
            "_id": "661b1da57759bdbf6b70376a",
            "name": "Apple",
            "description": "Crisp and refreshing, apples are a classic choice for snacking or baking. They come in various colors like red, green, and yellow.",
            "price": 1.5,
            "quantityAvailable": 10,
            "category": "simple",
            "origin": "Green Meadow farms",
            "weight": 2,
            "minWeight": 1,
            "quality": "organic",
            "check": "healthy",
            "createdAt": "2024-04-14T00:04:53.060Z",
            "updatedAt": "2024-04-14T07:02:30.005Z",
            "__v": 0,
            "imageUrl": "https://res.cloudinary.com/dqj46xlzo/image/upload/v1713052915/fruit_k1daw6.jpg"
        },
        {
            "_id": "661b1fa47759bdbf6b70376d",
            "name": "Banana",
            "description": "Creamy and sweet, bananas are packed with essential nutrients like potassium and vitamin C. They make a convenient and healthy snack.",
            "price": 2,
            "quantityAvailable": 15,
            "category": "simple",
            "origin": "Asidos Farms",
            "weight": 0.15,
            "minWeight": 0.1,
            "quality": "organic",
            "check": "Healthy",
            "createdAt": "2024-04-14T00:13:24.459Z",
            "updatedAt": "2024-04-14T07:03:23.723Z",
            "__v": 0,
            "imageUrl": "https://res.cloudinary.com/dqj46xlzo/image/upload/v1713053517/fruit_yvngsc.jpg"
        },
        {
            "_id": "661b21b47759bdbf6b703774",
            "name": "Grapes",
            "description": "Sweet and succulent, grapes come in various colors and flavors. They are rich in antioxidants and are a delicious addition to salads or enjoyed on their own.",
            "price": 2,
            "quantityAvailable": 80,
            "category": "simple",
            "origin": "Chilex Farms",
            "weight": 0.3,
            "minWeight": 0.25,
            "quality": "organic",
            "check": "pass",
            "createdAt": "2024-04-14T00:22:12.146Z",
            "updatedAt": "2024-04-14T07:06:06.312Z",
            "__v": 0,
            "imageUrl": "https://res.cloudinary.com/dqj46xlzo/image/upload/v1713054089/fruit_m9l6uj.jpg"
        },
        {
            "_id": "661b6fce9178a0f72bb78db9",
            "name": "Tomato",
            "description": "Juicy and flavorful, tomatoes are a staple in many cuisines. They come in various shapes, sizes, and colors, and are rich in vitamins and antioxidants.",
            "price": 1.2,
            "quantityAvailable": 120,
            "category": "vegetables",
            "origin": "Harmony Farms",
            "weight": 0.1,
            "minWeight": 0.08,
            "quality": "organic",
            "check": "pass",
            "createdAt": "2024-04-14T05:55:26.508Z",
            "updatedAt": "2024-04-14T07:11:28.836Z",
            "__v": 0,
            "imageUrl": "https://res.cloudinary.com/dqj46xlzo/image/upload/v1713074079/fruit_so6zy0.jpg"
        },
        {
            "_id": "661b70c79178a0f72bb78dbc",
            "name": "Cucumber",
            "description": "Cool and crisp, cucumbers are hydrating and low in calories. They are versatile and can be sliced for salads, pickled, or added to sandwiches for extra crunch.",
            "price": 0.8,
            "quantityAvailable": 10,
            "category": "vegetables",
            "origin": "Harmony Farms",
            "weight": 0.3,
            "minWeight": 0.25,
            "quality": "organic",
            "check": "Healthy",
            "createdAt": "2024-04-14T05:59:35.744Z",
            "updatedAt": "2024-04-14T07:12:46.295Z",
            "__v": 0,
            "imageUrl": "https://res.cloudinary.com/dqj46xlzo/image/upload/v1713074308/fruit_t5y6rh.jpg"
        }
    ...
    ],
    "vegetables": [
        {
            "_id": "661b6fce9178a0f72bb78db9",
            "name": "Tomato",
            "description": "Juicy and flavorful, tomatoes are a staple in many cuisines. They come in various shapes, sizes, and colors, and are rich in vitamins and antioxidants.",
            "price": 1.2,
            "quantityAvailable": 120,
            "category": "vegetables",
            "origin": "Harmony Farms",
            "weight": 0.1,
            "minWeight": 0.08,
            "quality": "organic",
            "check": "pass",
            "createdAt": "2024-04-14T05:55:26.508Z",
            "updatedAt": "2024-04-14T07:11:28.836Z",
            "__v": 0,
            "imageUrl": "https://res.cloudinary.com/dqj46xlzo/image/upload/v1713074079/fruit_so6zy0.jpg"
        },
        {
            "_id": "661b70c79178a0f72bb78dbc",
            "name": "Cucumber",
            "description": "Cool and crisp, cucumbers are hydrating and low in calories. They are versatile and can be sliced for salads, pickled, or added to sandwiches for extra crunch.",
            "price": 0.8,
            "quantityAvailable": 10,
            "category": "vegetables",
            "origin": "Harmony Farms",
            "weight": 0.3,
            "minWeight": 0.25,
            "quality": "organic",
            "check": "Healthy",
            "createdAt": "2024-04-14T05:59:35.744Z",
            "updatedAt": "2024-04-14T07:12:46.295Z",
            "__v": 0,
            "imageUrl": "https://res.cloudinary.com/dqj46xlzo/image/upload/v1713074308/fruit_t5y6rh.jpg"
        },
        ...
    ],
    "fruitOnly": [
        {
            "_id": "661b1da57759bdbf6b70376a",
            "name": "Apple",
            "description": "Crisp and refreshing, apples are a classic choice for snacking or baking. They come in various colors like red, green, and yellow.",
            "price": 1.5,
            "quantityAvailable": 10,
            "category": "simple",
            "origin": "Green Meadow farms",
            "weight": 2,
            "minWeight": 1,
            "quality": "organic",
            "check": "healthy",
            "createdAt": "2024-04-14T00:04:53.060Z",
            "updatedAt": "2024-04-14T07:02:30.005Z",
            "__v": 0,
            "imageUrl": "https://res.cloudinary.com/dqj46xlzo/image/upload/v1713052915/fruit_k1daw6.jpg"
        },
        {
            "_id": "661b1fa47759bdbf6b70376d",
            "name": "Banana",
            "description": "Creamy and sweet, bananas are packed with essential nutrients like potassium and vitamin C. They make a convenient and healthy snack.",
            "price": 2,
            "quantityAvailable": 15,
            "category": "simple",
            "origin": "Asidos Farms",
            "weight": 0.15,
            "minWeight": 0.1,
            "quality": "organic",
            "check": "Healthy",
            "createdAt": "2024-04-14T00:13:24.459Z",
            "updatedAt": "2024-04-14T07:03:23.723Z",
            "__v": 0,
            "imageUrl": "https://res.cloudinary.com/dqj46xlzo/image/upload/v1713053517/fruit_yvngsc.jpg"
        },
        ...
    ]
}
```

# GET FRUITS IN A CATEGORY
```
categories = simple or multiple or aggregate or vegetables
REQUEST

Method: GET
Path:   /api/v1/fruits/simple/all
Headers:   { Authorization: undefined, 'Content-Type': 'application/json' }
Body:   {}


RESPONSE

{
    "status": "ok",
    "fruits": [
        {
            "_id": "661b1da57759bdbf6b70376a",
            "name": "Apple",
            "description": "Crisp and refreshing, apples are a classic choice for snacking or baking. They come in various colors like red, green, and yellow.",
            "price": 1.5,
            "quantityAvailable": 10,
            "category": "simple",
            "origin": "Green Meadow farms",
            "weight": 2,
            "minWeight": 1,
            "quality": "organic",
            "check": "healthy",
            "createdAt": "2024-04-14T00:04:53.060Z",
            "updatedAt": "2024-04-14T07:02:30.005Z",
            "__v": 0,
            "imageUrl": "https://res.cloudinary.com/dqj46xlzo/image/upload/v1713052915/fruit_k1daw6.jpg"
        },
        {
            "_id": "661b1fa47759bdbf6b70376d",
            "name": "Banana",
            "description": "Creamy and sweet, bananas are packed with essential nutrients like potassium and vitamin C. They make a convenient and healthy snack.",
            "price": 2,
            "quantityAvailable": 15,
            "category": "simple",
            "origin": "Asidos Farms",
            "weight": 0.15,
            "minWeight": 0.1,
            "quality": "organic",
            "check": "Healthy",
            "createdAt": "2024-04-14T00:13:24.459Z",
            "updatedAt": "2024-04-14T07:03:23.723Z",
            "__v": 0,
            "imageUrl": "https://res.cloudinary.com/dqj46xlzo/image/upload/v1713053517/fruit_yvngsc.jpg"
        },
        {
            "_id": "661b21b47759bdbf6b703774",
            "name": "Grapes",
            "description": "Sweet and succulent, grapes come in various colors and flavors. They are rich in antioxidants and are a delicious addition to salads or enjoyed on their own.",
            "price": 2,
            "quantityAvailable": 80,
            "category": "simple",
            "origin": "Chilex Farms",
            "weight": 0.3,
            "minWeight": 0.25,
            "quality": "organic",
            "check": "pass",
            "createdAt": "2024-04-14T00:22:12.146Z",
            "updatedAt": "2024-04-14T07:06:06.312Z",
            "__v": 0,
            "imageUrl": "https://res.cloudinary.com/dqj46xlzo/image/upload/v1713054089/fruit_m9l6uj.jpg"
        }
    ]
}
```

# GET A PARTICULAR FRUIT
```
REQUEST
Method: GET
Path:   /api/v1/fruits/661b7c27c9c80b3c9b1869ce              (FRUIT ID)
Headers:   { Authorization: undefined, 'Content-Type': 'application/json' }
Body:   {}

RESPONSE

{
    "status": "ok",
    "fruit": {
        "_id": "661b7c27c9c80b3c9b1869ce",
        "name": "Mulberry",
        "description": "Savor the rich, berrylicious goodness of mulberries, plucked from the lush fields of Berry Fields. Small yet mighty, these gems pack a punch of flavor and nutrition in every bite.",
        "price": 4,
        "quantityAvailable": 80,
        "category": "multiple",
        "origin": "Berry Fields, Luton",
        "weight": 0.07,
        "minWeight": 0.5,
        "quality": "Organic",
        "check": "Healthy",
        "createdAt": "2024-04-14T06:48:07.747Z",
        "updatedAt": "2024-04-14T07:17:33.772Z",
        "__v": 0,
        "imageUrl": "https://res.cloudinary.com/dqj46xlzo/image/upload/v1713077176/fruit_nkjj8w.jpg"
    }
}

```
# GIVE A REVIEW ON A FRUIT
```
REQUEST

Method: POST
Path:   /api/v1/fruits/661b7c27c9c80b3c9b1869ce/review          (FRUIT ID)
Headers:   { Authorization: undefined, 'Content-Type': 'application/json' }
Body:   {
  name: 'Bolaji Ahmed',
  email: 'bolaji@gmail.com',
  review: 'I love this fruit',
  rating: 4
}
---

RESPNSE

{
    "status": "ok",
    "msg": "Thank you for sending in your reviews"
}
```
# GET A FRUIT REVIEWS
```
REQUEST

Method: GET
Path:   /api/v1/fruits/661b7c27c9c80b3c9b1869ce/reviews          (FRUIT ID)
Headers:   { Authorization: undefined, 'Content-Type': 'application/json' }
Body:   {}
---

RESPONSE

{
    "status": "ok",
    "msg": ".",
    "reviews": [
        {
            "_id": "661b89c4936033db641f7edf",
            "name": "Bolaji Ahmed",
            "email": "bolaji@gmail.com",
            "review": "I love this fruit",
            "rating": 4,
            "fruit": "661b7c27c9c80b3c9b1869ce",
            "createdAt": "2024-04-14T07:46:12.132Z",
            "updatedAt": "2024-04-14T07:46:12.132Z",
            "__v": 0
        },
        {
            "_id": "661b8a76936033db641f7ee2",
            "name": "Ayew Ahmed",
            "email": "bola@gmail.com",
            "review": "I LOVE IT, SO JUICY",
            "rating": 4,
            "fruit": "661b7c27c9c80b3c9b1869ce",
            "createdAt": "2024-04-14T07:49:10.470Z",
            "updatedAt": "2024-04-14T07:49:10.470Z",
            "__v": 0
        }
    ]
}
```

# ADD TO CART

```
IF QUANTITY IS NOT SPECIFIED, 1 ITEM IS ADDED BY DEFAULT
REQUEST

Method: POST
Path:   /api/v1/add_to_cart
Headers:   { Authorization: undefined, 'Content-Type': 'application/json' }
Body:   {
  userId: '661b1a3b7759bdbf6b703763',
  quantity: 4,
  fruitId: '661b1fa47759bdbf6b70376d'
}

RESPONSE

{
    "status": "ok",
    "msg": "Item added to cart",
    "newCartItem": {
        "cart": "661b1a3b7759bdbf6b703765",
        "fruit": "661b1fa47759bdbf6b70376d",
        "quantity": 4,
        "status": "not paid",
        "_id": "661b8cb462ab4fc8db6f93ea",
        "createdAt": "2024-04-14T07:58:44.303Z",
        "updatedAt": "2024-04-14T07:58:44.303Z",
        "__v": 0
    }
}
```

# INCREASE ITEM ON CART
```

```

# DECREASE ITEM ON CART

```
```
# GET CART ITEMS
```
REQUEST
Method: GET
Path:   /api/v1/cart_items/661b1a3b7759bdbf6b703765                   (CART ID)
Headers:   { Authorization: undefined, 'Content-Type': 'application/json' }
Body:   {}

RESPONSE
{
    "status": "ok",
    "msg": "cart items retrieved",
    "cart": [
        {
            "cartItemId": "661b8cb462ab4fc8db6f93ea",
            "fruit": {
                "_id": "661b1fa47759bdbf6b70376d",
                "name": "Banana",
                "price": 2
            },
            "total": 8,
            "quantity": 4
        },
        {
            "cartItemId": "661b8d7c62ab4fc8db6f93ef",
            "fruit": {
                "_id": "661b1da57759bdbf6b70376a",
                "name": "Apple",
                "price": 1.5
            },
            "total": 1.5,
            "quantity": 1
        }
    ],
    "totalPrice": 9.5
}
```

# DELETE ITEM FROM CART
```
REQUEST
Method: DELETE
Path:   /api/v1/remove_from_cart/661b8cb462ab4fc8db6f93ea         (CART ITEM ID)
Headers:   { Authorization: undefined, 'Content-Type': 'application/json' }
Body:   {}
---

RESPONSE

{
    "status": "ok",
    "message": "item removed from cart"
}
```

# CHECKOUT
```
REQUEST
Method: POST
Path:   /api/v1/checkout/6617f30b31d89f1e72c1d63b
Headers:   { Authorization: undefined, 'Content-Type': 'application/json' }
Body:   {
  firstname: 'Bola',
  lastname: 'wale',
  address: 'wale street',
  city: 'lagos',
  postalCode: '221212',
  mobile: '0291123',
  email: 'wale@gmail.com',
  status: 'paid',
  userId: '6617f30b31d89f1e72c1d63b',
  total: 1231
}

RESPONSE
{
    "status": "ok",
    "authorization_url": "https://checkout.paystack.com/cg4cmhy22xoz64g",
    "access_code": "cg4cmhy22xoz64g",
    "reference": "ZXZMIUHZ08XYKUJWX7GB"
}
```
