import { useData } from '~/api/useData';
import AvgScore from '~/components/AvgScore';

export default function Home() {
  const data = useData();

  return (
    <main class="min-h-screen md:grid place-items-center">
      <article class="md:(grid-(~ cols-2) max-w-160 m-auto shadow-(xl gray-200) rounded-xl)">
        <section class="bg-gradient-to-rb from-c-purple to-c-blue text-(white center) rounded-b-2xl md:rounded-t-2xl p-12 space-y-4">
          <h1 class="opacity-70 text-xl">Your Result</h1>
          <AvgScore data={data()} />
          <h2 class="text-2xl font-bold">Great</h2>
          <p class="opacity-70">You scored higher than 65% of the people who have taken these tests</p>
        </section>
        <section class="p-8">
          <h1 class="font-semibold">Summary</h1>
          <ul class="space-y-4 my-4">
            <For each={data()}>
              {(line) => (
                <li class="flex gap-2 p-4 rounded-xl" style={{ 'background-color': `${line.color}10` }}>
                  <img src={line.icon} alt="icon" />
                  <p style={{ color: line.color }}>{line.category}</p>
                  <p class="ml-auto">
                    <b>{line.score}</b>
                    <span class="opacity-60">{' / 100'}</span>
                  </p>
                </li>
              )}
            </For>
          </ul>
          <button type="button" class="bg-c-steel text-white w-full rounded-full h-12 font-bold hocus:bg-gradient-to-rb from-c-purple to-c-blue">
            Continue
          </button>
        </section>
      </article>
    </main>
  );
}
