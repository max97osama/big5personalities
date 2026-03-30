import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";
import { calculateScores } from "@/lib/scoring";

export async function POST(req: NextRequest) {
	  try {
		      const body = await req.json();
		          const { name, age, sex, email, language, answers } = body;

			      if (!name || !age || !sex || !answers) {
				            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
					        }

						    const result = calculateScores(answers);
						        const scores = result.scores;
							    const getScore = (trait: string) => scores.find((s) => s.trait === trait)?.score ?? 0;

							        const forwarded = req.headers.get("x-forwarded-for");
								    const ip = forwarded ? forwarded.split(",")[0] : "unknown";
								        let country = "Unknown";

									    try {
										          const geo = await fetch(`http://ip-api.com/json/${ip}?fields=country`);
												        const geoData = await geo.json();
											        country = geoData.country || "Unknown";
												    } catch {
													          country = "Unknown";
														      }

														          await pool.query(
																        `INSERT INTO responses
																	        (name, age, sex, email, language, country, o_score, c_score, e_score, a_score, n_score, dominant_trait, answers)
																		       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)`,
																		             [
																				             name,
																					             age,
																						             sex,
																							             email || null,
																								             language,
																									             country,
																										             getScore("O"),
																											             getScore("C"),
																												             getScore("E"),
																													             getScore("A"),
																														             getScore("N"),
																															             result.dominantTrait,
																																             JSON.stringify(answers),
																																	           ]
																																		       );

																																		           return NextResponse.json({ success: true, result });
																																			     } catch (err) {
																																				         console.error("Submit error:", err);
																																					     return NextResponse.json({ error: "Server error" }, { status: 500 });
																																					       }
}

