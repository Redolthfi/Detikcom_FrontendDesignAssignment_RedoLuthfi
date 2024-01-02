import "../styles/buttons.css"
const Buttons = (props) => {
    const { children} = props
    return (
        <button type="button" className="btn btn-warning rounded-pill button-acara mt-5"><a href="">{children}</a></button>

    )
}

export default Buttons;