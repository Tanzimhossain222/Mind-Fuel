export const urlGenerate = (name: string, id: number | string) => {
  return name.toLowerCase().split(" ").join("-") + "-" + id;
};

