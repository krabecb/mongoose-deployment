## new performer form

```html 
```
<%- include('../partials/header') %>

<h2><%=title%></h2>
<div class="new-performer-heading">
  <% if (performers.length){%>
  <h3>Please first ensure that the Performer is not in the dropdown</h3>
  <select name="performerId">
    <% performers.forEach(p=>{%>
    <option value="<%=p._id%>"><%=p.name%></option>
    <%})%>
  </select>
  <%}%>
</div>
<form action="/performers" method="POST">
  <br />
  <label>Name: <input type="text" name="name" /> </label><br />
  <label>Born: <input type="date" name="born" /> </label><br />
  <button type="submit">Add Performer</button>
</form>

<p><%= errorMsg %></p>

<%- include('../partials/footer') %>

### new performer / index controller


```js

async function create(req, res) {
  const performerData = { ...req.body };

  if (!performerData.born) {
    performerData.born = new Date("2003, 1,1");
  }

  await Performer.create(performerData);
  res.redirect("/performers/new");
}


// new 

async function new (req,res){
    res.render('performers/new', {title: "Add Performer", performers: await Performer.find({}).sort('name')}, errorMsg: "")
}

```

### CSS 
```css

.new-performer-heading{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0 2em 0
}

.new-performer-heading select{
  min-width: 8rem;
}

input[type="submit"] {
  width: 8rem;
}

#new-performer-form{
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

#new-performer-form input{
  height: 2rem;
  width: 100%;
}

#new-performer-form button[type="submit"]{
  padding: .5rem 1rem;
}

```
