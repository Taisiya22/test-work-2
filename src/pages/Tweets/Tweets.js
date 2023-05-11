import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';

import { UserCard } from 'components/Usercard/UserCard';
import { LoadMore } from 'components/Loadmore/Loadmore';
import { Loader } from 'components/Loader/Loader';
import { FilterBtn } from 'components/DropDown/DropDown';

import { fetchAllUsers } from 'services/api';
import css from './Tweets.module.css';

export default function Tweets ()  {
  const [page, setPage] = useState(1);
  const [users, setUser] = useState([]);
  const [userFilter, setUserFilter] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [, setError] = useState(null);

   const location = useLocation();
  const backLinkLocation = location.state?.from ?? '/';

  const limit = 3;

  useEffect(() => {
    const getUser = async () => {
      setIsLoading(true);
      try {
        const responce = await fetchAllUsers();
        setUser(prevUser => [...prevUser, ...responce]);
        setUserFilter(prevUser => [...prevUser, ...responce]);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    getUser();
  }, []);

  const handlePage = () => {
    setPage(prevpage => prevpage + 1);
  };

  const filter = async e => {
    const name = e.target.value;
    console.log(name);
    switch (name) {
      case 'all':
        setUserFilter(users);
        break;
      case 'follow':
        setUserFilter(
          users.filter(
            user => !JSON.parse(localStorage.getItem(`isFollowing${user.id}`))
          )
        );
        break;
      case 'following':
        setUserFilter(
          users.filter(user =>
            JSON.parse(localStorage.getItem(`isFollowing${user.id}`))
          )
        );
        break;
      default:
        return;
    }
  };

    return (
      <main>
        <p className={css.text}>
          <Link to={backLinkLocation } className={css.link}>
            <AiOutlineArrowLeft />
          </Link>
        </p>
        <FilterBtn filter={filter} />
        <div className={css.list}>
          {userFilter.length > 0 &&
            userFilter.slice(0, page * limit).map(user => (
              <ul key={user.id}>
                <UserCard user={user} />
              </ul>
            ))}
        </div>
        {isLoading && <Loader />}
        {page * limit < userFilter.length && <LoadMore loading={handlePage} />}
      </main>
    );
  };


