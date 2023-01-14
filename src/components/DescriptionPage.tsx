import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';

export const DescriptionPage: FC = () => {
  const [item, setItem] = useState<{
    imgUrl: string;
    title: string;
    desc: string;
  }>();

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchItem() {
      try {
        const { data } = await axios.get('https://63c1c7b099c0a15d28f208e9.mockapi.io/items/' + id);
        setItem(data);
      } catch (error) {
        alert('Error oleh');
        navigate('/');
      }
    }

    fetchItem();
  }, []);

  if (!item) {
    return <>Loading...</>;
  }

  return (
    <div className="desc-page">
      <img className="desc-image" src={item?.imgUrl} alt={item?.title} />
      <div className="desc-body">
        <div className="top-desc">{item.title}</div>
        <div className="full-desc">{item.desc}</div>
        <Link className="link" to="/">
          <AiOutlineArrowLeft className="arrow" />
          <div className="desc-button">Back to homepage</div>
        </Link>
      </div>
    </div>
  );
};
