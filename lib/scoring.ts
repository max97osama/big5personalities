import { questions, Trait } from "./questions";
import { combinedTraits } from "./traits";

export interface TraitScore {
  trait: Trait;
  score: number;
  percent: number;
  level: "Low" | "Medium" | "High";
  levelAr: "منخفض" | "متوسط" | "مرتفع";
}

export interface PersonalityResult {
  scores: TraitScore[];
  dominantTrait: Trait;
  secondTrait: Trait;
  combinedKey: string;
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

  const sorted = [...scores].sort((a, b) => b.percent - a.percent);
  const dominant = sorted[0];
  const second = sorted[1];

  const traitOrder: Trait[] = ["O", "C", "E", "A", "N"];
  const t1 = traitOrder.indexOf(dominant.trait) < traitOrder.indexOf(second.trait)
    ? dominant.trait : second.trait;
  const t2 = traitOrder.indexOf(dominant.trait) < traitOrder.indexOf(second.trait)
    ? second.trait : dominant.trait;
  const combinedKey = `${t1}+${t2}`;

  const combined = combinedTraits[combinedKey] ?? {
    title: { en: "The Unique Mind", ar: "العقل الفريد" },
    summary: {
      en: "You have a truly unique combination of personality traits that makes you one of a kind.",
      ar: "لديك مزيج فريد من سمات الشخصية يجعلك شخصا فريدا من نوعه.",
    },
  };

  return {
    scores,
    dominantTrait: dominant.trait,
    secondTrait: second.trait,
    combinedKey,
    personalityTitle: combined.title,
    summary: combined.summary,
  };
}
