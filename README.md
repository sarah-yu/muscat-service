# muscat (API)

[![Build Status](https://travis-ci.org/sarah-yu/muscat-service.svg?branch=master)](https://travis-ci.org/sarah-yu/muscat-service)

The back end API for [muscat](https://github.com/sarah-yu/muscat), an app that helps you find cats available for adoption. Retrieves data from [Petfinder](https://www.petfinder.com/developers/api-docs). See repo for the front end application [here](https://github.com/sarah-yu/muscat) for more information.

## Endpoints

```
GET /api/cats/from/:location
```
Returns an array of records for the first 100 cats found from a location.
Location can be a zip code (i.e. 20878) or city, state (i.e. Gaithersburg, MD).


```
GET /api/cats/:id
```
Returns a record for a single cat.


```
GET /api/breeds
```
Returns an array of all cat breeds.


```
GET /api/shelters/:id
```
Returns a record for a single shelter.


## Installation

```
git clone git@github.com:sarah-yu/muscat-service.git
```

```
npm install
```

```
node index.js
```
