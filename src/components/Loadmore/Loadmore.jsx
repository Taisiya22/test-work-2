import css from './Loadmore.module.css';

export const LoadMore = ({loading}) => {

    return (
        <div className={css.wrapperBtn}>
        <button className={css.loadBtn} onClick={loading}>
          Load more
        </button>
      </div>
    );
 }



