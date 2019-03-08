// Vendors
import React, { useState } from 'react'

import Chat from '../../chat.index'
import dataInit from './chat.default.mockData'

const CurrentUserComp = ({ message }) => <p>{message}</p>
const OtherUserComp = ({ message }) => <p>{message}</p>
const LoadingComponent = () => <p>Loading....</p>

const Example = () => {
  const [data, setData] = useState(dataInit)

  const addMessage = (message) => {
    const newData = data

    const newMessage = {
      id: Math.random(),
      userId: '1',
      message,
    }

    newData.push(newMessage)
    setData(newData)
  }

  return (
    <div className='App'>
      <h1>Add Other user message</h1>
      <button onClick={addMessage}>Add Message</button>
      <h1>Component</h1>
      <Chat
        messagesData={data}
        senderIds={[1]}
        CurrentUserComp={CurrentUserComp}
        OtherUserComp={OtherUserComp}
        onReachedTop={() => console.log('reachedTop')}
        previousMessageData={[]}
        LoadingComp={LoadingComponent}
        onSubmit={addMessage}
      />
    </div>
  )
}

export default Example