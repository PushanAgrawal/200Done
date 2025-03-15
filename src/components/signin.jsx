import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "tailwindcss";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [name, setName] = useState("");
  const [hostel, setHostel] = useState("A");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const navigate = useNavigate();

  const hostels = ["A", "B", "D", "O", "N", "Q", "PG", "E", "I", "G", "K", "H"];
  const correctOtp = "123456"; // Simulated OTP for verification

  const sendOtp = () => {
    if (!email.endsWith("@thapar.edu")) {
      setError("Only @thapar.edu emails are allowed.");
      return;
    }
    setError("");
    setOtpSent(true);
    alert("OTP sent to your Thapar email (Simulated).");
  };

  const verifyOtp = () => {
    if (otp === correctOtp) {
      setOtpVerified(true);
      setError("");
      alert("OTP verified successfully!");
    } else {
      setError("Invalid OTP. Please try again.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!otpVerified) {
      setError("Please verify OTP before proceeding.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    alert("Account created successfully!");
    navigate("/dashboard");
  };

  return (
    <div className="flex flex-col md:flex-row h-screen w-screen">
      {/* Left Section - Yellow Info */}
      <div className="bg-yellow-400 flex flex-col items-center justify-center w-full md:w-1/2 p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          <span className="text-black">BLINK-</span>
          <span className="text-green-700">200</span>
        </h1>
        <p className="text-center font-semibold mt-4 text-md md:text-lg">
          Split orders with hostel mates to get free delivery.
          <br /> Order together, Save together!
        </p>
      </div>

      {/* Right Section - Form */}
      <div className="flex flex-col items-center justify-center bg-gray-100 w-full md:w-1/2 p-6 md:p-8">
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-md w-full max-w-md">
          <h3 className="text-xl md:text-2xl font-bold text-center mb-2">Sign Up</h3>
          <p className="text-sm text-center text-gray-600 mb-4">
            Use your <span className="font-semibold">@thapar.edu</span> email to register.
          </p>

          {error && <p className="text-red-500 text-sm text-center mb-2">{error}</p>}

          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Thapar Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                required
              />
              <button
                type="button"
                onClick={sendOtp}
                className="w-full bg-blue-500 text-black py-2 rounded-lg font-semibold mt-2 hover:bg-green-600 transition"
              >
                Send OTP
              </button>
            </div>

            {/* OTP Input */}
            {otpSent && !otpVerified && (
              <div className="mb-4">
                <label className="block text-gray-700 font-medium">Enter OTP:</label>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                  maxLength="6"
                  required
                />
                <button
                  type="button"
                  onClick={verifyOtp}
                  className="w-full bg-green-500 text-black py-2 rounded-lg font-semibold mt-2 hover:bg-green-700 transition"
                >
                  Verify OTP
                </button>
              </div>
            )}

            {/* Name Input */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Full Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                disabled={!otpVerified}
                required
              />
            </div>

            {/* Hostel Selection */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Hostel:</label>
              <select
                value={hostel}
                onChange={(e) => setHostel(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                disabled={!otpVerified}
                required
              >
                {hostels.map((h) => (
                  <option key={h} value={h}>
                    Hostel {h}
                  </option>
                ))}
              </select>
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                disabled={!otpVerified}
                required
              />
            </div>

            {/* Confirm Password Input */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Confirm Password:</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                disabled={!otpVerified}
                required
              />
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className={`w-full text-black py-2 rounded-lg font-semibold transition ${
                otpVerified ? "bg-blue-500 hover:bg-green-600" : "bg-gray-400 cursor-not-allowed"
              }`}
              disabled={!otpVerified}
            >
              Sign Up
            </button>
          </form>

          {/* Already have an account */}
          <p className="text-sm text-center text-gray-600 mt-4">
            Already have an account?{" "}
            <a href="/" className="text-blue-500 font-semibold hover:underline">
              Login Here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;

