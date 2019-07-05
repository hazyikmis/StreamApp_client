import React from "react";
//import { BrowserRouter, Route } from "react-router-dom";
import { Router, Route, Switch } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";
import history from "../history";

/* After starting to use "history", we have changed "BrowserRouter" to plain "Router"
<BrowserRouter history={history}>
...
</BrowserRouter>
*/

const App = () => {
  return (
    <div className='ui container'>
      <Router history={history}>
        <Header />
        <Switch>
          <Route path='/' exact component={StreamList} />
          <Route path='/streams/new' exact component={StreamCreate} />
          <Route path='/streams/edit/:id' exact component={StreamEdit} />
          <Route path='/streams/delete/:id' exact component={StreamDelete} />
          <Route path='/streams/:id' exact component={StreamShow} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;

//VERY IMPORTANT NOTE ABOUT SWITCH COMPONENT:
//"streams/new" & "/streams/:id" both of these routes are similar to each other.
//"streams/new" route also shows the "streams/:id" page because the Route component
//thinks that :id=new. In order to fix this issue we have used Switch component.
//If "streams/new" is found then this routes selected, no forward search...
