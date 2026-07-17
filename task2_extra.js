(function() {
    window.extraDatabase = window.extraDatabase || {};

    // Функция для динамической отрисовки недеформированного SVG вектора
    function renderVectorSVG(axes, vectors) {
        const [xMin, yMin, xMax, yMax] = axes;
        const w = 240, h = 240;
        const scaleX = w / (xMax - xMin);
        const scaleY = h / (yMax - yMin);
        const mapX = x => (x - xMin) * scaleX;
        const mapY = y => h - (y - yMin) * scaleY; // Инвертируем Y для правильного отображения

        let svg = `<svg width="${w}" height="${h}" viewBox="-10 -10 ${w+20} ${h+20}" overflow="visible" xmlns="http://www.w3.org/2000/svg">`;
        svg += `<defs><marker id="arr2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#121212"/></marker></defs>`;
        
        // Сетка
        svg += `<g stroke="rgba(0,0,0,0.15)" stroke-width="1.5">`;
        for(let x = Math.floor(xMin); x <= Math.ceil(xMax); x++) svg += `<line x1="${mapX(x)}" y1="0" x2="${mapX(x)}" y2="${h}"/>`;
        for(let y = Math.floor(yMin); y <= Math.ceil(yMax); y++) svg += `<line x1="0" y1="${mapY(y)}" x2="${w}" y2="${mapY(y)}"/>`;
        svg += `</g>`;
        
        // Оси
        if(0 >= xMin && 0 <= xMax) svg += `<line x1="${mapX(0)}" y1="${mapY(yMin)}" x2="${mapX(0)}" y2="${mapY(yMax)}" stroke="black" stroke-width="2.5" marker-end="url(#arr2)"/>`;
        if(0 >= yMin && 0 <= yMax) svg += `<line x1="${mapX(xMin)}" y1="${mapY(0)}" x2="${mapX(xMax)}" y2="${mapY(0)}" stroke="black" stroke-width="2.5" marker-end="url(#arr2)"/>`;

        // Векторы
        vectors.forEach(v => {
            svg += `<line x1="${mapX(v.x1)}" y1="${mapY(v.y1)}" x2="${mapX(v.x2)}" y2="${mapY(v.y2)}" stroke="#1f4e79" stroke-width="3" marker-end="url(#arr2)"/>`;
            if (v.label) {
                let lx = mapX((v.x1 + v.x2)/2) + (v.ox || 5);
                let ly = mapY((v.y1 + v.y2)/2) + (v.oy || -5);
                svg += `<text x="${lx}" y="${ly}" font-family="Times New Roman" font-size="18" font-style="italic" fill="black">${v.label}</text>`;
            }
        });
        svg += `</svg>`;
        return svg;
    }

    const task2Extra = {
        title: "Дополнительно",
        source: "Дополнительные прототипы (Векторы)",
        prototypes: [
            {
                desc: "Сумма трёх векторов по рисунку",
                svg_code: renderVectorSVG([-1.5, -1.5, 7.5, 8.5], [
                    {x1: 1, y1: 1, x2: 4, y2: 5, label: "a", ox:-15, oy:0},
                    {x1: 4, y1: 6, x2: 6, y2: 5, label: "b", ox:0, oy:-15},
                    {x1: 6, y1: -1, x2: 1, y2: 8, label: "c", ox:10, oy:0}
                ]),
                theory_task: "На координатной плоскости изображены векторы $\\vec a$, $\\vec b$ и $\\vec c$. Найдите длину вектора $\\vec a+\\vec b+\\vec c$.",
                theory_sol: "1) Определим координаты векторов по чертежу: конец минус начало.<br>$\\vec a=(4-1;5-1)=(3;4)$, $\\vec b=(6-4;5-6)=(2;-1)$, $\\vec c=(1-6;8-(-1))=(-5;9)$.<br>2) Сложим координаты: $\\vec a+\\vec b+\\vec c=(3+2-5;4-1+9)=(0;12)$.<br>3) Найдём длину: $\\sqrt{0^2+12^2}=12$.<br><br><b>Ответ:</b> 12",
                tasks: [
                    {
                        text: "На координатной плоскости изображены векторы $\\vec a$, $\\vec b$ и $\\vec c$. Найдите длину вектора $\\vec a+\\vec b+\\vec c$.",
                        answer: "12",
                        svg_code: renderVectorSVG([-1.5, -1.5, 7.5, 8.5], [{x1:1,y1:1,x2:4,y2:5,label:"a",ox:-15},{x1:4,y1:6,x2:6,y2:5,label:"b",oy:-15},{x1:6,y1:-1,x2:1,y2:8,label:"c",ox:10}])
                    },
                    {
                        text: "Найдите длину вектора $\\vec a+\\vec b+\\vec c$.",
                        answer: "8",
                        svg_code: renderVectorSVG([-1.5, -1.5, 7.5, 6.5], [{x1:1,y1:1,x2:2,y2:4,label:"a",ox:-15},{x1:2,y1:1,x2:6,y2:1,label:"b",oy:-15},{x1:4,y1:4,x2:7,y2:1,label:"c",ox:10}])
                    },
                    {
                        text: "Найдите длину вектора $\\vec a+\\vec b+\\vec c$.",
                        answer: "10",
                        svg_code: renderVectorSVG([-1.5, -1.5, 7.5, 7.5], [{x1:1,y1:1,x2:3,y2:4,label:"a",ox:-15},{x1:1,y1:5,x2:6,y2:6,label:"b",oy:-15},{x1:6,y1:1,x2:5,y2:5,label:"c",ox:10}])
                    }
                ]
            },
            {
                desc: "Длина линейной комбинации трёх векторов",
                svg_code: "",
                theory_task: "Даны векторы $\\vec a(0;3)$, $\\vec b(-2;4)$ и $\\vec c(4;-1)$. Найдите длину вектора $\\vec a+2\\vec b+\\vec c$.",
                theory_sol: "1) Найдём координаты вектора $2\\vec b$: $2\\vec b=(-4;8)$.<br>2) Сложим координаты: $\\vec a+2\\vec b+\\vec c=(0;3)+(-4;8)+(4;-1)=(0;10)$.<br>3) Длина полученного вектора: $\\sqrt{0^2+10^2}=10$.<br><br><b>Ответ:</b> 10",
                tasks: [
                    {text: "Даны векторы $\\vec a(0;3)$, $\\vec b(-2;4)$ и $\\vec c(4;-1)$. Найдите длину вектора $\\vec a+2\\vec b+\\vec c$.", answer: "10"},
                    {text: "Даны векторы $\\vec a(6;-1)$, $\\vec b(1;2)$ и $\\vec c(-3;5)$. Найдите длину вектора $\\vec a-2\\vec b+\\vec c$.", answer: "13"},
                    {text: "Даны векторы $\\vec a(2;5)$, $\\vec b(3;-1)$ и $\\vec c(-1;3)$. Найдите длину вектора $2\\vec a+\\vec b-\\vec c$.", answer: "10"}
                ]
            },
            {
                desc: "Косинус угла между векторами по рисунку",
                svg_code: renderVectorSVG([-1.5, -1.5, 7.5, 6.5], [
                    {x1: 1, y1: 1, x2: 4, y2: 5, label: "a", ox:-15},
                    {x1: 2, y1: 1, x2: 6, y2: 4, label: "b", ox:15, oy:15}
                ]),
                theory_task: "На координатной плоскости изображены векторы $\\vec a$ и $\\vec b$. Найдите косинус угла между ними.",
                theory_sol: "1) По рисунку: $\\vec a=(3;4)$, $\\vec b=(4;3)$.<br>2) $\\vec a\\cdot\\vec b=3\\cdot4+4\\cdot3=24$, $|\\vec a|=|\\vec b|=5$.<br>3) $\\cos\\alpha=\\frac{24}{5\\cdot5}=0{,}96$.<br><br><b>Ответ:</b> 0,96",
                tasks: [
                    {
                        text: "На координатной плоскости изображены векторы $\\vec a$ и $\\vec b$. Найдите косинус угла между ними.",
                        answer: "0,96",
                        svg_code: renderVectorSVG([-1.5, -1.5, 7.5, 6.5], [{x1: 1, y1: 1, x2: 4, y2: 5, label: "a"}, {x1: 2, y1: 1, x2: 6, y2: 4, label: "b"}])
                    },
                    {
                        text: "Найдите косинус угла между векторами $\\vec a$ и $\\vec b$.",
                        answer: "0,8",
                        svg_code: renderVectorSVG([-1.5, -1.5, 6.5, 6.5], [{x1: 1, y1: 1, x2: 1, y2: 6, label: "a"}, {x1: 2, y1: 1, x2: 5, y2: 5, label: "b"}])
                    }
                ]
            }
        ]
    };

    window.extraDatabase[2] = task2Extra;
    window.extraDatabase["task2"] = task2Extra;
})();
