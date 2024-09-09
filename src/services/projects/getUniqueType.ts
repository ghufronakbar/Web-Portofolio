import Projects from "@/data/Projects";

const allTypes = Projects.flatMap((item) => item.types);
const uniqueTypes = Array.from(new Set(allTypes));

export { uniqueTypes };
