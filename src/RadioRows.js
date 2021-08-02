function RadioRows(props) {
    const options = ['Yes', 'No', 'N/A'];
    return (
        <table>
            <tbody>
                <tr>
                    <td style={{width: '50%'}}>{props.label}</td>
                    <td style={{width: '50%'}}>
                        {
                            options.map(item => (
                                <label key={item}>
                                    <input type="radio" name={props.label} value={item} onChange={(e) => props.onSymptomChange(props.label, e)}/>
                                    {item}
                                </label>
                            ))
                        }                        
                        
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default RadioRows;
