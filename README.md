# dota2clips
dota2 clips content aggregator

## API
Endpoint | HTTP | Require | Desc
-|-|-|-
/v1/show | GET | - | Get 10 latest release
/v1/show/:id | GET | params :id | detail shows
/v1/show | POST | - | post new show
/v1/show/:id | PUT | params :id | edit show
/v1/show/:id | DELETE | params :id | delete show

### /v1/show | GET
Get 10 latest release
```
GET /v1/show HTTP/1.1
Host: dota2clips.masfaris.com
Accept: application/json, text/javascript
```
Example Response
```json
"statusCode": 200,
"metaData": {},
"result": []
```

### /v1/show:id | GET
Get specific show
```
GET /v1/show/123 HTTP/1.1
Host: dota2clips.masfaris.com
Accept: application/json, text/javascript
Signature: {signature}
```
Example Response
```js
"statusCode": 200,
"metaData": {
  "id": 123
},
"result": {
  "_id": "kajshdasdh123lkahsdlk34553jh1",
  "showId": "123",
  "title" : "Title",
  "dateTournament": Date,
  "thumbnail": "http://dota2clips-static.masfaris.com/img/thumb_title.jpg",
  "tags": "major jakarta 2018 tigers boom vs bo3",
  "stream": [{
    "source": "youtube",
    "url": "https://youtube.com/ZCASDQE24",
    "comment": "Full Match"
  }],
  "dotaBuffUrl": "http://dotabuff.com/match/123123",
  "createdAt": Date,
  "updatedAt": Date
}
```

fariswd 2018   
:rocket: