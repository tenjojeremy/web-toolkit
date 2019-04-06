// Vendors
import React, { useState } from 'react'

import Chat from '../../Component/chat.index'

import dataInit from './chat.default.mockData'

const CurrentUserComp = ({ message }) => <p>{message}</p>
const OtherUserComp = ({ message }) => <p>{message}</p>
const LoadingComponent = () => <p>Loading....</p>

const Example = () => {
  const [data, setData] = useState(dataInit)

  const addMessage = (message) => {
    const newData = data.slice()
    const newMessage = {
      id: Math.random(),
      userId: '1',
      message,
    }

    newData.push(newMessage)
    setData(newData)
  }

  const addOtherPersonMessage = () => {
    const newData = data.slice()
    const newMessage = {
      id: Math.random(),
      userId: '2',
      message: 'Hello thewrwe',
    }

    newData.push(newMessage)
    setData(newData)
  }

  return (
    <div>
      <h1>Add Other user message</h1>
      <button onClick={addOtherPersonMessage}>Add other user Message</button>
      <h1>Component</h1>
      <Chat
        messagesData={data}
        senderIds={['1']}
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
