import classNames from "classnames";
import "./NavigationBtn.css";

const NavigationBtn = (props) => (

        <button {...props} className={classNames('navButton',
                props.className
        )}/>
);

export default NavigationBtn;