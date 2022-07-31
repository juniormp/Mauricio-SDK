# Setup Docker

To download the dependency:

`npm install liblab`

Configure ENV:

Add both envs:

`ACCESS_TOKEN="Access Token"`

`URL=https://the-one-api.dev/v2/`

You can get your access token in this url:

`https://the-one-api.dev/sign-up`

## How to use

Import the sdk.

`import {Book} from './index'`

Create a new Book and execute one of the functions to retrieve data

`const book = new Book()`

`book.getBooks()`

There is the possibility to paginate the retrieved result.


`const queryHelper = new QueryHelper(1, 1, 10)`

`await book.getBooks(queryHelper)`


