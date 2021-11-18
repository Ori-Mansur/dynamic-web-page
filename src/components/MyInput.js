import React from "react";

function MyInput({ block, callback }) {
    return React.createElement('input',{onInput: (ev) => callback({ key:block.id, value: ev.target.value }),...block.attributes})
}

export default MyInput;