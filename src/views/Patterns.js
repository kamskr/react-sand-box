import React from "react";
import Downshift from "downshift";

const items = [
  { value: "apple" },
  { value: "pear" },
  { value: "orange" },
  { value: "grape" },
  { value: "banana" },
];

const Patterns = () => (
  <Downshift>
    {({
      isOpen,
      inputValue,
      getInputProps,
      getMenuProps,
      getItemProps,
      selectItem,
    }) => (
      <div className="dropdown is-active">
        <input
          className="input"
          type="text"
          placeholder="Text input"
          {...getInputProps()}
        />
        {isOpen && (
          <div className="dropdown-menu">
            <div className="dropdown-content" {...getMenuProps()}>
              {items
                .filter((item) => item.value.includes(inputValue))
                .map(({ value }, index) => (
                  <button
                    className="dropdown-item button is-white"
                    key={index}
                    {...getItemProps({
                      key: value,
                      index,
                      item: value,
                    })}
                  >
                    {value}
                  </button>
                ))}
            </div>
          </div>
        )}
      </div>
    )}
  </Downshift>
);

export default Patterns;
