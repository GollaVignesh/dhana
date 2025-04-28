import './PredictionForm.css';
import React, { useState } from "react";
import axios from "axios";

function PredictionForm() {
  const [formData, setFormData] = useState({
    Age:"",
    BodyTemp: "",
    Fatigue: "",
    Cough: "",
    BodyPain: "",
    SoreThoart: "",
    BreathingDifficulty: "",
  });

  const [message, setMessage] = useState(""); // No need for 'result' state anymore

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.type === "number" ? parseFloat(e.target.value) : Number(e.target.value),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/predict", formData);

      // Conditional message based on prediction
      if (res.data.prediction === 1) {
        setMessage("⚠️ You may be affected with Nipah virus. Immediately consult a doctor.");
      } else {
        setMessage("✅ You are not affected with Nipah virus.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Nipah Virus Risk Predictor</h2>
      <form onSubmit={handleSubmit} className="from">
        {Object.keys(formData).map((key) => (
          <div key={key}>
            <label className="block capitalize">{key.replaceAll("_", " ")}</label>
            {key === "Age" || key === "BodyTemp" ? (
              <input
                type="number"
                name={key}
                value={formData[key]}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
                step={key === "BodyTemp" ? "0.1" : "1"}
              />
            ) : (
              <select
                name={key}
                value={formData[key]}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
              >
                <option value="">Select</option>
                <option value="0">No</option>
                <option value="1">Yes</option>
              </select>
            )}
          </div>
        ))}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Predict
        </button>
      </form>

      {message && (
        <div
        className={`mt-6 text-center text-lg font-medium ${
          message.includes("not affected") ? "text-green-600" : "text-red-600"
        }`}
        >
        {message}
        </div>
      )}
    </div>
  );
}

export default PredictionForm;
