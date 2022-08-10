import { Message } from './components/message/Message';
import './App.css';

function App() {
  
  //Добавлено преподавателем
  const message = "Homework from lesson-1 is works!"
  
  return (
    <div className="App">
      <Message text={message}/>
    </div>
  );
}

export default App;
