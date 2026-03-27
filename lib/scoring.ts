import { questions, Trait, traitInfo } from "./questions";

export interface TraitScore {
	  trait: Trait;
	    score: number;      // raw score out of 50
	      percent: number;    // percentage 0-100
	        level: "Low" | "Medium" | "High";
		  levelAr: "منخفض" | "متوسط" | "مرتفع";
}

export interface PersonalityResult {
	  scores: TraitScore[];
	    dominantTrait: Trait;
	      personalityTitle: { en: string; ar: string };
	        summary: { en: string; ar: string };
}

export function calculateScores(answers: Record<number, number>): PersonalityResult {
	  const traitTotals: Record<Trait, number> = { O: 0, C: 0, E: 0, A: 0, N: 0 };

	    questions.forEach((q) => {
		        const raw = answers[q.id] ?? 3;
			    const scored = q.reversed ? 6 - raw : raw;
			        traitTotals[q.trait] += scored;
				  });

				    const scores: TraitScore[] = (Object.keys(traitTotals) as Trait[]).map((trait) => {
					        const score = traitTotals[trait];
						    const percent = Math.round((score / 50) * 100);
						        const level = percent >= 65 ? "High" : percent >= 35 ? "Medium" : "Low";
							    const levelAr = percent >= 65 ? "مرتفع" : percent >= 35 ? "متوسط" : "منخفض";
							        return { trait, score, percent, level, levelAr };
								  });

								    // Find dominant trait (excluding Neuroticism from dominance)
								  //   const positive = scores.filter((s) => s.trait !== "N");
								  //     const dominant = positive.reduce((a, b) => (a.percent > b.percent ? a : b));
								  //
								  //       const personalityProfiles: Record<Trait, { title: { en: string; ar: string }; summary: { en: string; ar: string } }> = {
								  //           O: {
								  //                 title: { en: "The Creative Explorer", ar: "المستكشف الإبداعي" },
								  //                       summary: {
								  //                               en: "You are imaginative, curious, and open to new experiences. You thrive on ideas, creativity, and exploring the unknown. You tend to think outside the box and enjoy intellectual challenges.",
								  //                                       ar: "أنت شخص مبدع وفضولي ومنفتح على التجارب الجديدة. تزدهر بالأفكار والإبداع واستكشاف المجهول. تميل إلى التفكير خارج الصندوق وتستمتع بالتحديات الفكرية.",
								  //                                             },
								  //                                                 },
								  //                                                     C: {
								  //                                                           title: { en: "The Organized Achiever", ar: "المنجز المنظم" },
								  //                                                                 summary: {
								  //                                                                         en: "You are disciplined, reliable, and goal-oriented. You plan carefully, follow through on commitments, and strive for excellence in everything you do. Others see you as dependable and thorough.",
								  //                                                                                 ar: "أنت شخص منضبط وموثوق وموجه نحو الأهداف. تخطط بعناية وتفي بالتزاماتك وتسعى للتميز في كل ما تفعله. يراك الآخرون شخصاً يمكن الاعتماد عليه ودقيقاً.",
								  //                                                                                       },
								  //                                                                                           },
								  //                                                                                               E: {
								  //                                                                                                     title: { en: "The Social Energizer", ar: "الشخص الاجتماعي النشط" },
								  //                                                                                                           summary: {
								  //                                                                                                                   en: "You are outgoing, enthusiastic, and energized by social interaction. You enjoy being around people, making new friends, and taking the lead in group situations. Your positive energy is contagious.",
								  //                                                                                                                           ar: "أنت شخص اجتماعي ومتحمس وتستمد طاقتك من التفاعل الاجتماعي. تستمتع بالتواجد مع الناس وتكوين صداقات جديدة وتولي القيادة في المواقف الجماعية. طاقتك الإيجابية معدية.",
								  //                                                                                                                                 },
								  //                                                                                                                                     },
								  //                                                                                                                                         A: {
								  //                                                                                                                                               title: { en: "The Compassionate Peacemaker", ar: "صانع السلام المتعاطف" },
								  //                                                                                                                                                     summary: {
								  //                                                                                                                                                             en: "You are warm, kind, and deeply empathetic. You value harmony and cooperation, and you genuinely care about the well-being of others. People feel safe and understood around you.",
								  //                                                                                                                                                                     ar: "أنت شخص دافئ ولطيف ومتعاطف بعمق. تقدر الانسجام والتعاون وتهتم حقاً برفاهية الآخرين. يشعر الناس بالأمان والفهم في حضورك.",
								  //                                                                                                                                                                           },
								  //                                                                                                                                                                               },
								  //                                                                                                                                                                                   N: {
								  //                                                                                                                                                                                         title: { en: "The Sensitive Feeler", ar: "الشخص الحساس" },
								  //                                                                                                                                                                                               summary: {
								  //                                                                                                                                                                                                       en: "You are emotionally sensitive and deeply aware of your inner feelings. You experience emotions intensely, which gives you depth and empathy, though you may sometimes feel overwhelmed by stress.",
								  //                                                                                                                                                                                                               ar: "أنت شخص حساس عاطفياً وواعٍ بعمق لمشاعرك الداخلية. تختبر المشاعر بشدة مما يمنحك العمق والتعاطف، وإن كنت أحياناً قد تشعر بالإرهاق من الضغط.",
								  //                                                                                                                                                                                                                     },
								  //                                                                                                                                                                                                                         },
								  //                                                                                                                                                                                                                           };
								  //
								  //                                                                                                                                                                                                                             return {
								  //                                                                                                                                                                                                                                 scores,
								  //                                                                                                                                                                                                                                     dominantTrait: dominant.trait,
								  //                                                                                                                                                                                                                                         personalityTitle: personalityProfiles[dominant.trait].title,
								  //                                                                                                                                                                                                                                             summary: personalityProfiles[dominant.trait].summary,
								  //                                                                                                                                                                                                                                               };
								  //                                                                                                                                                                                                                                               }
