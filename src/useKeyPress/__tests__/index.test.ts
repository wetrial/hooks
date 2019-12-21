// import { renderHook } from '@testing-library/react-hooks';
import useKeyPress, { KeyFilter, EventHandler, keyEvent } from '../index';

interface Props {
  keyFilter: KeyFilter;
  eventHandler: EventHandler;
  events: keyEvent[];
}

describe('useKeyPress', () => {
  it('should be defined', () => {
    expect(useKeyPress).toBeDefined();
  });

  // it('test on mounted', async () => {
  //   renderHook(
  //     (props: Props) => useKeyPress(props.keyFilter, props.eventHandler, props.events),
  //     {
  //       initialProps: {
  //         keyFilter: 'a',
  //         eventHandler: () => {},
  //         events: ['keydown'],
  //       },
  //     },
  //   );
  // });
});
