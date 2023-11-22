import './App.css';
import  { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import Tableau1 from './components/tableau1/Tableau1';
import Sidebar from './components/sidebar/Sidebar';
import Tableau from './components/tableau/Tableau';
import Supprimer from './components/supprimer/Supprimer';
import Modifier from './components/modifier/Modifier';
import Admin from './components/admin/Admin';
import Article from './components/article/Article';
import RecapPage from './components/recapPage/RecapPage';
import Footer from './components/footer/Footer';


const App = () => ( 

  <div className='App'>
    <Sidebar/>
  
        <Router>
        <Switch> 
      <Route  exact path="/"><Tableau /> </Route>
             <Route  exact path="/Tableau1"><Tableau1/> </Route>
            <Route  exact path="/Modifier">
              <Modifier/> 
            </Route>
            <Route  exact path="/Supprimer">
              <Supprimer/>
            </Route>
            <Route  exact path="/Admin">
              <Admin/> 
            </Route>
            <Route  exact path="/Article">
              <Article/> 
            </Route>
            <Route path="/recap" component={RecapPage} />
         
        </Switch> 
        </Router>
       
        <Footer/>
        </div>
        
    );
 


export default App;


