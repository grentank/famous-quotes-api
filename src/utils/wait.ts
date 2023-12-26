export default function wait<T>(arg: T, ms: number): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(arg), ms));
}
