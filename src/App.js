
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



  // Custom Hook
  const useSemiPersistentState = (key, initialState) => {
    const [value, setValue] = useState(
      localStorage.getItem(key) || initialState
    );

    useEffect(() => {
      localStorage.setItem(key, value);
    }, [value, key]);

    return [value, setValue];
  };





  const [search, setSearch] = useSemiPersistentState(
    'search',
    'React'
  );



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



      <Search
        id="search"
        value={search}
        onInputChange={handleSearch}
      >
        <strong>Search:</strong>
      </Search>
      <hr />
      <List list={searchedStories} />
    </div>
  );
}

export default App;
