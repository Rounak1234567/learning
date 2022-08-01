import { useEffect, useRef } from "react";

const Search = ({
    id,
    value,
    type = 'text',
    onInputChange,
    isFocused,
    children
}) => {

    const inputRef = useRef();

    useEffect(() => {
        if (isFocused && inputRef.current) {
          inputRef.current.focus();
        }
      }, [isFocused]);

    return (
        <div>
            <>
                <label htmlFor={id}>{children}</label>
                &nbsp;
                <input
                    ref={inputRef}
                    id={id}
                    type={type}
                    value={value}
                    autoFocus
                    onChange={onInputChange}
                />
            </>
        </div>
    )
}

export { Search }