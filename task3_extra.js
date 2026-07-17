(function() {
    window.extraDatabase = window.extraDatabase || {};

    const svgGeom = {
        cube: `<svg width="150" height="150" viewBox="-0.5 -0.5 4 4" overflow="visible" style="transform: scale(1, -1); stroke: #121212; stroke-width: 0.08; fill: none;"><path d="M0,0 L2.4,0 L2.4,2.4 L0,2.4 Z"/><path d="M0.7,0.55 L3.1,0.55 L3.1,2.95 L0.7,2.95 Z"/><path d="M0,0 L0.7,0.55 M2.4,0 L3.1,0.55 M2.4,2.4 L3.1,2.95 M0,2.4 L0.7,2.95"/><line x1="0.7" y1="0.55" x2="0.7" y2="2.95" stroke-dasharray="0.1,0.1"/><line x1="0.7" y1="0.55" x2="3.1" y2="0.55" stroke-dasharray="0.1,0.1"/></svg>`,
        liquidCyl: `<svg width="120" height="150" viewBox="-1.8 -0.5 3.6 3.5" overflow="visible" style="transform: scale(1, -1); stroke: #121212; stroke-width: 0.08; fill: none;"><ellipse cx="0" cy="0" rx="1.35" ry="0.35" stroke-dasharray="0.1,0.1"/><path d="M-1.35,0 A1.35,0.35 0 0,0 1.35,0"/><line x1="-1.35" y1="0" x2="-1.35" y2="2.8"/><line x1="1.35" y1="0" x2="1.35" y2="2.8"/><rect x="-1.35" y="0" width="2.7" height="1.45" fill="rgba(120,120,120,0.15)" stroke="none"/><ellipse cx="0" cy="1.45" rx="1.35" ry="0.35"/><ellipse cx="0" cy="2.8" rx="1.35" ry="0.35"/></svg>`,
        rhombusPrism: `<svg width="150" height="150" viewBox="-0.5 -0.5 4 4" overflow="visible" style="transform: scale(1, -1); stroke: #121212; stroke-width: 0.08; fill: none;"><path d="M0,0 L2.35,0 L3.3,0.82 L0.95,0.82 Z"/><path d="M0,2.25 L2.35,2.25 L3.3,3.07 L0.95,3.07 Z"/><path d="M0,0 L0,2.25 M2.35,0 L2.35,2.25 M3.3,0.82 L3.3,3.07"/><line x1="0.95" y1="0.82" x2="0.95" y2="3.07" stroke-dasharray="0.1,0.1"/><line x1="0" y1="0" x2="3.3" y2="0.82" stroke-dasharray="0.1,0.1"/><line x1="2.35" y1="0" x2="0.95" y2="0.82" stroke-dasharray="0.1,0.1"/></svg>`,
        tetra: `<svg width="140" height="140" viewBox="-0.5 -0.5 3.5 3.5" overflow="visible" style="transform: scale(1, -1); stroke: #121212; stroke-width: 0.08; fill: none;"><path d="M0,0 L2.7,0.2 L1.0,1.1 Z"/><path d="M1.5,3.0 L0,0 M1.5,3.0 L2.7,0.2"/><line x1="1.5" y1="3.0" x2="1.0" y2="1.1" stroke-dasharray="0.1,0.1"/></svg>`,
        imgMap: (name) => `<img src="${name}" style="max-width: 100%; height: auto; border-radius: 4px;">`
    };

    const task3Extra = {
        title: "Дополнительно",
        source: "Дополнительные прототипы (Стереометрия)",
        prototypes: [
            {
                desc: "Площадь поверхности составного многогранника",
                svg_code: svgGeom.imgMap("z1.jpg"),
                theory_task: "Найдите площадь поверхности многогранника, изображённого на рисунке. Все двугранные углы многогранника прямые.",
                theory_sol: "Рассмотрим многогранник как прямую призму толщиной $1$ с $\\Gamma$-образным основанием.<br>Площадь основания равна сумме площадей двух прямоугольников: $S_{\\mathrm{osn}}=1\\cdot3+1\\cdot1=4$.<br>Периметр основания: $P=2+1+1+2+1+3=10$.<br>Тогда площадь поверхности призмы равна $S=2S_{\\mathrm{osn}}+P\\cdot h=2\\cdot4+10\\cdot1=18$.<br><br><b>Ответ:</b> 18",
                tasks: [
                    {text: "Найдите площадь поверхности многогранника, изображённого на рисунке. Все двугранные углы прямые.", answer: "118", svg_code: svgGeom.imgMap("z2.jpg")},
                    {text: "Найдите площадь поверхности многогранника. Все двугранные углы прямые.", answer: "74", svg_code: svgGeom.imgMap("z3.jpg")},
                    {text: "Найдите площадь поверхности многогранника. Все двугранные углы прямые.", answer: "104", svg_code: svgGeom.imgMap("z4.jpg")}
                ]
            },
            {
                desc: "Объём составного многогранника",
                svg_code: svgGeom.imgMap("f1.jpg"),
                theory_task: "Найдите объём многогранника, изображённого на рисунке. Все двугранные углы многогранника прямые.",
                theory_sol: "Разобьём многогранник на два прямоугольных параллелепипеда.<br>Нижняя часть имеет размеры $2\\times4\\times3$, так как полная высота равна $4$, а верхняя часть имеет высоту $1$. Её объём: $V_1=2\\cdot4\\cdot3=24$.<br>Верхняя часть имеет размеры $2\\times2\\times1$, её объём: $V_2=2\\cdot2\\cdot1=4$.<br>Тогда объём всего многогранника: $V=V_1+V_2=24+4=28$.<br><br><b>Ответ:</b> 28",
                tasks: [
                    {text: "Найдите объём многогранника, изображённого на рисунке. Все двугранные углы прямые.", answer: "64", svg_code: svgGeom.imgMap("f2.jpg")},
                    {text: "Найдите объём многогранника. Все двугранные углы прямые.", answer: "74", svg_code: svgGeom.imgMap("f3.jpg")},
                    {text: "Найдите объём многогранника. Все двугранные углы прямые.", answer: "40", svg_code: svgGeom.imgMap("f4.jpg")}
                ]
            },
            {
                desc: "Диагональ куба и объём",
                svg_code: svgGeom.cube,
                theory_task: "Диагональ куба равна $6\\sqrt3$. Найдите объём куба.",
                theory_sol: "Если ребро куба равно $a$, то диагональ куба равна $d=a\\sqrt3$.<br>По условию $a\\sqrt3=6\\sqrt3$, значит $a=6$.<br>$V=a^3=6^3=216$.<br><br><b>Ответ:</b> 216",
                tasks: [
                    {text: "Диагональ куба равна $2\\sqrt3$. Найдите объём куба.", answer: "8", svg_code: svgGeom.cube},
                    {text: "Диагональ куба равна $3\\sqrt3$. Найдите объём куба.", answer: "27", svg_code: svgGeom.cube},
                    {text: "Диагональ куба равна $4\\sqrt3$. Найдите объём куба.", answer: "64", svg_code: svgGeom.cube}
                ]
            },
            {
                desc: "Цилиндр в правильной четырёхугольной призме",
                svg_code: svgGeom.imgMap("про.png"),
                theory_task: "Цилиндр вписан в правильную четырёхугольную призму. Радиус основания цилиндра равен $1$, высота равна $5$. Найдите площадь боковой поверхности призмы.",
                theory_sol: "В основании призмы квадрат. Окружность радиуса $r$ вписана в квадрат, значит сторона квадрата равна $2r$.<br>При $r=1$ сторона основания равна $2$, периметр основания $P=4\\cdot2=8$.<br>$S_{\\mathrm{b}}=P\\cdot h=8\\cdot5=40$.<br><br><b>Ответ:</b> 40",
                tasks: [
                    {text: "Цилиндр вписан в правильную четырёхугольную призму. Радиус основания цилиндра равен $1$, высота равна $3$. Найдите площадь боковой поверхности призмы.", answer: "24", svg_code: svgGeom.imgMap("про.png")},
                    {text: "Радиус основания цилиндра равен $2$, высота равна $4$. Найдите площадь боковой поверхности призмы.", answer: "64", svg_code: svgGeom.imgMap("про.png")},
                    {text: "Радиус основания цилиндра равен $1{,}5$, высота равна $6$. Найдите площадь боковой поверхности призмы.", answer: "72", svg_code: svgGeom.imgMap("про.png")}
                ]
            },
            {
                desc: "Угол между диагоналями правильной четырёхугольной призмы",
                svg_code: svgGeom.imgMap("prism_diag.png"),
                theory_task: "В правильной четырёхугольной призме $ABCD A_1B_1C_1D_1$ известно, что $AC_1=2BC$. Найдите угол между диагоналями $BD_1$ и $A_1C$. Ответ дайте в градусах.",
                theory_sol: "Рассмотрим прямоугольный треугольник $A_1BC$: в нём катет $BC$ вдвое меньше гипотенузы $A_1C$, поэтому угол $A_1CB$ равен $60^\\circ$. Аналогично в треугольнике $D_1CB$ угол $D_1BC$ равен $60^\\circ$.<br>Сумма углов треугольника $BGC$ равна $180^\\circ$, третий угол тоже равен $60^\\circ$.<br><br><b>Ответ:</b> 60",
                tasks: [
                    {text: "В правильной четырёхугольной призме $ABCD A_1B_1C_1D_1$ известно, что $AC_1=2BC$. Найдите угол между диагоналями $BD_1$ и $A_1C$. Ответ дайте в градусах.", answer: "60", svg_code: svgGeom.imgMap("prism_diag.png")},
                    {text: "В правильной четырёхугольной призме $ABCD A_1B_1C_1D_1$ известно, что $A_1C=2AB$. Найдите угол между диагоналями $BD_1$ и $A_1C$. Ответ дайте в градусах.", answer: "60", svg_code: svgGeom.imgMap("prism_diag.png")}
                ]
            }
        ]
    };

    window.extraDatabase[3] = task3Extra;
    window.extraDatabase["task3"] = task3Extra;
})();
