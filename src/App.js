import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container } from "@material-ui/core";
import Header from './components/Header/header'
import Footer from './components/Header/MainNav';
import Trending from './components/Pages/Trending';
import Movies from './components/Pages/Movies';
import Series from './components/Pages/Series';
import Search from './components/Pages/Search';

function App() {
  return (
    
     <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Switch>
            <Route path="/" component={Trending} exact />
            <Route path="/movies" component={Movies} />
            <Route path="/series" component={Series} />
            <Route path="/search" component={Search} />
          </Switch>
        </Container>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
    

export default App;
