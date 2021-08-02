import logo from './logo.svg';
import './App.css';
import RadioRows from './RadioRows';

function App() {
	const genders = ['male', 'female'];
	const days = [1, 2, 3, 4, 5, 6, 7];
	const complaints = ['asthma', 'fever', 'score throat', 'cough', 'diarrhea'];
	const symptoms = ['runny nose', 'headache', 'couch', 'fevers', 'chills', 'gastrointestinal symptoms'];
	
	return (
		<div>
			<h4 className="title">History of present illness</h4>	
			<div className="container">
				<div className="left panel">
					<div className="row">
						<label>Patient Name</label>
						<input type="text" />
					</div>

					<div className="row">
						<label>Age (in years)</label>
						<input type="text" />
					</div>

					<div className="row">
						<label>Gender</label>						
						{
							genders.map(item => (
								<div className="radio"  key={item}>
									<label>
										<input type="radio" name="gender" value={item}/>
										{item}
									</label>
								</div>
							))
						}							
					</div>

					<div className="row">
						<label>history (days)</label>
						<select>
							{
								days.map(d => (
									<option  key={d} value={d}>{d}</option>
								))
							}				
						</select>
					</div>

					<div className="row">
						<label>chief complaint</label>						
						{
							complaints.map(item => (
								<div className="checkbox">
									<label key={item}>
										<input type="checkbox" name="complaint" value={item}/>
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

				</div>
				<div className="right panel">
					Right
				</div>
			</div>		
		</div>
	);
}

export default App;
