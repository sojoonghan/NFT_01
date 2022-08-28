import React from 'react';
import { RecoilRoot } from 'recoil';
import Link from './link/Link';

function App() {

  return (
    <>
      <div className="App">
        <RecoilRoot>
          <Link />
        </RecoilRoot>
      </div >
    </>
  );
}

export default App;
