interface userData {
  id: number;
  name: string;
  email: string;
}

interface Box<T> {
  value: T;
}
const numBox: Box<number> = { value: 42 };
console.log(numBox.value);