import logo from './logo.JPG';
import './App.css';
import {Button} from 'reactstrap';
import {BrowserRouter as Router,Switch,Route,Link, useHistory} from 'react-router-dom';
import CreateSurvey from './components/create-survey';
import ConfirmSurvey from './components/confirm-survey';
import {useDispatch} from 'react-redux';
import { createSurvey, surveySlice } from './store/surveySlice';
import { unwrapResult } from '@reduxjs/toolkit';
import TakeSurvey from './components/take-survey';

function App() {
const dispatch=useDispatch();
const history=useHistory();

  const redirectToNewSurvey=()=>{
    //dispatch the action for creating a new survey
    //console.log("action ", surveySlice.actions.createSurvey({random:32}));
    //const newSurveyId=//random survey Id
    //dispatch(surveySlice.actions.createSurvey(newSurveyId));
    //history.push('/create/'+newSurveyId);
    dispatch(createSurvey())
    .then(unwrapResult)
    .then(newSurveyId=>history.push("/create/"+newSurveyId));
    //dispatch(surveySlice.actions.createSurvey());
    //equivalent to below line
    //dispatch({type:"surveys/createSurvey",payload});
  }
  return (
    <div className="App">
    <header className="App-header">
       <img src={logo} className="App-logo" alt="logo"/>
    </header>
    <Switch>
      <Route path="/create/:surveyId"><CreateSurvey/></Route>
      <Route path="/confirm/:surveyId"><ConfirmSurvey/></Route>
      <Route path="/take"><TakeSurvey/></Route>
      <Route path="/">
      <Button className="survey-main-btn" onClick={redirectToNewSurvey}>Create Survey</Button>
       {/* <Link to="/create/123"></Link> */}
       <Link to="/take"><Button className="survey-main-btn">Take Survey</Button></Link>
     
     </Route>
     </Switch>
    </div>
    
  );
}

export default App;
