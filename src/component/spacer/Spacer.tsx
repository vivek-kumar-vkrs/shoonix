import React from 'react';
type spacerProp = {
  size: string;
};
function Spacer({ size }: spacerProp) {
  return <div style={{ height: `${size}` }}></div>;
}

export { Spacer };
