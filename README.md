# Superhero API

[![N|Solid](https://3.bp.blogspot.com/-T05YFBj38zM/Twzbe4clhRI/AAAAAAAAxbY/F3E6rE8NFc4/s1600/marvel%2Blogo.jpg)](https://developer.marvel.com/docs)


Welcome to this incredible superhero API!

This is an API that uses Marvel´s API to get a lot of data from all Marvel´s superheroes and then applies some logic so the front-end gets and uses only the info they need.

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
* [Express] - fast node.js network app framework [@tjholowaychuk]
* [lodash](https://lodash.com/docs/4.17.15) - JavaScript utility library
* [Mongoose](https://mongoosejs.com/docs/index.html) - HTML to Markdown converter
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/lp/try2?utm_source=google&utm_campaign=gs_americas_argentina_search_brand_atlas_desktop&utm_term=atlas%20mongodb&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=6498554093&gclid=Cj0KCQiA48j9BRC-ARIsAMQu3WTEWnXofFAEvEqDDqkhq7va6Zl8MnTTfX4fd6OFK0bzSrUI_hI5SjUaAiZtEALw_wcB) - Cloud-hosted MongoDB service
* [Morgan](https://lodash.com/docs/4.17.15) - HTTP request logger middleware for node.js
* [node.js] - for the backend
* [node-fetch](https://www.npmjs.com/package/node-fetch) - module that brings Fetch API to Node.js
* [underscore](https://underscorejs.org/) - provides functional programming helpers

And of course Superhero API itself is open source with a [public repository](https://github.com/arganarazalvaro/Superheros-Api) on GitHub.
