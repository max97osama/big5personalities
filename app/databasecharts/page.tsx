"use client";

import React, { useState } from 'react';
import { fetchDatabaseData } from './actions';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

export default function DatabaseCharts() {
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  async function handleLogin(formData: FormData) {
    const result = await fetchDatabaseData(formData);
    if (result.success) {
      setData(result.data);
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Connection failed: " + result.error);
    }
  }

  const chartData = data.reduce((acc: any[], curr) => {
    const date = new Date(curr.completed_at).toLocaleDateString();
    const existing = acc.find(item => item.date === date);
    if (existing) {
      existing.count += 1;
    } else {
      acc.push({ date, count: 1 });
    }
    return acc;
  }, []).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  if (!isAuthenticated) {
    return (
      <div className="p-8 max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4">Database Login</h1>
        <form action={handleLogin} className="flex flex-col gap-4">
          <input name="user" type="text" placeholder="DB User" className="border p-2 rounded" required />
          <input name="password" type="password" placeholder="Password" className="border p-2 rounded" required />
          <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Connect</button>
        </form>
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Site Usage & Data</h1>
      
      <div className="mb-10 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Daily Responses</h2>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">ID</th>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Dominant Trait</th>
              <th className="p-2 border">Completed At</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id} className="text-center border-b">
                <td className="p-2 border">{row.id}</td>
                <td className="p-2 border">{row.name}</td>
                <td className="p-2 border font-bold text-blue-600">{row.dominant_trait}</td>
                <td className="p-2 border">{new Date(row.completed_at).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

