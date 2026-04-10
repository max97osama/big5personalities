"use server";

import { Client } from 'pg';

export type DbResponse = {
	success: boolean;
	data: any[];
	error ? : string;
};

export async function fetchDatabaseData(formData: FormData): Promise < DbResponse > {
	const host = "localhost";
	const database = "quizdb";
	const user = formData.get("user") as string;
	const password = formData.get("password") as string;
	
	const client = new Client({
		host,
		database,
		user,
		password,
		port: 5432,
	});
	
	try {
		await client.connect();
		const res = await client.query("SELECT * FROM responses ORDER BY completed_at DESC");
		await client.end();
		return { success: true, data: res.rows };
	} catch (error: any) {
		return { success: false, data: [], error: error.message };
	}
}