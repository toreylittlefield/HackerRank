  # Express: Recipes Pagination
 
The request to the route `/recipes` returns all the paginated recipes with default values of page and limit. The query parameters that can be used to set the pagination criteria are:
- `page:` The page of the resource to be fetched. Defaults to 1. [NUMBER]
- `limit:` The number of items to be returned in a single page. Defaults to 3. [NUMBER]


### Routes
- `/recipes?page&limit` - The route to fetch all the recipes from the data-store. Optional query parameters, page and limit, help in controlling the number and position of recipes sent back as a response by the server. 

### Examples

- `/recipes` - a GET request to get all recipes

```json
[{
        "id" : 1,
        "name": "Crock Pot Roast"
    },
    {
        "id" : 2,
        "name": "Roasted Asparagus"
    },
    {
        "id" : 3,
        "name": "Curried Lentils and Rice"
    }
]
```

- `/recipes?page=1&limit=2`
```json
[{
        "id" : 1,
        "name": "Crock Pot Roast"
    },
    {
        "id" : 2,
        "name": "Roasted Asparagus"
    }
]
```

- `/recipes?page=2&limit=3`
```json
[ {
        "id" : 4,
        "name": "Big Night Pizza"
    },
    {
        "id" : 5,
        "name": "Cranberry and Apple Stuffed Acorn Squash Recipe"
    },
    {
        "id" : 6,
        "name": "Mic's Yorkshire Puds"
    }
]
```

### Project Specifications

**Read-Only Paths**
- test
- bin
- recipes.json

**Commands**
- run: `npm start`
- install: `npm install`
- test: `npm test`
