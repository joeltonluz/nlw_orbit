type SummaryResponse = {
  completed: number;
  total: number;
  goalsPerDay: Record<
    string,
    {
      id: string;
      title: string;
      completedAt: string;
    }[]
  >;
};

export async function getSummary(): Promise<SummaryResponse> {
  const response = await fetch("http://localhost:3333/summary");
  const data = await response.json();
  console.log(
    "🚀 ~ file: get-summary.ts:17 ~ getSummary ~ data:",
    data.summary.total
  );

  return data.summary;
}
