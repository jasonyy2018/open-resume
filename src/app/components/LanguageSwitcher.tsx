import React from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import GreetingComponent from './GreetingComponent';

const App: React.FC = () => {
  return (
    <div>
      <LanguageSwitcher />
      <GreetingComponent />
    </div>
  );
};

export default App;
