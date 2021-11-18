import React from "react";
function MyButton({ block, callback }, cb) {
  return React.createElement('button', { onClick: () => callback({ key:block.id, value: block.click }) }, block.text)
}

export default MyButton;