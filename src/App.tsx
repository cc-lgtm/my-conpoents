import React from 'react';
import Button from './components/Button/button';
import { ButtonType, ButtonSize } from './components/Button/button';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';

function App() {
  return (
    <div className="App">
      <Menu defaultIndex={0} onSelect={(index) => {alert(index)}}>
        <MenuItem index={0}>
          cool link
        </MenuItem>
        <MenuItem index={1} disabled>
          cool link2
        </MenuItem>
        <MenuItem index={2}>
          cool link3
        </MenuItem>
      </Menu>

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
