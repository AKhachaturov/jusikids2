import classNames from "classnames";

const HeadText = (props) => (
    <h2 {...props} className={classNames("text-4xl text-black leading-tight font-bold font-satoshi", props.className)}>{props.children}</h2>
);

export default HeadText;