import './index.css';
import Main from './components/Main'
import Entry from './components/Entry'
import axios from 'axios'
import { useState, useEffect } from 'react'


function App() {

  const [topicData, setTopicData] = useState([])

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
    <>
    <Main topicData = {topicData} />
    <Entry topicData = {topicData} />
    </>
  );
}

export default App;
