import { FC } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { CiCalendar } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { Item } from '../../../redux/item/types';

export const ItemBlock: FC<Item> = ({ title, date, desc, imgUrl, id }) => {
  const truncateDesc = (desc: string) => {
    if (desc.length >= 100) {
      return desc.substring(0, 100) + '...';
    }

    return desc;
  };

  return (
    <div className="item-block">
      <img className="item-block-image" src={imgUrl} alt={title} />
      <div className="item-block-info">
        <div className="date">
          <CiCalendar className="calendar" />
          <span>{date}</span>
        </div>
        <div className="title">{title}</div>
        <div className="desc">{truncateDesc(desc)}</div>
        <Link className="read-more" key={id} to={`/test/${id}`}>
          <div>Read More</div>
          <AiOutlineArrowRight className="arrow" />
        </Link>
      </div>
    </div>
  );
};
