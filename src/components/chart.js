import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';


export default (props) => {
  return (
    <div>
      <Sparklines data={props.data} width={100} height={20}>
          <SparklinesLine color={props.color} />
      </Sparklines>
    </div>
  );
}