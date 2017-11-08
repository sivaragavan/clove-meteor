import React from 'react';
import { Button } from 'react-bootstrap';

import './Index.scss';

const Index = () => (
  <div className="Index">
    <img
      src=""
      alt="Clove"
    />
    <h1>Clove</h1>
    <p>On-chain Bookstore</p>
    <div>
      <Button href="http://clovebooks.com">Read the Docs</Button>
      <Button href="http://clovebooks.com"><i className="fa fa-star" /> Star on GitHub</Button>
    </div>
    <footer>
      <p>Need help and want to stay accountable building your product? <a href="http://clovebooks.com">Check out</a>.</p>
    </footer>
  </div>
);

export default Index;
