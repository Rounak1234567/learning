
import { useEffect, useState } from 'react';
import './App.css';
import { List } from './components/List';
import { Search } from './components/Search';

function App() {

  // const welcome = {
  //   greeting: 'Hey',
  //   title: 'React',
  // };

  // function showTest(text) {
  //   return text
  // }
  
  const [search, setSearch] = useState(localStorage.getItem('search') || 'React');

  useEffect(() => {
    localStorage.setItem('search', search);
  }, [search])


  const handleSearch = (e) => {
    setSearch(e.target.value);
  }

  const list = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  const searchedStories = list.filter(story =>
    story.title.toLowerCase().includes(search.toLowerCase())
  );



  return (
    <div>
      {/* <h1>{welcome.greeting} {welcome.title}</h1>
      <h1>welcome {showTest(<p>Rounak</p>)}</h1> */}

      <Search term={search} handleSearch={handleSearch} />
      <hr />
      <List list={searchedStories} />
    </div>
  );
}

export default App;
