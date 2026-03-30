export type Trait = "O" | "C" | "E" | "A" | "N";

export interface Question {
	  id: number;
	    trait: Trait;
	      en: string;
	        ar: string;
		  reversed: boolean;
}

export const questions: Question[] = [
	  { id: 1,  trait: "O", reversed: false, en: "I have a vivid imagination.", ar: "لدي خيال واسع وحي." },
	    { id: 2,  trait: "O", reversed: false, en: "I am interested in abstract ideas.", ar: "انا مهتم بالافكار المجردة." },
	      { id: 3,  trait: "O", reversed: false, en: "I enjoy experiencing new and different things.", ar: "استمتع بتجربة اشياء جديدة ومختلفة." },
	        { id: 4,  trait: "O", reversed: false, en: "I enjoy art and creative activities.", ar: "استمتع بالفن والانشطة الابداعية." },
		  { id: 5,  trait: "O", reversed: false, en: "I am curious about many different things.", ar: "انا فضولي تجاه اشياء كثيرة ومختلفة." },
		    { id: 6,  trait: "O", reversed: true,  en: "I prefer routine over new experiences.", ar: "افضل الروتين على التجارب الجديدة." },
		      { id: 7,  trait: "O", reversed: true,  en: "I find philosophical discussions boring.", ar: "اجد المناقشات الفلسفية مملة." },
		        { id: 8,  trait: "O", reversed: false, en: "I enjoy thinking about complex problems.", ar: "استمتع بالتفكير في المشكلات المعقدة." },
			  { id: 9,  trait: "O", reversed: true,  en: "I rarely look for a deeper meaning in things.", ar: "نادرا ما ابحث عن معنى اعمق في الاشياء." },
			    { id: 10, trait: "O", reversed: false, en: "I enjoy learning new things every day.", ar: "استمتع بتعلم اشياء جديدة كل يوم." },
			      { id: 11, trait: "C", reversed: false, en: "I am always prepared and organized.", ar: "انا دائما مستعد ومنظم." },
			        { id: 12, trait: "C", reversed: false, en: "I pay attention to details.", ar: "اولي اهتماما بالتفاصيل." },
				  { id: 13, trait: "C", reversed: false, en: "I follow a schedule and stick to it.", ar: "اتبع جدولا زمنيا والتزم به." },
				    { id: 14, trait: "C", reversed: false, en: "I complete tasks thoroughly and on time.", ar: "انجز المهام بشكل كامل وفي الوقت المحدد." },
				      { id: 15, trait: "C", reversed: true,  en: "I often leave things in a mess.", ar: "كثيرا ما اترك الاشياء في فوضى." },
				        { id: 16, trait: "C", reversed: true,  en: "I procrastinate and delay tasks.", ar: "اوجل واتاخر في انجاز المهام." },
					  { id: 17, trait: "C", reversed: false, en: "I set clear goals and work towards them.", ar: "اضع اهدافا واضحة واعمل على تحقيقها." },
					    { id: 18, trait: "C", reversed: false, en: "I think carefully before acting.", ar: "افكر بعناية قبل التصرف." },
					      { id: 19, trait: "C", reversed: true,  en: "I often forget to put things back in the right place.", ar: "كثيرا ما انسى اعادة الاشياء الى مكانها الصحيح." },
					        { id: 20, trait: "C", reversed: false, en: "I work hard to achieve my goals.", ar: "اعمل بجد لتحقيق اهدافي." },
						  { id: 21, trait: "E", reversed: false, en: "I am the life of the party.", ar: "انا روح الحفلات والتجمعات." },
						    { id: 22, trait: "E", reversed: false, en: "I feel comfortable around people.", ar: "اشعر بالارتياح في وسط الناس." },
						      { id: 23, trait: "E", reversed: true,  en: "I prefer to stay in the background.", ar: "افضل البقاء في الخلفية بعيدا عن الاضواء." },
						        { id: 24, trait: "E", reversed: false, en: "I easily start conversations with strangers.", ar: "ابدا المحادثات مع الغرباء بسهولة." },
							  { id: 25, trait: "E", reversed: true,  en: "I find it hard to approach others.", ar: "اجد صعوبة في التواصل مع الاخرين." },
							    { id: 26, trait: "E", reversed: false, en: "I enjoy being part of a large group.", ar: "استمتع بان اكون جزءا من مجموعة كبيرة." },
							      { id: 27, trait: "E", reversed: true,  en: "I feel drained after spending time with many people.", ar: "اشعر بالارهاق بعد قضاء وقت مع كثير من الناس." },
							        { id: 28, trait: "E", reversed: false, en: "I am energetic and full of enthusiasm.", ar: "انا نشيط ومفعم بالحيوية والحماس." },
								  { id: 29, trait: "E", reversed: false, en: "I like to take charge and lead others.", ar: "احب ان اتولى القيادة واوجه الاخرين." },
								    { id: 30, trait: "E", reversed: true,  en: "I often spend time alone rather than with others.", ar: "كثيرا ما اقضي وقتي بمفردي بدلا من مع الاخرين." },
								      { id: 31, trait: "A", reversed: false, en: "I care about others feelings.", ar: "اهتم بمشاعر الاخرين." },
								        { id: 32, trait: "A", reversed: false, en: "I am kind and helpful to others.", ar: "انا لطيف ومتعاون مع الاخرين." },
									  { id: 33, trait: "A", reversed: true,  en: "I tend to criticize others easily.", ar: "اميل الى انتقاد الاخرين بسهولة." },
									    { id: 34, trait: "A", reversed: false, en: "I try to see the best in people.", ar: "احاول ان ارى الجانب الايجابي في الناس." },
									      { id: 35, trait: "A", reversed: true,  en: "I can be cold and uncaring towards others.", ar: "يمكن ان اكون باردا وغير مبال تجاه الاخرين." },
									        { id: 36, trait: "A", reversed: false, en: "I enjoy cooperating with others.", ar: "استمتع بالتعاون مع الاخرين." },
										  { id: 37, trait: "A", reversed: false, en: "I feel empathy and concern for others.", ar: "اشعر بالتعاطف والاهتمام بالاخرين." },
										    { id: 38, trait: "A", reversed: true,  en: "I sometimes take advantage of others.", ar: "احيانا استغل الاخرين لمصلحتي." },
										      { id: 39, trait: "A", reversed: false, en: "I am willing to compromise to avoid conflict.", ar: "انا مستعد للتنازل لتجنب النزاعات." },
										        { id: 40, trait: "A", reversed: false, en: "I make people feel at ease and welcome.", ar: "اجعل الناس يشعرون بالارتياح والترحيب." },
											  { id: 41, trait: "N", reversed: false, en: "I often feel anxious or worried.", ar: "كثيرا ما اشعر بالقلق والتوتر." },
											    { id: 42, trait: "N", reversed: false, en: "My mood changes frequently.", ar: "مزاجي يتغير بشكل متكرر." },
											      { id: 43, trait: "N", reversed: true,  en: "I remain calm under pressure.", ar: "ابقى هادئا تحت الضغط." },
											        { id: 44, trait: "N", reversed: false, en: "I get stressed out easily.", ar: "اتوتر وانفعل بسهولة." },
												  { id: 45, trait: "N", reversed: false, en: "I often feel sad or depressed.", ar: "كثيرا ما اشعر بالحزن او الاكتئاب." },
												    { id: 46, trait: "N", reversed: true,  en: "I feel emotionally stable most of the time.", ar: "اشعر بالاستقرار العاطفي معظم الوقت." },
												      { id: 47, trait: "N", reversed: false, en: "I am easily disturbed by things around me.", ar: "اتاثر بسهولة بالاشياء من حولي." },
												        { id: 48, trait: "N", reversed: false, en: "I worry about things that might go wrong.", ar: "اقلق بشان الاشياء التي قد تسوء." },
													  { id: 49, trait: "N", reversed: true,  en: "I rarely feel nervous or fearful.", ar: "نادرا ما اشعر بالتوتر او الخوف." },
													    { id: 50, trait: "N", reversed: false, en: "Small setbacks can easily upset me.", ar: "النكسات الصغيرة يمكن ان تزعجني بسهولة." },
];

export const answerOptions = {
	  en: [
		      { value: 1, label: "Strongly Disagree" },
		          { value: 2, label: "Disagree" },
			      { value: 3, label: "Neutral" },
			          { value: 4, label: "Agree" },
				      { value: 5, label: "Strongly Agree" },
				        ],
					  ar: [
						      { value: 1, label: "لا اوافق بشدة" },
						          { value: 2, label: "لا اوافق" },
							      { value: 3, label: "محايد" },
							          { value: 4, label: "اوافق" },
								      { value: 5, label: "اوافق بشدة" },
								        ],
};

