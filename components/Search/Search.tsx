import { Dispatch, SetStateAction, useState } from "react";
import s from "./Search.module.scss";
type PropsType = {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  onSearch: boolean;
  setOnSearch: Dispatch<SetStateAction<boolean>>;
};
export default function Search(props: PropsType) {
  const { search, setSearch, onSearch, setOnSearch } = props;

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const handleCloseClick = () => {
    setOnSearch(false);
    setSearch("");
    setInputValue("");
  };
  const handleSearchClick = () => {
    setSearch(inputValue);
    setOnSearch(true);
  };
  return (
    <div className={s.search}>
      <input
        type="text"
        name="search"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleSearchClick}>Найти</button>
      {onSearch && (
        <button onClick={handleCloseClick} className={s.close}>
          Сбросить поиск
        </button>
      )}
    </div>
  );
}
