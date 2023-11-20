# Embedded Data Starter Snippets

### index page refactor EJS
<h1></h1>
  <table id="list">
    <thead>
      <tr>
        <th>Title</th>
        <th>Release<br>Year</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <% movies.forEach(function(m) { %>
        <tr>
          <td>
            <%= m.title %>
          </td>
          <td>
            <%= m.releaseYear %>
          </td>
          <td><a href="/movies/<%= m._id %>">DETAILS</a></td>
        </tr>
      <% }); %>
    </tbody>
  </table>

<>
### show view EJS

```html
<%- include('../partials/header') %>
  <!-- Movie Content on show page -->
  <section id="show-page">
    <div>Title: </div>
    <div>
      <%= movie.title %>
    </div>
    <div>Release Year: </div>
    <div>
      <%= movie.releaseYear %>
    </div>
    <div>Rating: </div>
    <div>
      <%= movie.mpaaRating %>
    </div>
    <div>Cast: </div>
    <div>
      <%= movie.cast.join(', ') %></div>
  <div>Now Showing: </div>
  <div><%= movie.nowShowing ? ' Yes' : 'Nope' %>
    </div>
  </section>

<%- include('../partials/footer') %>
```

### /public/stylesheets/style.css

```css

* {
  box-sizing: border-box;
  font-family: Helvetica;
  color: #424748;
}

body {
  margin: 0;
  height: 100vh;
  display: grid;
  grid-template-rows: 50px 1fr;
  grid-template-areas:
    "nav"
    "main";
}

body > nav {
  grid-area: nav;
  background-color: #b8c0c2;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 20px 0 30px;
}

nav > img {
  width: 34px;
  object-fit: contain;
  margin-right: auto;
}

body > main {
  grid-area: main;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e8eceb;
  padding: 20px;
  overflow-y: scroll;
}
/* add main directly inside of partial */
body > main h1:first-child {
  margin-bottom: 50px;
}

nav > a {
  margin: 20px;
  text-decoration: none;
  padding: 10px;
  border-radius: 5px;
}

nav > a:hover:not(.active) {
  color: white;
  background-color: #424748;
}

nav > a.active {
  color: white;
  cursor: default;
}

#new-form {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(2, minmax(auto, 22rem));
}

#new-form * {
  font-size: 20px;
  padding: 5px;
  border-radius: 5px;
}

#new-form button[type="submit"] {
  grid-column: span 2;
  width: 10rem;
  margin-left: auto;
}

table {
  font-size: 20px;
}

table thead th {
  padding: 5px;
  border-bottom: 2px solid #424748;
}

table td {
  padding: 10px;
  text-align: center;
}

#list td:nth-child(2),
#list td:nth-child(3) {
  min-width: 100px;
}

#list a {
  border-radius: 4px;
  background-color: #b8c0c2;
  padding: 4px;
  text-decoration: none;
  font-size: 14px;
}

#list a:hover {
  background-color: white;
}

#show-page {
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 1rem;
}

#show-page div:nth-child(even) {
  font-weight: bold;
}



```

### header partial 

```html 
  <nav>
    <img src="/images/camera.svg">
    <a href="/movies/new" <%- title === 'Add Movie' ? 'class="active"' : '' %>>ADD MOVIE</a>
    <a href="/movies" <%- title === 'All Movies' ? 'class="active"' : '' %>>ALL MOVIES</a>
  </nav>
  <main>
    <h1><%= title %></h1>


```