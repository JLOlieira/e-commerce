import "./buy-button.css";

function BuyButton({classname, text}) {
    return (
        <button className={classname}>{text}</button>
    )
}

export default BuyButton;