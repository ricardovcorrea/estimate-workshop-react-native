export const getProjects = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const projects = [
                {
                    id: 1,
                    name: "Projeto 01",
                    description: "Descrição projeto 1"
                },
                {
                    id: 2,
                    name: "Projeto 02",
                    description: "Descrição projeto 2"
                },
                {
                    id: 3,
                    name: "Projeto 03",
                    description: "Descrição projeto 3"
                },
                {
                    id: 4,
                    name: "Projeto 04",
                    description: "Descrição projeto 4"
                },
                {
                    id: 5,
                    name: "Projeto 05",
                    description: "Descrição projeto 5"
                },
                {
                    id: 6,
                    name: "Projeto 06",
                    description: "Descrição projeto 6"
                },
                {
                    id: 7,
                    name: "Projeto 07",
                    description: "Descrição projeto 7"
                }
            ];
            resolve(projects);
        }, 1500)
    });
}