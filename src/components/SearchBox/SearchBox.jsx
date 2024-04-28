import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filters/selectors";
import { initialStateFilter } from "../../redux/filters/constants";
import { changeFilter } from "../../redux/filters/filtersSlice";

const SearchBox = () => {
  const searchValue = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handelInputSearch = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  const cleanInput = () => {
    dispatch(changeFilter(initialStateFilter.name));
  };

  return (
    <div className={css.container}>
      <h2>Find contacts</h2>
      <div>
        <input
          className={css.input}
          type="text"
          value={searchValue}
          onChange={handelInputSearch}
        />
        <button className={css.button} onSubmit={cleanInput}>
          Clear the search
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
