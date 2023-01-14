import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectFilter } from '../../redux/filter/selectors';
import { fetchItems } from '../../redux/item/asyncAction';
import { selectItemData } from '../../redux/item/selector';
import { useAppDispatch } from '../../redux/store';
import { ItemBlock } from './ItemBlock/ItemBlock';

export const ItemsBlock: FC = () => {
  const dispatch = useAppDispatch();

  const { items } = useSelector(selectItemData);
  const { categoryId, searchValue } = useSelector(selectFilter);

  const getItems = async () => {
    const search = searchValue;

    dispatch(
      fetchItems({
        search,
      }),
    );

    window.scrollTo(0, 0);
  };

  useEffect(() => {
    getItems();
  }, [categoryId, searchValue]);

  const item = items.map((item) => <ItemBlock key={item.id} {...item} />);

  return (
    <main className="items">
      <div className="container">{item}</div>
    </main>
  );
};
