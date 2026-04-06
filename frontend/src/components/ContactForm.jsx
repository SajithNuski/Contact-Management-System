import { useState } from "react";
import axios from "axios";

function ContactForm({ setContacts, contacts }) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("Interested");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email) {
      return alert("Name or Email doesn't fill");
    }
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/contacts`, {
        name,
        company,
        email,
        phone,
        status,
      });
      setContacts([res.data, ...contacts]);
      setName("");
      setPhone("");
      setCompany("");
      setEmail("");
      setStatus("Interested");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="space-y-6" autoComplete="off" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        className="bg-[#eff4ff] p-3 rounded w-full text-[#3D1A78] outline-0"
        value={name}
        onChange={(e) => setName(e.target.value)}
        autoComplete="new-password"
      />
      <input
        type="tel"
        placeholder="Phone No"
        className="bg-[#eff4ff] p-3 rounded w-full text-[#3D1A78] outline-0"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        autoComplete="new-password"
      />
      <input
        type="text"
        placeholder="Company"
        className="bg-[#eff4ff] p-3 rounded w-full text-[#3D1A78] outline-0"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        autoComplete="new-password"
      />
      <input
        type="email"
        placeholder="Email"
        className="bg-[#eff4ff] p-3 rounded w-full text-[#3D1A78] outline-0"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        autoComplete="none"
      />
      <select
        className="bg-[#eff4ff] p-3 rounded w-full text-[#3D1A78] outline-0 cursor-pointer"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="Interested">Interested</option>
        <option value="Follow-up">Follow-up</option>
        <option value="Closed">Closed</option>
      </select>
      <button
        type="submit"
        className="px-4 py-3 rounded text-[#eff4ff] transition w-full mt-2.5 font-medium bg-[#3d1a78] cursor-pointer"
      >
        Submit
      </button>

      <footer className="w-full mt-10 py-6 text-center">
        <p className="text-gray-400 text-sm tracking-wide">
          © {new Date().getFullYear()} • Made by Sajith Nuski
        </p>
      </footer>
    </form>
  );
}

export default ContactForm;
