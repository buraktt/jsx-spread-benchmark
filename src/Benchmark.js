export function SpreadBench() {
  const number =  5
  const numbers = [1, 2, 3, 4, 5]
  const text = 'Hello World'
  const obj = {a:1, b:2, c:3}
  return (
    <Block {...{ a: number, b: numbers, c: text, d: obj}} />
  );
}

export function PropsBench() {
  const number =  5
  const numbers = [1, 2, 3, 4, 5]
  const text = 'Hello World'
  const obj = {a:1, b:2, c:3}
  return (
    <Block a={number} b={numbers} c={text} d={obj} />
  );
}

function Block({a,b,c,d}) {
  return (
    <>
      <div>
        {a}
      </div>
      <div>
        {b.map((item, index) => <div key={index}>{item}</div>)}
      </div>
      <div>
        {c}
      </div>
      <div>
        {d.a}{d.b}{d.c}
      </div>
    </>
  );
}
