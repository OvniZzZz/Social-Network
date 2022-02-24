import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Sidebar from './components/sidebar/Sidebar';
import Post from './components/posts/Post';
import {BrowserRouter, Route} from 'react-router-dom'
import Messages from './components/messages/Messages';

function App() {
  return (
    <BrowserRouter>
      <div className="Wrapper">
        <Header/>
        <Main name='Elon Mask'/>
        <Sidebar/>
      </div>
    </BrowserRouter>
  );
}

export default App;
