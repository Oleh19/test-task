import { debounce } from 'lodash';
import { FC, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import search from '../assets/image/search.svg';
import { setSearchValue } from '../redux/filter/slice';
import { selectItemData } from '../redux/item/selector';

export const Header: FC = () => {
  const { items } = useSelector(selectItemData);

  const dispatch = useDispatch();
  const [value, setValue] = useState<string>('');

  const updateSearchValue = useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 200),
    [],
  );

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <header className="header">
      <span className="title">Filter by keywords</span>
      <div className="search-block">
        <input
          value={value}
          onChange={onChangeInput}
          className="search"
          type="text"
          placeholder="Search"
        />
        <img className="search-icon" src={search} alt="search" />
      </div>
      <span className="results">Results: {items.length} </span>
    </header>
  );
};
