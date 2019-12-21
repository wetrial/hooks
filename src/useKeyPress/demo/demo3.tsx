import React, { useState } from 'react';
import { Icon } from 'antd';
import useKeyPress from '..';

export default () => {
  const [num, setNum] = useState();
  const [key, setKey] = useState();
  const [state, setState] = useState();
  const filterKey = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  useKeyPress(filterKey, event => {
    setNum(event.key);
  });

  // a s d f, Backspace, 8
  useKeyPress([65, 83, 68, 70, 8, '8'], event => {
    setKey(event.key);
  });

  useKeyPress(['shift.c'], () => {
    setState(1);
  });

  useKeyPress(['meta'], () => {
    setState(2);
  });

  useKeyPress('ctrl.alt.c', () => {
    setState(3);
  });

  useKeyPress('ctrl.alt.space', () => {
    setState(4);
  });

  // Attention: event.key === '0'
  useKeyPress('ctrl.alt.0', () => {
    setState(5);
  });

  return (
    <div>
      <p>Try pressing the following: </p>
      <div>
        1. Number key [0-9]: <span style={{ color: '#f00' }}>{num}</span>
      </div>
      <div>
        2. Press key [a, s, d, f, Backspace, 8]: <span style={{ color: '#f00' }}>{key}</span>
      </div>
      <div>
        3. Modifier key [shift.c]: {state === 1 && <Icon type="check" style={{ color: '#f00' }} />}
      </div>
      <div>
        4. Modifier key [meta]: {state === 2 && <Icon type="check" style={{ color: '#f00' }} />}
      </div>
      <div>
        5. Modifier key [ctrl.alt.c]:{' '}
        {state === 3 && <Icon type="check" style={{ color: '#f00' }} />}
      </div>
      <div>
        6. Modifier key [ctrl.alt.space]:{' '}
        {state === 4 && <Icon type="check" style={{ color: '#f00' }} />}
      </div>
      <div>
        7. Modifier key [ctrl.alt.0]:{' '}
        {state === 5 && <Icon type="check" style={{ color: '#f00' }} />}
      </div>
    </div>
  );
};
