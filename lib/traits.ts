export type Trait = "O" | "C" | "E" | "A" | "N";

export const traitInfo: Record<Trait, {
  name: { en: string; ar: string };
  color: string;
  description: { en: string; ar: string };
  skills: { en: string[]; ar: string[] };
  jobs: { en: string[]; ar: string[] };
  friendTraits: { en: string; ar: string };
  partnerTrait: { en: string; ar: string };
}> = {
  O: {
    name: { en: "Openness", ar: "الانفتاح" },
    color: "#1a8fb5",
    description: {
      en: "Reflects creativity, curiosity, and openness to new experiences.",
      ar: "يعكس الابداع والفضول والانفتاح على تجارب جديدة.",
    },
    skills: {
      en: ["Creative thinking", "Problem solving", "Artistic expression", "Innovation", "Adaptability"],
      ar: ["التفكير الابداعي", "حل المشكلات", "التعبير الفني", "الابتكار", "القدرة على التكيف"],
    },
    jobs: {
      en: ["Artist", "Designer", "Writer", "Scientist", "Architect", "Philosopher"],
      ar: ["فنان", "مصمم", "كاتب", "عالم", "مهندس معماري", "فيلسوف"],
    },
    friendTraits: { en: "Extraversion & Agreeableness", ar: "الانبساطية والتوافق" },
    partnerTrait: { en: "Conscientiousness", ar: "الضمير" },
  },
  C: {
    name: { en: "Conscientiousness", ar: "الضمير" },
    color: "#1a6bbf",
    description: {
      en: "Reflects organization, discipline, and goal-directed behaviour.",
      ar: "يعكس التنظيم والانضباط والسلوك الموجه نحو الاهداف.",
    },
    skills: {
      en: ["Time management", "Planning", "Attention to detail", "Reliability", "Self-discipline"],
      ar: ["ادارة الوقت", "التخطيط", "الاهتمام بالتفاصيل", "الموثوقية", "ضبط النفس"],
    },
    jobs: {
      en: ["Manager", "Accountant", "Engineer", "Doctor", "Lawyer", "Project Manager"],
      ar: ["مدير", "محاسب", "مهندس", "طبيب", "محامي", "مدير مشروع"],
    },
    friendTraits: { en: "Agreeableness & Conscientiousness", ar: "التوافق والضمير" },
    partnerTrait: { en: "Openness", ar: "الانفتاح" },
  },
  E: {
    name: { en: "Extraversion", ar: "الانبساطية" },
    color: "#0e9b8a",
    description: {
      en: "Reflects sociability, energy, and positive emotions.",
      ar: "يعكس الاجتماعية والطاقة والمشاعر الايجابية.",
    },
    skills: {
      en: ["Communication", "Leadership", "Networking", "Public speaking", "Team building"],
      ar: ["التواصل", "القيادة", "بناء الشبكات", "التحدث العام", "بناء الفريق"],
    },
    jobs: {
      en: ["Sales", "Teacher", "Politician", "PR Specialist", "Event Planner", "Coach"],
      ar: ["مبيعات", "معلم", "سياسي", "متخصص علاقات عامة", "منظم فعاليات", "مدرب"],
    },
    friendTraits: { en: "Openness & Agreeableness", ar: "الانفتاح والتوافق" },
    partnerTrait: { en: "Agreeableness", ar: "التوافق" },
  },
  A: {
    name: { en: "Agreeableness", ar: "التوافق" },
    color: "#0e8a7a",
    description: {
      en: "Reflects kindness, empathy, and cooperative behaviour.",
      ar: "يعكس اللطف والتعاطف والسلوك التعاوني.",
    },
    skills: {
      en: ["Empathy", "Conflict resolution", "Active listening", "Teamwork", "Emotional support"],
      ar: ["التعاطف", "حل النزاعات", "الاستماع الفعال", "العمل الجماعي", "الدعم العاطفي"],
    },
    jobs: {
      en: ["Counselor", "Nurse", "Social Worker", "Teacher", "HR Specialist", "Therapist"],
      ar: ["مستشار", "ممرض", "اخصائي اجتماعي", "معلم", "اخصائي موارد بشرية", "معالج نفسي"],
    },
    friendTraits: { en: "Extraversion & Openness", ar: "الانبساطية والانفتاح" },
    partnerTrait: { en: "Extraversion", ar: "الانبساطية" },
  },
  N: {
    name: { en: "Neuroticism", ar: "العصابية" },
    color: "#2e6da4",
    description: {
      en: "Reflects emotional sensitivity, depth, and inner awareness.",
      ar: "يعكس الحساسية العاطفية والعمق والوعي الداخلي.",
    },
    skills: {
      en: ["Deep empathy", "Self-awareness", "Artistic sensitivity", "Intuition", "Reflection"],
      ar: ["التعاطف العميق", "الوعي الذاتي", "الحساسية الفنية", "الحدس", "التامل"],
    },
    jobs: {
      en: ["Writer", "Therapist", "Artist", "Researcher", "Poet", "Musician"],
      ar: ["كاتب", "معالج نفسي", "فنان", "باحث", "شاعر", "موسيقي"],
    },
    friendTraits: { en: "Agreeableness & Openness", ar: "التوافق والانفتاح" },
    partnerTrait: { en: "Conscientiousness", ar: "الضمير" },
  },
};

