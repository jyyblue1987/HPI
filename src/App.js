import logo from './logo.svg';
import './App.css';
import {useState, useRef, useEffect} from 'react';

import RadioRows from './RadioRows';

function App() {
	const [name, setName] = useState('');
	const [age, setAge] = useState(1);
	const [gender, setGender] = useState('male');
	const [history, setHistory] = useState(1);
	const [comp, setComp] = useState('');
	const chief = useRef({});

	const genders = ['male', 'female'];
	const days = [1, 2, 3, 4, 5, 6, 7];
	const complaints = ['asthma', 'fever', 'score throat', 'cough', 'diarrhea'];
	const symptoms = ['runny nose', 'headache', 'couch', 'fevers', 'chills', 'gastrointestinal symptoms'];
	const yesno = ['yes', 'no'];

	useEffect(() => {
		var data = {};
		complaints.forEach(item => {
			data[item] = false;
		})
		chief.current = data; 	
	}, []);


	const onPatientChange = (e) => {
		setName(e.target.value);
	}

	const onAgeChange = (e) => {
		setAge(e.target.value)
	}

	const onGenderChange = (g) => {
		setGender(g);
	}

	const onHistoryChange = (e) => {
		setHistory(e.target.value);
	}

	const onChangeChief = (e) => {
		var value = chief.current;

		value[e.target.value] = e.target.checked;		
		
		// generate the string
		const result = complaints.filter(item => value[item]);
		console.log(value);
		const text = result.join(", ");
		console.log(text);

		setComp(text);

		chief.current = value;
	}

	return (
		<div>
			<h4 className="title">History of present illness</h4>	
			<div className="container">
				<div className="left panel">
					<div className="row">
						<label>Patient Name</label>
						<input type="text" onChange={(e) => onPatientChange(e)}/>
					</div>

					<div className="row">
						<label>Age (in years)</label>
						<input type="number" onChange={(e) => onAgeChange(e)} />
					</div>

					<div className="row">
						<label>Gender</label>						
						{
							genders.map(item => (
								<div className="radio"  key={item}>
									<label>
										<input type="radio" name="gender" value={item} onChange={() => onGenderChange(item)}/>
										{item}
									</label>
								</div>
							))
						}							
					</div>

					<div className="row">
						<label>history (days)</label>
						<select  onChange={(e) => onHistoryChange(e)}>
							{
								days.map(d => (
									<option key={d} value={d}>{d}</option>
								))
							}				
						</select>
					</div>

					<div className="row">
						<label>chief complaint</label>						
						{
							complaints.map(item => (
								<div className="checkbox"  key={item}>
									<label>
										<input type="checkbox" name="complaint" value={item} onChange={(e) => onChangeChief(e)}/>
										{item}
									</label>
								</div>
							))
						}							
					</div>

					<div className="row">
						<label>Symptoms</label>			
						{
							symptoms.map(item => (
								<RadioRows key={item} label={item} />
							))
						}					
						
					</div>

					<div className="row">
						<label>
							<input type="checkbox" name="treating" value="true"/>
							treating
						</label>			
						<div style={{marginLeft: 10, marginTop: 10}}>
							<label>Successful?</label>
							{
								yesno.map(item => (
									<div className="radio" key={item}>
										<label>
											<input type="radio" name="successful" value={item}/>
											{item}
										</label>
									</div>
								))
							}
						</div>
					</div>

				</div>
				<div className="right panel">
					HPI
					<br/>
					{name} is a {age}-year-old {gender} who came to my office on 12/03/2019 and he has a {history}-day history of {comp}.
					<br />
				</div>
			</div>		
		</div>
	);
}

export default App;
