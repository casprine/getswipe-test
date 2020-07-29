import React from 'react';

// components
import { Header } from './components';
import { Button, ButtonGroup } from './components/formElements';
import { InvoiceDetails, InvoiceNotes, InvoiceTemplate, InvoiceBilling, InvoiceItems } from './components/sections';
import { PlusIcon } from './icons';

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
            <InvoiceItems />
          </section>

          <section>
            <InvoiceNotes />
          </section>
        </div>

        <div className="right-section">
          <section className="section-lg-padding section-gutter">
            <InvoiceTemplate />
          </section>

          <section className="section-lg-padding section-gutter">
            <InvoiceBilling />
          </section>

          <section className="section-lg-padding section-gutter recurring-section">
            <div className="black-text">Recurring</div>
            <p className="gray-text">Schedule this invoice to be sent at regular intervals?</p>

            <Button className="recurring-btn">
              <p className="white-text">Create Recurring Invoice</p>
              <PlusIcon />
            </Button>
          </section>
        </div>
      </div>
    </main>
  );
};

export default App;
