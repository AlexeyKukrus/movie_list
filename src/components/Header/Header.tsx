import React, { useState, useEffect } from "react";
import { useDebounce } from "../../hooks/hooks";
import styles from './Header.module.css';

import { Input } from "antd"

interface PropTypes {
  onSearch: (value: string) => void
}
export const Header: React.FC<PropTypes> = ({onSearch}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const debouncedValue = useDebounce(inputValue, 500)
  
  useEffect(() => {
    onSearch(debouncedValue);
  }, [debouncedValue, onSearch]);
  
  return (
    <div className={styles.header} >
      <Input 
        placeholder="Type to search ..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        
      />
    </div>
  )
}