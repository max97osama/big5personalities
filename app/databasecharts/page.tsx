"use client";

import React, { useState } from 'react';
import { fetchDatabaseData, type DbResponse } from './actions';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

export default function DatabaseCharts() {
  const [data, setData] = useState < any[] > ([]);
  const [error, setError] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  async function handleLogin(formData: FormData) {
    const result: DbResponse = await fetchDatabaseData(formData);
    if (result.success && result.data) {
      setData(result.data);
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Connection failed: " + (result.error || "Unknown error"));
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
      <h1 className="text-3xl font-bold mb-6">Full Quiz Database Dashboard</h1>
      
      <div className="mb-10 bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-xl font-semibold mb-4">Daily Usage</h2>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#10b981" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
        <table className="min-w-full bg-white text-xs">
          <thead>
            <tr className="bg-gray-50 border-b">
              <th className="p-3 text-left font-semibold">Date</th>
              <th className="p-3 text-left font-semibold">Name</th>
              <th className="p-3 text-left font-semibold">Email</th>
              <th className="p-3 text-left font-semibold">Age</th>
              <th className="p-3 text-left font-semibold">Sex</th>
              <th className="p-3 text-left font-semibold">Lang</th>
              <th className="p-3 text-left font-semibold">Country</th>
              <th className="p-3 text-center font-semibold bg-blue-50">O</th>
              <th className="p-3 text-center font-semibold bg-blue-50">C</th>
              <th className="p-3 text-center font-semibold bg-blue-50">E</th>
              <th className="p-3 text-center font-semibold bg-blue-50">A</th>
              <th className="p-3 text-center font-semibold bg-blue-50">N</th>
              <th className="p-3 text-left font-semibold">Dominant</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id} className="border-b hover:bg-gray-50">
                <td className="p-3 whitespace-nowrap">{new Date(row.completed_at).toLocaleDateString()}</td>
                <td className="p-3 font-medium">{row.name}</td>
                <td className="p-3 truncate max-w-[150px]">{row.email || 'N/A'}</td>
                <td className="p-3">{row.age}</td>
                <td className="p-3">{row.sex}</td>
                <td className="p-3 uppercase">{row.language}</td>
                <td className="p-3">{row.country || 'N/A'}</td>
                <td className="p-3 text-center">{row.o_score}</td>
                <td className="p-3 text-center">{row.c_score}</td>
                <td className="p-3 text-center">{row.e_score}</td>
                <td className="p-3 text-center">{row.a_score}</td>
                <td className="p-3 text-center">{row.n_score}</td>
                <td className="p-3">
                  <span className="px-2 py-1 rounded bg-blue-100 text-blue-800 font-bold">
                    {row.dominant_trait}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}