import { useCallback, useRef } from 'react';
import Benchmark, { BenchmarkType } from 'react-component-benchmark';
import {SpreadBench, PropsBench } from './Benchmark';

function App() {
  const spreadRef = useRef();
  const propsRef = useRef();

  const handleComplete = useCallback((results) => {
    console.log(results);
  }, []);

  const handleSpreadStart = () => {
    spreadRef.current.start();
  };
  const handlePropsStart = () => {
    spreadRef.current.start();
  };

  return (
    <div>
      <button onClick={handleSpreadStart}>Run spread benchmark</button>
      <button onClick={handlePropsStart}>Run props benchmark</button>
      <Benchmark
        component={SpreadBench}
        onComplete={handleComplete}
        ref={spreadRef}
        samples={5000}
        timeout={100000}
        type={BenchmarkType.MOUNT}
      />
      <Benchmark
        component={PropsBench}
        onComplete={handleComplete}
        ref={propsRef}
        samples={5000}
        timeout={100000}
        type={BenchmarkType.MOUNT}
      />
    </div>
  );}

export default App;
