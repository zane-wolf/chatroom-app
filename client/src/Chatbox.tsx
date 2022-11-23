import MessageReceived from "./MessageReceived"
import MessageSent from "./MessageSent"

export default function Chatbox() {
    return (
        <div className='chat-history'>
            <MessageReceived></MessageReceived>
            <MessageSent></MessageSent>
        </div>
    )
}