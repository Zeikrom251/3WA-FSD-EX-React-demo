import Message from "./Message"

const Messages = ({ messages }) => {
  return (
    <ul>
      {messages.map((msg, index) => (
        <Message key={index} text={msg.message} />
      ))}
    </ul>
  )
}

export default Messages
