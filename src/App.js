import logo from './logo192.png';
import designer from './graphic 1.png';
import './App.css';

const list = [
  {
  title: 'About',
  url: 'https://reactjs.org/',
  author: 'Jordan Walke ',
  num_comments: 3 ,
  points: 4 ,
  objectID: 0,
  },
  {
  title: 'Services',
  url: 'https://redux.js.org/',
  author: 'Dan Abramov, Andrew Clark ',
  num_comments: 2 ,
  points: 5,
  objectID: 1,
  },
  {
    title: 'Skills',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark ',
    num_comments: 2 ,
    points: 5,
    objectID: 1,
    },
    {
      title: 'Experience',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark ',
      num_comments: 2 ,
      points: 5,
      objectID: 1,
      },
      {
        title: 'Contact',
        url: 'https://redux.js.org/',
        author: 'Dan Abramov, Andrew Clark ',
        num_comments: 2 ,
        points: 5,
        objectID: 1,
        },
  ];
  const welcome = {
    greeting: ' Hi! I am Carlo,',
    greetingcont: ' A freelance graphic',
    greetingcont2: 'designer'
  };
  const heading = 'Welcome to the World of ';
  function List(){return(
    <ul>
       {list.map(function(item){
  return(
    <li key={item.objectID}>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      {/*<span>{item.author}</span>
      <span>{item.num_comments}</span>
  <span>{item.points}</span>*/}
    </li>)})}
      </ul>)}
  ;
 
function App() {

  return (
    <div className="App">
      <header className="Nav-bar">
      {<img src={logo} className="App-logo" alt="logo"/>}
      {<img src={designer} className='App-graphic1' alt='designer'/>}
        <div className= 'Nav-bar1'>
        <a 
        className= 'brand'
        href ="C:\Users\admin\create-react-app-main\hacker-stories\src\logo192.png"
        rel="noopener noreferrer">

          <li>Koy's Graphic Design</li>
          </a>
        <List />
        
        </div>
        
        {/*<a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
  </a>*/}
        <div className='greeting'>
        <p> {welcome.greeting}  </p>
        <p>{welcome.greetingcont}</p>
        <p>{welcome.greetingcont2}!</p>
        </div>
      </header>
      <div className='App-middlePart'>    
        <h1> {heading}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         React
        </a>
        </h1>
      </div>
    </div>
  );
          }

  

export default App;
