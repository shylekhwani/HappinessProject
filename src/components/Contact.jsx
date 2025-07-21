import { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

 const onSubmit = async (event) => {
  event.preventDefault();
  setResult("Sending...");

  const formData = new FormData(event.target);
  formData.append("access_key", "fa118992-c3f0-45a7-a914-5373a9533027");

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully ✅");
      event.target.reset();
    } else {
      setResult(data.message || "Something went wrong ❌");
    }
  } catch (error) {
    console.error(error);
    setResult("Network error ❌");
  }
};


  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-700 p-6">
      <form
        onSubmit={onSubmit}
        className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Contact Us</h2>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Message</label>
          <textarea
            name="message"
            required
            rows="5"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-lg transition"
        >
          Send Message
        </button>

        {result && (
          <p className="mt-4 text-center text-sm text-gray-700">{result}</p>
        )}
      </form>
    </div>
  );
};

export default Contact;
