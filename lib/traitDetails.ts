export type Trait = "O" | "C" | "E" | "A" | "N";

export interface TraitDetail {
  slug: string;
  trait: Trait;
  color: string;
  lightColor: string;
  icon: string;
  name: { en: string; ar: string };
  tagline: { en: string; ar: string };
  description: { en: string; ar: string };
  deepDescription: { en: string; ar: string };
  strengths: { en: string[]; ar: string[] };
  weaknesses: { en: string[]; ar: string[] };
  skills: { en: string[]; ar: string[] };
  jobs: { en: string[]; ar: string[] };
  famousExamples: { en: string[]; ar: string[] };
  inRelationships: { en: string; ar: string };
  inWorkplace: { en: string; ar: string };
  growthTips: { en: string[]; ar: string[] };
  compatibleTraits: { en: string; ar: string };
  percentage: { en: string; ar: string };
}

export const traitDetails: Record<Trait, TraitDetail> = {
  O: {
    slug: "openness",
    trait: "O",
    color: "#7c5cbf",
    lightColor: "#f3eeff",
    icon: "🔮",
    name: { en: "Openness", ar: "الانفتاح" },
    tagline: { en: "The Curious Mind", ar: "العقل الفضولي" },
    description: {
      en: "Reflects creativity, curiosity, and openness to new experiences.",
      ar: "يعكس الابداع والفضول والانفتاح على تجارب جديدة.",
    },
    deepDescription: {
      en: "Openness to experience is one of the most fascinating dimensions of human personality. People high in this trait possess a rich inner life, a vivid imagination, and an insatiable curiosity about the world around them. They are drawn to art, music, literature, and abstract ideas. They love exploring new places, meeting different kinds of people, and questioning assumptions that others take for granted. High-openness individuals tend to think in metaphors, make unexpected connections between unrelated fields, and challenge conventional wisdom. They are often described as creative, unconventional, and intellectually adventurous. Those low in openness prefer familiarity, routine, and practical thinking. They value tradition, proven methods, and concrete facts over speculation and imagination. Neither extreme is superior — the world needs both the visionary who imagines what could be and the realist who builds what is.",
      ar: "الانفتاح على التجربة هو احد اكثر ابعاد الشخصية الانسانية روعة. يمتلك الاشخاص المرتفعون في هذه السمة حياة داخلية غنية وخيالا حيا وفضولا لا يشبع تجاه العالم من حولهم. ينجذبون الى الفن والموسيقى والادب والافكار المجردة. يحبون استكشاف اماكن جديدة ومقابلة اشخاص مختلفين والتشكيك في الافتراضات التي يسلم بها الاخرون. يميل الافراد المرتفعون في الانفتاح الى التفكير بالاستعارات وايجاد روابط غير متوقعة بين مجالات غير مترابطة وتحدي الحكمة التقليدية. غالبا ما يوصفون بالابداع وعدم التقليدية والمغامرة الفكرية. اما من ينخفضون في هذه السمة فيفضلون الالفة والروتين والتفكير العملي.",
    },
    strengths: {
      en: [
        "Exceptional creativity and original thinking",
        "Ability to see multiple perspectives on any issue",
        "Strong adaptability to new situations and environments",
        "Deep appreciation for art, beauty, and aesthetics",
        "Intellectual curiosity that drives lifelong learning",
        "Comfort with ambiguity and complex problems",
        "Rich imagination and visionary thinking",
        "Open to change and new ways of doing things",
      ],
      ar: [
        "الابداع الاستثنائي والتفكير الاصيل",
        "القدرة على رؤية وجهات نظر متعددة في اي قضية",
        "القدرة العالية على التكيف مع المواقف والبيئات الجديدة",
        "التقدير العميق للفن والجمال والجماليات",
        "الفضول الفكري الذي يدفع التعلم مدى الحياة",
        "الراحة مع الغموض والمشكلات المعقدة",
        "الخيال الغني والتفكير الرؤيوي",
        "الانفتاح على التغيير وطرق جديدة للقيام بالاشياء",
      ],
    },
    weaknesses: {
      en: [
        "Can be impractical or lose focus on concrete goals",
        "May overthink decisions due to seeing too many possibilities",
        "Can be seen as eccentric or unpredictable by others",
        "May struggle with routine tasks and structured environments",
        "Can become bored easily with repetitive work",
        "May take on too many interests at once",
      ],
      ar: [
        "قد يكون غير عملي او يفقد التركيز على الاهداف الملموسة",
        "قد يفكر مفرطا في القرارات بسبب رؤية امكانيات كثيرة جدا",
        "قد يُنظر اليه على انه غريب الاطوار او غير متوقع من قبل الاخرين",
        "قد يعاني مع المهام الروتينية والبيئات المنظمة",
        "قد يشعر بالملل بسهولة من العمل المتكرر",
        "قد يتخذ اهتمامات كثيرة جدا في وقت واحد",
      ],
    },
    skills: {
      en: ["Creative thinking", "Innovation", "Artistic expression", "Abstract reasoning", "Adaptability", "Pattern recognition", "Lateral thinking", "Storytelling"],
      ar: ["التفكير الابداعي", "الابتكار", "التعبير الفني", "التفكير المجرد", "التكيف", "التعرف على الانماط", "التفكير الجانبي", "سرد القصص"],
    },
    jobs: {
      en: ["Artist", "Designer", "Writer", "Scientist", "Architect", "Philosopher", "Filmmaker", "Musician", "Researcher", "Entrepreneur"],
      ar: ["فنان", "مصمم", "كاتب", "عالم", "مهندس معماري", "فيلسوف", "مخرج افلام", "موسيقي", "باحث", "رائد اعمال"],
    },
    famousExamples: {
      en: ["Leonardo da Vinci — painter, scientist, inventor", "Albert Einstein — physicist who thought in images", "Steve Jobs — visionary who merged art and technology", "Frida Kahlo — artist who expressed inner worlds", "Richard Feynman — physicist who loved curiosity above all"],
      ar: ["ليوناردو دافينشي — رسام وعالم ومخترع", "البرت اينشتاين — فيزيائي كان يفكر بالصور", "ستيف جوبز — رؤيوي جمع الفن والتكنولوجيا", "فريدا كاهلو — فنانة عبرت عن عوالم داخلية", "ريتشارد فاينمان — فيزيائي احب الفضول فوق كل شيء"],
    },
    inRelationships: {
      en: "In relationships, high-openness individuals are exciting, imaginative partners who keep things fresh and interesting. They enjoy deep philosophical conversations, exploring new experiences together, and supporting their partner's growth. However, they may sometimes seem emotionally distant or lost in their inner world. They pair well with partners who provide stability and groundedness.",
      ar: "في العلاقات يكون الافراد المرتفعون في الانفتاح شركاء مثيرين وخياليين يجعلون الامور جديدة ومثيرة للاهتمام. يستمتعون بالمحادثات الفلسفية العميقة واستكشاف تجارب جديدة معا ودعم نمو شريكهم. ومع ذلك قد يبدون احيانا بعيدين عاطفيا او ضائعين في عالمهم الداخلي. يتوافقون جيدا مع الشركاء الذين يوفرون الاستقرار والتوازن.",
    },
    inWorkplace: {
      en: "In the workplace, high-openness people thrive in creative roles that allow autonomy and exploration. They make excellent innovators, problem-solvers, and visionaries. They can struggle in highly structured or bureaucratic environments. They work best when given freedom to experiment and bring new ideas to the table.",
      ar: "في مكان العمل يزدهر الاشخاص المرتفعون في الانفتاح في الادوار الابداعية التي تسمح بالاستقلالية والاستكشاف. يصنعون مبتكرين وحلالي مشكلات ورؤيويين ممتازين. قد يعانون في البيئات شديدة الهيكلية او البيروقراطية. يعملون بشكل افضل عندما يُمنحون حرية التجريب وتقديم افكار جديدة.",
    },
    growthTips: {
      en: [
        "Practice finishing what you start before jumping to the next idea",
        "Balance creative exploration with practical planning",
        "Use your imagination to solve real-world problems, not just dream",
        "Learn to appreciate routine — it creates the stability creativity needs",
        "Channel your curiosity into deep expertise in one area",
      ],
      ar: [
        "تدرب على انهاء ما تبدأه قبل القفز الى الفكرة التالية",
        "وازن بين الاستكشاف الابداعي والتخطيط العملي",
        "استخدم خيالك لحل مشكلات العالم الحقيقي وليس فقط الحلم",
        "تعلم تقدير الروتين فهو يخلق الاستقرار الذي يحتاجه الابداع",
        "وجه فضولك نحو خبرة عميقة في مجال واحد",
      ],
    },
    compatibleTraits: { en: "Conscientiousness (provides structure), Extraversion (provides social energy)", ar: "الضمير (يوفر البنية), الانبساطية (توفر الطاقة الاجتماعية)" },
    percentage: { en: "About 15–20% of people score very high in Openness", ar: "حوالي 15-20% من الناس يسجلون درجات عالية جدا في الانفتاح" },
  },
  C: {
    slug: "conscientiousness",
    trait: "C",
    color: "#1a6bbf",
    lightColor: "#e8f2ff",
    icon: "🎯",
    name: { en: "Conscientiousness", ar: "الضمير" },
    tagline: { en: "The Dependable Achiever", ar: "المنجز الموثوق" },
    description: {
      en: "Reflects organization, discipline, and goal-directed behaviour.",
      ar: "يعكس التنظيم والانضباط والسلوك الموجه نحو الاهداف.",
    },
    deepDescription: {
      en: "Conscientiousness is the personality trait most strongly linked to success, both professionally and personally. People high in conscientiousness are organized, disciplined, reliable, and goal-oriented. They plan ahead, think before acting, and follow through on their commitments. They are the people you can always count on — deadlines are met, promises are kept, and quality is never compromised. High-conscientiousness individuals have a strong internal moral compass and take their responsibilities seriously. They are often highly motivated by achievement and take pride in doing things right. On the flip side, those very high in conscientiousness can become perfectionists, workaholics, or overly rigid. They may struggle to relax, delegate tasks, or tolerate others who operate differently. People low in conscientiousness tend to be spontaneous, flexible, and easygoing — they adapt well to change but may struggle with long-term planning and commitment.",
      ar: "الضمير هو سمة الشخصية الاكثر ارتباطا بالنجاح مهنيا وشخصيا. الاشخاص المرتفعون في الضمير منظمون ومنضبطون وموثوقون وموجهون نحو الاهداف. يخططون مسبقا ويفكرون قبل التصرف ويوفون بالتزاماتهم. هم الاشخاص الذين يمكنك الاعتماد عليهم دائما — المواعيد النهائية تُحترم والوعود تُوفى والجودة لا تُساوم ابدا. يمتلك الافراد المرتفعون في الضمير بوصلة اخلاقية داخلية قوية ويأخذون مسؤولياتهم بجدية. غالبا ما يكونون متحمسين للانجاز ويفخرون بالقيام بالاشياء بشكل صحيح.",
    },
    strengths: {
      en: [
        "Exceptional reliability and follow-through",
        "Strong organizational and planning skills",
        "High attention to detail and quality",
        "Powerful self-discipline and work ethic",
        "Clear goal-setting and achievement orientation",
        "Trustworthy and consistent in commitments",
        "Strong time management abilities",
        "Ability to delay gratification for long-term rewards",
      ],
      ar: [
        "موثوقية استثنائية والوفاء بالالتزامات",
        "مهارات تنظيمية وتخطيطية قوية",
        "اهتمام عالٍ بالتفاصيل والجودة",
        "انضباط ذاتي قوي واخلاقيات عمل",
        "تحديد اهداف واضح وتوجه نحو الانجاز",
        "جدير بالثقة ومتسق في الالتزامات",
        "قدرات قوية في ادارة الوقت",
        "القدرة على تاجيل المكافاة من اجل مكافات طويلة الامد",
      ],
    },
    weaknesses: {
      en: [
        "Can become a perfectionist to the point of paralysis",
        "May be inflexible or struggle with unexpected change",
        "Risk of workaholism and neglecting personal life",
        "Can be overly critical of others who are less organized",
        "May have difficulty delegating or trusting others",
        "Can be rigid in following rules even when flexibility would help",
      ],
      ar: [
        "قد يصبح مثاليا الى درجة الشلل",
        "قد يكون غير مرن او يعاني مع التغيير غير المتوقع",
        "خطر الادمان على العمل واهمال الحياة الشخصية",
        "قد يكون ناقدا بشدة للاخرين الاقل تنظيما",
        "قد يجد صعوبة في التفويض او الثقة بالاخرين",
        "قد يكون صارما في اتباع القواعد حتى عندما تكون المرونة افضل",
      ],
    },
    skills: {
      en: ["Time management", "Planning", "Attention to detail", "Self-discipline", "Reliability", "Organization", "Goal setting", "Project management"],
      ar: ["ادارة الوقت", "التخطيط", "الاهتمام بالتفاصيل", "الانضباط الذاتي", "الموثوقية", "التنظيم", "تحديد الاهداف", "ادارة المشاريع"],
    },
    jobs: {
      en: ["Manager", "Accountant", "Engineer", "Doctor", "Lawyer", "Project Manager", "Financial Analyst", "Surgeon", "Judge", "Architect"],
      ar: ["مدير", "محاسب", "مهندس", "طبيب", "محامي", "مدير مشروع", "محلل مالي", "جراح", "قاض", "مهندس معماري"],
    },
    famousExamples: {
      en: ["Warren Buffett — disciplined investor with unwavering principles", "Angela Merkel — methodical, detail-oriented leader", "Tim Cook — operationally meticulous Apple CEO", "Marie Curie — relentless scientific discipline", "Elon Musk — extreme work ethic and goal pursuit"],
      ar: ["وارن بافيت — مستثمر منضبط بمبادئ لا تتزعزع", "انجيلا ميركل — قائدة منهجية ومهتمة بالتفاصيل", "تيم كوك — الرئيس التنفيذي لابل الدقيق تشغيليا", "ماري كوري — انضباط علمي لا هوادة فيه", "ايلون ماسك — اخلاقيات عمل متطرفة وسعي نحو الاهداف"],
    },
    inRelationships: {
      en: "In relationships, conscientious individuals are loyal, dependable, and deeply committed partners. They take their relationship responsibilities seriously and rarely break promises. They show love through acts of service and reliability. However they may struggle with spontaneity and may sometimes be controlling or critical of a partner's less organized habits.",
      ar: "في العلاقات يكون الافراد المرتفعون في الضمير شركاء مخلصين وموثوقين وملتزمين بعمق. يأخذون مسؤوليات علاقتهم بجدية ونادرا ما يكسرون الوعود. يُظهرون الحب من خلال افعال الخدمة والموثوقية. ومع ذلك قد يعانون مع التلقائية وقد يكونون احيانا سيطرة او ناقدين لعادات الشريك الاقل تنظيما.",
    },
    inWorkplace: {
      en: "Conscientious people are the backbone of any organization. They are the ones who deliver projects on time, maintain high standards, and keep teams accountable. They excel in structured environments with clear expectations. They make excellent managers, but may need to develop patience and flexibility when working with less organized team members.",
      ar: "الاشخاص المرتفعون في الضمير هم العمود الفقري لاي منظمة. هم من يسلمون المشاريع في الوقت المحدد ويحافظون على معايير عالية ويحاسبون الفرق. يتفوقون في البيئات المنظمة ذات التوقعات الواضحة. يصنعون مديرين ممتازين لكنهم قد يحتاجون الى تطوير الصبر والمرونة عند العمل مع اعضاء فريق اقل تنظيما.",
    },
    growthTips: {
      en: [
        "Practice embracing imperfection — done is better than perfect",
        "Schedule unstructured time to rest and recharge",
        "Learn to trust and delegate to others",
        "Be compassionate with people who have different working styles",
        "Allow yourself to be spontaneous occasionally",
      ],
      ar: [
        "تدرب على قبول عدم الكمال — المنجز افضل من الكامل",
        "جدول وقتا غير منظم للراحة واعادة الشحن",
        "تعلم الثقة والتفويض للاخرين",
        "كن متعاطفا مع الناس الذين لديهم اساليب عمل مختلفة",
        "اسمح لنفسك بالتلقائية من حين لاخر",
      ],
    },
    compatibleTraits: { en: "Openness (brings creativity), Agreeableness (brings warmth)", ar: "الانفتاح (يجلب الابداع), التوافق (يجلب الدفء)" },
    percentage: { en: "About 30% of people score high in Conscientiousness", ar: "حوالي 30% من الناس يسجلون درجات عالية في الضمير" },
  },
  E: {
    slug: "extraversion",
    trait: "E",
    color: "#e07b54",
    lightColor: "#fff3ee",
    icon: "⚡",
    name: { en: "Extraversion", ar: "الانبساطية" },
    tagline: { en: "The Social Spark", ar: "الشرارة الاجتماعية" },
    description: {
      en: "Reflects sociability, energy, and positive emotions.",
      ar: "يعكس الاجتماعية والطاقة والمشاعر الايجابية.",
    },
    deepDescription: {
      en: "Extraversion is perhaps the most visible of the Big Five traits. It describes the degree to which a person draws energy from social interaction and external stimulation. Extraverts are talkative, assertive, enthusiastic, and action-oriented. They love being around people, taking charge of situations, and experiencing the full range of positive emotions. They tend to speak their minds freely and are comfortable being the center of attention. Highly extraverted people are energized by parties, group activities, and social events — they leave these situations feeling recharged rather than drained. Introverts, by contrast, find extended social interaction draining and require time alone to restore their energy. This does not mean introverts dislike people — they simply process the world differently. Ambiversion — falling in the middle — is actually the most common profile.",
      ar: "الانبساطية هي ربما اكثر سمات الشخصية الخمس الكبرى وضوحا. تصف الدرجة التي يستمد بها الشخص طاقته من التفاعل الاجتماعي والتحفيز الخارجي. المنبسطون يتحدثون بحرية وحازمون ومتحمسون وموجهون نحو الفعل. يحبون التواجد مع الناس وتولي المواقف وتجربة الطيف الكامل من المشاعر الايجابية. يميلون الى التعبير عن آرائهم بحرية ويشعرون بالارتياح في كونهم مركز الاهتمام.",
    },
    strengths: {
      en: [
        "Natural charisma and ability to connect with others",
        "High energy and enthusiasm that inspires those around them",
        "Strong leadership presence and assertiveness",
        "Excellent networking and relationship-building skills",
        "Ability to thrive in team environments",
        "Positive outlook and optimism",
        "Comfort with public speaking and visibility",
        "Quick decision-making and action orientation",
      ],
      ar: [
        "الكاريزما الطبيعية والقدرة على التواصل مع الاخرين",
        "الطاقة العالية والحماس الذي يلهم من حولهم",
        "حضور قيادي قوي وحزم",
        "مهارات تواصل وبناء علاقات ممتازة",
        "القدرة على الازدهار في بيئات الفريق",
        "نظرة ايجابية وتفاؤل",
        "الراحة في التحدث العام والظهور",
        "سرعة اتخاذ القرار والتوجه نحو الفعل",
      ],
    },
    weaknesses: {
      en: [
        "May dominate conversations without realizing it",
        "Can struggle with solitude and deep reflection",
        "May act impulsively without adequate thinking",
        "Risk of seeking stimulation constantly, leading to distraction",
        "Can be overwhelming for introverted people",
        "May avoid difficult emotions by staying busy socially",
      ],
      ar: [
        "قد يهيمن على المحادثات دون ان يدرك ذلك",
        "قد يعاني مع الوحدة والتامل العميق",
        "قد يتصرف باندفاع دون تفكير كافٍ",
        "خطر السعي المستمر للتحفيز مما يؤدي الى الصرف عن الهدف",
        "قد يكون ساحقا للاشخاص الانطوائيين",
        "قد يتجنب المشاعر الصعبة بالبقاء مشغولا اجتماعيا",
      ],
    },
    skills: {
      en: ["Communication", "Leadership", "Networking", "Public speaking", "Team building", "Persuasion", "Motivation", "Conflict resolution"],
      ar: ["التواصل", "القيادة", "بناء الشبكات", "التحدث العام", "بناء الفريق", "الاقناع", "التحفيز", "حل النزاعات"],
    },
    jobs: {
      en: ["Sales Manager", "Teacher", "Politician", "PR Specialist", "Event Planner", "Coach", "Actor", "Journalist", "HR Manager", "Entrepreneur"],
      ar: ["مدير مبيعات", "معلم", "سياسي", "متخصص علاقات عامة", "منظم فعاليات", "مدرب", "ممثل", "صحفي", "مدير موارد بشرية", "رائد اعمال"],
    },
    famousExamples: {
      en: ["Bill Clinton — natural connector with extraordinary social memory", "Oprah Winfrey — channels extraversion into empathy and presence", "Winston Churchill — energized audiences with his bold charisma", "Muhammad Ali — extraverted confidence that defined an era", "Robin Williams — social energy translated into limitless creativity"],
      ar: ["بيل كلينتون — موصل طبيعي بذاكرة اجتماعية استثنائية", "اوبرا وينفري — تحول الانبساطية الى تعاطف وحضور", "ونستون تشرشل — اشحن الجماهير بكاريزمته الجريئة", "محمد علي — ثقة انبساطية حددت حقبة", "روبن ويليامز — طاقة اجتماعية تحولت الى ابداع لا حدود له"],
    },
    inRelationships: {
      en: "In relationships, extraverts bring excitement, warmth, and social energy. They love going out together, meeting friends, and creating shared experiences. They are affectionate and verbal about their feelings. However, introverted partners may find their need for constant social activity exhausting. Extraverts must learn to honor their partner's need for quiet and alone time.",
      ar: "في العلاقات يجلب المنبسطون الاثارة والدفء والطاقة الاجتماعية. يحبون الخروج معا ومقابلة الاصدقاء وخلق تجارب مشتركة. هم عاطفيون ويعبرون لفظيا عن مشاعرهم. ومع ذلك قد يجد الشركاء الانطوائيون حاجتهم المستمرة للنشاط الاجتماعي مرهقة. يجب على المنبسطين تعلم احترام حاجة شريكهم للهدوء والوقت بمفردهم.",
    },
    inWorkplace: {
      en: "Extraverts shine in roles that involve communication, leadership, and people management. They are natural networkers who build relationships quickly. They thrive in open offices, team meetings, and customer-facing roles. They may struggle with deep independent work or highly isolated positions. They are often the ones who energize a team during difficult times.",
      ar: "يتألق المنبسطون في الادوار التي تتضمن التواصل والقيادة وادارة الناس. هم بناة شبكات طبيعيون يبنون العلاقات بسرعة. يزدهرون في المكاتب المفتوحة واجتماعات الفريق والادوار التي تواجه العملاء. قد يعانون مع العمل المستقل العميق او المناصب عالية العزلة. غالبا ما يكونون من يشحنون الفريق خلال الاوقات الصعبة.",
    },
    growthTips: {
      en: [
        "Practice active listening — give others space to speak",
        "Schedule regular alone time to recharge and self-reflect",
        "Think before speaking in important situations",
        "Appreciate the value of introversion and quiet depth",
        "Use your social energy to lift others, not just to be seen",
      ],
      ar: [
        "تدرب على الاستماع النشط — امنح الاخرين مساحة للتحدث",
        "جدول وقتا منتظما بمفردك للشحن والتامل الذاتي",
        "فكر قبل التحدث في المواقف المهمة",
        "قدر قيمة الانطوائية والعمق الهادئ",
        "استخدم طاقتك الاجتماعية لرفع الاخرين وليس فقط لتُرى",
      ],
    },
    compatibleTraits: { en: "Agreeableness (deepens connections), Openness (adds depth)", ar: "التوافق (يعمق الروابط), الانفتاح (يضيف العمق)" },
    percentage: { en: "About 50% of people lean towards extraversion", ar: "حوالي 50% من الناس يميلون نحو الانبساطية" },
  },
  A: {
    slug: "agreeableness",
    trait: "A",
    color: "#2a9d8f",
    lightColor: "#e6f7f5",
    icon: "🌿",
    name: { en: "Agreeableness", ar: "التوافق" },
    tagline: { en: "The Heart of Harmony", ar: "قلب الانسجام" },
    description: {
      en: "Reflects kindness, empathy, and cooperative behaviour.",
      ar: "يعكس اللطف والتعاطف والسلوك التعاوني.",
    },
    deepDescription: {
      en: "Agreeableness reflects the degree to which a person prioritizes harmony, cooperation, and concern for others. Highly agreeable people are warm, compassionate, and genuinely interested in the well-being of those around them. They are natural peacemakers who prefer collaboration over competition. They tend to be trusting, helpful, and willing to put others' needs before their own. In its highest form, agreeableness manifests as deep empathy, unconditional kindness, and the ability to make everyone feel valued and heard. However, very high agreeableness can lead to people-pleasing, difficulty saying no, and vulnerability to manipulation. People low in agreeableness are more skeptical, competitive, and prioritize self-interest. They are not necessarily unkind — they simply have a more independent, no-nonsense approach to interactions. Both profiles have their place: high agreeableness builds social bonds; low agreeableness drives tough decisions.",
      ar: "يعكس التوافق الدرجة التي يعطي بها الشخص الاولوية للانسجام والتعاون والاهتمام بالاخرين. الاشخاص المرتفعون في التوافق دافئون ومتعاطفون ومهتمون حقا بسعادة من حولهم. هم صانعو سلام طبيعيون يفضلون التعاون على المنافسة. يميلون الى الثقة والمساعدة والاستعداد لوضع احتياجات الاخرين قبل احتياجاتهم. في اعلى مستوياته يتجلى التوافق في التعاطف العميق واللطف غير المشروط والقدرة على جعل الجميع يشعر بالتقدير والاستماع.",
    },
    strengths: {
      en: [
        "Deep empathy and ability to understand others' feelings",
        "Natural peacemaking and conflict resolution skills",
        "Strong teamwork and cooperative spirit",
        "Genuine warmth and ability to make others feel valued",
        "Trustworthy and consistently supportive",
        "Patient and tolerant with different personalities",
        "Excellent listening skills and emotional intelligence",
        "Ability to build lasting, meaningful relationships",
      ],
      ar: [
        "التعاطف العميق والقدرة على فهم مشاعر الاخرين",
        "مهارات صنع السلام وحل النزاعات الطبيعية",
        "روح العمل الجماعي والتعاوني القوية",
        "الدفء الحقيقي والقدرة على جعل الاخرين يشعرون بالتقدير",
        "الجدارة بالثقة والدعم المتسق",
        "الصبر والتسامح مع الشخصيات المختلفة",
        "مهارات استماع ممتازة وذكاء عاطفي",
        "القدرة على بناء علاقات دائمة وذات معنى",
      ],
    },
    weaknesses: {
      en: [
        "Tendency to people-please at the cost of personal needs",
        "Difficulty saying no or setting boundaries",
        "Vulnerability to manipulation by less scrupulous people",
        "May avoid necessary conflict even when it would help",
        "Can suppress personal feelings to maintain harmony",
        "May struggle in competitive or adversarial environments",
      ],
      ar: [
        "الميل الى ارضاء الناس على حساب الاحتياجات الشخصية",
        "صعوبة قول لا او وضع حدود",
        "الضعف امام التلاعب من قبل اشخاص اقل ضميرا",
        "قد يتجنب الصراع الضروري حتى عندما يكون مفيدا",
        "قد يقمع المشاعر الشخصية للحفاظ على الانسجام",
        "قد يعاني في البيئات التنافسية او العدائية",
      ],
    },
    skills: {
      en: ["Empathy", "Conflict resolution", "Active listening", "Teamwork", "Emotional support", "Mediation", "Counseling", "Caregiving"],
      ar: ["التعاطف", "حل النزاعات", "الاستماع الفعال", "العمل الجماعي", "الدعم العاطفي", "الوساطة", "الارشاد", "الرعاية"],
    },
    jobs: {
      en: ["Counselor", "Nurse", "Social Worker", "Teacher", "HR Specialist", "Therapist", "Mediator", "Pediatrician", "Nonprofit Manager", "Community Organizer"],
      ar: ["مستشار", "ممرض", "اخصائي اجتماعي", "معلم", "اخصائي موارد بشرية", "معالج نفسي", "وسيط", "طبيب اطفال", "مدير منظمة غير ربحية", "منظم مجتمعي"],
    },
    famousExamples: {
      en: ["Mother Teresa — embodied compassion as a way of life", "Nelson Mandela — chose reconciliation over revenge", "Fred Rogers — built a career on radical kindness", "Malala Yousafzai — fought for others through gentle strength", "Princess Diana — connected with people through authentic warmth"],
      ar: ["الام تيريزا — جسدت التعاطف كاسلوب حياة", "نيلسون مانديلا — اختار المصالحة على الانتقام", "فريد روجرز — بنى مسيرته على اللطف الجذري", "ملالا يوسفزاي — ناضلت من اجل الاخرين من خلال القوة اللطيفة", "الاميرة ديانا — تواصلت مع الناس من خلال الدفء الاصيل"],
    },
    inRelationships: {
      en: "In relationships, agreeable people are devoted, nurturing, and emotionally available partners. They prioritize their partner's happiness and are excellent at showing love and care. They are skilled at resolving conflicts peacefully. However they must be careful not to lose themselves in the relationship or ignore their own needs. Learning to ask for what they need is a key growth area.",
      ar: "في العلاقات يكون الاشخاص المتوافقون شركاء متفانين وراعين ومتاحين عاطفيا. يعطون الاولوية لسعادة شريكهم ويتفوقون في اظهار الحب والرعاية. هم بارعون في حل النزاعات بسلام. ومع ذلك يجب ان يحرصوا على عدم فقدان انفسهم في العلاقة او تجاهل احتياجاتهم الخاصة.",
    },
    inWorkplace: {
      en: "Agreeable people are the glue that holds teams together. They create positive work environments, resolve interpersonal conflicts, and ensure everyone feels included. They excel in collaborative, service-oriented roles. They may struggle in highly competitive or cutthroat environments. They can sometimes be passed over for promotion if they are too reluctant to advocate for themselves.",
      ar: "الاشخاص المتوافقون هم الغراء الذي يربط الفرق ببعض. يخلقون بيئات عمل ايجابية ويحلون النزاعات الشخصية ويضمنون شعور الجميع بالانتماء. يتفوقون في الادوار التعاونية والموجهة نحو الخدمة. قد يعانون في البيئات التنافسية للغاية.",
    },
    growthTips: {
      en: [
        "Practice setting healthy boundaries — saying no is an act of self-respect",
        "Learn to identify and express your own needs clearly",
        "Recognize that not all conflict is bad — some is necessary for growth",
        "Build self-advocacy skills in professional settings",
        "Ensure you are giving to others from fullness, not depletion",
      ],
      ar: [
        "تدرب على وضع حدود صحية — قول لا هو فعل احترام الذات",
        "تعلم تحديد احتياجاتك الخاصة والتعبير عنها بوضوح",
        "اعترف بان ليس كل صراع سيئا — بعضها ضروري للنمو",
        "بناء مهارات المناصرة الذاتية في البيئات المهنية",
        "تاكد من انك تعطي للاخرين من الامتلاء لا من النضوب",
      ],
    },
    compatibleTraits: { en: "Extraversion (adds energy), Conscientiousness (adds structure)", ar: "الانبساطية (تضيف الطاقة), الضمير (يضيف البنية)" },
    percentage: { en: "Women tend to score higher in Agreeableness on average", ar: "تميل النساء الى تسجيل درجات اعلى في التوافق في المتوسط" },
  },
  N: {
    slug: "neuroticism",
    trait: "N",
    color: "#c0546e",
    lightColor: "#fdeef2",
    icon: "🌊",
    name: { en: "Neuroticism", ar: "العصابية" },
    tagline: { en: "The Deep Feeler", ar: "العميق الاحساس" },
    description: {
      en: "Reflects emotional sensitivity, depth, and inner awareness.",
      ar: "يعكس الحساسية العاطفية والعمق والوعي الداخلي.",
    },
    deepDescription: {
      en: "Neuroticism, often called emotional instability, is perhaps the most misunderstood of the Big Five traits. It refers to the tendency to experience negative emotions such as anxiety, sadness, irritability, and emotional volatility. People high in neuroticism feel things deeply and intensely. They are acutely aware of threats and problems, which makes them excellent at identifying risks before others do. While this can manifest as worry, self-consciousness, or mood swings, it also fuels extraordinary empathy, artistic depth, and a profound understanding of the human condition. Many of the world's greatest artists, writers, and thinkers have scored high in neuroticism. Low neuroticism — called emotional stability — describes people who are calm, resilient, and rarely rattled by life's challenges. They recover quickly from setbacks and tend to maintain a steady emotional baseline.",
      ar: "العصابية كثيرا ما تسمى عدم الاستقرار العاطفي وهي ربما اكثر سمات الخمسة الكبار سوء فهم. تشير الى الميل لتجربة المشاعر السلبية كالقلق والحزن والتهيج وتقلب المزاج. الاشخاص المرتفعون في العصابية يشعرون بالاشياء بعمق وبشدة. هم حادو الوعي بالتهديدات والمشكلات مما يجعلهم ممتازين في تحديد المخاطر قبل غيرهم. وفي حين يمكن ان يتجلى هذا كقلق او وعي بالذات او تقلبات مزاجية فانه يغذي ايضا تعاطفا استثنائيا وعمقا فنيا وفهما عميقا للحالة الانسانية.",
    },
    strengths: {
      en: [
        "Deep emotional sensitivity and empathy",
        "Heightened awareness of risks and potential problems",
        "Extraordinary artistic and creative depth",
        "Strong introspective and self-reflective abilities",
        "Ability to deeply understand and connect with others' pain",
        "Motivated by emotional depth to create meaningful work",
        "Highly attuned to subtle social and emotional cues",
        "Authentic and emotionally honest in relationships",
      ],
      ar: [
        "الحساسية العاطفية العميقة والتعاطف",
        "الوعي المتزايد بالمخاطر والمشكلات المحتملة",
        "العمق الفني والابداعي الاستثنائي",
        "قدرات التامل الذاتي والانعكاس الداخلي القوية",
        "القدرة على فهم الم الاخرين والتواصل معه بعمق",
        "الدافعية بالعمق العاطفي لخلق عمل ذي معنى",
        "التوافق العالي مع الاشارات الاجتماعية والعاطفية الدقيقة",
        "الصدق العاطفي الاصيل في العلاقات",
      ],
    },
    weaknesses: {
      en: [
        "Tendency toward anxiety, worry, and rumination",
        "Emotional reactions can be disproportionate to events",
        "Vulnerability to stress, burnout, and overwhelm",
        "May struggle with self-esteem and self-criticism",
        "Mood can affect performance and relationships",
        "May catastrophize or anticipate the worst outcomes",
      ],
      ar: [
        "الميل نحو القلق والهم والاجترار",
        "ردود الفعل العاطفية قد تكون غير متناسبة مع الاحداث",
        "الضعف امام الضغط والاحتراق والاثقال",
        "قد يعاني مع تقدير الذات والنقد الذاتي",
        "المزاج قد يؤثر على الاداء والعلاقات",
        "قد يكارث او يتوقع اسوا النتائج",
      ],
    },
    skills: {
      en: ["Deep empathy", "Self-awareness", "Artistic sensitivity", "Intuition", "Reflection", "Emotional intelligence", "Crisis recognition", "Nuanced communication"],
      ar: ["التعاطف العميق", "الوعي الذاتي", "الحساسية الفنية", "الحدس", "التامل", "الذكاء العاطفي", "التعرف على الازمات", "التواصل الدقيق"],
    },
    jobs: {
      en: ["Writer", "Therapist", "Artist", "Researcher", "Poet", "Musician", "Philosopher", "Crisis Counselor", "Actor", "Social Critic"],
      ar: ["كاتب", "معالج نفسي", "فنان", "باحث", "شاعر", "موسيقي", "فيلسوف", "مستشار ازمات", "ممثل", "ناقد اجتماعي"],
    },
    famousExamples: {
      en: ["Virginia Woolf — channeled deep sensitivity into literary genius", "Franz Kafka — anxiety became the engine of profound art", "Sylvia Plath — raw emotional intensity produced enduring poetry", "Charles Darwin — crippling anxiety drove meticulous scientific work", "Abraham Lincoln — depression and depth coexisted with great leadership"],
      ar: ["فرجينيا وولف — حولت الحساسية العميقة الى عبقرية ادبية", "فرانز كافكا — القلق اصبح محرك الفن العميق", "سيلفيا بلاث — الكثافة العاطفية الخام انتجت شعرا خالدا", "تشارلز داروين — القلق المشل دفع العمل العلمي الدقيق", "ابراهام لنكولن — الاكتئاب والعمق تعايشا مع القيادة العظيمة"],
    },
    inRelationships: {
      en: "In relationships, high-neuroticism individuals bring extraordinary emotional depth and authentic vulnerability. They love deeply and feel deeply. However, their emotional volatility can sometimes strain relationships. Partners may feel like they are walking on eggshells. Learning emotional regulation and communication skills transforms this trait into a relationship strength rather than a challenge.",
      ar: "في العلاقات يجلب الافراد المرتفعون في العصابية عمقا عاطفيا استثنائيا وضعفا اصيلا. يحبون بعمق ويشعرون بعمق. ومع ذلك يمكن ان يُجهد تقلبهم العاطفي العلاقات احيانا. قد يشعر الشركاء انهم يمشون على قشر البيض. تعلم تنظيم المشاعر ومهارات التواصل يحول هذه السمة الى قوة في العلاقة بدلا من تحدٍ.",
    },
    inWorkplace: {
      en: "In the workplace, high-neuroticism individuals often bring intense dedication, attention to quality, and deep care about outcomes. However they may struggle under high pressure or ambiguous situations. They benefit enormously from supportive management, clear expectations, and structured environments. Emotional regulation training and therapy can dramatically improve workplace functioning.",
      ar: "في مكان العمل كثيرا ما يجلب الافراد المرتفعون في العصابية تفانيا مكثفا واهتماما بالجودة واهتماما عميقا بالنتائج. ومع ذلك قد يعانون تحت ضغط عالٍ او مواقف غامضة. يستفيدون بشكل هائل من الادارة الداعمة والتوقعات الواضحة والبيئات المنظمة.",
    },
    growthTips: {
      en: [
        "Practice mindfulness and grounding techniques daily",
        "Work with a therapist to develop emotional regulation skills",
        "Reframe anxiety as information, not a threat",
        "Build a support network of trusted people",
        "Channel emotional intensity into creative or meaningful work",
      ],
      ar: [
        "تدرب على تقنيات اليقظة الذهنية والتاريخ الارضي يوميا",
        "اعمل مع معالج لتطوير مهارات تنظيم المشاعر",
        "اعد صياغة القلق كمعلومة وليس تهديدا",
        "بناء شبكة دعم من اشخاص موثوقين",
        "وجه الكثافة العاطفية نحو عمل ابداعي او ذي معنى",
      ],
    },
    compatibleTraits: { en: "Conscientiousness (provides stability), Agreeableness (provides acceptance)", ar: "الضمير (يوفر الاستقرار), التوافق (يوفر القبول)" },
    percentage: { en: "About 15% of people score very high in Neuroticism", ar: "حوالي 15% من الناس يسجلون درجات عالية جدا في العصابية" },
  },
};
