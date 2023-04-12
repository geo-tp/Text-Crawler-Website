export const FixedButton = ({show, setShow}) => {
    return (
        <button title="Alpha Core DB" onClick={() => setShow(!show)} className="fixed-button"><i className={show ? "fa fa-close" : "fa fa-database" }></i></button>
    )
}