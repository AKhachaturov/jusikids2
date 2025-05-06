
import classNames from "classnames";


const FilterButton = (props) => (
        <button className={classNames('bg-gray-200 text-gray-800 px-5 py-2 rounded-lg shadow-md font-medium text-sm tracking-wider hover:cursor-pointer focus:border-transparent',
            props.className)} onClick={props.onClick}>{props.children}
        </button>

);

export default FilterButton;