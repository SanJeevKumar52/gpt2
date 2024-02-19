import logo from './logo.svg';
import './App.css';
import './normal.css';
function App() {
  return (
    <div className="App">
      <aside className='sidemenu'>
        <div className='side-menu-button'>

          <span>+</span>
          New chat
        </div>
      </aside>
      <section className='chatbox'>
        <div className='chat-log'>
          <div className='chat-message'>
            <div className='chat-message-center'>
              <div className='avatar'>
        
              </div>
              <div className='message'>
                Hello Sanjeev
              </div>
            </div>
          </div>
          <div className='chat-message chatgpt'>
            <div className='chat-message-center'>
              <div className='avatar  chatGpt'>
              </div>
              <div className='message'>
                i am an Ai
              </div>
            </div>
          </div>
        </div>
        <div className='chat-input-holder'>
          <textarea className='chat-input-textarea' >
          </textarea>
        </div>
      </section>
    </div>
  );
}

export default App;
