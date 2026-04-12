"use server";

import { Client } from 'pg';

export type ActivityData = {
  date: string;
  count: number;
};

export async function fetchActivityLogs(formData: FormData) {
  const user = formData.get("user") as string;
  const password = formData.get("password") as string;
  
  const client = new Client({
    host: "localhost",
    database: "quizdb",
    user,
    password,
    port: 5432,
  });
  
  try {
    await client.connect();
    const res = await client.query(`
      SELECT TO_CHAR(completed_at, 'YYYY-MM-DD') as date, COUNT(*) as count 
      FROM responses 
      GROUP BY date 
      ORDER BY date ASC
    `);
    await client.end();
    return { success: true, data: res.rows };
  } catch (error: any) {
    return { success: false, error: error.message, data: [] };
  }
}