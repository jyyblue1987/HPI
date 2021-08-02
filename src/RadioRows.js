function RadioRows(props) {
    return (
        <table>
            <tbody>
                <tr>
                    <td style={{width: '50%'}}>{props.label}</td>
                    <td style={{width: '50%'}}>
                        <label>
                            <input type="radio" name={props.label} value="Yes"/>
                            Yes
                        </label>
                        <label>
                            <input type="radio" name={props.label} value="No"/>
                            No
                        </label>
                        <label>
                            <input type="radio" name={props.label} value="N/A"/>
                            N/A
                        </label>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default RadioRows;
