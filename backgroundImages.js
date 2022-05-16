export const backgrounds = {
    Thunderstorm: 'https://images.unsplash.com/photo-1500674425229-f692875b0ab7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    Rain: 'https://images.unsplash.com/photo-1428592953211-077101b2021b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
    Clouds: 'https://images.unsplash.com/photo-1473662107208-bd0a13f73559?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2122&q=80',
    Drizzle: 'https://images.unsplash.com/photo-1508873760731-9c3d0bb6b961?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    Snow: 'https://images.unsplash.com/photo-1542601098-8fc114e148e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    Clear: 'https://images.unsplash.com/photo-1469122312224-c5846569feb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2189&q=80',
    Dust: 'https://images.unsplash.com/photo-1603695820889-f8a0a86b8712?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
    Mist: 'https://images.unsplash.com/photo-1603794052293-650dbdeef72c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1412&q=80',
    Squall: 'https://images.unsplash.com/photo-1577472075537-2072bb6de039?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
    Haze: 'https://images.unsplash.com/36/STzPBJUsSza3mzUxiplj_DSC09775.JPG?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1461&q=80',
    Smoke: 'https://images.unsplash.com/photo-1569142916960-885f868d6123?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1519&q=80',
    Fog: 'https://images.unsplash.com/photo-1487621167305-5d248087c724?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
    Sand: 'https://images.unsplash.com/photo-1543604502-9baac28067ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    Ash: 'https://images.unsplash.com/photo-1556660418-fc293a5d848d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    Tornado: 'https://images.unsplash.com/photo-1527482937786-6608f6e14c15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
};

export function backgroundSelect(type) {
    const body = document.querySelector('body');
    // const container = document.querySelector('.container');
    const image = backgrounds[type];
     body.style.background = `url(${image})`;
    // if (window.innerWidth < 600) {
    //     body.style.background = `url(${image})`;
    //     container.style.background = `none`;
    //     container.style.backgroundSize = 'cover';
    // } else {
    //     body.style.background = `none`;
    //     container.style.background = `url(${image})`;
    //     container.style.backgroundSize = 'cover';
    // }
};
