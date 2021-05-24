import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"; // pour navigation
import '././assets/css/animate.min.css';

import '././assets/css/reset.css';
import '././assets/css/default.css';
import '././assets/css/modal.css';

import { Home } from './views/home.js'
import { Login } from './views/login.js'
import { Nav } from './components/nav.js';
import { SearchBar } from './components/searchBar.js';
import { SearchBarHome } from './components/searchBarHome';
import { Footer } from './components/footer';
import { ListBookmarks } from './views/list-bookmarks';
import { ListArticles } from './views/list-articles';
import { Article } from './views/article';

function App(props) {
  const [login, setLogin] = useState('unlogged')
  const [filterSearch, setFilterSearch] = useState('')
  const [refresh, setRefresh] = useState(0)
  const [scrollFixedElement, setScrollFixedElement] = useState("");
  const [scrollY, setScrollY] = useState(0);
  function logit() {
    setScrollY(window.pageYOffset);
    if (scrollY > 100) {
      setScrollFixedElement("js-sticky")
    } else {
      setScrollFixedElement("")
    }
  }
  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  });

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/articles" >
            {login !== "logged" ? <Redirect to="/login" /> : null}
            <header id="goToHeader" className={scrollFixedElement}>
              <SearchBar setFilterSearch={setFilterSearch} refresh={refresh} setRefresh={setRefresh} />
              <Nav setLogin={setLogin} />
            </header>
            <ListArticles filterSearch={filterSearch} refresh={refresh} setRefresh={setRefresh} />
            <Footer />
          </Route>
          <Route path="/article/:id" >
            {login !== "logged" ? <Redirect to="/login" /> : null}
            <header id="goToHeader" className={scrollFixedElement}>
              <Nav setLogin={setLogin} />
            </header>
            <Article refresh={refresh} setRefresh={setRefresh} />
            <Footer />
          </Route>
          <Route path="/favoris" >
            {login !== "logged" ? <Redirect to="/login" /> : null}
            <header id="goToHeader" className={scrollFixedElement}>
              <SearchBar setRefresh={setRefresh} refresh={refresh} setFilterSearch={setFilterSearch} />
              <Nav setLogin={setLogin} />
            </header>
            <ListBookmarks setRefresh={setRefresh} refresh={refresh} filterSearch={filterSearch} />
            <Footer />
          </Route>
          <Route path="/login" >
            {login !== "unlogged" ? <Redirect to="/" /> : null}
            <Login login={login} setLogin={setLogin} />
          </Route>
          <Route exact path="/">
            {login !== "logged" ? <Redirect to="/login" /> : null}
            <header id="goToHeader" className={scrollFixedElement}>
              <SearchBarHome />
              <Nav setLogin={setLogin} />
            </header>
            <Home />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}
export default App;