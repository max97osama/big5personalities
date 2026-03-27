export type Trait = "O" | "C" | "E" | "A" | "N";

export interface Question {
	  id: number;
	    trait: Trait;
	      en: string;
	        ar: string;
		  reversed: boolean;
}

export const questions: Question[] = [
	  // OPENNESS (O) — 10 questions
	//   { id: 1,  trait: "O", reversed: false, en: "I have a vivid imagination.",                              ar: "لدي خيال واسع وحي." },
	//     { id: 2,  trait: "O", reversed: false, en: "I am interested in abstract ideas.",                       ar: "أنا مهتم بالأفكار المجردة." },
	//       { id: 3,  trait: "O", reversed: false, en: "I enjoy experiencing new and different things.",           ar: "أستمتع بتجربة أشياء جديدة ومختلفة." },
	//         { id: 4,  trait: "O", reversed: false, en: "I enjoy art and creative activities.",                     ar: "أستمتع بالفن والأنشطة الإبداعية." },
	//           { id: 5,  trait: "O", reversed: false, en: "I am curious about many different things.",                ar: "أنا فضولي تجاه أشياء كثيرة ومختلفة." },
	//             { id: 6,  trait: "O", reversed: true,  en: "I prefer routine over new experiences.",                   ar: "أفضل الروتين على التجارب الجديدة." },
	//               { id: 7,  trait: "O", reversed: true,  en: "I find philosophical discussions boring.",                  ar: "أجد المناقشات الفلسفية مملة." },
	//                 { id: 8,  trait: "O", reversed: false, en: "I enjoy thinking about complex problems.",                  ar: "أستمتع بالتفكير في المشكلات المعقدة." },
	//                   { id: 9,  trait: "O", reversed: true,  en: "I rarely look for a deeper meaning in things.",            ar: "نادراً ما أبحث عن معنى أعمق في الأشياء." },
	//                     { id: 10, trait: "O", reversed: false, en: "I enjoy learning new things every day.",                   ar: "أستمتع بتعلم أشياء جديدة كل يوم." },
	//
	//                       // CONSCIENTIOUSNESS (C) — 10 questions
	//                         { id: 11, trait: "C", reversed: false, en: "I am always prepared and organized.",                      ar: "أنا دائماً مستعد ومنظم." },
	//                           { id: 12, trait: "C", reversed: false, en: "I pay attention to details.",                              ar: "أولي اهتماماً بالتفاصيل." },
	//                             { id: 13, trait: "C", reversed: false, en: "I follow a schedule and stick to it.",                     ar: "أتبع جدولاً زمنياً وألتزم به." },
	//                               { id: 14, trait: "C", reversed: false, en: "I complete tasks thoroughly and on time.",                 ar: "أُنجز المهام بشكل كامل وفي الوقت المحدد." },
	//                                 { id: 15, trait: "C", reversed: true,  en: "I often leave things in a mess.",                          ar: "كثيراً ما أترك الأشياء في فوضى." },
	//                                   { id: 16, trait: "C", reversed: true,  en: "I procrastinate and delay tasks.",                         ar: "أؤجل وأتأخر في إنجاز المهام." },
	//                                     { id: 17, trait: "C", reversed: false, en: "I set clear goals and work towards them.",                 ar: "أضع أهدافاً واضحة وأعمل على تحقيقها." },
	//                                       { id: 18, trait: "C", reversed: false, en: "I think carefully before acting.",                         ar: "أفكر بعناية قبل التصرف." },
	//                                         { id: 19, trait: "C", reversed: true,  en: "I often forget to put things back in the right place.",   ar: "كثيراً ما أنسى إعادة الأشياء إلى مكانها الصحيح." },
	//                                           { id: 20, trait: "C", reversed: false, en: "I work hard to achieve my goals.",                         ar: "أعمل بجد لتحقيق أهدافي." },
	//
	//                                             // EXTRAVERSION (E) — 10 questions
	//                                               { id: 21, trait: "E", reversed: false, en: "I am the life of the party.",                              ar: "أنا روح الحفلات والتجمعات." },
	//                                                 { id: 22, trait: "E", reversed: false, en: "I feel comfortable around people.",                        ar: "أشعر بالارتياح في وسط الناس." },
	//                                                   { id: 23, trait: "E", reversed: true,  en: "I prefer to stay in the background.",                      ar: "أفضل البقاء في الخلفية بعيداً عن الأضواء." },
	//                                                     { id: 24, trait: "E", reversed: false, en: "I easily start conversations with strangers.",             ar: "أبدأ المحادثات مع الغرباء بسهولة." },
	//                                                       { id: 25, trait: "E", reversed: true,  en: "I find it hard to approach others.",                       ar: "أجد صعوبة في التواصل مع الآخرين." },
	//                                                         { id: 26, trait: "E", reversed: false, en: "I enjoy being part of a large group.",                     ar: "أستمتع بأن أكون جزءاً من مجموعة كبيرة." },
	//                                                           { id: 27, trait: "E", reversed: true,  en: "I feel drained after spending time with many people.",     ar: "أشعر بالإرهاق بعد قضاء وقت مع كثير من الناس." },
	//                                                             { id: 28, trait: "E", reversed: false, en: "I am energetic and full of enthusiasm.",                   ar: "أنا نشيط ومفعم بالحيوية والحماس." },
	//                                                               { id: 29, trait: "E", reversed: false, en: "I like to take charge and lead others.",                   ar: "أحب أن أتولى القيادة وأوجه الآخرين." },
	//                                                                 { id: 30, trait: "E", reversed: true,  en: "I often spend time alone rather than with others.",        ar: "كثيراً ما أقضي وقتي بمفردي بدلاً من مع الآخرين." },
	//
	//                                                                   // AGREEABLENESS (A) — 10 questions
	//                                                                     { id: 31, trait: "A", reversed: false, en: "I care about others' feelings.",                           ar: "أهتم بمشاعر الآخرين." },
	//                                                                       { id: 32, trait: "A", reversed: false, en: "I am kind and helpful to others.",                         ar: "أنا لطيف ومتعاون مع الآخرين." },
	//                                                                         { id: 33, trait: "A", reversed: true,  en: "I tend to criticize others easily.",                       ar: "أميل إلى انتقاد الآخرين بسهولة." },
	//                                                                           { id: 34, trait: "A", reversed: false, en: "I try to see the best in people.",                         ar: "أحاول أن أرى الجانب الإيجابي في الناس." },
	//                                                                             { id: 35, trait: "A", reversed: true,  en: "I can be cold and uncaring towards others.",               ar: "يمكن أن أكون بارداً وغير مبالٍ تجاه الآخرين." },
	//                                                                               { id: 36, trait: "A", reversed: false, en: "I enjoy cooperating with others.",                         ar: "أستمتع بالتعاون مع الآخرين." },
	//                                                                                 { id: 37, trait: "A", reversed: false, en: "I feel empathy and concern for others.",                   ar: "أشعر بالتعاطف والاهتمام بالآخرين." },
	//                                                                                   { id: 38, trait: "A", reversed: true,  en: "I sometimes take advantage of others.",                    ar: "أحياناً أستغل الآخرين لمصلحتي." },
	//                                                                                     { id: 39, trait: "A", reversed: false, en: "I am willing to compromise to avoid conflict.",            ar: "أنا مستعد للتنازل لتجنب النزاعات." },
	//                                                                                       { id: 40, trait: "A", reversed: false, en: "I make people feel at ease and welcome.",                  ar: "أجعل الناس يشعرون بالارتياح والترحيب." },
	//
	//                                                                                         // NEUROTICISM (N) — 10 questions
	//                                                                                           { id: 41, trait: "N", reversed: false, en: "I often feel anxious or worried.",                         ar: "كثيراً ما أشعر بالقلق والتوتر." },
	//                                                                                             { id: 42, trait: "N", reversed: false, en: "My mood changes frequently.",                              ar: "مزاجي يتغير بشكل متكرر." },
	//                                                                                               { id: 43, trait: "N", reversed: true,  en: "I remain calm under pressure.",                            ar: "أبقى هادئاً تحت الضغط." },
	//                                                                                                 { id: 44, trait: "N", reversed: false, en: "I get stressed out easily.",                               ar: "أتوتر وأنفعل بسهولة." },
	//                                                                                                   { id: 45, trait: "N", reversed: false, en: "I often feel sad or depressed.",                           ar: "كثيراً ما أشعر بالحزن أو الاكتئاب." },
	//                                                                                                     { id: 46, trait: "N", reversed: true,  en: "I feel emotionally stable most of the time.",              ar: "أشعر بالاستقرار العاطفي معظم الوقت." },
	//                                                                                                       { id: 47, trait: "N", reversed: false, en: "I am easily disturbed by things around me.",               ar: "أتأثر بسهولة بالأشياء من حولي." },
	//                                                                                                         { id: 48, trait: "N", reversed: false, en: "I worry about things that might go wrong.",                ar: "أقلق بشأن الأشياء التي قد تسوء." },
	//                                                                                                           { id: 49, trait: "N", reversed: true,  en: "I rarely feel nervous or fearful.",                        ar: "نادراً ما أشعر بالتوتر أو الخوف." },
	//                                                                                                             { id: 50, trait: "N", reversed: false, en: "Small setbacks can easily upset me.",                      ar: "النكسات الصغيرة يمكن أن تزعجني بسهولة." },
	//                                                                                                             ];
	//
	//                                                                                                             export const traitInfo = {
	//                                                                                                               O: {
	//                                                                                                                   name: { en: "Openness",          ar: "الانفتاح" },
	//                                                                                                                       color: "#8b5cf6",
	//                                                                                                                           description: {
	//                                                                                                                                 en: "Reflects creativity, curiosity, and openness to new experiences.",
	//                                                                                                                                       ar: "يعكس الإبداع والفضول والانفتاح على تجارب جديدة.",
	//                                                                                                                                           },
	//                                                                                                                                             },
	//                                                                                                                                               C: {
	//                                                                                                                                                   name: { en: "Conscientiousness", ar: "الضمير" },
	//                                                                                                                                                       color: "#3b82f6",
	//                                                                                                                                                           description: {
	//                                                                                                                                                                 en: "Reflects organization, discipline, and goal-directed behaviour.",
	//                                                                                                                                                                       ar: "يعكس التنظيم والانضباط والسلوك الموجه نحو الأهداف.",
	//                                                                                                                                                                           },
	//                                                                                                                                                                             },
	//                                                                                                                                                                               E: {
	//                                                                                                                                                                                   name: { en: "Extraversion",      ar: "الانبساطية" },
	//                                                                                                                                                                                       color: "#f59e0b",
	//                                                                                                                                                                                           description: {
	//                                                                                                                                                                                                 en: "Reflects sociability, energy, and positive emotions.",
	//                                                                                                                                                                                                       ar: "يعكس الاجتماعية والطاقة والمشاعر الإيجابية.",
	//                                                                                                                                                                                                           },
	//                                                                                                                                                                                                             },
	//                                                                                                                                                                                                               A: {
	//                                                                                                                                                                                                                   name: { en: "Agreeableness",     ar: "التوافق" },
	//                                                                                                                                                                                                                       color: "#10b981",
	//                                                                                                                                                                                                                           description: {
	//                                                                                                                                                                                                                                 en: "Reflects kindness, empathy, and cooperative behaviour.",
	//                                                                                                                                                                                                                                       ar: "يعكس اللطف والتعاطف والسلوك التعاوني.",
	//                                                                                                                                                                                                                                           },
	//                                                                                                                                                                                                                                             },
	//                                                                                                                                                                                                                                               N: {
	//                                                                                                                                                                                                                                                   name: { en: "Neuroticism",       ar: "العصابية" },
	//                                                                                                                                                                                                                                                       color: "#ef4444",
	//                                                                                                                                                                                                                                                           description: {
	//                                                                                                                                                                                                                                                                 en: "Reflects emotional instability, anxiety, and moodiness.",
	//                                                                                                                                                                                                                                                                       ar: "يعكس عدم الاستقرار العاطفي والقلق وتقلب المزاج.",
	//                                                                                                                                                                                                                                                                           },
	//                                                                                                                                                                                                                                                                             },
	//                                                                                                                                                                                                                                                                             };
	//
	//                                                                                                                                                                                                                                                                             export const answerOptions = {
	//                                                                                                                                                                                                                                                                               en: [
	//                                                                                                                                                                                                                                                                                   { value: 1, label: "Strongly Disagree" },
	//                                                                                                                                                                                                                                                                                       { value: 2, label: "Disagree" },
	//                                                                                                                                                                                                                                                                                           { value: 3, label: "Neutral" },
	//                                                                                                                                                                                                                                                                                               { value: 4, label: "Agree" },
	//                                                                                                                                                                                                                                                                                                   { value: 5, label: "Strongly Agree" },
	//                                                                                                                                                                                                                                                                                                     ],
	//                                                                                                                                                                                                                                                                                                       ar: [
	//                                                                                                                                                                                                                                                                                                           { value: 1, label: "لا أوافق بشدة" },
	//                                                                                                                                                                                                                                                                                                               { value: 2, label: "لا أوافق" },
	//                                                                                                                                                                                                                                                                                                                   { value: 3, label: "محايد" },
	//                                                                                                                                                                                                                                                                                                                       { value: 4, label: "أوافق" },
	//                                                                                                                                                                                                                                                                                                                           { value: 5, label: "أوافق بشدة" },
	//                                                                                                                                                                                                                                                                                                                             ],
	//                                                                                                                                                                                                                                                                                                                             };
