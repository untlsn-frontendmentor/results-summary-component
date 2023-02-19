import type { Data } from '~/api/useData';

type AvgScoreProps = {
  data?: Data[],
}

export default function AvgScore(props: AvgScoreProps) {
  const avg = () => {
    const dataSnap = props.data;
    if (!dataSnap?.length) return 0;
    return Math.floor(
      dataSnap.reduce((acc, { score }) => acc + score, 0) / dataSnap.length,
    );
  };

  return (
    <div
      class="bg-gradient-to-b from-c-navy to-c-blue rounded-full size-32 flex-(~ col) justify-center items-center mx-auto"
    >
      <p class="text-3rem font-bold">{avg()}</p>
      <p class="text-sm opacity-60">of 100</p>
    </div>
  );
}
