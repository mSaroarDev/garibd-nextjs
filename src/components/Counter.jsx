"use client";

import { useEffect, useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(6);

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  return (
    <>
      <div>Redirecting payments page: {counter}</div>
    </>
  );
}
