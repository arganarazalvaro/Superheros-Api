# Superhero API

[![N|Solid](https://3.bp.blogspot.com/-T05YFBj38zM/Twzbe4clhRI/AAAAAAAAxbY/F3E6rE8NFc4/s1600/marvel%2Blogo.jpg)](https://developer.marvel.com/docs)


Welcome to this incredible superhero API!

This is an API that uses [Marvel´s API](https://developer.marvel.com/docs) to get a lot of data from all Marvel´s superheroes and then apply some logic so the front-end gets and uses only the info they need.

The API allows you to:

  - Get all the information you need about any superhero, like name, description, image and details.
  - Search for a superhero by name.
  - Search for all superheroes (it is arranged alphabetically and paged, you can handle the limit up to 50 per page and you can define the offset).
  - Post, Get, Put (modify) and Delete your favorites superheroes from a personal favorite list.

# New Features!

  - Now you can get only the ID´s of your favorite superheroes list, or you can get the full data that front-end needs of the favorite superheroes list, depending on your needs.

This is a welcome message from the developer of this API:

> I really hope you enjoy using this amazing API 
> and I would love for you to tell me  
> what projects you are working on.
> Have fun!

### Get Started

This API requires [Node.js](https://nodejs.org/) to run.
This API uses MongoDB Atlas, so the database is on the cloud.

Clone the repository and then start the server with:

```sh
$ npm run dev
```

Please take a look at the dependencies that this API uses.

### Tech

Superhero API uses:

* [Body-Parser](https://www.npmjs.com/package/body-parser) - Node.js body parsing middleware.
* [Express](https://expressjs.com/es/) - fast node.js network app framework [@tjholowaychuk]
* [lodash](https://lodash.com/docs/4.17.15) - JavaScript utility library
* [Mongoose](https://mongoosejs.com/docs/index.html) - HTML to Markdown converter
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/lp/try2?utm_source=google&utm_campaign=gs_americas_argentina_search_brand_atlas_desktop&utm_term=atlas%20mongodb&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=6498554093&gclid=Cj0KCQiA48j9BRC-ARIsAMQu3WTEWnXofFAEvEqDDqkhq7va6Zl8MnTTfX4fd6OFK0bzSrUI_hI5SjUaAiZtEALw_wcB) - Cloud-hosted MongoDB service
* [Morgan](https://lodash.com/docs/4.17.15) - HTTP request logger middleware for node.js
* [node.js](https://nodejs.org/es/docs/) - for the backend
* [node-fetch](https://www.npmjs.com/package/node-fetch) - module that brings Fetch API to Node.js
* [underscore](https://underscorejs.org/) - provides functional programming helpers

And of course Superhero API itself is open source with a [public repository](https://github.com/arganarazalvaro/Superheros-Api) on GitHub.

### How to use it?
For you to use this API you need to now the routes.
This are the main routes you may want to use.
(We will abbreviate Superhero as SH)


| Action | Route |
| ------ | ------ |
| Get first 20 SH| http://localhost:3000/api/characters |
| Get list of SH setting limit and offset (*1) | http://localhost:3000/api/characters/:limit/:offset |
| Search by name | http://localhost:3000/api/characters/:name |
| Get user´s full favorite list(*2) | http://localhost:3000/api/favorites/full-list/:dni] |
| Get user´s favorites ID´s list | http://localhost:3000/api/favorites/:dni |
| Post user´s favorites | http://localhost:3000/api/favorites/:dni |
| Modify (Put) user´s favorites | http://localhost:3000/api/favorites/:dni |
| Delete user´s favorites | http://localhost:3000/api/favorites/:dni |

(*1) Limit: number of SH per page (max 50). Offset: from wich number of SH (there are over 1400 SH). 
Remember that /: means a parameter is ment to be used. For example: http://localhost:3000/api/characters/Hulk will get the Hulk data

(*2) All the favorites request uses DNI (National identity document) as the identifier of the user.

Here are some examples of use:

Searching for Hulk:

![image](https://user-images.githubusercontent.com/58991309/99259852-62088e80-27f9-11eb-97cf-63fb2bc708e9.png)

Getting Superheroes List using limit 50 and setting offset to 1200:

![image](https://user-images.githubusercontent.com/58991309/99260045-ac8a0b00-27f9-11eb-978f-8a6fadf244c4.png)

Getting user´s favorite full Data:

![image](https://user-images.githubusercontent.com/58991309/99260584-59648800-27fa-11eb-8e87-6e4ca06551f4.png)

POST a new user´s Favorite List

![image](https://user-images.githubusercontent.com/58991309/99260913-c5df8700-27fa-11eb-8cf5-ca4e33a740f2.png)


License
----

MIT


**Free Software, Hell Yeah!**
