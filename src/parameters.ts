export {};

const DebugProfile = (name: string, age: number) => {
  console.log({ name, age });
};

DebugProfile('Ham', 43);

type Profile = Parameters<typeof DebugProfile>;

const profile: Profile = ['Gloria', 76];

DebugProfile(...profile);

type MyParameters<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;