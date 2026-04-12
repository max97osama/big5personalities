"use client";

import React, { useState, useMemo } from 'react';
import { fetchActivityLogs, type ActivityData } from './actions';
import { XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, AreaChart, Area } from 'recharts';

export default function SiteActivity() {
  const [rawData, setRawData] = useState < ActivityData[] > ([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [monthOffset, setMonthOffset] = useState(0);
  
  async function handleLogin(formData: FormData) {
    const result = await fetchActivityLogs(formData);
    if (result.success) {
      setRawData(result.data);
      setIsAuthenticated(true);
    } else {
      alert("Error: " + result.error);
    }
  }
  
  const { filteredData, currentMonthLabel } = useMemo(() => {
    const targetDate = new Date();
    targetDate.setMonth(targetDate.getMonth() + monthOffset);
    
    const year = targetDate.getFullYear();
    const month = targetDate.getMonth();
    
    const startOfMonth = new Date(year, month, 1);
    const endOfMonth = new Date(year, month + 1, 0);
    
    const filtered = rawData.filter(item => {
      const itemDate = new Date(item.date);
      return itemDate >= startOfMonth && itemDate <= endOfMonth;
    });
    
    const label = targetDate.toLocaleString('default', { month: 'long', year: 'numeric' });
    
    return { filteredData: filtered, currentMonthLabel: label };
  }, [rawData, monthOffset]);
  
  if (!isAuthenticated) {
    return (
      <div className="p-10 max-w-sm mx-auto">
        <h1 className="text-xl font-bold mb-4">Activity Monitor Login</h1>
        <form action={handleLogin} className="flex flex-col gap-3">
          <input name="user" type="text" placeholder="User" className="border p-2 rounded" required />
          <input name="password" type="password" placeholder="Password" className="border p-2 rounded" required />
          <button className="bg-black text-white p-2 rounded">View Activity</button>
        </form>
      </div>
    );
  }
  
  return (
    <div className="p-8 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h1 className="text-2xl font-bold text-gray-800">Site Growth Activity</h1>
        
        <div className="flex items-center gap-4 bg-gray-100 p-2 rounded-xl">
          <button 
            onClick={() => setMonthOffset(prev => prev - 1)}
            className="px-4 py-2 bg-white rounded-lg shadow-sm hover:bg-gray-50 font-bold transition-all active:scale-95"
          >
            ← Previous
          </button>
          
          <span className="text-sm font-semibold min-w-[140px] text-center">
            {currentMonthLabel}
          </span>
          
          <button 
            onClick={() => setMonthOffset(prev => prev + 1)}
            className="px-4 py-2 bg-white rounded-lg shadow-sm hover:bg-gray-50 font-bold transition-all active:scale-95"
          >
            Next →
          </button>
          
          <button 
            onClick={() => setMonthOffset(0)}
            className="ml-2 text-xs text-blue-600 hover:underline"
          >
            Current
          </button>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 h-[400px]">
        {filteredData.length > 0 ? (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={filteredData}>
              <defs>
                <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis 
                dataKey="date" 
                tick={{fontSize: 12}} 
                tickFormatter={(str) => new Date(str).toLocaleDateString(undefined, { day: 'numeric' })}
              />
              <YAxis tick={{fontSize: 12}} />
              <Tooltip 
                labelFormatter={(value) => new Date(value).toLocaleDateString(undefined, { dateStyle: 'long' })}
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
              <Area 
                type="monotone" 
                dataKey="count" 
                stroke="#6366f1" 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorCount)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        ) : (
          <div className="h-full flex items-center justify-center text-gray-400 italic">
            No data recorded for this month.
          </div>
        )}
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
          <p className="text-indigo-600 text-sm font-semibold uppercase">Monthly Total</p>
          <p className="text-3xl font-bold">
            {filteredData.reduce((a, b) => a + Number(b.count), 0)} Users
          </p>
        </div>
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
          <p className="text-gray-600 text-sm font-semibold uppercase">Daily Average</p>
          <p className="text-3xl font-bold">
            {filteredData.length > 0 
              ? (filteredData.reduce((a, b) => a + Number(b.count), 0) / filteredData.length).toFixed(1)
              : 0}
          </p>
        </div>
      </div>
    </div>
  );
}