"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [message, setMessage] = useState<string | null>(null);
  const server = String(process.env.SERVER_URL);
  useEffect(() => {
    fetch(server)
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">
        Social Media Performance Analysis App
      </h1>
      <p className="text-lg font-bold text-blue-400">{message}</p>
    </div>
  );
}
