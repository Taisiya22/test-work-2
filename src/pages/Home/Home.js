import welcome from 'images/welcome.png';
import css from './Home.module.css';

export default function  Home  ()  {
  return (
    <main className={css.image}>
      <img src={welcome} alt="" />
    </main>
  );
};