export const combinedTraits: Record<string, {
  title: { en: string; ar: string };
  summary: { en: string; ar: string };
}> = {
  "O+C": {
    title: { en: "The Visionary Architect", ar: "المهندس الرؤيوي" },
    summary: {
      en: "You combine powerful creativity with exceptional discipline. You don't just dream big — you build those dreams into reality with careful planning and focused execution.",
      ar: "تجمع بين الابداع القوي والانضباط الاستثنائي. انت لا تحلم فحسب بل تحول تلك الاحلام الى واقع بتخطيط دقيق وتنفيذ مركز.",
    },
  },
  "O+E": {
    title: { en: "The Creative Leader", ar: "القائد المبدع" },
    summary: {
      en: "You are an inspiring force — bursting with original ideas and the social energy to rally others around them. You naturally become the heart of any creative movement.",
      ar: "انت قوة ملهمة تفيض بالافكار الاصيلة والطاقة الاجتماعية لحشد الاخرين حولها. تصبح بشكل طبيعي قلب اي حركة ابداعية.",
    },
  },
  "O+A": {
    title: { en: "The Empathetic Dreamer", ar: "الحالم المتعاطف" },
    summary: {
      en: "You see the world through both an imaginative and a compassionate lens. You use your creativity to understand and uplift others, often becoming a healer through art or ideas.",
      ar: "ترى العالم من خلال عدسة خيالية ومتعاطفة معا. تستخدم ابداعك لفهم الاخرين ورفعهم وغالبا ما تصبح معالجا من خلال الفن او الافكار.",
    },
  },
  "O+N": {
    title: { en: "The Introspective Artist", ar: "الفنان المتامل" },
    summary: {
      en: "You feel and create deeply. Your emotional sensitivity fuels extraordinary artistic and intellectual expression. You turn inner turmoil into beautiful and meaningful work.",
      ar: "تشعر وتبدع بعمق. تغذي حساسيتك العاطفية تعبيرا فنيا وفكريا استثنائيا. تحول الاضطراب الداخلي الى عمل جميل وذي معنى.",
    },
  },
  "C+E": {
    title: { en: "The Driven Networker", ar: "الشبكي الطموح" },
    summary: {
      en: "You combine ambition with charisma. You set high goals and have the social intelligence to bring others on board. You thrive in leadership roles that require both results and relationships.",
      ar: "تجمع بين الطموح والكاريزما. تضع اهدافا عالية ولديك الذكاء الاجتماعي لاشراك الاخرين. تزدهر في ادوار القيادة التي تتطلب النتائج والعلاقات معا.",
    },
  },
  "C+A": {
    title: { en: "The Reliable Caregiver", ar: "المعتني الموثوق" },
    summary: {
      en: "You are someone people lean on completely. Organized, kind, and deeply trustworthy, you provide both practical help and emotional warmth to everyone in your life.",
      ar: "انت شخص يعتمد عليه الناس تماما. منظم ولطيف وجدير بالثقة بعمق تقدم المساعدة العملية والدفء العاطفي لكل من في حياتك.",
    },
  },
  "C+N": {
    title: { en: "The Perfectionist", ar: "المثالي" },
    summary: {
      en: "You hold yourself to the highest standards and feel deeply when things fall short. Your inner drive for excellence, though sometimes stressful, produces exceptional and detailed work.",
      ar: "تضع لنفسك اعلى المعايير وتشعر بعمق عندما تقل الامور عن ذلك. دوافعك الداخلية للتميز وان كانت مرهقة احيانا تنتج عملا استثنائيا ومفصلا.",
    },
  },
  "E+A": {
    title: { en: "The Warm Connector", ar: "الرابط الدافئ" },
    summary: {
      en: "You are the person who brings everyone together and makes them feel genuinely welcome. Socially gifted and deeply kind, you build communities wherever you go.",
      ar: "انت الشخص الذي يجمع الجميع ويجعلهم يشعرون بالترحيب الحقيقي. موهوب اجتماعيا ولطيف بعمق تبني مجتمعات اينما ذهبت.",
    },
  },
  "E+N": {
    title: { en: "The Passionate Performer", ar: "المؤدي المتحمس" },
    summary: {
      en: "You feel and express everything with full intensity. Your emotional highs fuel magnetic energy in social settings, though you also experience lows deeply. You live life fully.",
      ar: "تشعر وتعبر عن كل شيء بكثافة كاملة. تغذي ارتفاعاتك العاطفية طاقة مغناطيسية في البيئات الاجتماعية وان كنت تختبر الانخفاضات بعمق ايضا. تعيش الحياة بشكل كامل.",
    },
  },
  "A+N": {
    title: { en: "The Gentle Empath", ar: "المتعاطف اللطيف" },
    summary: {
      en: "You absorb the emotions of those around you and respond with profound warmth. You are naturally drawn to helping others heal, often at the cost of your own emotional energy.",
      ar: "تستوعب مشاعر من حولك وتستجيب بدفء عميق. تنجذب بشكل طبيعي لمساعدة الاخرين على الشفاء وغالبا على حساب طاقتك العاطفية الخاصة.",
    },
  },
};
