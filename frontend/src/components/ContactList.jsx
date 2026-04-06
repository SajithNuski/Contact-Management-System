import React, { useState, useEffect } from "react";
import axios from "axios";
import { Oval } from "react-loading-icons";

function ContactList({ contacts, setContacts }) {
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/contacts/${id}`);
      setContacts(contacts.filter((contact) => contact._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleStatusChange = async (id, status) => {
    try {
      const res = await axios.put(
        `${import.meta.env.VITE_API_URL}/contacts/${id}`,
        { status },
      );
      setContacts(
        contacts.map((contact) => (contact._id === id ? res.data : contact)),
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchContacts = async () => {
      setLoading(true);
      const query = `?status=${filter}&search=${search}`;
      const fetchPromise = await axios
        .get(`${import.meta.env.VITE_API_URL}/contacts${query}`)
        .then((res) => setContacts(res.data))
        .catch((error) => console.log(error));
      const delay = new Promise((resolve) => setTimeout(resolve, 1000));
      await Promise.all([fetchPromise, delay]);
      setLoading(false);
    };
    fetchContacts();
  }, [filter, search, setContacts]);

  return (
    <>
      {/* Top Controls */}
      <div className="flex gap-10">
        <select
          className="p-2 rounded cursor-pointer outline-0 bg-[#3d1a78] text-[#eff4ff]"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="">All Status</option>
          <option value="Interested">Interested</option>
          <option value="Follow-up">Follow-up</option>
          <option value="Closed">Closed</option>
        </select>

        <input
          type="text"
          placeholder="Search by Name or Company"
          className="p-3 rounded w-full bg-[#eff4ff] outline-0"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Loading */}
      {loading ? (
        <div className="w-full h-103.75 flex flex-col items-center justify-center rounded-[5px] p-5 mt-10 gap-4">
          <Oval stroke="#3d1a78" strokeWidth={4} className="w-12 h-12" />
          <p className="text-[#3d1a78] text-2xl">Loading...</p>
        </div>
      ) : (
        <>
          {/* Empty State */}
          {contacts.length === 0 && (
            <div className="w-full h-103.75 flex flex-col items-center justify-center rounded-[5px] p-5 mt-10 gap-4 bg-[#eff4ff]">
              <img src="communication.png" width="250" height="250" />
              <p className="text-[#3d1a78] text-2xl">No contacts Found...</p>
            </div>
          )}

          {/* Contact Grid */}
          <div className="grid grid-cols-2 gap-10 mt-10">
            {contacts.map((c) => (
              <div
                key={c._id}
                className="bg-[#FDF8FF] text-[#3d1a78] rounded-2xl p-6 shadow-lg hover:shadow-2xl transition duration-300 backdrop-blur-md border border-white/10"
              >
                {/* Top */}
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold">{c.name}</h3>
                    <p className="text-sm text-[#3d1a78]">{c.company}</p>
                  </div>

                  <select
                    className="text-[#eff4ff] bg-[#3d1a78] text-sm p-1 rounded outline-none"
                    value={c.status}
                    onChange={(e) => handleStatusChange(c._id, e.target.value)}
                  >
                    <option className="text-[#eff4ff]" value="Interested">
                      Interested
                    </option>
                    <option className="text-[#eff4ff]" value="Follow-up">
                      Follow-up
                    </option>
                    <option className="text-[#eff4ff]" value="Closed">
                      Closed
                    </option>
                  </select>
                </div>

                {/* Divider */}
                <div className="my-4 border-t border-[#3d1a78]"></div>

                {/* Contact Info */}
                <div className="space-y-2 text-sm text-[#3d1a78] ">
                  <p>📧 {c.email}</p>
                  <p>📞 {c.phone}</p>
                </div>

                {/* Actions */}
                <div className="flex justify-end mt-5">
                  <button
                    onClick={() => handleDelete(c._id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-lg text-sm transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default ContactList;
