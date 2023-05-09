import css from './DropDown.module.css';

export const FilterBtn = ({ filter }) => {
  return (
    <div className={css.wrapp}>
      <select onChange={filter} className={css.option}>
        <option value="all">All</option>
        <option value="follow">Follow</option>
        <option value="following">Following</option>
      </select>
    </div>
  );
};
