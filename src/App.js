import React from 'react';

// components
import { Header, Button, ButtonGroup } from './components';

const App = () => {
  return (
    <main>
      <Header />

      <div className="page-wrapper container">
        <ButtonGroup>
          <Button variant="outline" tabIndex="1">
            <p className="black-text button-text">Save</p>
          </Button>
          <Button variant="outline">
            <p className="black-text button-text">Preview</p>
          </Button>

          <Button variant="outline">
            <p className="black-text button-text">Preview</p>
          </Button>
        </ButtonGroup>
      </div>
    </main>
  );
};

export default App;
