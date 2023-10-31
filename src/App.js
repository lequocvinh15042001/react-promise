import React from 'react';
import './style.css';

export default function App() {
  const [state, setState] = React.useState(null);

  React.useEffect(() => {
    async function fetchData() {
      try {
        console.time('time1');
        const promises = [];

        for (let i = 1; i <= 5; i++) {
          promises.push(Promise.all([promise1(i), promise2(i)]));
        }

        const result = await Promise.all(promises);
        console.timeEnd('time1');

        const data = result.map(([res1, res2]) => ({ ...res1, ...res2 }));
        setState(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>{state ? 'Done' : 'Loading...'}</h1>
    </div>
  );
}
