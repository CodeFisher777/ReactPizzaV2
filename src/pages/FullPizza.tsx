import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';

const FullPizza: React.FC = () => {
  const [pizza, setPizza] = React.useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();
  const { id } = useParams();
  const navigate = useNavigate();
  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(`https://638c7739eafd555746a6f817.mockapi.io/items/` + id);
        setPizza(data);
      } catch (error) {
        alert('ошибка при получении пиццы');
        navigate('/');
      }
    }
    fetchPizza();
  }, []);
  if (!pizza) {
    return <>Загрузка...</>;
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} />
      <h2>{pizza.title}</h2>

      <h4>{pizza.price} р</h4>
      <Link to="/dsfs">
        {' '}
        <button className="button button--outline button--add">
          <span>Назад</span>
        </button>
      </Link>
    </div>
  );
};
export default FullPizza;
