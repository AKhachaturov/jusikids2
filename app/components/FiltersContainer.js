
import FilterButton from "./FilterButton";

import PropTypes from "prop-types";


function FiltersContainer({filters, curFilter = [], onAction}){

    return (
        <div className="flex gap-3 ">
            <FilterButton key={0} 
                    className = { !curFilter.length ? "bg-secondary-700 text-white" : ""} 
                    onClick={() => onAction([])}
                    >
                    {"Все"}
            </FilterButton>
            {filters.map(
                (filter, index) => (
                <FilterButton key={index+1} 
                    className={curFilter.length > 0 && filter.value === curFilter[0].value ? "bg-secondary-700 text-white" : ""} 
                    onClick={() => onAction([filter])}
                    >
                    {filter.label}
                </FilterButton>)
            )}
        </div>
    );
}

export default FiltersContainer;