
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

  const initialStories = [
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

  const getAsyncStories = () =>
  new Promise(resolve =>
    setTimeout(
      () => resolve({ data: { stories: initialStories } }),
      2000
    )
  );

  const [stories, setStories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);


  useEffect(() => {
    setIsLoading(true);
    getAsyncStories().then(result => {
      setStories(result.data.stories);
      setIsLoading(false);
    })
    .catch(()=>setIsError(true))
  }, []);

  const searchedStories = stories.filter(story =>
    story.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleRemoveStory = (item)=>{
    const newStories = stories.filter(story=>
      item.objectID !== story.objectID 
      );
      setStories(newStories)
  }



  return (
    <div>
      {/* <h1>{welcome.greeting} {welcome.title}</h1>
      <h1>welcome {showTest(<p>Rounak</p>)}</h1> */}



      <Search
        id="search"
        value={search}
        isFocused
        onInputChange={handleSearch}
      >
        <strong>Search:</strong>
      </Search>
      <hr />
      {isError && <p>Something went wrong ...</p>}
      {isLoading ? 
      <p>Loading...</p> : 
      <List list={searchedStories} onRemoveItem={handleRemoveStory} />}
      
    </div>
  );
}

export default App;
