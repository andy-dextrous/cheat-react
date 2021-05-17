import React, {useState, useContext} from 'react'
import {topicDataContext, chosenTopicContext} from './Main'

const Search = () => {
  const topicData = useContext(topicDataContext)
  const {setChosenTopic} = useContext(chosenTopicContext)
  const [matches, setMatches] = useState([])
  const [isFocusState, setIsFocusState] = useState(false)
  const [isHoveredOverDropdown, setIsHoveredOverDropdown] = useState(false)
  
  const dropdownStyle = {position:"Absolute", top:'50px', width:'80%', background:"#efefef", color:'#444', padding:'10px'}

  const findMatchingTopic = (searchTerm) => {
    if (!searchTerm) return;
    const matches = []
    topicData.forEach(parentTopic => {
      if (parentTopic.subTopics.length === 0) return;
      return parentTopic.subTopics.forEach(subTopic=>{
        return subTopic.properties.forEach((property) => {
          if(property.title.includes(searchTerm)) {
              matches.push(property)
              setMatches(matches)
            }
        })
      })
    })
  }


  return (
    <div className="search-container full-width flex-center">
      <input 
        id="searchInput"
        type="text" 
        name="search"  
        onFocus={()=>setIsFocusState(true)} 
        onBlur={()=>(!isHoveredOverDropdown && setIsFocusState(false))}
        onChange={(e) => findMatchingTopic(e.target.value)} 
      />
      
      {isFocusState && 
      <div style={dropdownStyle}>
        <ul>
          {matches.map((match) => {
            return <li 
                    onClick={()=>{
                      setChosenTopic(match) 
                      setIsFocusState(false)
                      const searchInput = document.querySelector('#searchInput')
                      if (!searchInput) return;
                      searchInput.value=''
                    }}
                    onMouseEnter={()=>{setIsHoveredOverDropdown(true)}}
                    onMouseLeave={()=>{setIsHoveredOverDropdown(false)}}
                    key={match.id}
                    >
                      {match.title}
                    </li>
          })}
        </ul>
      </div>
      }
    </div>
  )
}

export default Search
