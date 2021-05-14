import React from 'react'

const Entry = () => {
  return (
    <div className="entry hidden" id="entry-form">
    <div className="wrapper fill-container flex-center">
      <form className="flex-center" action="data.json">
        <div className="selection-wrapper">
          <h2>Add a new:</h2>
          <button className="select-type" data-new-type="topic">Topic</button>
          <button className="select-type" data-new-type="subTopic">Sub-Topic</button>
          <button className="select-type" data-new-type="property">Entry</button>
        </div>
        <div className="input-wrapper hidden">

          <div className="input-container hidden" data-access-level='["topic"]'>
            <input type="text" name="Topic Name" id="topic" />
            <label htmlFor="topic">Topic Name</label>
          </div>

          <div className="input-container hidden" data-access-level='["topic"]'>
            <input type="file" name="icon" id="icon" />
            <label htmlFor="icon">Icon</label>
          </div>

          <div className="input-container hidden" data-access-level='["subTopic","property"]'>
            <select name="Topic-Select" id="topic-select">

            </select>
            <label htmlFor="topic-select">Select Topic</label>
          </div>


          <div className="input-container hidden" data-access-level='["subTopic", "topic"]'>
            <input type="text" name="" id="subtopic" />
            <label htmlFor="subtopic">Sub-Topic Name</label>
          </div>

          <div className="input-container hidden" data-access-level='["property"]'>
            <select name="subTopic-select" id="subtopic-select">

            </select>
            <label htmlFor="subtopic-select">Select Subtopic</label>
          </div>


          <div className="input-container hidden" data-access-level='["property", "subTopic", "topic"]'>
            <input type="text" name="Property Name" id="property-name" />
            <label htmlFor="property-name">Property Name</label>
          </div>

          <div className="input-container hidden" data-access-level='["property", "subTopic", "topic"]'>
            <input type="text" name="Property Description" id="property-description" />
            <label htmlFor="property-description">Description</label>
          </div>

          <div className="input-container hidden" data-access-level='["property", "subTopic", "topic"]'>
            <input type="text" name="Code" id="Code" />
            <label htmlFor="Code">Code</label>
          </div>

          <div className="input-container hidden" data-access-level='["property", "subTopic", "topic"]'>
            <textarea name="Notes" id="Notes" cols="30" rows="7">
          </textarea>
            <label htmlFor="Notes">Notes</label>
          </div>

          <div className="input-container hidden" data-access-level='["property", "subTopic", "topic"]'>
            <input type="file" name="Screenshots" id="screenshot" />
            <label htmlFor="screenshot">Screenshots</label>
          </div>


          <button id="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Entry
