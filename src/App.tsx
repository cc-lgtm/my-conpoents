import React from 'react';
import Button from './components/Button/button';
import { ButtonType, ButtonSize } from './components/Button/button';

function App() {
  return (
    <div className="App">
      <Button onClick={(e) => {e.preventDefault(); alert(123)}}> hello </Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
        hello
      </Button>
      <Button target="_blank" btnType={ButtonType.Link} href="http://www.baidu.com">
        baidu link
      </Button>
    </div>
  );
}

export default App;
