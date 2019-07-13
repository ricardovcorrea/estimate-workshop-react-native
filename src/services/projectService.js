export const getProjects = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const projects = [
                {
                    id: 1,
                    name: "Posto ALE",
                    image: 'https://www.blogdaale.com.br/wp-content/uploads/2018/03/DIVULGA%c3%87%c3%83O_1-700x525.png',
                    address: 'Estrada da cachamorra',
                    postalCode: '23042-040',
                    state: 'RJ',
                    city: 'Rio de Janeiro',
                    addressNumber: '76',
                    neighbourhood: 'Campo Grande',
                    latitude: '-22.924029257700283',
                    longitude: '-43.551118815154325',
                    rate: 1,
                    rateCount: 231,
                    prices: {
                        gasolinePrice: 'R$ 5,200',
                        alchoolPrice: 'R$ 5,300',
                        gnvPrice: 'R$ 5,400'
                    }
                },
                {
                    id: 2,
                    name: "Projeto Ipiranga",
                    image: 'http://www.leyard.com.br/wp-content/uploads/2018/07/Leyard_Ipiranga_Painel-LED.jpg',
                    address: 'Estrada do iaraquã',
                    postalCode: '23042-040',
                    state: 'RJ',
                    city: 'Rio de Janeiro',
                    addressNumber: '76',
                    neighbourhood: 'Campo Grande',
                    latitude: '-22.92772052618129',
                    longitude: '-43.55462729930878',
                    rate: 2,
                    rateCount: 12412,
                    prices: {
                        gasolinePrice: 'R$ 5,500',
                        alchoolPrice: 'R$ 5,600',
                        gnvPrice: 'R$ 5,700'
                    }
                },
                {
                    id: 3,
                    name: "Projeto Shell",
                    image: 'https://sxlighting.com.br/wp-content/uploads/2017/06/Posto-Shel-GRU_editador.jpg',
                    address: 'Estrada do shell',
                    postalCode: '23042-040',
                    state: 'RJ',
                    city: 'Rio de Janeiro',
                    addressNumber: '76',
                    neighbourhood: 'Campo Grande',
                    latitude: '-22.92752906379292',
                    longitude: '-43.55383680855721',
                    rate: 3,
                    rateCount: 50,
                    prices: {
                        gasolinePrice: 'R$ 5,800',
                        alchoolPrice: 'R$ 5,900',
                        gnvPrice: 'R$ 5,100'
                    }
                }
            ];
            resolve(projects);
        }, 1500)
    });
}