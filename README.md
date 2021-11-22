# Rick and Morty APP with Redux


## Features

- Login
- Logout
- Register
- JWT Authentication 
- Redux
- Characters pagination
- Responsive
- Save characters as favorite
- User collection in MongoDB
- Server interaction.
- Protected routes.



### Env Variables

Create a .env file in "client-app" folder and add the following

```
REACT_APP_API=http://localhost:5000
```

Create a a file called config.env file in "characters_app" root folder and add the following

```
PORT = 5000
MONGO_URI=mongodb+srv://msant:1592@cluster0.xssf4.mongodb.net/rickymorty?retryWrites=true&w=majority
JWT_SECRET=6190a9af16eafed487f8c3e2b8754300f71af7434757c060ddb34496a8412fbf208a94
JWT_EXPIRE=240min
RICK_API_URL=https://rickandmortyapi.com/api/character?page=


```
### Install Dependencies (frontend & backend)

```
npm install
cd client-app
npm install
```

### Run backend 
```
npm run server (root folder)
```

### Run frontend
```

cd client-app
npm start
```


### Run Test
```
cd client-app
npm run test
```

Inside users collection there is one user with the following credentials:

username: mariano
password: 12345

Feel free tu use that users or you can also register and create new ones.



