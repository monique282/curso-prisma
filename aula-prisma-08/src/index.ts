import prisma from "./database";


(async () => {

  const studentsCountByClass = await prisma.student.groupBy({
    // o groupBy serve para agrupar os registros por coluna "class".
    by: ["class"],
    // serve para contar o numero de registro usando o id para isso
    _count: {
      id: true,
    },
    // serve para ordernar o resultado pelo contador em orden decrescente do maior para o menor
    orderBy: {
      _count: {
        id: 'desc',
      },
    },
  });

  console.log("alunos por turma",studentsCountByClass);
})();


(async () => {

  const studentsByClass = await prisma.student.groupBy({
    // o groupBy serve para agrupar os registros por coluna "class".
    by: ["class"],
    //by = por
    // esse agrupamantento se faz contando usando o id
  _count: {
    id: true,
  },
  // ele vai procurar os id que na coluna jobId esta como nulo
  where: {
    jobId: {
      equals: null,
      // equals = é igual a
    },
  },
  // ele vai ordernar a resposta pelo contador usando o id de forma decrescente
  orderBy: {
    _count: {
      id: 'desc',
    },
  },
});


console.log("alunos que trabalham",studentsByClass);

}) ();
