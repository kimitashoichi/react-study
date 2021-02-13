import { useState } from "react";

export const useCounter = (initialCount: number) => {
  const [count, setCount] = useState<number>(initialCount);
  const decrement = () => setCount(count - 1);
  const increment = () => setCount(count + 1);

  return { count, decrement, increment};
}