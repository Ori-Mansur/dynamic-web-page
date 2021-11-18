import React from "react";
import MyButton from "./MyButton";
import MyInput from "./MyInput";
import MyLabel from "./MyLabel";
import MyTabs from "./MyTabs";




const Components = {
    MyButton,
    MyInput,
    MyTabs,
    MyLabel
};

var index = (block, base_component, callback) => {
    // console.log(block, base_component);

    
    var assignedCpm = block.base_component || base_component;

    if (typeof Components[assignedCpm] !== "undefined") {
        return React.createElement(Components[assignedCpm], {
            key: block.id,
            block: block,
            callback: (val) => callback(val)
        });
    }
    return React.createElement(
        () => <div>The component {block.base_component} has not been created yet.</div>,
        { key: block.id }
    );
};

export default index
