export interface PersonalityDetail {
  slug: string;
  combinedKey: string;
  color: string;
  lightColor: string;
  icon: string;
  title: { en: string; ar: string };
  tagline: { en: string; ar: string };
  summary: { en: string; ar: string };
  deepDescription: { en: string; ar: string };
  coreTraits: { en: string[]; ar: string[] };
  strengths: { en: string[]; ar: string[] };
  challenges: { en: string[]; ar: string[] };
  jobs: { en: string[]; ar: string[] };
  famousExamples: { en: string[]; ar: string[] };
  inRelationships: { en: string; ar: string };
  growthTips: { en: string[]; ar: string[] };
  compatiblePersonalities: { en: string[]; ar: string[] };
}

export const personalityDetails: Record<string, PersonalityDetail> = {
  "O+C": {
    slug: "visionary-architect",
    combinedKey: "O+C",
    color: "#5a4a9f",
    lightColor: "#f0eeff",
    icon: "🏛️",
    title: { en: "The Visionary Architect", ar: "المهندس الرؤيوي" },
    tagline: { en: "Dreams with blueprints", ar: "يحلم بمخططات" },
    summary: {
      en: "You combine powerful creativity with exceptional discipline. You don't just dream big — you build those dreams into reality.",
      ar: "تجمع بين الابداع القوي والانضباط الاستثنائي. انت لا تحلم فحسب بل تحول تلك الاحلام الى واقع.",
    },
    deepDescription: {
      en: "The Visionary Architect is one of the rarest and most powerful personality combinations. You live at the fascinating intersection of imagination and execution. Where most creative people struggle to finish what they start, you have the rare gift of turning brilliant ideas into tangible reality. You can see the big picture with the clarity of a dreamer and the precision of an engineer. Your mind naturally builds systems, frameworks, and structures to support the visions you create. You are drawn to ambitious long-term projects that allow you to express both your creative vision and your love of careful planning. You are not satisfied with good enough — you want to create something truly remarkable, and you have both the imagination to conceive it and the discipline to build it.",
      ar: "المهندس الرؤيوي هو احد مجموعات الشخصية الانادر والاقوى. تعيش عند التقاطع الرائع بين الخيال والتنفيذ. حيث يعاني معظم المبدعين من انهاء ما يبدؤونه لديك الموهبة النادرة في تحويل الافكار الرائعة الى واقع ملموس. يمكنك رؤية الصورة الكبيرة بوضوح الحالم ودقة المهندس. يبني عقلك بشكل طبيعي انظمة واطر وهياكل لدعم الرؤى التي تخلقها.",
    },
    coreTraits: {
      en: ["Creative vision", "Strategic planning", "Disciplined execution", "High standards", "Long-term thinking", "Systems thinking"],
      ar: ["الرؤية الابداعية", "التخطيط الاستراتيجي", "التنفيذ المنضبط", "المعايير العالية", "التفكير طويل الامد", "التفكير المنهجي"],
    },
    strengths: {
      en: ["Turning abstract ideas into concrete plans", "Maintaining quality without sacrificing creativity", "Leading complex, multi-phase projects", "Inspiring others with vision while delivering results", "Balancing innovation with practicality", "Building systems that outlast individual effort"],
      ar: ["تحويل الافكار المجردة الى خطط ملموسة", "الحفاظ على الجودة دون التضحية بالابداع", "قيادة مشاريع معقدة متعددة المراحل", "الهام الاخرين بالرؤية مع تحقيق النتائج", "الموازنة بين الابتكار والعملية", "بناء انظمة تدوم اكثر من الجهد الفردي"],
    },
    challenges: {
      en: ["Perfectionism can delay completion", "High standards may frustrate collaborators", "Can be overly self-critical when vision and reality diverge", "May struggle to delegate creative decisions to others"],
      ar: ["الكمالية قد تؤخر الانجاز", "المعايير العالية قد تحبط المتعاونين", "قد يكون ناقدا لنفسه بشدة عندما تتباعد الرؤية والواقع", "قد يعاني في تفويض القرارات الابداعية للاخرين"],
    },
    jobs: {
      en: ["Architect", "Product Designer", "Film Director", "Author", "Entrepreneur", "Game Designer", "UX Lead", "Research Scientist", "Creative Director", "Urban Planner"],
      ar: ["مهندس معماري", "مصمم منتجات", "مخرج افلام", "مؤلف", "رائد اعمال", "مصمم العاب", "قائد تجربة المستخدم", "عالم باحث", "مدير ابداعي", "مخطط عمراني"],
    },
    famousExamples: {
      en: ["Leonardo da Vinci — merged art and science into timeless works", "Christopher Nolan — precise storytelling with visionary ambition", "Hayao Miyazaki — built entire worlds with exquisite detail", "Nikola Tesla — imaginative inventor with extraordinary discipline"],
      ar: ["ليوناردو دافينشي — دمج الفن والعلم في اعمال خالدة", "كريستوفر نولان — سرد دقيق مع طموح رؤيوي", "هاياو ميازاكي — بنى عوالم كاملة بتفاصيل رائعة", "نيكولا تيسلا — مخترع خيالي بانضباط استثنائي"],
    },
    inRelationships: {
      en: "As a partner, you are deeply thoughtful and intentional. You invest in relationships the same way you invest in projects — with care, long-term vision, and commitment. You are loyal, dependable, and always working to improve the relationship. You may need to learn to be more spontaneous and less perfectionistic with your partner.",
      ar: "كشريك انت مدروس بعمق ومتعمد. تستثمر في العلاقات بنفس الطريقة التي تستثمر بها في المشاريع — برعاية ورؤية طويلة الامد والتزام. انت مخلص وموثوق وتعمل دائما على تحسين العلاقة. قد تحتاج الى تعلم ان تكون اكثر تلقائية واقل كمالية مع شريكك.",
    },
    growthTips: {
      en: ["Ship imperfect work — iteration beats paralysis", "Share your vision early to get buy-in from collaborators", "Schedule creative play with no goal attached", "Learn to celebrate progress, not just completion"],
      ar: ["سلم عملا غير كامل — التكرار يتغلب على الشلل", "شارك رؤيتك مبكرا للحصول على موافقة المتعاونين", "جدول لعبا ابداعيا بدون هدف مرتبط", "تعلم الاحتفال بالتقدم وليس فقط الانجاز"],
    },
    compatiblePersonalities: {
      en: ["The Warm Connector (E+A)", "The Reliable Caregiver (C+A)", "The Creative Leader (O+E)"],
      ar: ["الرابط الدافئ (E+A)", "المعتني الموثوق (C+A)", "القائد المبدع (O+E)"],
    },
  },
  "O+E": {
    slug: "creative-leader",
    combinedKey: "O+E",
    color: "#c46a3a",
    lightColor: "#fff3ee",
    icon: "🎨",
    title: { en: "The Creative Leader", ar: "القائد المبدع" },
    tagline: { en: "Inspires movements", ar: "يلهم الحركات" },
    summary: {
      en: "You are an inspiring force — bursting with original ideas and the social energy to rally others around them.",
      ar: "انت قوة ملهمة تفيض بالافكار الاصيلة والطاقة الاجتماعية لحشد الاخرين حولها.",
    },
    deepDescription: {
      en: "The Creative Leader is magnetic, original, and unstoppable. You have the rare ability to generate brilliant ideas AND the natural charisma to make others believe in them. You are not just a dreamer sitting alone with your notebook — you are the person in the center of the room, painting a picture of what could be and electrifying everyone around you with possibility. You lead not through authority but through inspiration. People follow you because your enthusiasm is contagious and your ideas genuinely excite them. You thrive at the beginning of projects — ideating, launching, and rallying the team — though you may need strong partners for the detailed execution phase.",
      ar: "القائد المبدع جذاب واصيل ولا يمكن ايقافه. لديك القدرة النادرة على توليد افكار رائعة والكاريزما الطبيعية لجعل الاخرين يؤمنون بها. انت لست مجرد حالم يجلس وحيدا مع دفتر ملاحظاته — انت الشخص في مركز الغرفة يرسم صورة لما يمكن ان يكون ويكهرب الجميع من حوله بالامكانية. تقود ليس من خلال السلطة ولكن من خلال الالهام.",
    },
    coreTraits: {
      en: ["Original thinking", "Social charisma", "Enthusiasm", "Visionary communication", "Inspiration", "Energy"],
      ar: ["التفكير الاصيل", "الكاريزما الاجتماعية", "الحماس", "التواصل الرؤيوي", "الالهام", "الطاقة"],
    },
    strengths: {
      en: ["Generating and communicating bold new ideas", "Building movements and communities around a vision", "Energizing and motivating teams", "Networking and connecting diverse people", "Creating excitement and momentum for projects", "Adapting and pivoting creatively under pressure"],
      ar: ["توليد وتوصيل افكار جديدة جريئة", "بناء حركات ومجتمعات حول رؤية", "تنشيط الفرق وتحفيزها", "التواصل وربط الناس المتنوعين", "خلق الاثارة والزخم للمشاريع", "التكيف والتمحور بشكل ابداعي تحت الضغط"],
    },
    challenges: {
      en: ["Can start many projects without finishing them", "May lose interest once the exciting launch phase is over", "Can overwhelm quieter team members with high energy", "Needs strong operational partners to execute the details"],
      ar: ["قد يبدا مشاريع كثيرة دون انهائها", "قد يفقد الاهتمام بمجرد انتهاء مرحلة الاطلاق المثيرة", "قد يثقل اعضاء الفريق الاهدا بطاقة عالية", "يحتاج الى شركاء تشغيليين اقوياء لتنفيذ التفاصيل"],
    },
    jobs: {
      en: ["Creative Director", "Startup Founder", "Marketing Lead", "TED Speaker", "Brand Strategist", "Art Director", "Community Builder", "Innovation Consultant", "Documentary Filmmaker", "Teacher"],
      ar: ["مدير ابداعي", "مؤسس شركة ناشئة", "قائد تسويق", "متحدث TED", "استراتيجي علامة تجارية", "مدير فني", "بناء مجتمع", "مستشار ابتكار", "صانع افلام وثائقية", "معلم"],
    },
    famousExamples: {
      en: ["Steve Jobs — combined creativity with electrifying presentation", "Frida Kahlo — original artist who became a cultural movement", "Walt Disney — turned imagination into empires", "Banksy — creative vision spread through social impact"],
      ar: ["ستيف جوبز — جمع الابداع مع العرض الكهربائي", "فريدا كاهلو — فنانة اصيلة اصبحت حركة ثقافية", "والت ديزني — حول الخيال الى امبراطوريات", "بانكسي — رؤية ابداعية انتشرت من خلال التاثير الاجتماعي"],
    },
    inRelationships: {
      en: "You bring excitement, novelty, and deep emotional engagement into relationships. Partners often feel swept up in your enthusiasm and inspired by your vision. However you must be careful not to neglect the practical and emotional maintenance of relationships in pursuit of the next big thing.",
      ar: "تجلب الاثارة والجدة والمشاركة العاطفية العميقة في العلاقات. غالبا ما يشعر الشركاء باننا اجتتهنا بحماسك والهام برؤيتك. ومع ذلك يجب ان تحرص على عدم اهمال الصيانة العملية والعاطفية للعلاقات في سعيك وراء الشيء الكبير التالي.",
    },
    growthTips: {
      en: ["Build accountability systems to finish what you start", "Listen as much as you talk — others have great ideas too", "Find a detail-oriented partner or team member to complement you", "Practice depth over breadth in at least one area of life"],
      ar: ["بناء انظمة المساءلة لانهاء ما تبدا", "استمع بقدر ما تتحدث — لدى الاخرين افكار رائعة ايضا", "ابحث عن شريك او عضو فريق مهتم بالتفاصيل يكمل قدراتك", "تدرب على العمق على حساب الاتساع في مجال واحد على الاقل من الحياة"],
    },
    compatiblePersonalities: {
      en: ["The Reliable Caregiver (C+A)", "The Visionary Architect (O+C)", "The Warm Connector (E+A)"],
      ar: ["المعتني الموثوق (C+A)", "المهندس الرؤيوي (O+C)", "الرابط الدافئ (E+A)"],
    },
  },
  "O+A": {
    slug: "empathetic-dreamer",
    combinedKey: "O+A",
    color: "#3a7d6b",
    lightColor: "#eaf7f4",
    icon: "🌸",
    title: { en: "The Empathetic Dreamer", ar: "الحالم المتعاطف" },
    tagline: { en: "Heals through imagination", ar: "يشفي من خلال الخيال" },
    summary: {
      en: "You see the world through both an imaginative and a compassionate lens. You use your creativity to understand and uplift others.",
      ar: "ترى العالم من خلال عدسة خيالية ومتعاطفة معا. تستخدم ابداعك لفهم الاخرين ورفعهم.",
    },
    deepDescription: {
      en: "The Empathetic Dreamer is a rare soul who combines artistic imagination with profound human warmth. You feel the world deeply — both its beauty and its pain — and your creative gifts are almost always in service of others. You write stories that make people feel seen, create art that touches hearts, or build spaces where people feel safe to be themselves. Your imagination is not self-indulgent; it is deeply empathetic. You use it as a tool to understand human experience and to offer comfort, insight, or beauty to those who need it.",
      ar: "الحالم المتعاطف روح نادرة تجمع بين الخيال الفني والدفء الانساني العميق. تشعر بالعالم بعمق — سواء جماله او الامه — وموهبتك الابداعية دائما تقريبا في خدمة الاخرين. تكتب قصصا تجعل الناس يشعرون بانهم مرئيون او تخلق فنا يلمس القلوب او تبني مساحات يشعر فيها الناس بالامان ليكونوا انفسهم.",
    },
    coreTraits: {
      en: ["Imaginative empathy", "Healing creativity", "Emotional intelligence", "Artistic sensitivity", "Compassionate vision", "Deep listening"],
      ar: ["التعاطف الخيالي", "الابداع الشافي", "الذكاء العاطفي", "الحساسية الفنية", "الرؤية الرحيمة", "الاستماع العميق"],
    },
    strengths: {
      en: ["Creating art or stories that deeply resonate with others", "Understanding and articulating complex human emotions", "Building emotionally safe and inclusive spaces", "Combining beauty with meaning in their work", "Being a source of comfort and wisdom for others", "Seeing the humanity in everyone"],
      ar: ["خلق فن او قصص تتردد صداها بعمق مع الاخرين", "فهم وصياغة المشاعر الانسانية المعقدة", "بناء مساحات امنة عاطفيا وشاملة", "الجمع بين الجمال والمعنى في عملهم", "ان يكون مصدرا للراحة والحكمة للاخرين", "رؤية الانسانية في الجميع"],
    },
    challenges: {
      en: ["May absorb others' pain too deeply", "Can neglect their own needs while caring for others", "May avoid confrontation even when necessary", "Can be taken advantage of due to their giving nature"],
      ar: ["قد يستوعب الم الاخرين بعمق شديد", "قد يهمل احتياجاته الخاصة اثناء رعاية الاخرين", "قد يتجنب المواجهة حتى عندما تكون ضرورية", "قد يُستغل بسبب طبيعته العطاءة"],
    },
    jobs: {
      en: ["Therapist", "Author", "Art Therapist", "Teacher", "Nonprofit Leader", "Children's Book Author", "Musician", "Social Designer", "Chaplain", "Humanitarian"],
      ar: ["معالج نفسي", "مؤلف", "معالج بالفن", "معلم", "قائد منظمة غير ربحية", "مؤلف كتب اطفال", "موسيقي", "مصمم اجتماعي", "قسيس", "انساني"],
    },
    famousExamples: {
      en: ["Maya Angelou — poetry rooted in deep human compassion", "Hayao Miyazaki — stories that heal through beauty", "Frida Kahlo — art that transforms pain into understanding", "Toni Morrison — literature that centers forgotten voices"],
      ar: ["مايا انجيلو — شعر متجذر في التعاطف الانساني العميق", "هاياو ميازاكي — قصص تشفي من خلال الجمال", "فريدا كاهلو — فن يحول الالم الى فهم", "توني موريسون — ادب يضع الاصوات المنسية في المركز"],
    },
    inRelationships: {
      en: "You are one of the most nourishing partners a person can have. You listen deeply, love generously, and create a relationship that feels like a safe harbor. You must learn to receive as freely as you give and to express your own needs without guilt.",
      ar: "انت احد اكثر الشركاء تغذية يمكن ان يجده شخص ما. تستمع بعمق وتحب بسخاء وتخلق علاقة تبدو كملجا امن. يجب ان تتعلم الاستقبال بحرية كما تعطي والتعبير عن احتياجاتك الخاصة دون ذنب.",
    },
    growthTips: {
      en: ["Practice receiving help and care from others", "Set emotional boundaries to protect your energy", "Use your creativity for your own healing, not just others'", "Learn that saying no is a form of self-love"],
      ar: ["تدرب على قبول المساعدة والرعاية من الاخرين", "ضع حدودا عاطفية لحماية طاقتك", "استخدم ابداعك لشفاء نفسك وليس فقط الاخرين", "تعلم ان قول لا هو شكل من اشكال حب الذات"],
    },
    compatiblePersonalities: {
      en: ["The Driven Networker (C+E)", "The Warm Connector (E+A)", "The Visionary Architect (O+C)"],
      ar: ["الشبكي الطموح (C+E)", "الرابط الدافئ (E+A)", "المهندس الرؤيوي (O+C)"],
    },
  },
  "O+N": {
    slug: "introspective-artist",
    combinedKey: "O+N",
    color: "#7c5cbf",
    lightColor: "#f3eeff",
    icon: "🌙",
    title: { en: "The Introspective Artist", ar: "الفنان المتامل" },
    tagline: { en: "Transforms pain into beauty", ar: "يحول الالم الى جمال" },
    summary: {
      en: "You feel and create deeply. Your emotional sensitivity fuels extraordinary artistic and intellectual expression.",
      ar: "تشعر وتبدع بعمق. تغذي حساسيتك العاطفية تعبيرا فنيا وفكريا استثنائيا.",
    },
    deepDescription: {
      en: "The Introspective Artist is among the most creatively gifted personality types. Your inner world is extraordinarily rich — turbulent at times, but endlessly generative. You experience emotions at a depth that others rarely reach, and you have the creative gifts to translate that experience into art, music, writing, or ideas that touch the universal human experience. Your struggles are real, but they are also the raw material of your greatness. The world's most enduring art has often come from people like you — who felt too much, thought too deeply, and refused to look away from the difficult truths of existence.",
      ar: "الفنان المتامل هو من بين انواع الشخصية الاكثر موهبة ابداعيا. عالمك الداخلي غني بشكل استثنائي — مضطرب في بعض الاحيان لكنه لا ينضب. تختبر المشاعر بعمق نادرا ما يصله الاخرون ولديك المواهب الابداعية لترجمة تلك التجربة الى فن او موسيقى او كتابة او افكار تلمس التجربة الانسانية الكونية.",
    },
    coreTraits: {
      en: ["Emotional depth", "Creative imagination", "Introspection", "Artistic sensitivity", "Authenticity", "Philosophical thinking"],
      ar: ["العمق العاطفي", "الخيال الابداعي", "التامل الذاتي", "الحساسية الفنية", "الاصالة", "التفكير الفلسفي"],
    },
    strengths: {
      en: ["Creating deeply authentic and resonant art", "Understanding the full spectrum of human emotion", "Profound self-awareness and philosophical insight", "Ability to articulate what others feel but cannot express", "Sensitivity to beauty, nuance, and meaning", "Creating work that endures across time"],
      ar: ["خلق فن اصيل وعميق الصدى", "فهم الطيف الكامل للعواطف الانسانية", "الوعي الذاتي العميق والبصيرة الفلسفية", "القدرة على التعبير عما يشعر به الاخرون لكنهم لا يستطيعون التعبير عنه", "الحساسية للجمال والدقة والمعنى", "خلق عمل يدوم عبر الزمن"],
    },
    challenges: {
      en: ["Prone to anxiety, rumination, and self-doubt", "Can become isolated in their inner world", "Emotional volatility may affect relationships and productivity", "May struggle with consistent routine and practical responsibilities"],
      ar: ["عرضة للقلق والاجترار والشك في النفس", "قد ينعزل في عالمه الداخلي", "تقلب المزاج قد يؤثر على العلاقات والانتاجية", "قد يعاني مع الروتين المتسق والمسؤوليات العملية"],
    },
    jobs: {
      en: ["Poet", "Novelist", "Musician", "Painter", "Philosopher", "Film Director", "Screenwriter", "Art Therapist", "Researcher", "Critic"],
      ar: ["شاعر", "روائي", "موسيقي", "رسام", "فيلسوف", "مخرج افلام", "كاتب سيناريو", "معالج بالفن", "باحث", "ناقد"],
    },
    famousExamples: {
      en: ["Virginia Woolf — stream of consciousness from emotional depth", "Radiohead — music that channels anxiety into beauty", "Sylvia Plath — raw poetry from the depths of feeling", "Franz Kafka — transformed existential dread into literature"],
      ar: ["فرجينيا وولف — تيار الوعي من العمق العاطفي", "راديوهيد — موسيقى تحول القلق الى جمال", "سيلفيا بلاث — شعر خام من اعماق الاحساس", "فرانز كافكا — حول الرعب الوجودي الى ادب"],
    },
    inRelationships: {
      en: "You bring extraordinary emotional depth and vulnerability to relationships. You love intensely and are deeply attuned to your partner's emotional world. Partners must be patient with your emotional fluctuations and understand that your sensitivity is also your greatest gift.",
      ar: "تجلب عمقا عاطفيا وضعفا استثنائيين الى العلاقات. تحب بشدة وانت متوافق بعمق مع العالم العاطفي لشريكك. يجب ان يكون الشركاء صبورين مع تقلباتك العاطفية ويفهموا ان حساسيتك هي ايضا موهبتك الاعظم.",
    },
    growthTips: {
      en: ["Develop a consistent creative practice to channel emotional energy", "Work with a therapist to develop emotional regulation skills", "Build a small circle of trusted people who understand you", "Allow yourself to share your inner world — connection heals"],
      ar: ["طور ممارسة ابداعية متسقة لتوجيه الطاقة العاطفية", "اعمل مع معالج لتطوير مهارات تنظيم المشاعر", "بناء دائرة صغيرة من الناس الموثوقين الذين يفهمونك", "اسمح لنفسك بمشاركة عالمك الداخلي — الاتصال يشفي"],
    },
    compatiblePersonalities: {
      en: ["The Reliable Caregiver (C+A)", "The Gentle Empath (A+N)", "The Empathetic Dreamer (O+A)"],
      ar: ["المعتني الموثوق (C+A)", "المتعاطف اللطيف (A+N)", "الحالم المتعاطف (O+A)"],
    },
  },
  "C+E": {
    slug: "driven-networker",
    combinedKey: "C+E",
    color: "#1a6bbf",
    lightColor: "#e8f2ff",
    icon: "🚀",
    title: { en: "The Driven Networker", ar: "الشبكي الطموح" },
    tagline: { en: "Achieves through people", ar: "ينجز من خلال الناس" },
    summary: {
      en: "You combine ambition with charisma. You set high goals and have the social intelligence to bring others on board.",
      ar: "تجمع بين الطموح والكاريزما. تضع اهدافا عالية ولديك الذكاء الاجتماعي لاشراك الاخرين.",
    },
    deepDescription: {
      en: "The Driven Networker is built for success in the social world. You understand that the greatest achievements in life are rarely solo efforts — they are built on relationships, trust, and collective effort. You have the discipline to set ambitious goals AND the social intelligence to assemble the right people around those goals. You are organized, strategic, and charismatic. You rarely waste time because you know exactly what you want and you are skilled at getting others genuinely excited about helping you achieve it.",
      ar: "الشبكي الطموح مبني للنجاح في العالم الاجتماعي. تفهم ان اعظم الانجازات في الحياة نادرا ما تكون جهودا فردية — بل تُبنى على العلاقات والثقة والجهد الجماعي. لديك الانضباط لتحديد اهداف طموحة والذكاء الاجتماعي لتجميع الاشخاص المناسبين حول تلك الاهداف.",
    },
    coreTraits: {
      en: ["Strategic ambition", "Social intelligence", "Goal orientation", "Charismatic leadership", "Networking", "Execution"],
      ar: ["الطموح الاستراتيجي", "الذكاء الاجتماعي", "التوجه نحو الاهداف", "القيادة الكاريزمية", "بناء الشبكات", "التنفيذ"],
    },
    strengths: {
      en: ["Building powerful professional networks", "Leading teams toward ambitious goals", "Combining strategic planning with social persuasion", "Creating accountability while maintaining motivation", "Thriving in competitive, results-driven environments", "Turning professional connections into genuine relationships"],
      ar: ["بناء شبكات مهنية قوية", "قيادة الفرق نحو اهداف طموحة", "الجمع بين التخطيط الاستراتيجي والاقناع الاجتماعي", "خلق المساءلة مع الحفاظ على الدافعية", "الازدهار في البيئات التنافسية الموجهة نحو النتائج", "تحويل الاتصالات المهنية الى علاقات حقيقية"],
    },
    challenges: {
      en: ["May prioritize achievement over personal relationships", "Can come across as calculating or overly ambitious", "Risk of burnout from constant drive", "May struggle with failure due to high standards"],
      ar: ["قد يعطي الاولوية للانجاز على حساب العلاقات الشخصية", "قد يبدو محسوبا او طموحا بشكل مفرط", "خطر الاحتراق من الدافع المستمر", "قد يعاني مع الفشل بسبب المعايير العالية"],
    },
    jobs: {
      en: ["CEO", "Sales Director", "Politician", "Venture Capitalist", "Business Development", "Real Estate Agent", "Consultant", "Coach", "Lobbyist", "General Manager"],
      ar: ["مدير تنفيذي", "مدير مبيعات", "سياسي", "رأسمالي مغامر", "تطوير الاعمال", "وكيل عقاري", "مستشار", "مدرب", "مناصر", "مدير عام"],
    },
    famousExamples: {
      en: ["Barack Obama — disciplined intellect with extraordinary social gift", "Oprah Winfrey — strategic vision combined with warm connection", "Jeff Bezos — methodical ambition with compelling communication", "Margaret Thatcher — iron discipline with powerful persuasion"],
      ar: ["باراك اوباما — ذكاء منضبط مع موهبة اجتماعية استثنائية", "اوبرا وينفري — رؤية استراتيجية مع ربط دافئ", "جيف بيزوس — طموح منهجي مع تواصل مقنع", "مارغريت تاتشر — انضباط حديدي مع اقناع قوي"],
    },
    inRelationships: {
      en: "You are a devoted and goal-oriented partner. You invest in relationships the way you invest in anything — strategically and with full commitment. You may need to consciously slow down and be present, rather than always planning the next milestone.",
      ar: "انت شريك متفانٍ وموجه نحو الاهداف. تستثمر في العلاقات بنفس الطريقة التي تستثمر بها في اي شيء — باستراتيجية والتزام كامل. قد تحتاج الى التباطؤ بوعي والحضور بدلا من التخطيط دائما للمعلم التالي.",
    },
    growthTips: {
      en: ["Invest in relationships for their own sake, not just their utility", "Schedule downtime and protect it like a meeting", "Practice vulnerability — it builds deeper connections than achievement", "Remember that people are more than what they can do for you"],
      ar: ["استثمر في العلاقات لذاتها وليس فقط لفائدتها", "جدول وقتا للراحة وحمه كاجتماع", "تدرب على الضعف — يبني روابط اعمق من الانجاز", "تذكر ان الناس اكثر مما يمكنهم فعله من اجلك"],
    },
    compatiblePersonalities: {
      en: ["The Empathetic Dreamer (O+A)", "The Warm Connector (E+A)", "The Reliable Caregiver (C+A)"],
      ar: ["الحالم المتعاطف (O+A)", "الرابط الدافئ (E+A)", "المعتني الموثوق (C+A)"],
    },
  },
  "C+A": {
    slug: "reliable-caregiver",
    combinedKey: "C+A",
    color: "#2a7a6e",
    lightColor: "#e6f7f4",
    icon: "🛡️",
    title: { en: "The Reliable Caregiver", ar: "المعتني الموثوق" },
    tagline: { en: "The backbone of trust", ar: "عمود الثقة" },
    summary: {
      en: "You are someone people lean on completely. Organized, kind, and deeply trustworthy.",
      ar: "انت شخص يعتمد عليه الناس تماما. منظم ولطيف وجدير بالثقة بعمق.",
    },
    deepDescription: {
      en: "The Reliable Caregiver is the person that everyone turns to in times of need — and they never let anyone down. You combine the warmth and genuine concern of agreeableness with the dependability and organization of conscientiousness. You are the friend who shows up, the colleague who delivers, the partner who stays. Your word is your bond. People know that if you say you will do something, it will be done — and done well. You are motivated by a deep sense of duty and care for others. You find meaning in being useful, in making things better for people around you, and in being someone others can count on.",
      ar: "المعتني الموثوق هو الشخص الذي يلجا اليه الجميع في اوقات الحاجة — ولا يخذل احدا ابدا. تجمع بين دفء ورعاية حقيقية من التوافق وموثوقية وتنظيم من الضمير. انت الصديق الذي يظهر والزميل الذي يُسلم والشريك الذي يبقى. كلمتك هي وعدك.",
    },
    coreTraits: {
      en: ["Reliability", "Warmth", "Organization", "Duty", "Service", "Trustworthiness"],
      ar: ["الموثوقية", "الدفء", "التنظيم", "الواجب", "الخدمة", "الجدارة بالثقة"],
    },
    strengths: {
      en: ["Absolute reliability and follow-through", "Genuine care for others combined with practical action", "Creating stability and safety for those around them", "Building and maintaining deep long-term relationships", "Excelling in caregiving, service, and support roles", "Being the calm, steady presence in chaotic situations"],
      ar: ["الموثوقية المطلقة والوفاء بالالتزامات", "الرعاية الحقيقية للاخرين مع الفعل العملي", "خلق الاستقرار والامان لمن حولهم", "بناء والحفاظ على علاقات طويلة الامد عميقة", "التفوق في ادوار الرعاية والخدمة والدعم", "ان يكون الحضور الهادئ والمستقر في المواقف الفوضوية"],
    },
    challenges: {
      en: ["May overextend themselves helping others to the point of burnout", "Difficulty saying no even when their own needs require it", "Can suppress personal needs to maintain harmony", "May be taken for granted by those they serve"],
      ar: ["قد يمدون انفسهم بشكل مفرط في مساعدة الاخرين الى درجة الاحتراق", "صعوبة قول لا حتى عندما تتطلب احتياجاتهم الخاصة ذلك", "قد يقمعون الاحتياجات الشخصية للحفاظ على الانسجام", "قد يُؤخذون كامر مسلم به من قبل من يخدمونهم"],
    },
    jobs: {
      en: ["Nurse", "Doctor", "Social Worker", "Teacher", "HR Manager", "Operations Manager", "Family Therapist", "Community Manager", "Administrative Director", "Nonprofit Leader"],
      ar: ["ممرض", "طبيب", "اخصائي اجتماعي", "معلم", "مدير موارد بشرية", "مدير عمليات", "معالج اسري", "مدير مجتمع", "مدير اداري", "قائد منظمة غير ربحية"],
    },
    famousExamples: {
      en: ["Mother Teresa — organized compassion at massive scale", "Fred Rogers — disciplined kindness as a daily practice", "Nelson Mandela — combined principled structure with deep humanity", "Malala Yousafzai — systematic advocacy rooted in genuine care"],
      ar: ["الام تيريزا — تعاطف منظم على نطاق واسع", "فريد روجرز — لطف منضبط كممارسة يومية", "نيلسون مانديلا — جمع البنية المبدئية مع الانسانية العميقة", "ملالا يوسفزاي — مناصرة منهجية متجذرة في الرعاية الحقيقية"],
    },
    inRelationships: {
      en: "You are one of the most devoted and reliable partners imaginable. Your relationship is characterized by deep trust, consistent support, and practical love. You must learn to express your own needs and to accept care from your partner with as much grace as you give it.",
      ar: "انت احد اكثر الشركاء تفانيا وموثوقية يمكن تخيله. تتميز علاقتك بالثقة العميقة والدعم المتسق والحب العملي. يجب ان تتعلم التعبير عن احتياجاتك الخاصة وقبول الرعاية من شريكك بنفس النعمة التي تعطي بها.",
    },
    growthTips: {
      en: ["Schedule regular time to identify and express your own needs", "Practice receiving care without guilt", "Set clear limits on how much you give to avoid depletion", "Recognize that self-care makes you a better caregiver"],
      ar: ["جدول وقتا منتظما لتحديد احتياجاتك الخاصة والتعبير عنها", "تدرب على قبول الرعاية دون ذنب", "ضع حدودا واضحة لمقدار ما تعطيه لتجنب النضوب", "اعترف بان رعاية الذات تجعلك مقدم رعاية افضل"],
    },
    compatiblePersonalities: {
      en: ["The Creative Leader (O+E)", "The Visionary Architect (O+C)", "The Driven Networker (C+E)"],
      ar: ["القائد المبدع (O+E)", "المهندس الرؤيوي (O+C)", "الشبكي الطموح (C+E)"],
    },
  },
  "C+N": {
    slug: "perfectionist",
    combinedKey: "C+N",
    color: "#5a6abf",
    lightColor: "#eef0ff",
    icon: "⚖️",
    title: { en: "The Perfectionist", ar: "المثالي" },
    tagline: { en: "Excellence at all costs", ar: "التميز بكل ثمن" },
    summary: {
      en: "You hold yourself to the highest standards and feel deeply when things fall short. Your inner drive produces exceptional work.",
      ar: "تضع لنفسك اعلى المعايير وتشعر بعمق عندما تقل الامور عن ذلك. دوافعك الداخلية تنتج عملا استثنائيا.",
    },
    deepDescription: {
      en: "The Perfectionist is driven by an almost impossible combination of high standards and deep feeling. You care intensely about doing things right — not for external approval, but because your inner sense of quality demands it. You feel the gap between how things are and how they should be more acutely than almost anyone else. This makes you an exceptional producer of high-quality work, but it also means you carry the weight of constant self-evaluation. Your greatest challenge is learning that good enough sometimes is good enough — that perfectionism, left unchecked, can become the enemy of completion and peace.",
      ar: "المثالي مدفوع بمزيج شبه مستحيل من المعايير العالية والشعور العميق. تهتم بشدة بالقيام بالاشياء بشكل صحيح — ليس للموافقة الخارجية ولكن لان حسك الداخلي للجودة يتطلب ذلك. تشعر بالفجوة بين كيف هي الاشياء وكيف ينبغي ان تكون بحدة اكثر من اي شخص اخر تقريبا.",
    },
    coreTraits: {
      en: ["High standards", "Self-criticism", "Discipline", "Emotional depth", "Quality focus", "Inner drive"],
      ar: ["المعايير العالية", "النقد الذاتي", "الانضباط", "العمق العاطفي", "التركيز على الجودة", "الدافع الداخلي"],
    },
    strengths: {
      en: ["Producing work of exceptional quality", "Deeply thorough and detail-oriented approach", "High personal accountability", "Strong ethical standards", "Ability to identify flaws and improve systems", "Producing enduring, high-standard output"],
      ar: ["انتاج عمل ذو جودة استثنائية", "نهج شامل ومهتم بالتفاصيل بعمق", "المساءلة الشخصية العالية", "المعايير الاخلاقية القوية", "القدرة على تحديد العيوب وتحسين الانظمة", "انتاج مخرجات دائمة وعالية المستوى"],
    },
    challenges: {
      en: ["Perfectionism can lead to paralysis and procrastination", "Self-criticism can become destructive", "High anxiety around performance and outcomes", "May be overly critical of themselves and others"],
      ar: ["الكمالية قد تؤدي الى الشلل والتسويف", "النقد الذاتي قد يصبح مدمرا", "قلق عالٍ حول الاداء والنتائج", "قد يكون ناقدا بشكل مفرط لنفسه وللاخرين"],
    },
    jobs: {
      en: ["Surgeon", "Editor", "Quality Assurance", "Auditor", "Research Scientist", "Legal Analyst", "Architect", "Philosopher", "Professor", "Software Engineer"],
      ar: ["جراح", "محرر", "ضمان الجودة", "مدقق", "عالم باحث", "محلل قانوني", "مهندس معماري", "فيلسوف", "استاذ", "مهندس برمجيات"],
    },
    famousExamples: {
      en: ["Michaelangelo — tortured perfectionism that produced eternal art", "Charles Darwin — meticulous anxiety-driven scientific rigor", "Stanley Kubrick — obsessive quality standards in filmmaking", "Marie Curie — relentless perfectionism in pursuit of truth"],
      ar: ["ميكيلانجيلو — كمالية معذبة انتجت فنا ابديا", "تشارلز داروين — صرامة علمية دقيقة مدفوعة بالقلق", "ستانلي كوبريك — معايير جودة وسواسية في صناعة الافلام", "ماري كوري — كمالية لا هوادة فيها في سعي الحقيقة"],
    },
    inRelationships: {
      en: "You are deeply committed and loyal, but your high standards can create pressure in relationships. Partners need to understand that your criticism comes from love, not judgment. Learning to accept imperfection in relationships — and in yourself — is your greatest growth edge.",
      ar: "انت ملتزم عميقا ومخلص لكن معاييرك العالية قد تخلق ضغطا في العلاقات. يحتاج الشركاء الى فهم ان انتقادك يأتي من الحب وليس من الحكم. تعلم قبول النقص في العلاقات — وفي نفسك — هو اعظم حافة نمو لديك.",
    },
    growthTips: {
      en: ["Practice self-compassion as seriously as you practice excellence", "Set a 'good enough' threshold for low-stakes tasks", "Celebrate completion — not just quality", "Work with a therapist to separate self-worth from performance"],
      ar: ["تدرب على التعاطف مع الذات بجدية كما تتدرب على التميز", "ضع عتبة كافية لمهام منخفضة المخاطر", "احتفل بالانجاز — وليس فقط بالجودة", "اعمل مع معالج لفصل قيمة الذات عن الاداء"],
    },
    compatiblePersonalities: {
      en: ["The Warm Connector (E+A)", "The Empathetic Dreamer (O+A)", "The Gentle Empath (A+N)"],
      ar: ["الرابط الدافئ (E+A)", "الحالم المتعاطف (O+A)", "المتعاطف اللطيف (A+N)"],
    },
  },
  "E+A": {
    slug: "warm-connector",
    combinedKey: "E+A",
    color: "#c07a2a",
    lightColor: "#fff7ee",
    icon: "☀️",
    title: { en: "The Warm Connector", ar: "الرابط الدافئ" },
    tagline: { en: "Brings everyone together", ar: "يجمع الجميع" },
    summary: {
      en: "You bring everyone together and make them feel genuinely welcome. Socially gifted and deeply kind.",
      ar: "تجمع الجميع وتجعلهم يشعرون بالترحيب الحقيقي. موهوب اجتماعيا ولطيف بعمق.",
    },
    deepDescription: {
      en: "The Warm Connector is the social heart of any group. You have the unique combination of extraversion's energy and agreeableness's genuine care — which means you don't just connect with people, you make them feel truly seen and valued. People leave conversations with you feeling better about themselves. You are the person at the party who ensures no one is standing alone, the colleague who checks in when someone seems down, and the friend who remembers what matters to you. You build communities not through authority but through authentic warmth.",
      ar: "الرابط الدافئ هو القلب الاجتماعي لاي مجموعة. لديك مزيج فريد من طاقة الانبساطية والرعاية الحقيقية للتوافق — مما يعني انك لا تتواصل مع الناس فحسب بل تجعلهم يشعرون بانهم مرئيون ومقدّرون حقا. يغادر الناس المحادثات معك وهم يشعرون بتحسن تجاه انفسهم.",
    },
    coreTraits: {
      en: ["Authentic warmth", "Social energy", "Inclusivity", "Empathy", "Generosity", "Community building"],
      ar: ["الدفء الاصيل", "الطاقة الاجتماعية", "الشمولية", "التعاطف", "السخاء", "بناء المجتمع"],
    },
    strengths: {
      en: ["Making everyone feel included and valued", "Building genuine community and social bonds", "Resolving conflicts with warmth and humor", "Creating positive, uplifting social environments", "Networking while genuinely caring about people", "Being a natural ambassador and bridge-builder"],
      ar: ["جعل الجميع يشعر بالانتماء والتقدير", "بناء مجتمع حقيقي وروابط اجتماعية", "حل النزاعات بدفء وفكاهة", "خلق بيئات اجتماعية ايجابية ورافعة", "بناء الشبكات مع الاهتمام الحقيقي بالناس", "ان يكون سفيرا طبيعيا وبانيا للجسور"],
    },
    challenges: {
      en: ["May stretch themselves too thin socially", "Can have difficulty with necessary conflict", "May prioritize group harmony over honest feedback", "Risk of people-pleasing to maintain likeability"],
      ar: ["قد يمتد اجتماعيا بشكل مفرط", "قد يواجه صعوبة مع الصراع الضروري", "قد يعطي الاولوية للانسجام الجماعي على التغذية الراجعة الصادقة", "خطر ارضاء الناس للحفاظ على المحبوبية"],
    },
    jobs: {
      en: ["Community Manager", "Teacher", "Therapist", "PR Manager", "Event Coordinator", "Life Coach", "Nurse", "Customer Success", "Hospitality Manager", "Social Worker"],
      ar: ["مدير مجتمع", "معلم", "معالج نفسي", "مدير علاقات عامة", "منسق فعاليات", "مدرب حياة", "ممرض", "نجاح العملاء", "مدير ضيافة", "اخصائي اجتماعي"],
    },
    famousExamples: {
      en: ["Oprah Winfrey — warmth and social energy that built a media empire", "Fred Rogers — extraversion in service of radical kindness", "Ellen DeGeneres — social energy channeled into inclusive joy", "Desmond Tutu — brought warmth and humor to serious reconciliation"],
      ar: ["اوبرا وينفري — الدفء والطاقة الاجتماعية التي بنت امبراطورية اعلامية", "فريد روجرز — الانبساطية في خدمة اللطف الجذري", "ايلن ديجنيريس — الطاقة الاجتماعية موجهة نحو الفرح الشامل", "ديزموند توتو — جلب الدفء والفكاهة للمصالحة الجادة"],
    },
    inRelationships: {
      en: "You are a wonderful partner — attentive, warm, and socially generous. You make your partner feel loved and included in your world. You may need to ensure you are also investing in the depth of your primary relationship and not spreading your social energy too thin.",
      ar: "انت شريك رائع — منتبه ودافئ وكريم اجتماعيا. تجعل شريكك يشعر بالحب والانتماء الى عالمك. قد تحتاج الى التاكد من انك تستثمر ايضا في عمق علاقتك الاساسية وعدم نشر طاقتك الاجتماعية بشكل رفيع جدا.",
    },
    growthTips: {
      en: ["Practice comfortable conflict — honesty is a form of care", "Protect time for deep one-on-one connection over large groups", "Ensure your social giving is balanced with self-replenishment", "Learn that saying hard truths is an act of love"],
      ar: ["تدرب على الصراع المريح — الصدق هو شكل من اشكال الرعاية", "احمِ الوقت للتواصل العميق بين شخصين بدلا من المجموعات الكبيرة", "تاكد من ان عطاءك الاجتماعي متوازن مع تجديد الذات", "تعلم ان قول الحقائق الصعبة هو فعل محبة"],
    },
    compatiblePersonalities: {
      en: ["The Visionary Architect (O+C)", "The Perfectionist (C+N)", "The Reliable Caregiver (C+A)"],
      ar: ["المهندس الرؤيوي (O+C)", "المثالي (C+N)", "المعتني الموثوق (C+A)"],
    },
  },
  "E+N": {
    slug: "passionate-performer",
    combinedKey: "E+N",
    color: "#bf3a5a",
    lightColor: "#fdeef2",
    icon: "🎭",
    title: { en: "The Passionate Performer", ar: "المؤدي المتحمس" },
    tagline: { en: "Lives with full intensity", ar: "يعيش بكثافة كاملة" },
    summary: {
      en: "You feel and express everything with full intensity. Your emotional highs fuel magnetic energy in social settings.",
      ar: "تشعر وتعبر عن كل شيء بكثافة كاملة. تغذي ارتفاعاتك العاطفية طاقة مغناطيسية في البيئات الاجتماعية.",
    },
    deepDescription: {
      en: "The Passionate Performer lives life at full volume. You bring extraordinary energy, emotional intensity, and authentic expression to everything you do. Your social presence is magnetic — people are drawn to your expressiveness and the genuine feeling behind your words. You are not afraid to show your emotions, speak your truth, or put your whole heart into something. The highs are extraordinary and the lows are real, but you wouldn't have it any other way. You are fully alive in a way that many people never experience.",
      ar: "المؤدي المتحمس يعيش الحياة بصوت كامل. تجلب طاقة استثنائية وكثافة عاطفية وتعبيرا اصيلا لكل ما تفعله. حضورك الاجتماعي مغناطيسي — الناس ينجذبون الى تعبيريتك والشعور الحقيقي وراء كلماتك. انت لا تخشى اظهار مشاعرك والتعبير عن حقيقتك ووضع قلبك بالكامل في شيء ما.",
    },
    coreTraits: {
      en: ["Emotional intensity", "Social magnetism", "Authentic expression", "Passion", "Vulnerability", "Energy"],
      ar: ["الكثافة العاطفية", "الجاذبية الاجتماعية", "التعبير الاصيل", "الشغف", "الضعف", "الطاقة"],
    },
    strengths: {
      en: ["Electrifying social presence and natural charisma", "Authentic emotional expression that connects deeply", "Passion and enthusiasm that inspire others", "Ability to perform, entertain, and move audiences", "Courage to be vulnerable in public", "Living fully and encouraging others to do the same"],
      ar: ["حضور اجتماعي كهربائي وكاريزما طبيعية", "التعبير العاطفي الاصيل الذي يتواصل بعمق", "الشغف والحماس الذي يلهم الاخرين", "القدرة على الاداء والترفيه وتحريك الجماهير", "شجاعة الضعف في العلن", "العيش بالكامل وتشجيع الاخرين على فعل الشيء نفسه"],
    },
    challenges: {
      en: ["Emotional volatility can create unpredictability in relationships", "May act or speak before processing emotions fully", "High highs and low lows can be exhausting for partners", "Risk of burning out from intensity of engagement"],
      ar: ["تقلب المزاج قد يخلق عدم قدرة على التنبؤ في العلاقات", "قد يتصرف او يتحدث قبل معالجة المشاعر بالكامل", "الارتفاعات العالية والانخفاضات المنخفضة قد تكون مرهقة للشركاء", "خطر الاحتراق من كثافة المشاركة"],
    },
    jobs: {
      en: ["Actor", "Musician", "Comedian", "Motivational Speaker", "Journalist", "Politician", "Life Coach", "Talk Show Host", "Dancer", "Activist"],
      ar: ["ممثل", "موسيقي", "كوميدي", "متحدث تحفيزي", "صحفي", "سياسي", "مدرب حياة", "مضيف برنامج حواري", "راقص", "ناشط"],
    },
    famousExamples: {
      en: ["Celine Dion — vocal passion combined with emotional vulnerability", "Robin Williams — social brilliance fueled by intense inner feeling", "Maria Callas — operatic intensity of emotion and performance", "Anthony Bourdain — passionate expression with deep emotional undercurrent"],
      ar: ["سيلين ديون — شغف صوتي مع ضعف عاطفي", "روبن ويليامز — تالق اجتماعي مدفوع بالشعور الداخلي المكثف", "ماريا كالاس — كثافة اوبرالية من العاطفة والاداء", "انتوني بورداين — تعبير شغوف مع تيار عاطفي داخلي عميق"],
    },
    inRelationships: {
      en: "You bring extraordinary passion, romance, and emotional presence to relationships. Your partner will never question how you feel. You must develop emotional regulation to ensure your lows don't destabilize the relationship and that your partner feels safe with your intensity.",
      ar: "تجلب شغفا واندفاعا رومانسيا وحضورا عاطفيا استثنائيا للعلاقات. لن يشك شريكك ابدا في كيفية شعورك. يجب ان تطور تنظيم المشاعر لضمان ان انخفاضاتك لا تزعزع استقرار العلاقة وان يشعر شريكك بالامان مع كثافتك.",
    },
    growthTips: {
      en: ["Develop emotional regulation practices — breathe before reacting", "Create space between feeling and expressing in high-stakes moments", "Channel emotional intensity into creative output", "Build a support network who can hold your full range of emotion"],
      ar: ["طور ممارسات تنظيم المشاعر — تنفس قبل التفاعل", "انشئ مساحة بين الشعور والتعبير في اللحظات عالية المخاطر", "وجه الكثافة العاطفية نحو الانتاج الابداعي", "بناء شبكة دعم يمكنها احتضان نطاق مشاعرك الكامل"],
    },
    compatiblePersonalities: {
      en: ["The Reliable Caregiver (C+A)", "The Visionary Architect (O+C)", "The Warm Connector (E+A)"],
      ar: ["المعتني الموثوق (C+A)", "المهندس الرؤيوي (O+C)", "الرابط الدافئ (E+A)"],
    },
  },
  "A+N": {
    slug: "gentle-empath",
    combinedKey: "A+N",
    color: "#9e3a6e",
    lightColor: "#fdeef6",
    icon: "🌺",
    title: { en: "The Gentle Empath", ar: "المتعاطف اللطيف" },
    tagline: { en: "Feels the world's heartbeat", ar: "يشعر بنبضة العالم" },
    summary: {
      en: "You absorb the emotions of those around you and respond with profound warmth. Naturally drawn to helping others heal.",
      ar: "تستوعب مشاعر من حولك وتستجيب بدفء عميق. تنجذب بشكل طبيعي لمساعدة الاخرين على الشفاء.",
    },
    deepDescription: {
      en: "The Gentle Empath is one of the most sensitive and caring personalities in existence. You do not just understand how others feel — you feel it with them, sometimes before they've even articulated it themselves. Your emotional antennae are extraordinarily finely tuned. You sense the unspoken, notice the overlooked, and respond to emotional need with instinctive gentleness. This is an extraordinary gift. The world heals partly through people like you — those who hold space, who listen without judgment, who love without conditions. Your challenge is learning to protect yourself while remaining open.",
      ar: "المتعاطف اللطيف هو احد اكثر الشخصيات حساسية ورعاية في الوجود. انت لا تفهم فقط كيف يشعر الاخرون — بل تشعر معهم احيانا قبل ان يصوغوا ذلك بانفسهم. هوائياتك العاطفية دقيقة بشكل استثنائي. تشعر بغير المنطوق وتلاحظ المغفول عنه وتستجيب للحاجة العاطفية بلطف غريزي.",
    },
    coreTraits: {
      en: ["Deep empathy", "Emotional sensitivity", "Gentleness", "Compassion", "Intuition", "Healing presence"],
      ar: ["التعاطف العميق", "الحساسية العاطفية", "اللطف", "الرحمة", "الحدس", "الحضور الشافي"],
    },
    strengths: {
      en: ["Extraordinary emotional attunement to others", "Natural healing presence and therapeutic quality", "Ability to make others feel deeply understood", "Deep compassion without judgment", "Sensitivity to beauty, pain, and the full human experience", "Creating safe spaces for emotional vulnerability"],
      ar: ["التوافق العاطفي الاستثنائي مع الاخرين", "الحضور الشافي الطبيعي والجودة العلاجية", "القدرة على جعل الاخرين يشعرون بالفهم العميق", "التعاطف العميق بدون حكم", "الحساسية للجمال والالم والتجربة الانسانية الكاملة", "خلق مساحات امنة للضعف العاطفي"],
    },
    challenges: {
      en: ["Absorbing others' pain to a damaging degree", "Extreme difficulty with boundaries and saying no", "Vulnerability to emotional manipulation", "Risk of compassion fatigue and burnout", "May sacrifice own wellbeing for others"],
      ar: ["استيعاب الم الاخرين بدرجة ضارة", "صعوبة بالغة في الحدود وقول لا", "الضعف امام التلاعب العاطفي", "خطر التعب من التعاطف والاحتراق", "قد يضحي بسعادته الخاصة من اجل الاخرين"],
    },
    jobs: {
      en: ["Therapist", "Counselor", "Hospice Worker", "Art Therapist", "Spiritual Director", "Social Worker", "Poet", "Nurse", "Grief Counselor", "Child Psychologist"],
      ar: ["معالج نفسي", "مستشار", "عامل رعاية نهائية", "معالج بالفن", "مدير روحي", "اخصائي اجتماعي", "شاعر", "ممرض", "مستشار حزن", "طبيب نفسي للاطفال"],
    },
    famousExamples: {
      en: ["Princess Diana — absorbed others' pain and gave warmth unconditionally", "Rumi — poetry that emerged from deep empathy and longing", "Thich Nhat Hanh — gentle presence that transforms suffering", "Brene Brown — researched and embodies compassionate vulnerability"],
      ar: ["الاميرة ديانا — استوعبت الم الاخرين وأعطت الدفء بشكل غير مشروط", "رومي — شعر نابع من التعاطف العميق والشوق", "ثيك نهات هان — حضور لطيف يحول المعاناة", "برين براون — بحثت وتجسد الضعف الرحيم"],
    },
    inRelationships: {
      en: "You are an extraordinarily loving and attentive partner. Your partner will always feel heard, understood, and cared for. Your greatest challenge is maintaining your own emotional health within the relationship and not losing yourself in caring for your partner.",
      ar: "انت شريك محب ومنتبه بشكل استثنائي. سيشعر شريكك دائما بالاستماع والفهم والرعاية. اعظم تحدٍ لديك هو الحفاظ على صحتك العاطفية الخاصة داخل العلاقة وعدم فقدان نفسك في رعاية شريكك.",
    },
    growthTips: {
      en: ["Learn to distinguish between your emotions and others' emotions", "Build a regular practice of emotional self-care and replenishment", "Practice saying no as an act of self-love", "Work with a therapist to develop healthy emotional boundaries"],
      ar: ["تعلم التمييز بين مشاعرك ومشاعر الاخرين", "بناء ممارسة منتظمة للعناية الذاتية العاطفية وتجديد الطاقة", "تدرب على قول لا كفعل لحب الذات", "اعمل مع معالج لتطوير حدود عاطفية صحية"],
    },
    compatiblePersonalities: {
      en: ["The Driven Networker (C+E)", "The Visionary Architect (O+C)", "The Perfectionist (C+N)"],
      ar: ["الشبكي الطموح (C+E)", "المهندس الرؤيوي (O+C)", "المثالي (C+N)"],
    },
  },
};
