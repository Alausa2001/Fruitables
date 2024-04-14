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
        "category": "Simple Fruits",
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






