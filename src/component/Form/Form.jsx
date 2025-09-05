import { useState } from "react";

const sheet =
  "https://script.google.com/macros/s/AKfycbzLxmk62LWkOJTiuhEB0Ru9gd2h6fSu_p-LZNHaRgkxJv8A1pznJXRaUoUCStxxwOj9/exec";

const token =
  "AKfycbzLxmk62LWkOJTiuhEB0Ru9gd2h6fSu_p-LZNHaRgkxJv8A1pznJXRaUoUCStxxwOj9";

export default function Form() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus(" حال ارسال...");

    try {
      const body = new URLSearchParams({
        name: form.name,
        email: form.email,
        message: form.message,
        token: token,
      }).toString();
      console.log(`inja1`);

      const res = await fetch(sheet, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body,
      });

      // اگر موفق باشه، معمولاً 200 میاد و می‌تونی JSON بخونی:
      const data = await res.json();
      if (data.ok) {
        setStatus("ثبت شد ✅");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("خطا: " + (data.error || "نامشخص"));
      }
    } catch (err) {
      setStatus("خطا در ارتباط با سرور");
    }
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3 max-w-sm">
      <input
        className="border p-2 rounded"
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        required
      />
      <input
        type="email"
        className="border p-2 rounded"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        required
      />
      <textarea
        className="border p-2 rounded"
        placeholder="Message"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        required
      />
      <button
        onClick={() => {
          onsubmit;
        }}
        className="bg-black text-white py-2 rounded"
      >
        Send
      </button>
      <p className="text-sm opacity-70">{status}</p>
    </form>
  );
}
