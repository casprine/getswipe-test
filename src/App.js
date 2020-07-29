import React from 'react';

// components
import { Header } from './components';
import { Button, ButtonGroup } from './components/formElements';
import { InvoiceDetails } from './components/sections';

const App = () => {
  return (
    <main>
      <Header />

      <div className="page-wrapper container">
        <ButtonGroup>
          <Button variant="outline" tabIndex="1">
            <p className="black-text button-text">Save</p>
          </Button>
          <Button variant="outline" tabIndex="1">
            <p className="black-text button-text">Preview</p>
          </Button>

          <Button variant="outline" tabIndex="1">
            <p className="black-text button-text">Send</p>
          </Button>
        </ButtonGroup>
      </div>

      <div className="sections container">
        <div className="left-section">
          <section>
            <InvoiceDetails />
          </section>

          <section>
            <p>hello world </p>
          </section>

          <section>
            <p>hello world </p>
          </section>
        </div>

        <div className="right-section">
          <section>
            <p>hello world </p>
          </section>

          <section>
            <p>hello world </p>
          </section>

          <section>
            <p>hello world </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default App;
