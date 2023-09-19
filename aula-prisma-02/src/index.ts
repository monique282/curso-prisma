import prisma from "./database/database";
 
async function find() {
  const result = await prisma.posts.findMany();
  return result;
}

(async () => {
  const posts = await find();
  console.log("Posts encontrados no banco:", posts);
})();