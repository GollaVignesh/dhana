import './App.css';
import PredictionForm from "./Components/PredictionForm";
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
function Home() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/symptoms'); // Redirect to symptoms form page
  };
  return (
    <div className="App">
      <header className="App-header">
        <ul className="nav">
        <li><a href className="anchor01">Nipah Virus(Niv)</a></li>
        <li><a link="" href="#about" className="anchor01">About Nipah Virus</a></li>
        <li><a link="" href="#Symptoms" className="anchor01">Niv Symptoms</a></li>
        <li><a link="" href="#Prevention" className="anchor01">Prevention</a></li>
        <li><a href="#Testing" className="anchor01">Testing System</a></li>
        </ul>
      </header>
      <div className="desc"></div>
      <div className="about_anchor01" >
        <div id="about"><b>About Nipah virus:</b></div>
        <div className="about"><b>Nipah virus </b>(NiV) is an emerging zoonotic pathogen classified under the family Paramyxoviridae, genus Henipavirus. It poses a serious public health threat due to its high mortality rate, potential for human-to-human transmission, and lack of approved treatment or vaccine. The virus is recognized as a priority pathogen by the World Health Organization (WHO).</div>
        <div className="about"><h4>Origin and Natural Reservoir</h4></div>
        <div className="about">The virus was first identified in 1998–1999 during an outbreak among pig farmers in Malaysia and Singapore. The outbreak led to nearly 300 human cases and over 100 deaths. The natural reservoir of NiV is fruit bats of the Pteropus genus, also known as flying foxes.</div>
  
        <div className="about"><h4>Transmission to humans can occur through:</h4></div>
        <ul>
          <li>Direct contact with infected bats or pigs</li>
          <li>Consumption of raw date palm sap contaminated by bat saliva or urine</li>
          <li>Human-to-human transmission, especially in healthcare settings</li>
        </ul>
      </div>
      <div className="Symptoms_anchor01">
        <div id="Symptoms"><b>Early Symptoms 🧍‍♂️ (Initial Stage): </b></div><br></br>
        <div>These are non-specific flu-like symptoms that occur in the first few days:</div>
        <ul>
          <li>Fever</li>
          <li>Headache</li>
          <li>Muscle pain (myalgia)</li>
          <li>Sore throat</li>
          <li>Fatigue or tiredness</li>
          <li>Vomiting</li>
          <li>Dizziness</li>
        </ul>
        <div id="Symptoms"><b>Progressive Symptoms 🧍‍♂️ (Severe Stage)</b></div><br></br>
        <div>As the infection progresses, the following neurological and respiratory symptoms may appear:</div>
        <ul>
          <li>Shortness of breath</li>
          <li>Cough</li>
          <li>Chest discomfort</li>
          <li>Disorientation or confusion</li>
          <li>Seizures</li>
          <li>Altered mental status</li>
          <li>Acute encephalitis (inflammation of the brain)</li>
          <li>Coma, sometimes within 24–48 hours after symptoms worsen</li>
        </ul>
        <div id="Symptoms"><b>Complications ⚠️ </b></div><br></br>
        <div>In many severe cases, complications develop rapidly, including:</div>
          <ul>
            <li>Respiratory failure</li>
            <li>Brain swelling</li>
            <li>Coma</li>
            <li>Death</li>

          </ul>
        <div>Note 🧠: Encephalitis is the most dangerous and common complication. Some survivors may experience long-term neurological issues like personality changes or convulsions.</div><br></br>
        <div id="Symptoms"><b>Asymptomatic Cases 🧬 </b></div><br></br>
        <div>Some individuals may be infected but show no symptoms (subclinical cases), although they can still potentially transmit the virus.</div><br></br>
        <div id="Symptoms"><b>Relapse or Late-Onset Symptoms ⏳ </b></div><br></br>
        <div>In rare cases, relapsed or late-onset encephalitis may occur weeks or even months after recovery from the initial illness.</div>
      </div>
      <div className="Prevention_anchor01">
        <div id="Prevention"><b>Precautions and Prevention of Nipah Virus 🛡️ </b></div><br></br>
        <div>Since no specific vaccine or treatment is currently available for Nipah virus, preventive measures and public awareness are the most effective ways to control its spread.</div><br></br>
        <div><b>1. Avoid Exposure to Bats and Contaminated Sources 🦇 </b></div>
          <ul>
            <li><b>Do not consume raw date palm sap</b> or fruits that may have been partially eaten by bats or contaminated with bat saliva/urine.</li>
            <li>Avoid areas where <b>fruit bats</b> are known to nest or feed, especially during outbreak seasons.</li>
          </ul><br></br>
        <div><b>2. Avoid Contact with Sick Animals (Especially Pigs) 🐖 </b></div>
          <ul>
            <li>Pigs were intermediate hosts in the first outbreak in Malaysia.</li>
            <li>Farmers and animal handlers should use <b>protective gear</b> when dealing with livestock, especially during suspected outbreaks.</li>
          </ul><br></br>
        <div><b>3. Maintain Personal and Environmental Hygiene 🧼 </b></div>
          <ul>
            <li>Wash hands frequently with soap and water.</li>
            <li>Disinfect surfaces and surroundings, especially in areas where bats or infected animals are found.</li>
          </ul><br></br>
        <div><b>4. Infection Control in Healthcare Settings 🏥 </b></div>
          <ul>
            <li>Health workers should wear <b>personal protective equipment (PPE)</b>: gloves, gowns, masks, and face shields.</li>
            <li>Isolate suspected or confirmed Nipah patients to prevent <b>human-to-human transmission</b></li>
            <li>Properly disinfect medical equipment and hospital surfaces.</li>
          </ul><br></br>
        <div><b>5. Avoid Close Contact with Infected Individuals 👥 </b></div>
        <ul>
          <li>Do not share food, clothes, or personal items with infected persons.</li>
          <li>Limit physical contact like handshakes, hugs, or caregiving without protection.</li>
        </ul><br></br>
      </div>
      <div className="Testing">
        <div id="Testing">
          <h1><b>Testing</b></h1>
          <form onSubmit={handleSubmit}>
            <h1>Personal Information:</h1>
            <div className='field'>
              <label htmlFor="name">Name:</label>
              <input type='text' name="name" placeholder='Enter your name ' id="name" required className='input_box' />
            </div>
            <br />
            <div className='field'>
              <label htmlFor="num">Mobile Number:</label>
              <input type="tel" id="num" name="number" className="input_box" placeholder='Mobile Number' required maxLength="10" minLength="10" />
            </div>
            <br />
            <div className='field'>
              <label htmlFor="dob">DOB:</label>
              <input type='date' className='input_box' name="dob" id='dob' />
            </div>
            <br />
            <div className='field'>
              <label htmlFor="address">Address:</label>
              <input type="text" className='input_box' name="address" placeholder="please enter your current living place" id='address' />
            </div>
            <br />
            <div className='field'>
              <label htmlFor="test_type">Test Type:</label>
              <select id="test_type" className='input_box'>
                <option>Nipah Virus Test</option>
              </select>
            </div>
            <br />
            <div>
              <input type='submit' className="submit" value="Next" />
            </div>
          </form>
        </div>
      </div>
      <footer>
        <div className='Footer'></div>
      </footer>
    </div>
  );
}
function SymptomsFormPage() {
  return (
  
    
    <div className="SymptomsForm">
      
      <div className='symp_form' >
       <PredictionForm />
      </div>
      
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/symptoms" element={<SymptomsFormPage />} />
      </Routes>
    </Router>
  );
}