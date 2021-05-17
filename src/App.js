import './index.css';
import Main from './components/Main'
import Entry from './components/Entry'
import axios from 'axios'
import React, { useState, useEffect } from 'react'

export const addingContentContext = React.createContext()

function App() {

  const [topicData, setTopicData] = useState([])
  const [isAddingContent, setIsAddingContent] = useState(false)

  useEffect(() => {
    async function fetchData() {
      const result = await axios(
        './data.json',
      );
      setTopicData(result.data)
    }
    fetchData();
  }, [])


  return (
<addingContentContext.Provider value={{isAddingContent, setIsAddingContent}}>
  <>
    <Main topicData = {topicData} />
    <Entry topicData = {topicData} />
  </>
</addingContentContext.Provider>
  );
}

export default App;
