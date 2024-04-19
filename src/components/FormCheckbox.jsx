function FormCheckbox(props) {
    return (
        <>
            <div>
                <input type="checkbox" name={props.name} checked={props.value} onChange={(e) => {
                    console.log("ev => ", JSON.stringify(e.target.checked))
                    props.handleChange("isAccepted", e.target.checked)
                }} />{props.label}
                <br />
                <small>{props.error}</small>
            </div>
        </>
    );
}

export default FormCheckbox;