import prisma from "../src/database";

async function main() {
  return checarSeOUsuarioJaExiste()
}

async function checarSeOUsuarioJaExiste() {
  // a função upsert funciona assim ela cria ou atializa
  return await prisma.customer.upsert({
    // com isso eu tenho que passar dois parametros pra ela 
    // o que cria
    create: {
      firstName: "Geraldo Luiz ",
      lastName: "Datena",
      document: "133.245.497-60",
    },
    // ele vai procurar por essa informação
    update: {},
    where: {
      document: "133.245.497-60",
    }
  })
}


main().then(async () => {
  await prisma.$disconnect()
}).catch(async (e) => {
  console.error(e);
  await prisma.$disconnect()
  process.exit(1)
})