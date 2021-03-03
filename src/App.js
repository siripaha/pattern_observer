import React from 'react';
import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const projectID = '2ed64e8b-6532-40a0-bd3b-b20b9696972f'; //ID Chat Engineer

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      //userName='cnngineer'
      //userSecret='Ggts2283'
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
	    projectID='2ed64e8b-6532-40a0-bd3b-b20b9696972f'
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      //onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;
