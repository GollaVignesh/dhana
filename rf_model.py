import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
import joblib

# Load your dataset
# Example: data.csv should have columns like fever, headache, etc.
data = pd.read_csv("data.csv")

# Split into features and labels
X = data.drop("Infected", axis=1)  # Replace "target" with your label column
y = data["Infected"]

# Train-test split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Initialize and train the Random Forest model
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Test and print accuracy
y_pred = model.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)
print(f"Accuracy: {accuracy:.2f}")

# Save the trained model
joblib.dump(model, "model.pkl")
print("Model saved as model.pkl")
