import { Pool } from "pg";

const pool = new Pool({
	  user:     process.env.DB_USER,
	    host:     process.env.DB_HOST,
	      database: process.env.DB_NAME,
	        password: process.env.DB_PASSWORD,
		  port:     Number(process.env.DB_PORT) || 5432,
});

export default pool;

export async function initDB() {
	  await pool.query(`
			       CREATE TABLE IF NOT EXISTS responses (
				             id             SERIAL PRIMARY KEY,
					           name           VARCHAR(100) NOT NULL,
						         age            INTEGER NOT NULL,
							       sex            VARCHAR(10) NOT NULL,
							             email          VARCHAR(150),
								           language       VARCHAR(5) NOT NULL DEFAULT 'en',
									         country        VARCHAR(100),
										       o_score        INTEGER NOT NULL,
										             c_score        INTEGER NOT NULL,
											           e_score        INTEGER NOT NULL,
												         a_score        INTEGER NOT NULL,
													       n_score        INTEGER NOT NULL,
													             dominant_trait VARCHAR(2) NOT NULL,
														           answers        JSONB NOT NULL,
															         completed_at   TIMESTAMP DEFAULT NOW()
																     );
																       `);
}
