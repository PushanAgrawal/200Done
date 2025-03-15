// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "tailwindcss";
// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (email === "user@example.com" && password === "password123") {
//       navigate("/dashboard");
//     } else {
//       setError("Invalid email or password");
//     }
//   };

//   return (
//     <div className="flex justify-center">
//       <div className="bg-yellow-400 w-[50vw] h-[50vh]">
//         <div className="">
//           <h1 className="justify-center iteam-centre flex mt-20">BLINK-200</h1>
//           <p className="grid place-items-center font-bold mt-10"> Split orders with hostel mates to get free delivery.
//             <br/>Order together , Save together!</p>
//             <div className="flex">
//             <div className="bg-gray-100 rounded-lg shadow-md w-96 m-6">
//             <p className="text-xl font-bold text-centre grid place-items-center mt-5">Quick Delievery</p>
//             <p className="text-s m-4">Get Your Groceries Deliever in minutes by combing orders</p>

//         </div>

//         <div className="bg-gray-100 rounded-lg shadow-md  w-96 m-6">
//             <p className="text-xl font-bold text-centre grid place-items-center mt-5 ">Free Delievery</p>
//             <p className="text-s m-4">Reach 200 together and unlock your free delievery</p>

//         </div>

//             </div>
           
//         </div>

//       </div>
//         <div className="flex iteam-centre justify-content w-[50vw] h-[50vh] bg-gray-100">
//       <div className="bg-white grid place-items-center p-8 rounded-lg shadow-md w-screen">
//         {/* <h2 className="text-2xl font-semibold text-center mb-4">Share Your Cart</h2> */}
        

        
//         {error && <p className="text-red-500 text-sm text-center">{error}</p>}
//         <form className="bg-gray-100 rounded-lg shadow-md" onSubmit={handleSubmit}>
//             <h3 className="font-bold "> Login To Continue</h3>
//             <p> Use Your college Id to access</p>
//           <div className="mb-4">
//             <label className="block text-gray-700">Email:</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Password:</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>

//     </div>
    
//   );
// };

// export default Login;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "tailwindcss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if email is from @thapar.edu
    if (!email.endsWith("@thapar.edu")) {
      setError("Only @thapar.edu emails are allowed.");
      return;
    }

    // Simulated login check
    if (email === "user@thapar.edu" && password === "password123") {
      navigate("/dashboard");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen w-screen">
      {/* Left Section */}
      <div className="bg-yellow-400 flex flex-col items-center justify-center w-full md:w-1/2 p-6 md:p-12">
        <h1 className="text-3xl font-bold text-center">
          <span className="text-black">BLINK-</span>
          <span className="text-green-700">200</span>
        </h1>
        <p className="text-center font-semibold mt-4">
          Split orders with hostel mates to get free delivery.
          <br /> Order together, Save together!
        </p>

        <div className="flex flex-col md:flex-row gap-4 mt-6 w-full max-w-lg">
          <div className="bg-gray-100 rounded-lg shadow-md p-6 text-center w-full md:w-1/2">
            <p className="text-xl font-bold">Quick Delivery</p>
            <p className="text-sm mt-2">
              Get your groceries delivered in minutes by combining orders.
            </p>
          </div>

          <div className="bg-gray-100 rounded-lg shadow-md p-6 text-center w-full md:w-1/2">
            <p className="text-xl font-bold">Free Delivery</p>
            <p className="text-sm mt-2">
              Reach ₹200 together and unlock free delivery.
            </p>
          </div>
        </div>
      </div>

      {/* Right Section (Login Form) */}
      <div className="flex items-center justify-center w-full md:w-1/2 bg-gray-100 p-6">
        <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-md">
          <h3 className="text-2xl font-bold text-center mb-2">Login to Continue</h3>
          <p className="text-sm text-center text-gray-600 mb-4">
            Use your <span className="font-semibold">@thapar.edu</span> email to access.
          </p>

          {error && <p className="text-red-500 text-sm text-center mb-2">{error}</p>}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-500 text-black py-2 rounded-lg font-semibold hover:bg-green-600 transition"
            >
              Login
            </button>
          </form>

          {/* Sign Up Section */}
          <p className="text-sm text-center text-gray-600 mt-4">
            New User?{" "}
            <a href="/signup" className="text-blue-500 font-semibold hover:underline">
              Sign Up Here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

