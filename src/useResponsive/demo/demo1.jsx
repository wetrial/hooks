import React from 'react';
import { configResponsive, useResponsive } from '..';

configResponsive({
  small: 0,
  middle: 800,
  large: 1200,
});
export default function() {
  const responsive = useResponsive();
  return (
    <>
      <p>Please change the width of the browser window to see the effect: </p>
      <p>screen:{responsive.screen}</p>
      {Object.keys(responsive.match).map(key => (
        <p key={key}>
          {key} {responsive.match[key] ? '✔' : '✘'}
        </p>
      ))}
    </>
  );
}
