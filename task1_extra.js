(function() {
    window.extraDatabase = window.extraDatabase || {};

    const task1Extra = {
    "title": "Дополнительно",
    "source": "Дополнительные прототипы из присланного LaTeX-файла",
    "prototypes": [
        {
            "desc": "Правый треугольник: дана гипотенуза и тригонометрическая функция",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L225,140 L145,35 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M135,48 L145,58 L157,45\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"142\" y=\"28\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>",
            "theory_task": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $AB=5$, $\\sin A=\\frac{7}{25}$. Найдите $AC$.",
            "theory_sol": "Так как $AB$ — гипотенуза, $\\sin A=\\frac{BC}{AB}$, значит $BC=AB\\cdot \\sin A=5\\cdot\\frac{7}{25}=\\frac{7}{5}$.<br><br>Найдём $\\cos A$: $\\cos A=\\sqrt{1-\\sin^2 A}=\\sqrt{1-\\frac{49}{625}}=\\frac{24}{25}$.<br><br>Тогда $AC=AB\\cdot \\cos A=5\\cdot\\frac{24}{25}=\\frac{24}{5}=4{,}8$.\\<br><br><b>Ответ:</b> 4,8",
            "tasks": [
                {
                    "text": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $AB=10$, $\\sin A=0{,}6$. Найдите $AC$.",
                    "answer": "8",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L225,140 L145,35 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M135,48 L145,58 L157,45\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"142\" y=\"28\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $AB=7$, $\\operatorname{tg} A=\\frac{33}{4\\sqrt{33}}$. Найдите $AC$.",
                    "answer": "4",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L225,140 L145,35 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M135,48 L145,58 L157,45\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"142\" y=\"28\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $AB=5$, $\\cos A=\\frac{7}{25}$. Найдите $BC$.",
                    "answer": "4,8",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L225,140 L145,35 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M135,48 L145,58 L157,45\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"142\" y=\"28\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $AB=20$, $\\sin A=0{,}8$. Найдите $AC$.",
                    "answer": "12",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L225,140 L145,35 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M135,48 L145,58 L157,45\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"142\" y=\"28\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $AB=30$, $\\cos A=0{,}6$. Найдите $BC$.",
                    "answer": "24",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L225,140 L145,35 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M135,48 L145,58 L157,45\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"142\" y=\"28\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                }
            ]
        },
        {
            "desc": "Правый треугольник: дана сторона и тригонометрическая функция",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L225,140 L145,35 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M135,48 L145,58 L157,45\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"142\" y=\"28\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>",
            "theory_task": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $AC=4{,}8$, $\\sin A=\\frac{7}{25}$. Найдите $AB$.",
            "theory_sol": "Гипотенуза — сторона $AB$. По условию известен прилежащий к углу $A$ катет $AC$.<br><br>$\\cos A=\\sqrt{1-\\sin^2 A}=\\sqrt{1-\\frac{49}{625}}=\\frac{24}{25}$.<br><br>По определению косинуса: $\\cos A=\\frac{AC}{AB}$, поэтому $AB=\\dfrac{AC}{\\cos A}=\\dfrac{4{,}8}{\\frac{24}{25}}=5$.\\<br><br><b>Ответ:</b> 5",
            "tasks": [
                {
                    "text": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $AC=4$, $\\cos A=0{,}5$. Найдите $AB$.",
                    "answer": "8",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L225,140 L145,35 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M135,48 L145,58 L157,45\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"142\" y=\"28\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $AC=4{,}8$, $\\sin A=\\frac{7}{25}$. Найдите $AB$.",
                    "answer": "5",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L225,140 L145,35 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M135,48 L145,58 L157,45\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"142\" y=\"28\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $BC=4$, $\\sin A=\\frac{\\sqrt{17}}{17}$. Найдите $AC$.",
                    "answer": "16",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L225,140 L145,35 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M135,48 L145,58 L157,45\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"142\" y=\"28\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $BC=9$, $\\operatorname{tg} A=0{,}75$. Найдите $AC$.",
                    "answer": "12",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L225,140 L145,35 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M135,48 L145,58 L157,45\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"142\" y=\"28\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $AC=16$, $\\operatorname{tg} A=0{,}75$. Найдите $BC$.",
                    "answer": "12",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L225,140 L145,35 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M135,48 L145,58 L157,45\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"142\" y=\"28\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                }
            ]
        },
        {
            "desc": "Правый треугольник: две стороны и тригонометрия угла",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L225,140 L145,35 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M135,48 L145,58 L157,45\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"142\" y=\"28\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>",
            "theory_task": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $AC=24$, $BC=7$. Найдите $\\sin A$.",
            "theory_sol": "Найдём гипотенузу по теореме Пифагора: $AB=\\sqrt{AC^2+BC^2}=\\sqrt{24^2+7^2}=\\sqrt{625}=25$.<br><br>Синус угла — отношение противолежащего катета к гипотенузе: $\\sin A=\\frac{BC}{AB}=\\frac{7}{25}$.\\<br><br><b>Ответ:</b> $0{,}28$",
            "tasks": [
                {
                    "text": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $AC=7$, $BC=24$. Найдите $\\cos A$.",
                    "answer": "0,28",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L225,140 L145,35 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M135,48 L145,58 L157,45\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"142\" y=\"28\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $AC=8$, $BC=4$. Найдите $\\operatorname{tg} A$.",
                    "answer": "0,5",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L225,140 L145,35 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M135,48 L145,58 L157,45\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"142\" y=\"28\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $AB=4\\sqrt5$, $AC=8$. Найдите $\\operatorname{tg} A$.",
                    "answer": "0,5",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L225,140 L145,35 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M135,48 L145,58 L157,45\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"142\" y=\"28\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $AC=12$, $BC=9$. Найдите $\\operatorname{tg} A$.",
                    "answer": "0,75",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L225,140 L145,35 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M135,48 L145,58 L157,45\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"142\" y=\"28\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $AB=20$, $AC=12$. Найдите $\\sin A$.",
                    "answer": "0,8",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L225,140 L145,35 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M135,48 L145,58 L157,45\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"142\" y=\"28\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                }
            ]
        },
        {
            "desc": "Высота к гипотенузе: найти $AH$",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L230,140 L150,35 Z M150,35 L150,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M140,48 L150,58 L162,45 M140,140 L140,130 L150,130\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"147\" y=\"28\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"154\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>",
            "theory_task": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $CH$ — высота, $AB=27$, $\\sin A=\\frac{2}{3}$. Найдите $AH$.",
            "theory_sol": "В прямоугольном треугольнике $AC=AB\\cos A$. По свойству проекции катета на гипотенузу $AC^2=AB\\cdot AH$, поэтому $AH=\\frac{AC^2}{AB}=AB\\cdot\\cos^2 A$.<br><br>Найдём $\\cos A$: $\\cos A=\\sqrt{1-\\sin^2 A}=\\sqrt{1-\\frac{4}{9}}=\\frac{\\sqrt5}{3}$.<br><br>$AH=27\\cdot\\left(\\frac{\\sqrt5}{3}\\right)^2=27\\cdot\\frac{5}{9}=15$.\\<br><br><b>Ответ:</b> 15",
            "tasks": [
                {
                    "text": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $CH$ — высота, $AB=27$, $\\cos A=\\frac{2}{3}$. Найдите $AH$.",
                    "answer": "12",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L230,140 L150,35 Z M150,35 L150,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M140,48 L150,58 L162,45 M140,140 L140,130 L150,130\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"147\" y=\"28\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"154\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $CH$ — высота, $AB=13$, $\\operatorname{tg} A=\\frac15$. Найдите $AH$.",
                    "answer": "12,5",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L230,140 L150,35 Z M150,35 L150,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M140,48 L150,58 L162,45 M140,140 L140,130 L150,130\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"147\" y=\"28\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"154\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $CH$ — высота, $AB=10$, $\\sin A=\\frac35$. Найдите $AH$.",
                    "answer": "6,4",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L230,140 L150,35 Z M150,35 L150,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M140,48 L150,58 L162,45 M140,140 L140,130 L150,130\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"147\" y=\"28\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"154\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $CH$ — высота, $AB=30$, $\\operatorname{tg} A=0{,}75$. Найдите $AH$.",
                    "answer": "19,2",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L230,140 L150,35 Z M150,35 L150,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M140,48 L150,58 L162,45 M140,140 L140,130 L150,130\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"147\" y=\"28\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"154\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $CH$ — высота, $AB=50$, $\\sin A=0{,}8$. Найдите $AH$.",
                    "answer": "18",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L230,140 L150,35 Z M150,35 L150,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M140,48 L150,58 L162,45 M140,140 L140,130 L150,130\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"147\" y=\"28\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"154\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                }
            ]
        },
        {
            "desc": "Высота к гипотенузе: найти $BH$",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L230,140 L150,35 Z M150,35 L150,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M140,48 L150,58 L162,45 M140,140 L140,130 L150,130\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"147\" y=\"28\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"154\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>",
            "theory_task": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $CH$ — высота, $AB=27$, $\\sin A=\\frac{2}{3}$. Найдите $BH$.",
            "theory_sol": "В прямоугольном треугольнике $BC=AB\\sin A$. По свойству проекции катета на гипотенузу $BC^2=AB\\cdot BH$, поэтому $BH=\\frac{BC^2}{AB}=AB\\cdot\\sin^2 A$.<br><br>$BH=27\\cdot\\left(\\frac{2}{3}\\right)^2=27\\cdot\\frac{4}{9}=12$.\\<br><br><b>Ответ:</b> 12",
            "tasks": [
                {
                    "text": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $CH$ — высота, $AB=27$, $\\cos A=\\frac23$. Найдите $BH$.",
                    "answer": "15",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L230,140 L150,35 Z M150,35 L150,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M140,48 L150,58 L162,45 M140,140 L140,130 L150,130\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"147\" y=\"28\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"154\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $CH$ — высота, $AB=13$, $\\operatorname{tg} A=5$. Найдите $BH$.",
                    "answer": "12,5",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L230,140 L150,35 Z M150,35 L150,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M140,48 L150,58 L162,45 M140,140 L140,130 L150,130\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"147\" y=\"28\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"154\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $CH$ — высота, $AB=25$, $\\sin A=0{,}6$. Найдите $BH$.",
                    "answer": "9",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L230,140 L150,35 Z M150,35 L150,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M140,48 L150,58 L162,45 M140,140 L140,130 L150,130\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"147\" y=\"28\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"154\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $CH$ — высота, $AB=30$, $\\operatorname{tg} A=0{,}75$. Найдите $BH$.",
                    "answer": "10,8",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L230,140 L150,35 Z M150,35 L150,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M140,48 L150,58 L162,45 M140,140 L140,130 L150,130\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"147\" y=\"28\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"154\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $CH$ — высота, $AB=50$, $\\sin A=0{,}8$. Найдите $BH$.",
                    "answer": "32",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L230,140 L150,35 Z M150,35 L150,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M140,48 L150,58 L162,45 M140,140 L140,130 L150,130\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"147\" y=\"28\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"154\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                }
            ]
        },
        {
            "desc": "Высота к гипотенузе: найти $CH$",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L230,140 L150,35 Z M150,35 L150,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M140,48 L150,58 L162,45 M140,140 L140,130 L150,130\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"147\" y=\"28\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"154\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>",
            "theory_task": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $CH$ — высота, $AB=4\\sqrt{15}$, $\\sin A=0{,}25$. Найдите $CH$.",
            "theory_sol": "Катеты равны $AC=AB\\cos A$ и $BC=AB\\sin A$. Площадь можно записать двумя способами: $\\frac12 AC\\cdot BC=\\frac12 AB\\cdot CH$, поэтому $CH=\\frac{AC\\cdot BC}{AB}=AB\\sin A\\cos A$.<br><br>$\\sin A=\\frac14$, тогда $\\cos A=\\sqrt{1-\\frac{1}{16}}=\\frac{\\sqrt{15}}{4}$.<br><br>$CH=4\\sqrt{15}\\cdot\\frac14\\cdot\\frac{\\sqrt{15}}{4}=\\frac{15}{4}=3{,}75$.\\<br><br><b>Ответ:</b> 3,75",
            "tasks": [
                {
                    "text": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $CH$ — высота, $AB=4\\sqrt{15}$, $\\cos A=0{,}25$. Найдите $CH$.",
                    "answer": "3,75",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L230,140 L150,35 Z M150,35 L150,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M140,48 L150,58 L162,45 M140,140 L140,130 L150,130\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"147\" y=\"28\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"154\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $CH$ — высота, $AB=13$, $\\operatorname{tg} A=5$. Найдите $CH$.",
                    "answer": "2,5",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L230,140 L150,35 Z M150,35 L150,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M140,48 L150,58 L162,45 M140,140 L140,130 L150,130\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"147\" y=\"28\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"154\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $CH$ — высота, $AB=10$, $\\sin A=0{,}6$. Найдите $CH$.",
                    "answer": "4,8",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L230,140 L150,35 Z M150,35 L150,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M140,48 L150,58 L162,45 M140,140 L140,130 L150,130\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"147\" y=\"28\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"154\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $CH$ — высота, $AB=30$, $\\operatorname{tg} A=0{,}75$. Найдите $CH$.",
                    "answer": "14,4",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L230,140 L150,35 Z M150,35 L150,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M140,48 L150,58 L162,45 M140,140 L140,130 L150,130\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"147\" y=\"28\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"154\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $CH$ — высота, $AB=50$, $\\sin A=0{,}8$. Найдите $CH$.",
                    "answer": "24",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L230,140 L150,35 Z M150,35 L150,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M140,48 L150,58 L162,45 M140,140 L140,130 L150,130\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"147\" y=\"28\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"154\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                }
            ]
        },
        {
            "desc": "Равнобедренный треугольник: основание и тригонометрия",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L235,140 L130,25 Z M130,25 L130,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M120,140 L120,130 L130,130 M78,82 l8,-8 M180,74 l8,8\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"240\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"18\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"134\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>",
            "theory_task": "В треугольнике $ABC$ известно, что $AC=BC$, $AB=8$, $\\cos A=0{,}5$. Найдите $AC$.",
            "theory_sol": "В равнобедренном треугольнике высота $CH$, проведённая к основанию, является медианой, значит $AH=\\frac{AB}{2}=4$.<br><br>В прямоугольном треугольнике $ACH$: $\\cos A=\\frac{AH}{AC}$.<br><br>$AC=\\frac{AH}{\\cos A}=\\frac{4}{0{,}5}=8$.\\<br><br><b>Ответ:</b> 8",
            "tasks": [
                {
                    "text": "В треугольнике $ABC$ известно, что $AC=BC$, $AB=8$, $\\cos A=0{,}5$. Найдите $AC$.",
                    "answer": "8",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L235,140 L130,25 Z M130,25 L130,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M120,140 L120,130 L130,130 M78,82 l8,-8 M180,74 l8,8\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"240\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"18\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"134\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ известно, что $AC=BC$, $AB=9{,}6$, $\\sin A=\\frac{7}{25}$. Найдите $AC$.",
                    "answer": "5",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L235,140 L130,25 Z M130,25 L130,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M120,140 L120,130 L130,130 M78,82 l8,-8 M180,74 l8,8\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"240\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"18\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"134\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ известно, что $AC=BC=5$, $\\sin A=\\frac{7}{25}$. Найдите $AB$.",
                    "answer": "9,6",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L235,140 L130,25 Z M130,25 L130,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M120,140 L120,130 L130,130 M78,82 l8,-8 M180,74 l8,8\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"240\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"18\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"134\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ известно, что $AC=BC=10$, $\\cos A=0{,}6$. Найдите $AB$.",
                    "answer": "12",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L235,140 L130,25 Z M130,25 L130,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M120,140 L120,130 L130,130 M78,82 l8,-8 M180,74 l8,8\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"240\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"18\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"134\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ известно, что $AC=BC=25$, $\\sin A=0{,}6$. Найдите $AB$.",
                    "answer": "40",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L235,140 L130,25 Z M130,25 L130,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M120,140 L120,130 L130,130 M78,82 l8,-8 M180,74 l8,8\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"240\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"18\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"134\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                }
            ]
        },
        {
            "desc": "Равнобедренный треугольник: высота и тригонометрия",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L235,140 L130,25 Z M130,25 L130,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M120,140 L120,130 L130,130 M78,82 l8,-8 M180,74 l8,8\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"240\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"18\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"134\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>",
            "theory_task": "В треугольнике $ABC$ известно, что $AC=BC$, высота $CH$ равна $4$, $\\sin A=0{,}5$. Найдите $AC$.",
            "theory_sol": "В прямоугольном треугольнике $ACH$ катет $CH$ противолежит углу $A$, поэтому $\\sin A=\\frac{CH}{AC}$.<br><br>$AC=\\frac{CH}{\\sin A}=\\frac{4}{0{,}5}=8$.\\<br><br><b>Ответ:</b> 8",
            "tasks": [
                {
                    "text": "В треугольнике $ABC$ известно, что $AC=BC$, высота $CH$ равна $4$, $\\sin A=0{,}5$. Найдите $AC$.",
                    "answer": "8",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L235,140 L130,25 Z M130,25 L130,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M120,140 L120,130 L130,130 M78,82 l8,-8 M180,74 l8,8\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"240\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"18\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"134\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ известно, что $AC=BC$, высота $CH$ равна $3$, $\\cos A=0{,}8$. Найдите $AC$.",
                    "answer": "5",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L235,140 L130,25 Z M130,25 L130,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M120,140 L120,130 L130,130 M78,82 l8,-8 M180,74 l8,8\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"240\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"18\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"134\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ известно, что $AC=BC$, высота $CH$ равна $20$, $\\cos A=0{,}6$. Найдите $AC$.",
                    "answer": "25",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L235,140 L130,25 Z M130,25 L130,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M120,140 L120,130 L130,130 M78,82 l8,-8 M180,74 l8,8\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"240\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"18\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"134\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ известно, что $AC=BC$, высота $CH$ равна $5$, $\\sin A=0{,}8$. Найдите $AC$.",
                    "answer": "6,25",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L235,140 L130,25 Z M130,25 L130,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M120,140 L120,130 L130,130 M78,82 l8,-8 M180,74 l8,8\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"240\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"18\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"134\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ известно, что $AC=BC$, высота $CH$ равна $7{,}2$, $\\cos A=0{,}6$. Найдите $AC$.",
                    "answer": "9",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L235,140 L130,25 Z M130,25 L130,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M120,140 L120,130 L130,130 M78,82 l8,-8 M180,74 l8,8\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"240\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"18\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"134\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                }
            ]
        },
        {
            "desc": "Равнобедренный треугольник и высота $AH$",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L235,140 L130,25 Z M25,140 L173,72\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M166,84 L162,74 L173,72 M78,82 l8,-8 M180,74 l8,8\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"240\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"18\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"178\" y=\"75\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>",
            "theory_task": "В треугольнике $ABC$ известно, что $AC=BC$, $AH$ — высота, проведённая к стороне $BC$, $\\sin BAC=\\frac{7}{25}$. Найдите $\\sin BAH$.",
            "theory_sol": "Так как $AC=BC$, то углы при основании равны: $\\angle BAC=\\angle ABC$.<br><br>В прямоугольном треугольнике $ABH$ угол $ABH$ равен углу $ABC$, значит $\\angle BAH=90^{\\circ}-\\angle BAC$.<br><br>Тогда $\\sin BAH=\\cos BAC=\\sqrt{1-\\left(\\frac{7}{25}\\right)^2}=\\frac{24}{25}$.\\<br><br><b>Ответ:</b> $0{,}96$",
            "tasks": [
                {
                    "text": "В треугольнике $ABC$ известно, что $AC=BC$, $AH$ — высота, проведённая к стороне $BC$, $\\sin BAC=\\frac{7}{25}$. Найдите $\\sin BAH$.",
                    "answer": "0,96",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L235,140 L130,25 Z M25,140 L173,72\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M166,84 L162,74 L173,72 M78,82 l8,-8 M180,74 l8,8\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"240\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"18\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"178\" y=\"75\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ известно, что $AC=BC$, $AH$ — высота, проведённая к стороне $BC$, $\\cos BAC=\\frac{\\sqrt{17}}{17}$. Найдите $\\operatorname{tg} BAH$.",
                    "answer": "0,25",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L235,140 L130,25 Z M25,140 L173,72\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M166,84 L162,74 L173,72 M78,82 l8,-8 M180,74 l8,8\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"240\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"18\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"178\" y=\"75\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ известно, что $AC=BC$, $AH$ — высота, проведённая к стороне $BC$, $\\cos BAC=0{,}1$. Найдите $\\sin BAH$.",
                    "answer": "0,1",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L235,140 L130,25 Z M25,140 L173,72\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M166,84 L162,74 L173,72 M78,82 l8,-8 M180,74 l8,8\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"240\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"18\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"178\" y=\"75\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ известно, что $AC=BC$, $AH$ — высота, проведённая к стороне $BC$, $\\sin BAC=0{,}8$. Найдите $\\cos BAH$.",
                    "answer": "0,8",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L235,140 L130,25 Z M25,140 L173,72\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M166,84 L162,74 L173,72 M78,82 l8,-8 M180,74 l8,8\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"240\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"18\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"178\" y=\"75\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ известно, что $AC=BC$, $AH$ — высота, проведённая к стороне $BC$, $\\cos BAC=0{,}6$. Найдите $\\sin BAH$.",
                    "answer": "0,6",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L235,140 L130,25 Z M25,140 L173,72\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M166,84 L162,74 L173,72 M78,82 l8,-8 M180,74 l8,8\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"240\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"18\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"178\" y=\"75\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                }
            ]
        },
        {
            "desc": "Высота к гипотенузе: известны катет и его проекция",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L230,140 L150,35 Z M150,35 L150,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M140,48 L150,58 L162,45 M140,140 L140,130 L150,130\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"147\" y=\"28\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"154\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>",
            "theory_task": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $CH$ — высота, $BC=25$, $BH=20$. Найдите $\\cos A$.",
            "theory_sol": "Для катета и его проекции верно: $BC^2=AB\\cdot BH$.<br><br>Отсюда $AB=\\frac{BC^2}{BH}=\\frac{25^2}{20}=\\frac{125}{4}$.<br><br>$AH=AB-BH=\\frac{125}{4}-20=\\frac{45}{4}$. Тогда<br>$\\cos^2 A=\\frac{AH}{AB}=\\frac{45/4}{125/4}=\\frac{9}{25}$.<br><br>$\\cos A=\\frac{3}{5}=0{,}6$.\\<br><br><b>Ответ:</b> 0,6",
            "tasks": [
                {
                    "text": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $CH$ — высота, $BC=25$, $BH=20$. Найдите $\\cos A$.",
                    "answer": "0,6",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L230,140 L150,35 Z M150,35 L150,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M140,48 L150,58 L162,45 M140,140 L140,130 L150,130\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"147\" y=\"28\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"154\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $CH$ — высота, $BC=8$, $BH=4$. Найдите $\\sin A$.",
                    "answer": "0,5",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L230,140 L150,35 Z M150,35 L150,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M140,48 L150,58 L162,45 M140,140 L140,130 L150,130\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"147\" y=\"28\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"154\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $CH$ — высота, $BC=4\\sqrt5$, $BH=4$. Найдите $\\operatorname{tg} A$.",
                    "answer": "0,5",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L230,140 L150,35 Z M150,35 L150,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M140,48 L150,58 L162,45 M140,140 L140,130 L150,130\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"147\" y=\"28\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"154\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $CH$ — высота, $BC=15$, $BH=9$. Найдите $\\sin A$.",
                    "answer": "0,6",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L230,140 L150,35 Z M150,35 L150,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M140,48 L150,58 L162,45 M140,140 L140,130 L150,130\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"147\" y=\"28\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"154\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $CH$ — высота, $BC=15$, $BH=9$. Найдите $\\operatorname{tg} A$.",
                    "answer": "0,75",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L230,140 L150,35 Z M150,35 L150,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M140,48 L150,58 L162,45 M140,140 L140,130 L150,130\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"147\" y=\"28\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"154\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                }
            ]
        },
        {
            "desc": "Тупоугольный равнобедренный треугольник",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M70,35 L120,140 L230,140 Z M70,35 L70,140 M70,140 L120,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M60,140 L60,130 L70,130 M92,88 l9,-5 M172,140 l0,-10\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"55\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"122\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"55\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>",
            "theory_task": "В тупоугольном треугольнике $ABC$ известно, что $AC=BC=8$, высота $AH$ равна $4$. Найдите $\\sin ACB$.",
            "theory_sol": "Рассмотрим прямоугольный треугольник $ACH$. Гипотенуза $AC=8$, катет $AH=4$.<br><br>Угол $\\angle ACH$ смежный с тупым углом $\\angle ACB$, поэтому $\\angle ACB=180^{\\circ}-\\angle ACH$.<br><br>Используем формулу приведения: $\\sin(180^{\\circ}-\\alpha)=\\sin\\alpha$, значит $\\sin(\\angle ACB)=\\sin(\\angle ACH)$.<br><br>В прямоугольном треугольнике $ACH$: $\\sin ACH=\\dfrac{AH}{AC}=\\dfrac{4}{8}=0{,}5$.\\<br><br><b>Ответ:</b> 0,5",
            "tasks": [
                {
                    "text": "В тупоугольном треугольнике $ABC$ известно, что $AC=BC=8$, высота $AH$ равна $4$. Найдите $\\sin ACB$.",
                    "answer": "0,5",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M70,35 L120,140 L230,140 Z M70,35 L70,140 M70,140 L120,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M60,140 L60,130 L70,130 M92,88 l9,-5 M172,140 l0,-10\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"55\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"122\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"55\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "В тупоугольном треугольнике $ABC$ известно, что $AC=BC=25$, высота $AH$ равна $20$. Найдите $\\cos ACB$.",
                    "answer": "-0,6",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M70,35 L120,140 L230,140 Z M70,35 L70,140 M70,140 L120,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M60,140 L60,130 L70,130 M92,88 l9,-5 M172,140 l0,-10\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"55\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"122\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"55\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "В тупоугольном треугольнике $ABC$ известно, что $AC=BC=\\sqrt{17}$, $AH$ — высота, $CH=4$. Найдите $\\operatorname{tg} ACB$.",
                    "answer": "-0,25",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M70,35 L120,140 L230,140 Z M70,35 L70,140 M70,140 L120,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M60,140 L60,130 L70,130 M92,88 l9,-5 M172,140 l0,-10\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"55\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"122\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"55\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "В тупоугольном треугольнике $ABC$ известно, что $AC=BC=10$, высота $AH$ равна $8$. Найдите $\\sin ACB$.",
                    "answer": "0,8",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M70,35 L120,140 L230,140 Z M70,35 L70,140 M70,140 L120,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M60,140 L60,130 L70,130 M92,88 l9,-5 M172,140 l0,-10\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"55\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"122\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"55\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "В тупоугольном треугольнике $ABC$ известно, что $AC=BC=10$, высота $AH$ равна $6$. Найдите $\\cos ACB$.",
                    "answer": "-0,8",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M70,35 L120,140 L230,140 Z M70,35 L70,140 M70,140 L120,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M60,140 L60,130 L70,130 M92,88 l9,-5 M172,140 l0,-10\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"55\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"122\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"55\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                }
            ]
        },
        {
            "desc": "Равнобедренная трапеция",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L230,140 L185,55 L80,55 Z M80,55 L80,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M70,140 L70,130 L80,130 M58,95 l8,-8 M205,95 l8,8\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"188\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"65\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>",
            "theory_task": "Основания равнобедренной трапеции равны $51$ и $65$. Боковые стороны равны $25$. Найдите синус острого угла трапеции.",
            "theory_sol": "Опустим высоту из вершины меньшего основания. Разность оснований равна $65-51=14$, значит горизонтальная проекция боковой стороны равна $\\frac{14}{2}=7$.<br><br>Высота: $h=\\sqrt{25^2-7^2}=\\sqrt{625-49}=24$.<br><br>Синус острого угла равен отношению высоты к боковой стороне: $\\sin\\alpha=\\frac{24}{25}$.\\<br><br><b>Ответ:</b> $0{,}96$",
            "tasks": [
                {
                    "text": "Основания равнобедренной трапеции равны $17$ и $87$. Высота трапеции равна $14$. Найдите тангенс острого угла.",
                    "answer": "0,4",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L230,140 L185,55 L80,55 Z M80,55 L80,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M70,140 L70,130 L80,130 M58,95 l8,-8 M205,95 l8,8\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"188\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"65\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>"
                },
                {
                    "text": "Основания равнобедренной трапеции равны $43$ и $73$. Косинус острого угла трапеции равен $\\frac57$. Найдите боковую сторону.",
                    "answer": "21",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L230,140 L185,55 L80,55 Z M80,55 L80,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M70,140 L70,130 L80,130 M58,95 l8,-8 M205,95 l8,8\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"188\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"65\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>"
                },
                {
                    "text": "Основания равнобедренной трапеции равны $7$ и $51$. Тангенс острого угла равен $\\frac5{11}$. Найдите высоту трапеции.",
                    "answer": "10",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L230,140 L185,55 L80,55 Z M80,55 L80,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M70,140 L70,130 L80,130 M58,95 l8,-8 M205,95 l8,8\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"188\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"65\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>"
                },
                {
                    "text": "Основания равнобедренной трапеции равны $20$ и $44$. Высота трапеции равна $12$. Найдите тангенс острого угла.",
                    "answer": "1",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L230,140 L185,55 L80,55 Z M80,55 L80,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M70,140 L70,130 L80,130 M58,95 l8,-8 M205,95 l8,8\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"188\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"65\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>"
                },
                {
                    "text": "Основания равнобедренной трапеции равны $14$ и $26$. Косинус острого угла трапеции равен $0{,}6$. Найдите боковую сторону.",
                    "answer": "10",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L230,140 L185,55 L80,55 Z M80,55 L80,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M70,140 L70,130 L80,130 M58,95 l8,-8 M205,95 l8,8\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"188\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"65\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>"
                }
            ]
        },
        {
            "desc": "Квадрат: диагональ и площадь",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M65,140 L185,140 L185,20 L65,20 Z M65,140 L185,20\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><text x=\"50\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"190\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"190\" y=\"20\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"50\" y=\"20\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>",
            "theory_task": "Найдите площадь квадрата, если его диагональ равна $1$.",
            "theory_sol": "Диагональ квадрата со стороной $a$ равна $d=a\\sqrt2$. Поэтому $a=\\frac{d}{\\sqrt2}=\\frac{1}{\\sqrt2}$.<br><br>Площадь квадрата $S=a^2=\\left(\\frac{1}{\\sqrt2}\\right)^2=\\frac12=0{,}5$.\\<br><br><b>Ответ:</b> 0,5",
            "tasks": [
                {
                    "text": "Найдите площадь квадрата, если его диагональ равна $1$.",
                    "answer": "0,5",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M65,140 L185,140 L185,20 L65,20 Z M65,140 L185,20\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><text x=\"50\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"190\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"190\" y=\"20\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"50\" y=\"20\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>"
                },
                {
                    "text": "Найдите диагональ квадрата, если его площадь равна $2$.",
                    "answer": "2",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M65,140 L185,140 L185,20 L65,20 Z M65,140 L185,20\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><text x=\"50\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"190\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"190\" y=\"20\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"50\" y=\"20\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>"
                },
                {
                    "text": "Найдите площадь квадрата, если его диагональ равна $6$.",
                    "answer": "18",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M65,140 L185,140 L185,20 L65,20 Z M65,140 L185,20\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><text x=\"50\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"190\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"190\" y=\"20\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"50\" y=\"20\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>"
                },
                {
                    "text": "Найдите диагональ квадрата, если его площадь равна $8$.",
                    "answer": "4",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M65,140 L185,140 L185,20 L65,20 Z M65,140 L185,20\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><text x=\"50\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"190\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"190\" y=\"20\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"50\" y=\"20\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>"
                },
                {
                    "text": "Найдите площадь квадрата, если его диагональ равна $10$.",
                    "answer": "50",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M65,140 L185,140 L185,20 L65,20 Z M65,140 L185,20\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><text x=\"50\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"190\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"190\" y=\"20\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"50\" y=\"20\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>"
                }
            ]
        },
        {
            "desc": "Прямоугольник: площадь, периметр, отношение сторон",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,130 L225,130 L225,55 L35,55 Z M35,130 L225,55\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><text x=\"22\" y=\"145\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"145\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"230\" y=\"55\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"22\" y=\"55\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>",
            "theory_task": "Найдите периметр прямоугольника, если его площадь равна $18$, а отношение соседних сторон равно $1:2$.",
            "theory_sol": "Пусть стороны прямоугольника равны $x$ и $2x$. Тогда площадь $2x^2=18$, откуда $x^2=9$, $x=3$.<br><br>Стороны равны $3$ и $6$. Периметр $P=2(3+6)=18$.\\<br><br><b>Ответ:</b> 18",
            "tasks": [
                {
                    "text": "Найдите периметр прямоугольника, если его площадь равна $18$, а отношение соседних сторон равно $1:2$.",
                    "answer": "18",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,130 L225,130 L225,55 L35,55 Z M35,130 L225,55\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><text x=\"22\" y=\"145\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"145\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"230\" y=\"55\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"22\" y=\"55\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>"
                },
                {
                    "text": "Площадь прямоугольника равна $18$. Найдите его большую сторону, если она на $3$ больше меньшей стороны.",
                    "answer": "6",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,130 L225,130 L225,55 L35,55 Z M35,130 L225,55\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><text x=\"22\" y=\"145\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"145\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"230\" y=\"55\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"22\" y=\"55\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>"
                },
                {
                    "text": "Периметр прямоугольника равен $42$, а площадь равна $98$. Найдите большую сторону прямоугольника.",
                    "answer": "14",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,130 L225,130 L225,55 L35,55 Z M35,130 L225,55\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><text x=\"22\" y=\"145\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"145\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"230\" y=\"55\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"22\" y=\"55\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>"
                },
                {
                    "text": "Найдите периметр прямоугольника, если его площадь равна $32$, а отношение соседних сторон равно $1:2$.",
                    "answer": "24",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,130 L225,130 L225,55 L35,55 Z M35,130 L225,55\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><text x=\"22\" y=\"145\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"145\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"230\" y=\"55\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"22\" y=\"55\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>"
                },
                {
                    "text": "Площадь прямоугольника равна $45$. Найдите его большую сторону, если она на $4$ больше меньшей стороны.",
                    "answer": "9",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,130 L225,130 L225,55 L35,55 Z M35,130 L225,55\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><text x=\"22\" y=\"145\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"145\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"230\" y=\"55\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"22\" y=\"55\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>"
                }
            ]
        },
        {
            "desc": "Прямоугольник: диагональ",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,130 L225,130 L225,55 L35,55 Z M35,130 L225,55\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><text x=\"22\" y=\"145\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"145\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"230\" y=\"55\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"22\" y=\"55\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>",
            "theory_task": "Периметр прямоугольника равен $28$, а диагональ равна $10$. Найдите площадь этого прямоугольника.",
            "theory_sol": "Пусть стороны прямоугольника равны $a$ и $b$. Тогда $2(a+b)=28$, значит $a+b=14$.<br><br>По теореме Пифагора для диагонали: $a^2+b^2=10^2=100$.<br><br>$(a+b)^2=a^2+2ab+b^2$, поэтому $14^2=100+2ab$.<br><br>$196=100+2ab$, $ab=48$. Значит площадь равна $48$.\\<br><br><b>Ответ:</b> 48",
            "tasks": [
                {
                    "text": "Периметр прямоугольника равен $28$, а диагональ равна $10$. Найдите площадь этого прямоугольника.",
                    "answer": "48",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,130 L225,130 L225,55 L35,55 Z M35,130 L225,55\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><text x=\"22\" y=\"145\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"145\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"230\" y=\"55\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"22\" y=\"55\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>"
                },
                {
                    "text": "Периметр прямоугольника равен $34$, а площадь равна $60$. Найдите диагональ этого прямоугольника.",
                    "answer": "13",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,130 L225,130 L225,55 L35,55 Z M35,130 L225,55\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><text x=\"22\" y=\"145\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"145\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"230\" y=\"55\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"22\" y=\"55\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>"
                },
                {
                    "text": "Сторона прямоугольника относится к его диагонали как $4:5$, а другая сторона равна $6$. Найдите площадь прямоугольника.",
                    "answer": "48",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,130 L225,130 L225,55 L35,55 Z M35,130 L225,55\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><text x=\"22\" y=\"145\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"145\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"230\" y=\"55\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"22\" y=\"55\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>"
                },
                {
                    "text": "Периметр прямоугольника равен $46$, а площадь равна $120$. Найдите диагональ этого прямоугольника.",
                    "answer": "17",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,130 L225,130 L225,55 L35,55 Z M35,130 L225,55\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><text x=\"22\" y=\"145\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"145\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"230\" y=\"55\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"22\" y=\"55\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>"
                },
                {
                    "text": "Диагональ прямоугольника равна $17$, а одна из его сторон равна $8$. Найдите площадь прямоугольника.",
                    "answer": "120",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,130 L225,130 L225,55 L35,55 Z M35,130 L225,55\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><text x=\"22\" y=\"145\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"145\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"230\" y=\"55\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"22\" y=\"55\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>"
                }
            ]
        },
        {
            "desc": "Площадь треугольника по двум сторонам и углу",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M30,140 L230,140 L80,35 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M53,140 A28,28 0 0,0 41,118\" fill=\"none\" stroke=\"black\" stroke-width=\"1.3\"/><text x=\"17\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"77\" y=\"28\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>",
            "theory_task": "Найдите площадь треугольника, две стороны которого равны $8$ и $12$, а угол между ними равен $30^{\\circ}$.",
            "theory_sol": "Площадь треугольника по двум сторонам и углу между ними:<br>$S=\\frac12 ab\\sin\\gamma$.<br><br>$S=\\frac12\\cdot 8\\cdot 12\\cdot \\sin 30^{\\circ}=48\\cdot\\frac12=24$.\\<br><br><b>Ответ:</b> 24",
            "tasks": [
                {
                    "text": "Найдите площадь треугольника, две стороны которого равны $8$ и $12$, а угол между ними равен $30^{\\circ}$.",
                    "answer": "24",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M30,140 L230,140 L80,35 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M53,140 A28,28 0 0,0 41,118\" fill=\"none\" stroke=\"black\" stroke-width=\"1.3\"/><text x=\"17\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"77\" y=\"28\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "Угол при вершине равнобедренного треугольника равен $30^{\\circ}$. Боковая сторона треугольника равна $10$. Найдите площадь этого треугольника.",
                    "answer": "25",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M30,140 L230,140 L80,35 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M53,140 A28,28 0 0,0 41,118\" fill=\"none\" stroke=\"black\" stroke-width=\"1.3\"/><text x=\"17\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"77\" y=\"28\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "Угол при вершине равнобедренного треугольника равен $150^{\\circ}$. Боковая сторона треугольника равна $20$. Найдите площадь этого треугольника.",
                    "answer": "100",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M30,140 L230,140 L80,35 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M53,140 A28,28 0 0,0 41,118\" fill=\"none\" stroke=\"black\" stroke-width=\"1.3\"/><text x=\"17\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"77\" y=\"28\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "Найдите площадь треугольника, две стороны которого равны $6$ и $10$, а угол между ними равен $90^{\\circ}$.",
                    "answer": "30",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M30,140 L230,140 L80,35 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M53,140 A28,28 0 0,0 41,118\" fill=\"none\" stroke=\"black\" stroke-width=\"1.3\"/><text x=\"17\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"77\" y=\"28\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "Найдите площадь треугольника, две стороны которого равны $14$ и $18$, а угол между ними равен $30^{\\circ}$.",
                    "answer": "63",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M30,140 L230,140 L80,35 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M53,140 A28,28 0 0,0 41,118\" fill=\"none\" stroke=\"black\" stroke-width=\"1.3\"/><text x=\"17\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"77\" y=\"28\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                }
            ]
        },
        {
            "desc": "Прямоугольный треугольник: катет, гипотенуза и площадь",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L225,140 L145,35 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M135,48 L145,58 L157,45\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"142\" y=\"28\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>",
            "theory_task": "В прямоугольном треугольнике катет равен $6$, а гипотенуза равна $10$. Найдите площадь этого треугольника.",
            "theory_sol": "По теореме Пифагора второй катет равен $\\sqrt{10^2-6^2}=8$.<br><br>Тогда $S=\\frac12\\cdot 6\\cdot 8=24$.\\<br><br><b>Ответ:</b> 24",
            "tasks": [
                {
                    "text": "В прямоугольном треугольнике катет равен $5$, а гипотенуза равна $13$. Найдите площадь треугольника.",
                    "answer": "30",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L225,140 L145,35 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M135,48 L145,58 L157,45\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"142\" y=\"28\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "В прямоугольном треугольнике катет равен $7$, а гипотенуза равна $25$. Найдите площадь треугольника.",
                    "answer": "84",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L225,140 L145,35 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M135,48 L145,58 L157,45\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"142\" y=\"28\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "В прямоугольном треугольнике катет равен $9$, а гипотенуза равна $15$. Найдите площадь треугольника.",
                    "answer": "54",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L225,140 L145,35 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M135,48 L145,58 L157,45\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"142\" y=\"28\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "В прямоугольном треугольнике катет равен $8$, а гипотенуза равна $10$. Найдите площадь треугольника.",
                    "answer": "24",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L225,140 L145,35 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M135,48 L145,58 L157,45\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"142\" y=\"28\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "В прямоугольном треугольнике катет равен $20$, а гипотенуза равна $29$. Найдите площадь треугольника.",
                    "answer": "210",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L225,140 L145,35 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M135,48 L145,58 L157,45\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"142\" y=\"28\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                }
            ]
        },
        {
            "desc": "Прямоугольный треугольник: высота и медиана",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L230,140 L150,35 Z M150,35 L150,140 M150,35 L128,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M140,48 L150,58 L162,45 M140,140 L140,130 L150,130\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"147\" y=\"28\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"154\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text><text x=\"118\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">M</text></svg>",
            "theory_task": "Острый угол $B$ прямоугольного треугольника $ABC$ равен $61^{\\circ}$. Найдите угол между высотой $CH$ и медианой $CM$, проведёнными из вершины прямого угла $C$. Ответ дайте в градусах.",
            "theory_sol": "$\\angle A=90^{\\circ}-61^{\\circ}=29^{\\circ}$.<br><br>Медиана к гипотенузе даёт равнобедренный треугольник $ACM$, поэтому $\\angle ACM=\\angle A=29^{\\circ}$.<br><br>Так как $CH\\perp AB$, то $\\angle ACH=\\angle B=61^{\\circ}$.<br><br>Искомый угол равен $61^{\\circ}-29^{\\circ}=32^{\\circ}$.\\<br><br><b>Ответ:</b> 32",
            "tasks": [
                {
                    "text": "Острый угол $B$ прямоугольного треугольника $ABC$ равен $66^{\\circ}$. Найдите угол между высотой $CH$ и медианой $CM$, проведёнными из вершины прямого угла $C$.",
                    "answer": "42",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L230,140 L150,35 Z M150,35 L150,140 M150,35 L128,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M140,48 L150,58 L162,45 M140,140 L140,130 L150,130\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"147\" y=\"28\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"154\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text><text x=\"118\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">M</text></svg>"
                },
                {
                    "text": "Острый угол $B$ прямоугольного треугольника $ABC$ равен $32^{\\circ}$. Найдите угол между высотой $CH$ и медианой $CM$, проведёнными из вершины прямого угла $C$.",
                    "answer": "26",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L230,140 L150,35 Z M150,35 L150,140 M150,35 L128,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M140,48 L150,58 L162,45 M140,140 L140,130 L150,130\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"147\" y=\"28\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"154\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text><text x=\"118\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">M</text></svg>"
                },
                {
                    "text": "Острый угол $B$ прямоугольного треугольника $ABC$ равен $58^{\\circ}$. Найдите угол между высотой $CH$ и медианой $CM$, проведёнными из вершины прямого угла $C$.",
                    "answer": "26",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L230,140 L150,35 Z M150,35 L150,140 M150,35 L128,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M140,48 L150,58 L162,45 M140,140 L140,130 L150,130\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"147\" y=\"28\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"154\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text><text x=\"118\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">M</text></svg>"
                },
                {
                    "text": "Острый угол $B$ прямоугольного треугольника $ABC$ равен $40^{\\circ}$. Найдите угол между высотой $CH$ и медианой $CM$, проведёнными из вершины прямого угла $C$.",
                    "answer": "10",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L230,140 L150,35 Z M150,35 L150,140 M150,35 L128,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M140,48 L150,58 L162,45 M140,140 L140,130 L150,130\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"147\" y=\"28\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"154\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text><text x=\"118\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">M</text></svg>"
                },
                {
                    "text": "Острый угол $B$ прямоугольного треугольника $ABC$ равен $75^{\\circ}$. Найдите угол между высотой $CH$ и медианой $CM$, проведёнными из вершины прямого угла $C$.",
                    "answer": "60",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L230,140 L150,35 Z M150,35 L150,140 M150,35 L128,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M140,48 L150,58 L162,45 M140,140 L140,130 L150,130\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"147\" y=\"28\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"154\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text><text x=\"118\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">M</text></svg>"
                }
            ]
        },
        {
            "desc": "Прямоугольный треугольник: биссектрисы острых углов",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M45,140 L220,140 L220,50 Z M45,140 L154,104 M220,50 L154,104\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M210,140 L210,130 L220,130\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"32\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"50\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"225\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>",
            "theory_task": "Найдите острый угол между биссектрисами острых углов прямоугольного треугольника. Ответ дайте в градусах.",
            "theory_sol": "В любом треугольнике угол между внутренними биссектрисами двух углов при точке их пересечения равен $90^{\\circ}+\\frac{C}{2}$.<br><br>В прямоугольном треугольнике $C=90^{\\circ}$, поэтому больший угол между биссектрисами равен $90^{\\circ}+45^{\\circ}=135^{\\circ}$.<br><br>В задаче требуется острый угол, значит берём смежный с ним угол: $180^{\\circ}-135^{\\circ}=45^{\\circ}$.\\<br><br><b>Ответ:</b> 45",
            "tasks": [
                {
                    "text": "Найдите острый угол между биссектрисами острых углов прямоугольного треугольника.",
                    "answer": "45",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M45,140 L220,140 L220,50 Z M45,140 L154,104 M220,50 L154,104\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M210,140 L210,130 L220,130\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"32\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"50\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"225\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "В прямоугольном треугольнике проведены биссектрисы двух острых углов. Найдите острый угол между этими биссектрисами.",
                    "answer": "45",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M45,140 L220,140 L220,50 Z M45,140 L154,104 M220,50 L154,104\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M210,140 L210,130 L220,130\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"32\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"50\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"225\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "Найдите меньший угол, образованный биссектрисами острых углов прямоугольного треугольника.",
                    "answer": "45",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M45,140 L220,140 L220,50 Z M45,140 L154,104 M220,50 L154,104\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M210,140 L210,130 L220,130\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"32\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"50\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"225\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "Определите острый угол между биссектрисами острых углов прямоугольного треугольника.",
                    "answer": "45",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M45,140 L220,140 L220,50 Z M45,140 L154,104 M220,50 L154,104\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M210,140 L210,130 L220,130\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"32\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"50\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"225\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "Найдите величину меньшего угла между биссектрисами острых углов прямоугольного треугольника.",
                    "answer": "45",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M45,140 L220,140 L220,50 Z M45,140 L154,104 M220,50 L154,104\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M210,140 L210,130 L220,130\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"32\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"50\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"225\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                }
            ]
        },
        {
            "desc": "Равнобедренный треугольник: боковая сторона и основание",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L235,140 L130,25 Z M130,25 L130,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M120,140 L120,130 L130,130 M78,82 l8,-8 M180,74 l8,8\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"240\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"18\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"134\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>",
            "theory_task": "Боковая сторона равнобедренного треугольника равна $5$, а основание равно $6$. Найдите площадь этого треугольника.",
            "theory_sol": "Высота, проведённая к основанию, является медианой, поэтому половина основания равна $3$.<br><br>По теореме Пифагора высота равна $\\sqrt{5^2-3^2}=4$.<br><br>Тогда $S=\\frac12\\cdot 6\\cdot 4=12$.\\<br><br><b>Ответ:</b> 12",
            "tasks": [
                {
                    "text": "Боковая сторона равнобедренного треугольника равна $13$, а основание равно $10$. Найдите площадь треугольника.",
                    "answer": "60",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L235,140 L130,25 Z M130,25 L130,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M120,140 L120,130 L130,130 M78,82 l8,-8 M180,74 l8,8\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"240\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"18\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"134\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "Боковая сторона равнобедренного треугольника равна $10$, а основание равно $12$. Найдите площадь треугольника.",
                    "answer": "48",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L235,140 L130,25 Z M130,25 L130,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M120,140 L120,130 L130,130 M78,82 l8,-8 M180,74 l8,8\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"240\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"18\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"134\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "Боковая сторона равнобедренного треугольника равна $17$, а основание равно $16$. Найдите площадь треугольника.",
                    "answer": "120",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L235,140 L130,25 Z M130,25 L130,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M120,140 L120,130 L130,130 M78,82 l8,-8 M180,74 l8,8\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"240\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"18\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"134\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "Боковая сторона равнобедренного треугольника равна $5$, а основание равно $6$. Найдите площадь треугольника.",
                    "answer": "12",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L235,140 L130,25 Z M130,25 L130,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M120,140 L120,130 L130,130 M78,82 l8,-8 M180,74 l8,8\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"240\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"18\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"134\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "Боковая сторона равнобедренного треугольника равна $25$, а основание равно $14$. Найдите площадь треугольника.",
                    "answer": "168",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L235,140 L130,25 Z M130,25 L130,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M120,140 L120,130 L130,130 M78,82 l8,-8 M180,74 l8,8\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"240\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"18\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"134\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                }
            ]
        },
        {
            "desc": "Равнобедренный треугольник: площадь по боковым сторонам и углу",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M30,140 L230,140 L130,30 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M82,85 l8,-8 M175,77 l8,8\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"17\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"23\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>",
            "theory_task": "Боковая сторона равнобедренного треугольника равна $10$, а угол при вершине, противолежащей основанию, равен $30^{\\circ}$. Найдите площадь этого треугольника.",
            "theory_sol": "Площадь по двум сторонам и углу между ними: $S=\\frac12 ab\\sin\\gamma$.<br><br>В данном случае $a=b=10$, $\\gamma=30^{\\circ}$, поэтому $S=\\frac12\\cdot 10\\cdot 10\\cdot \\frac12=25$.\\<br><br><b>Ответ:</b> 25",
            "tasks": [
                {
                    "text": "Боковая сторона равнобедренного треугольника равна $8$, а угол при вершине, противолежащей основанию, равен $30^{\\circ}$. Найдите площадь треугольника.",
                    "answer": "16",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M30,140 L230,140 L130,30 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M82,85 l8,-8 M175,77 l8,8\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"17\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"23\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "Боковая сторона равнобедренного треугольника равна $10$, а угол при вершине, противолежащей основанию, равен $30^{\\circ}$. Найдите площадь треугольника.",
                    "answer": "25",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M30,140 L230,140 L130,30 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M82,85 l8,-8 M175,77 l8,8\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"17\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"23\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "Боковая сторона равнобедренного треугольника равна $12$, а угол при вершине, противолежащей основанию, равен $90^{\\circ}$. Найдите площадь треугольника.",
                    "answer": "72",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M30,140 L230,140 L130,30 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M82,85 l8,-8 M175,77 l8,8\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"17\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"23\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "Боковая сторона равнобедренного треугольника равна $20$, а угол при вершине, противолежащей основанию, равен $150^{\\circ}$. Найдите площадь треугольника.",
                    "answer": "100",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M30,140 L230,140 L130,30 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M82,85 l8,-8 M175,77 l8,8\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"17\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"23\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "Боковая сторона равнобедренного треугольника равна $6$, а угол при вершине, противолежащей основанию, равен $150^{\\circ}$. Найдите площадь треугольника.",
                    "answer": "9",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M30,140 L230,140 L130,30 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M82,85 l8,-8 M175,77 l8,8\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"17\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"23\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                }
            ]
        },
        {
            "desc": "Правильный треугольник: базовые формулы",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L235,140 L130,25 Z M130,25 L130,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M120,140 L120,130 L130,130 M78,82 l8,-8 M180,74 l8,8\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"240\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"18\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"134\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>",
            "theory_task": "Правильный треугольник: высота равна $2\\sqrt3$. Найдите сторону этого треугольника.",
            "theory_sol": "В правильном треугольнике высота равна $h=\\frac{a\\sqrt3}{2}$.<br><br>Поэтому $a=\\frac{2h}{\\sqrt3}=\\frac{2\\cdot 2\\sqrt3}{\\sqrt3}=4$.\\<br><br><b>Ответ:</b> 4",
            "tasks": [
                {
                    "text": "Высота правильного треугольника равна $2\\sqrt3$. Найдите сторону этого треугольника.",
                    "answer": "4",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L235,140 L130,25 Z M130,25 L130,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M120,140 L120,130 L130,130 M78,82 l8,-8 M180,74 l8,8\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"240\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"18\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"134\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "Сторона правильного треугольника равна $\\sqrt3$. Найдите радиус окружности, описанной около этого треугольника.",
                    "answer": "1",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L235,140 L130,25 Z M130,25 L130,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M120,140 L120,130 L130,130 M78,82 l8,-8 M180,74 l8,8\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"240\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"18\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"134\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "Радиус окружности, вписанной в правильный треугольник, равен $6$. Найдите высоту этого треугольника.",
                    "answer": "18",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L235,140 L130,25 Z M130,25 L130,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M120,140 L120,130 L130,130 M78,82 l8,-8 M180,74 l8,8\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"240\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"18\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"134\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "Радиус окружности, вписанной в правильный треугольник, равен $4$. Найдите высоту этого треугольника.",
                    "answer": "12",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L235,140 L130,25 Z M130,25 L130,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M120,140 L120,130 L130,130 M78,82 l8,-8 M180,74 l8,8\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"240\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"18\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"134\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "Высота правильного треугольника равна $9\\sqrt3$. Найдите сторону этого треугольника.",
                    "answer": "18",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M25,140 L235,140 L130,25 Z M130,25 L130,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M120,140 L120,130 L130,130 M78,82 l8,-8 M180,74 l8,8\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"12\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"240\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"18\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"134\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                }
            ]
        },
        {
            "desc": "Треугольник и вписанная окружность: площадь",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M60,135 L200,135 L130,25 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><circle cx=\"130\" cy=\"98\" r=\"37\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><text x=\"47\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"205\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"18\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>",
            "theory_task": "Периметр треугольника равен $12$, а радиус вписанной окружности равен $1$. Найдите площадь этого треугольника.",
            "theory_sol": "Площадь треугольника равна произведению радиуса вписанной окружности на полупериметр: $S=rp$.<br><br>Здесь полупериметр $p=\\frac{12}{2}=6$, поэтому $S=1\\cdot 6=6$.\\<br><br><b>Ответ:</b> 6",
            "tasks": [
                {
                    "text": "Периметр треугольника равен $12$, а радиус вписанной окружности равен $1$. Найдите площадь треугольника.",
                    "answer": "6",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M60,135 L200,135 L130,25 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><circle cx=\"130\" cy=\"98\" r=\"37\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><text x=\"47\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"205\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"18\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "Периметр треугольника равен $36$, а радиус вписанной окружности равен $2$. Найдите площадь треугольника.",
                    "answer": "36",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M60,135 L200,135 L130,25 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><circle cx=\"130\" cy=\"98\" r=\"37\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><text x=\"47\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"205\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"18\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "Периметр треугольника равен $18$, а радиус вписанной окружности равен $3$. Найдите площадь треугольника.",
                    "answer": "27",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M60,135 L200,135 L130,25 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><circle cx=\"130\" cy=\"98\" r=\"37\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><text x=\"47\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"205\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"18\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "Периметр треугольника равен $20$, а радиус вписанной окружности равен $1{,}5$. Найдите площадь треугольника.",
                    "answer": "15",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M60,135 L200,135 L130,25 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><circle cx=\"130\" cy=\"98\" r=\"37\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><text x=\"47\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"205\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"18\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "Периметр треугольника равен $50$, а радиус вписанной окружности равен $2{,}4$. Найдите площадь треугольника.",
                    "answer": "60",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M60,135 L200,135 L130,25 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><circle cx=\"130\" cy=\"98\" r=\"37\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><text x=\"47\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"205\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"18\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                }
            ]
        },
        {
            "desc": "Треугольник и вписанная окружность: периметр",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M60,135 L200,135 L130,25 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><circle cx=\"130\" cy=\"98\" r=\"37\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><text x=\"47\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"205\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"18\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>",
            "theory_task": "Площадь треугольника равна $24$, а радиус вписанной окружности равен $2$. Найдите периметр этого треугольника.",
            "theory_sol": "Используем формулу $S=rp$, где $p$ — полупериметр.<br><br>$p=\\frac{S}{r}=\\frac{24}{2}=12$, значит периметр равен $2p=24$.\\<br><br><b>Ответ:</b> 24",
            "tasks": [
                {
                    "text": "Площадь треугольника равна $24$, а радиус вписанной окружности равен $2$. Найдите периметр треугольника.",
                    "answer": "24",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M60,135 L200,135 L130,25 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><circle cx=\"130\" cy=\"98\" r=\"37\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><text x=\"47\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"205\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"18\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "Площадь треугольника равна $54$, а радиус вписанной окружности равен $3$. Найдите периметр треугольника.",
                    "answer": "36",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M60,135 L200,135 L130,25 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><circle cx=\"130\" cy=\"98\" r=\"37\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><text x=\"47\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"205\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"18\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "Площадь треугольника равна $25$, а радиус вписанной окружности равен $5$. Найдите периметр треугольника.",
                    "answer": "10",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M60,135 L200,135 L130,25 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><circle cx=\"130\" cy=\"98\" r=\"37\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><text x=\"47\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"205\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"18\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "Площадь треугольника равна $28$, а радиус вписанной окружности равен $2$. Найдите периметр треугольника.",
                    "answer": "28",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M60,135 L200,135 L130,25 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><circle cx=\"130\" cy=\"98\" r=\"37\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><text x=\"47\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"205\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"18\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "Площадь треугольника равна $45$, а радиус вписанной окружности равен $1{,}8$. Найдите периметр треугольника.",
                    "answer": "50",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M60,135 L200,135 L130,25 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><circle cx=\"130\" cy=\"98\" r=\"37\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><text x=\"47\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"205\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"18\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                }
            ]
        },
        {
            "desc": "Параллелограмм и прямоугольник с одинаковыми сторонами",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M20,120 L100,120 L100,65 L20,65 Z M145,120 L225,120 L245,65 L165,65 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><text x=\"132\" y=\"135\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"135\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"248\" y=\"65\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"160\" y=\"62\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>",
            "theory_task": "Параллелограмм и прямоугольник имеют одинаковые стороны. Найдите острый угол параллелограмма, если его площадь равна половине площади прямоугольника. Ответ дайте в градусах.",
            "theory_sol": "Если стороны фигур одинаковы и равны $a$ и $b$, то площадь прямоугольника равна $ab$, а площадь параллелограмма равна $ab\\sin\\alpha$.<br><br>По условию $ab\\sin\\alpha=\\frac12ab$, значит $\\sin\\alpha=\\frac12$.<br><br>Острый угол параллелограмма равен $30^{\\circ}$.\\<br><br><b>Ответ:</b> 30",
            "tasks": [
                {
                    "text": "Параллелограмм и прямоугольник имеют одинаковые стороны. Найдите острый угол параллелограмма, если его площадь равна половине площади прямоугольника.",
                    "answer": "30",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M20,120 L100,120 L100,65 L20,65 Z M145,120 L225,120 L245,65 L165,65 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><text x=\"132\" y=\"135\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"135\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"248\" y=\"65\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"160\" y=\"62\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>"
                },
                {
                    "text": "Параллелограмм и прямоугольник имеют одинаковые стороны. Найдите острый угол параллелограмма, если его площадь равна $\\frac{\\sqrt2}{2}$ площади прямоугольника.",
                    "answer": "45",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M20,120 L100,120 L100,65 L20,65 Z M145,120 L225,120 L245,65 L165,65 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><text x=\"132\" y=\"135\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"135\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"248\" y=\"65\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"160\" y=\"62\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>"
                },
                {
                    "text": "Параллелограмм и прямоугольник имеют одинаковые стороны. Найдите острый угол параллелограмма, если его площадь равна $\\frac{\\sqrt3}{2}$ площади прямоугольника.",
                    "answer": "60",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M20,120 L100,120 L100,65 L20,65 Z M145,120 L225,120 L245,65 L165,65 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><text x=\"132\" y=\"135\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"135\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"248\" y=\"65\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"160\" y=\"62\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>"
                },
                {
                    "text": "Параллелограмм и прямоугольник имеют одинаковые стороны. Найдите острый угол параллелограмма, если его площадь равна $0{,}5$ площади прямоугольника.",
                    "answer": "30",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M20,120 L100,120 L100,65 L20,65 Z M145,120 L225,120 L245,65 L165,65 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><text x=\"132\" y=\"135\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"135\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"248\" y=\"65\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"160\" y=\"62\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>"
                },
                {
                    "text": "Параллелограмм и прямоугольник имеют одинаковые стороны. Найдите острый угол параллелограмма, если его площадь равна $\\frac{\\sqrt3}{2}$ площади прямоугольника.",
                    "answer": "60",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M20,120 L100,120 L100,65 L20,65 Z M145,120 L225,120 L245,65 L165,65 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><text x=\"132\" y=\"135\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"135\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"248\" y=\"65\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"160\" y=\"62\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>"
                }
            ]
        },
        {
            "desc": "Параллелограмм: периметр и отношение сторон",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,135 L190,135 L230,55 L80,55 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><text x=\"27\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"192\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"235\" y=\"55\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"65\" y=\"55\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>",
            "theory_task": "Периметр параллелограмма равен $88$, а его стороны относятся как $4:7$. Найдите большую сторону параллелограмма.",
            "theory_sol": "Пусть стороны равны $4x$ и $7x$. Тогда $2(4x+7x)=88$.<br><br>$22x=88$, откуда $x=4$. Большая сторона равна $7x=28$.\\<br><br><b>Ответ:</b> 28",
            "tasks": [
                {
                    "text": "Периметр параллелограмма равен $88$, а его стороны относятся как $4:7$. Найдите большую сторону.",
                    "answer": "28",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,135 L190,135 L230,55 L80,55 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><text x=\"27\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"192\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"235\" y=\"55\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"65\" y=\"55\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                },
                {
                    "text": "Периметр параллелограмма равен $70$, а его стороны относятся как $3:4$. Найдите большую сторону.",
                    "answer": "20",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,135 L190,135 L230,55 L80,55 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><text x=\"27\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"192\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"235\" y=\"55\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"65\" y=\"55\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                },
                {
                    "text": "Периметр параллелограмма равен $46$. Одна сторона в $3$ раза больше другой. Найдите меньшую сторону.",
                    "answer": "5,75",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,135 L190,135 L230,55 L80,55 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><text x=\"27\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"192\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"235\" y=\"55\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"65\" y=\"55\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                },
                {
                    "text": "Периметр параллелограмма равен $60$, а его стороны относятся как $2:3$. Найдите большую сторону.",
                    "answer": "18",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,135 L190,135 L230,55 L80,55 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><text x=\"27\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"192\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"235\" y=\"55\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"65\" y=\"55\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                },
                {
                    "text": "Периметр параллелограмма равен $90$, а его стороны относятся как $1:4$. Найдите большую сторону.",
                    "answer": "36",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,135 L190,135 L230,55 L80,55 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><text x=\"27\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"192\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"235\" y=\"55\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"65\" y=\"55\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                }
            ]
        },
        {
            "desc": "Ромб: сторона и угол",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M50,115 L130,55 L210,115 L130,155 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><text x=\"37\" y=\"120\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"130\" y=\"50\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"215\" y=\"120\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"130\" y=\"170\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>",
            "theory_task": "Найдите площадь ромба, если его сторона равна $6$, а острый угол равен $30^{\\circ}$.",
            "theory_sol": "Площадь ромба через сторону и угол: $S=a^2\\sin\\alpha$.<br><br>$S=6^2\\cdot \\sin30^{\\circ}=36\\cdot \\frac12=18$.\\<br><br><b>Ответ:</b> 18",
            "tasks": [
                {
                    "text": "Найдите площадь ромба, если его сторона равна $2$, а острый угол равен $30^{\\circ}$.",
                    "answer": "2",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M50,115 L130,55 L210,115 L130,155 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><text x=\"37\" y=\"120\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"130\" y=\"50\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"215\" y=\"120\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"130\" y=\"170\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                },
                {
                    "text": "Найдите площадь ромба, если его сторона равна $6$, а острый угол равен $30^{\\circ}$.",
                    "answer": "18",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M50,115 L130,55 L210,115 L130,155 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><text x=\"37\" y=\"120\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"130\" y=\"50\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"215\" y=\"120\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"130\" y=\"170\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                },
                {
                    "text": "Найдите площадь ромба, если его сторона равна $8$, а угол равен $90^{\\circ}$.",
                    "answer": "64",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M50,115 L130,55 L210,115 L130,155 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><text x=\"37\" y=\"120\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"130\" y=\"50\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"215\" y=\"120\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"130\" y=\"170\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                },
                {
                    "text": "Найдите площадь ромба, если его сторона равна $10$, а острый угол равен $30^{\\circ}$.",
                    "answer": "50",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M50,115 L130,55 L210,115 L130,155 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><text x=\"37\" y=\"120\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"130\" y=\"50\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"215\" y=\"120\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"130\" y=\"170\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                },
                {
                    "text": "Найдите площадь ромба, если его сторона равна $12$, а острый угол равен $30^{\\circ}$.",
                    "answer": "72",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M50,115 L130,55 L210,115 L130,155 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><text x=\"37\" y=\"120\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"130\" y=\"50\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"215\" y=\"120\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"130\" y=\"170\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                }
            ]
        },
        {
            "desc": "Ромб: площадь по диагоналям",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M130,20 L220,90 L130,160 L40,90 Z M130,20 L130,160 M40,90 L220,90\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><text x=\"127\" y=\"16\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"225\" y=\"95\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"175\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"25\" y=\"95\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>",
            "theory_task": "Найдите площадь ромба, если его диагонали равны $4$ и $12$.",
            "theory_sol": "Площадь ромба равна половине произведения диагоналей: $S=\\frac12 d_1d_2$.<br><br>$S=\\frac12\\cdot 4\\cdot 12=24$.\\<br><br><b>Ответ:</b> 24",
            "tasks": [
                {
                    "text": "Найдите площадь ромба, если его диагонали равны $4$ и $12$.",
                    "answer": "24",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M130,20 L220,90 L130,160 L40,90 Z M130,20 L130,160 M40,90 L220,90\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><text x=\"127\" y=\"16\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"225\" y=\"95\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"175\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"25\" y=\"95\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                },
                {
                    "text": "Найдите площадь ромба, если его диагонали равны $6$ и $10$.",
                    "answer": "30",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M130,20 L220,90 L130,160 L40,90 Z M130,20 L130,160 M40,90 L220,90\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><text x=\"127\" y=\"16\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"225\" y=\"95\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"175\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"25\" y=\"95\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                },
                {
                    "text": "Найдите площадь ромба, если его диагонали равны $8$ и $15$.",
                    "answer": "60",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M130,20 L220,90 L130,160 L40,90 Z M130,20 L130,160 M40,90 L220,90\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><text x=\"127\" y=\"16\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"225\" y=\"95\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"175\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"25\" y=\"95\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                },
                {
                    "text": "Найдите площадь ромба, если его диагонали равны $14$ и $6$.",
                    "answer": "42",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M130,20 L220,90 L130,160 L40,90 Z M130,20 L130,160 M40,90 L220,90\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><text x=\"127\" y=\"16\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"225\" y=\"95\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"175\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"25\" y=\"95\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                },
                {
                    "text": "Найдите площадь ромба, если его диагонали равны $20$ и $5$.",
                    "answer": "50",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M130,20 L220,90 L130,160 L40,90 Z M130,20 L130,160 M40,90 L220,90\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><text x=\"127\" y=\"16\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"225\" y=\"95\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"175\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"25\" y=\"95\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                }
            ]
        },
        {
            "desc": "Ромб: найти диагональ",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M130,20 L220,90 L130,160 L40,90 Z M130,20 L130,160 M40,90 L220,90\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><text x=\"127\" y=\"16\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"225\" y=\"95\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"175\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"25\" y=\"95\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>",
            "theory_task": "Площадь ромба равна $18$. Одна из его диагоналей равна $12$. Найдите другую диагональ.",
            "theory_sol": "По формуле площади ромба $S=\\frac12d_1d_2$.<br><br>$18=\\frac12\\cdot 12\\cdot d_2$, значит $18=6d_2$, откуда $d_2=3$.\\<br><br><b>Ответ:</b> 3",
            "tasks": [
                {
                    "text": "Площадь ромба равна $18$. Одна из его диагоналей равна $12$. Найдите другую диагональ.",
                    "answer": "3",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M130,20 L220,90 L130,160 L40,90 Z M130,20 L130,160 M40,90 L220,90\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><text x=\"127\" y=\"16\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"225\" y=\"95\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"175\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"25\" y=\"95\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                },
                {
                    "text": "Площадь ромба равна $54$. Одна из его диагоналей равна $36$. Найдите другую диагональ.",
                    "answer": "3",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M130,20 L220,90 L130,160 L40,90 Z M130,20 L130,160 M40,90 L220,90\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><text x=\"127\" y=\"16\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"225\" y=\"95\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"175\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"25\" y=\"95\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                },
                {
                    "text": "Площадь ромба равна $40$. Одна из его диагоналей равна $10$. Найдите другую диагональ.",
                    "answer": "8",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M130,20 L220,90 L130,160 L40,90 Z M130,20 L130,160 M40,90 L220,90\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><text x=\"127\" y=\"16\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"225\" y=\"95\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"175\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"25\" y=\"95\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                },
                {
                    "text": "Площадь ромба равна $84$. Одна из его диагоналей равна $12$. Найдите другую диагональ.",
                    "answer": "14",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M130,20 L220,90 L130,160 L40,90 Z M130,20 L130,160 M40,90 L220,90\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><text x=\"127\" y=\"16\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"225\" y=\"95\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"175\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"25\" y=\"95\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                },
                {
                    "text": "Площадь ромба равна $96$. Одна из его диагоналей равна $16$. Найдите другую диагональ.",
                    "answer": "12",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M130,20 L220,90 L130,160 L40,90 Z M130,20 L130,160 M40,90 L220,90\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><text x=\"127\" y=\"16\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"225\" y=\"95\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"175\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"25\" y=\"95\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                }
            ]
        },
        {
            "desc": "Ромб: диагонали и высота",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M130,20 L220,90 L130,160 L40,90 Z M130,20 L130,160 M40,90 L220,90\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><text x=\"127\" y=\"16\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"225\" y=\"95\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"175\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"25\" y=\"95\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>",
            "theory_task": "Диагонали ромба относятся как $3:4$, а периметр ромба равен $200$. Найдите высоту ромба.",
            "theory_sol": "Пусть диагонали равны $3x$ и $4x$. Сторона ромба равна гипотенузе прямоугольного треугольника с катетами $\\frac{3x}{2}$ и $\\frac{4x}{2}$, то есть $\\frac{5x}{2}$.<br><br>Тогда периметр $4\\cdot \\frac{5x}{2}=10x=200$, откуда $x=20$.<br><br>Диагонали равны $60$ и $80$, площадь $S=\\frac12\\cdot 60\\cdot 80=2400$. Сторона равна $50$, поэтому высота $h=\\frac{S}{a}=\\frac{2400}{50}=48$.\\<br><br><b>Ответ:</b> 48",
            "tasks": [
                {
                    "text": "Диагонали ромба относятся как $3:4$, а периметр равен $100$. Найдите высоту ромба.",
                    "answer": "24",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M130,20 L220,90 L130,160 L40,90 Z M130,20 L130,160 M40,90 L220,90\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><text x=\"127\" y=\"16\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"225\" y=\"95\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"175\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"25\" y=\"95\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                },
                {
                    "text": "Диагонали ромба относятся как $3:4$, а периметр равен $200$. Найдите высоту ромба.",
                    "answer": "48",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M130,20 L220,90 L130,160 L40,90 Z M130,20 L130,160 M40,90 L220,90\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><text x=\"127\" y=\"16\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"225\" y=\"95\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"175\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"25\" y=\"95\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                },
                {
                    "text": "Диагонали ромба относятся как $3:4$, а периметр равен $50$. Найдите высоту ромба.",
                    "answer": "12",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M130,20 L220,90 L130,160 L40,90 Z M130,20 L130,160 M40,90 L220,90\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><text x=\"127\" y=\"16\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"225\" y=\"95\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"175\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"25\" y=\"95\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                },
                {
                    "text": "Диагонали ромба относятся как $3:4$, а периметр равен $75$. Найдите высоту ромба.",
                    "answer": "18",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M130,20 L220,90 L130,160 L40,90 Z M130,20 L130,160 M40,90 L220,90\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><text x=\"127\" y=\"16\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"225\" y=\"95\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"175\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"25\" y=\"95\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                },
                {
                    "text": "Диагонали ромба относятся как $3:4$, а периметр равен $125$. Найдите высоту ромба.",
                    "answer": "30",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M130,20 L220,90 L130,160 L40,90 Z M130,20 L130,160 M40,90 L220,90\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><text x=\"127\" y=\"16\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"225\" y=\"95\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"175\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"25\" y=\"95\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                }
            ]
        },
        {
            "desc": "Трапеция: средняя линия, высота, площадь",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L230,140 L190,55 L80,55 Z M58,98 L210,98 M80,55 L80,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M70,140 L70,130 L80,130\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"193\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"65\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>",
            "theory_task": "Высота трапеции равна $10$, площадь равна $150$. Найдите среднюю линию трапеции.",
            "theory_sol": "Площадь трапеции равна произведению средней линии на высоту: $S=mh$.<br><br>$m=\\frac{S}{h}=\\frac{150}{10}=15$.\\<br><br><b>Ответ:</b> 15",
            "tasks": [
                {
                    "text": "Высота трапеции равна $10$, площадь равна $150$. Найдите среднюю линию трапеции.",
                    "answer": "15",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L230,140 L190,55 L80,55 Z M58,98 L210,98 M80,55 L80,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M70,140 L70,130 L80,130\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"193\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"65\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>"
                },
                {
                    "text": "Средняя линия трапеции равна $12$, площадь равна $96$. Найдите высоту трапеции.",
                    "answer": "8",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L230,140 L190,55 L80,55 Z M58,98 L210,98 M80,55 L80,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M70,140 L70,130 L80,130\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"193\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"65\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>"
                },
                {
                    "text": "Высота трапеции равна $7$, площадь равна $168$. Найдите среднюю линию трапеции.",
                    "answer": "24",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L230,140 L190,55 L80,55 Z M58,98 L210,98 M80,55 L80,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M70,140 L70,130 L80,130\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"193\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"65\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>"
                },
                {
                    "text": "Средняя линия трапеции равна $20$, площадь равна $140$. Найдите высоту трапеции.",
                    "answer": "7",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L230,140 L190,55 L80,55 Z M58,98 L210,98 M80,55 L80,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M70,140 L70,130 L80,130\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"193\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"65\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>"
                },
                {
                    "text": "Высота трапеции равна $12$, площадь равна $216$. Найдите среднюю линию трапеции.",
                    "answer": "18",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L230,140 L190,55 L80,55 Z M58,98 L210,98 M80,55 L80,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M70,140 L70,130 L80,130\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"193\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"65\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>"
                }
            ]
        },
        {
            "desc": "Трапеция: найти второе основание",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L230,140 L185,55 L80,55 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"188\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"65\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>",
            "theory_task": "Основание трапеции равно $13$, высота равна $5$, а площадь равна $50$. Найдите второе основание трапеции.",
            "theory_sol": "Пусть второе основание равно $x$. Тогда $50=\\frac{13+x}{2}\\cdot 5$.<br><br>$13+x=20$, откуда $x=7$.\\<br><br><b>Ответ:</b> 7",
            "tasks": [
                {
                    "text": "Основание трапеции равно $13$, высота равна $5$, а площадь равна $50$. Найдите второе основание.",
                    "answer": "7",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L230,140 L185,55 L80,55 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"188\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"65\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                },
                {
                    "text": "Основание трапеции равно $8$, высота равна $10$, а площадь равна $90$. Найдите второе основание.",
                    "answer": "10",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L230,140 L185,55 L80,55 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"188\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"65\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                },
                {
                    "text": "Основание трапеции равно $18$, высота равна $4$, а площадь равна $48$. Найдите второе основание.",
                    "answer": "6",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L230,140 L185,55 L80,55 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"188\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"65\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                },
                {
                    "text": "Основание трапеции равно $12$, высота равна $6$, а площадь равна $72$. Найдите второе основание.",
                    "answer": "12",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L230,140 L185,55 L80,55 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"188\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"65\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                },
                {
                    "text": "Основание трапеции равно $25$, высота равна $8$, а площадь равна $180$. Найдите второе основание.",
                    "answer": "20",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L230,140 L185,55 L80,55 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"188\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"65\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                }
            ]
        },
        {
            "desc": "Равнобедренная трапеция: площадь по основаниям и боковой стороне",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L230,140 L185,55 L80,55 Z M80,55 L80,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M70,140 L70,130 L80,130 M58,95 l8,-8 M205,95 l8,8\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"188\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"65\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>",
            "theory_task": "Основания равнобедренной трапеции равны $14$ и $26$, а боковая сторона равна $10$. Найдите площадь трапеции.",
            "theory_sol": "Половина разности оснований равна $\\frac{26-14}{2}=6$.<br><br>Высота трапеции: $h=\\sqrt{10^2-6^2}=8$.<br><br>Площадь: $S=\\frac{14+26}{2}\\cdot 8=160$.\\<br><br><b>Ответ:</b> 160",
            "tasks": [
                {
                    "text": "Основания равнобедренной трапеции равны $14$ и $26$, боковая сторона равна $10$. Найдите площадь трапеции.",
                    "answer": "160",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L230,140 L185,55 L80,55 Z M80,55 L80,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M70,140 L70,130 L80,130 M58,95 l8,-8 M205,95 l8,8\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"188\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"65\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>"
                },
                {
                    "text": "Основания равнобедренной трапеции равны $7$ и $13$, боковая сторона равна $5$. Найдите площадь трапеции.",
                    "answer": "40",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L230,140 L185,55 L80,55 Z M80,55 L80,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M70,140 L70,130 L80,130 M58,95 l8,-8 M205,95 l8,8\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"188\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"65\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>"
                },
                {
                    "text": "Основания равнобедренной трапеции равны $18$ и $6$, боковая сторона равна $10$. Найдите площадь трапеции.",
                    "answer": "96",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L230,140 L185,55 L80,55 Z M80,55 L80,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M70,140 L70,130 L80,130 M58,95 l8,-8 M205,95 l8,8\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"188\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"65\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>"
                },
                {
                    "text": "Основания равнобедренной трапеции равны $10$ и $26$, боковая сторона равна $10$. Найдите площадь трапеции.",
                    "answer": "108",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L230,140 L185,55 L80,55 Z M80,55 L80,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M70,140 L70,130 L80,130 M58,95 l8,-8 M205,95 l8,8\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"188\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"65\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>"
                },
                {
                    "text": "Основания равнобедренной трапеции равны $8$ и $20$, боковая сторона равна $10$. Найдите площадь трапеции.",
                    "answer": "112",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L230,140 L185,55 L80,55 Z M80,55 L80,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M70,140 L70,130 L80,130 M58,95 l8,-8 M205,95 l8,8\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"188\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"65\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>"
                }
            ]
        },
        {
            "desc": "Равнобедренная трапеция: периметр",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L230,140 L185,55 L80,55 Z M80,55 L80,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M70,140 L70,130 L80,130 M58,95 l8,-8 M205,95 l8,8\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"188\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"65\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>",
            "theory_task": "Основания равнобедренной трапеции равны $6$ и $12$, а её площадь равна $36$. Найдите периметр трапеции.",
            "theory_sol": "Средняя линия равна $\\frac{6+12}{2}=9$. Высота $h=\\frac{36}{9}=4$.<br><br>Половина разности оснований равна $\\frac{12-6}{2}=3$. Боковая сторона равна $\\sqrt{3^2+4^2}=5$.<br><br>Периметр равен $6+12+5+5=28$.\\<br><br><b>Ответ:</b> 28",
            "tasks": [
                {
                    "text": "Основания равнобедренной трапеции равны $6$ и $12$, а площадь равна $36$. Найдите периметр трапеции.",
                    "answer": "28",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L230,140 L185,55 L80,55 Z M80,55 L80,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M70,140 L70,130 L80,130 M58,95 l8,-8 M205,95 l8,8\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"188\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"65\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>"
                },
                {
                    "text": "Основания равнобедренной трапеции равны $7$ и $13$, а площадь равна $40$. Найдите периметр трапеции.",
                    "answer": "30",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L230,140 L185,55 L80,55 Z M80,55 L80,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M70,140 L70,130 L80,130 M58,95 l8,-8 M205,95 l8,8\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"188\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"65\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>"
                },
                {
                    "text": "Основания равнобедренной трапеции равны $10$ и $18$, а площадь равна $42$. Найдите периметр трапеции.",
                    "answer": "38",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L230,140 L185,55 L80,55 Z M80,55 L80,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M70,140 L70,130 L80,130 M58,95 l8,-8 M205,95 l8,8\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"188\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"65\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>"
                },
                {
                    "text": "Основания равнобедренной трапеции равны $14$ и $26$, а площадь равна $160$. Найдите периметр трапеции.",
                    "answer": "60",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L230,140 L185,55 L80,55 Z M80,55 L80,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M70,140 L70,130 L80,130 M58,95 l8,-8 M205,95 l8,8\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"188\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"65\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>"
                },
                {
                    "text": "Основания равнобедренной трапеции равны $8$ и $18$, а площадь равна $156$. Найдите периметр трапеции.",
                    "answer": "52",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L230,140 L185,55 L80,55 Z M80,55 L80,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M70,140 L70,130 L80,130 M58,95 l8,-8 M205,95 l8,8\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"188\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"65\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>"
                }
            ]
        },
        {
            "desc": "Трапеция: боковая сторона и угол",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L230,140 L185,55 L80,55 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"188\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"65\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>",
            "theory_task": "Основания трапеции равны $18$ и $6$, боковая сторона равна $7$, один из углов при основании равен $150^{\\circ}$. Найдите площадь трапеции.",
            "theory_sol": "Высота равна проекции боковой стороны на направление, перпендикулярное основанию: $h=7\\sin150^{\\circ}=7\\cdot \\frac12=3{,}5$.<br><br>Средняя линия равна $\\frac{18+6}{2}=12$. Площадь $S=mh=12\\cdot 3{,}5=42$.\\<br><br><b>Ответ:</b> 42",
            "tasks": [
                {
                    "text": "Основания трапеции равны $18$ и $6$, боковая сторона равна $7$, один из углов при основании равен $150^{\\circ}$. Найдите площадь трапеции.",
                    "answer": "42",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L230,140 L185,55 L80,55 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"188\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"65\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                },
                {
                    "text": "Основания трапеции равны $27$ и $9$, боковая сторона равна $8$, один из углов при основании равен $30^{\\circ}$. Найдите площадь трапеции.",
                    "answer": "72",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L230,140 L185,55 L80,55 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"188\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"65\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                },
                {
                    "text": "Основания трапеции равны $15$ и $9$, боковая сторона равна $\\sqrt2$, один из углов при основании равен $45^{\\circ}$. Найдите площадь трапеции.",
                    "answer": "12",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L230,140 L185,55 L80,55 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"188\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"65\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                },
                {
                    "text": "Основания трапеции равны $20$ и $8$, боковая сторона равна $10$, один из углов при основании равен $150^{\\circ}$. Найдите площадь трапеции.",
                    "answer": "70",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L230,140 L185,55 L80,55 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"188\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"65\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                },
                {
                    "text": "Основания трапеции равны $14$ и $6$, боковая сторона равна $4$, один из углов при основании равен $30^{\\circ}$. Найдите площадь трапеции.",
                    "answer": "20",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L230,140 L185,55 L80,55 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"188\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"65\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                }
            ]
        },
        {
            "desc": "Трапеция, описанная около окружности",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L230,140 L185,55 L80,55 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><circle cx=\"132\" cy=\"97\" r=\"42\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"188\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"65\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>",
            "theory_task": "Около окружности описана трапеция, периметр которой равен $40$. Найдите длину её средней линии.",
            "theory_sol": "В описанном четырёхугольнике суммы противоположных сторон равны. Для трапеции это даёт: сумма оснований равна сумме боковых сторон.<br><br>Поэтому периметр равен удвоенной сумме оснований: $P=2(a+b)$.<br><br>Средняя линия $m=\\frac{a+b}{2}=\\frac{P}{4}=\\frac{40}{4}=10$.\\<br><br><b>Ответ:</b> 10",
            "tasks": [
                {
                    "text": "Около окружности описана трапеция, периметр которой равен $40$. Найдите длину её средней линии.",
                    "answer": "10",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L230,140 L185,55 L80,55 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><circle cx=\"132\" cy=\"97\" r=\"42\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"188\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"65\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                },
                {
                    "text": "Около окружности описана трапеция, периметр которой равен $22$. Найдите длину её средней линии.",
                    "answer": "5,5",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L230,140 L185,55 L80,55 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><circle cx=\"132\" cy=\"97\" r=\"42\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"188\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"65\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                },
                {
                    "text": "Около окружности описана трапеция, периметр которой равен $60$. Найдите длину её средней линии.",
                    "answer": "15",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L230,140 L185,55 L80,55 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><circle cx=\"132\" cy=\"97\" r=\"42\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"188\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"65\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                },
                {
                    "text": "Около окружности описана трапеция, периметр которой равен $48$. Найдите длину её средней линии.",
                    "answer": "12",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L230,140 L185,55 L80,55 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><circle cx=\"132\" cy=\"97\" r=\"42\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"188\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"65\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                },
                {
                    "text": "Около окружности описана трапеция, периметр которой равен $34$. Найдите длину её средней линии.",
                    "answer": "8,5",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L230,140 L185,55 L80,55 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><circle cx=\"132\" cy=\"97\" r=\"42\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"235\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"188\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"65\" y=\"52\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                }
            ]
        },
        {
            "desc": "Описанный многоугольник",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M60,135 L200,135 L130,25 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><circle cx=\"130\" cy=\"98\" r=\"37\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><text x=\"47\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"205\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"18\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>",
            "theory_task": "Около окружности описан многоугольник, площадь которого равна $33$, а радиус окружности равен $3$. Найдите периметр многоугольника.",
            "theory_sol": "Для многоугольника, описанного около окружности, площадь равна $S=rp$, где $p$ — полупериметр.<br><br>$p=\\frac{S}{r}=\\frac{33}{3}=11$, значит периметр равен $22$.\\<br><br><b>Ответ:</b> 22",
            "tasks": [
                {
                    "text": "Около окружности описан многоугольник, площадь которого равна $33$, а радиус окружности равен $3$. Найдите периметр многоугольника.",
                    "answer": "22",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M60,135 L200,135 L130,25 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><circle cx=\"130\" cy=\"98\" r=\"37\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><text x=\"47\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"205\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"18\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "Около окружности описан многоугольник, площадь которого равна $5$, а периметр равен $10$. Найдите радиус окружности.",
                    "answer": "1",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M60,135 L200,135 L130,25 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><circle cx=\"130\" cy=\"98\" r=\"37\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><text x=\"47\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"205\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"18\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "Около окружности описан многоугольник, радиус окружности равен $3$, а периметр равен $20$. Найдите площадь многоугольника.",
                    "answer": "30",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M60,135 L200,135 L130,25 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><circle cx=\"130\" cy=\"98\" r=\"37\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><text x=\"47\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"205\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"18\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "Около окружности описан многоугольник, площадь которого равна $48$, а радиус окружности равен $4$. Найдите периметр многоугольника.",
                    "answer": "24",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M60,135 L200,135 L130,25 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><circle cx=\"130\" cy=\"98\" r=\"37\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><text x=\"47\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"205\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"18\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "Около окружности описан многоугольник, площадь которого равна $18$, а периметр равен $12$. Найдите радиус окружности.",
                    "answer": "3",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M60,135 L200,135 L130,25 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><circle cx=\"130\" cy=\"98\" r=\"37\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><text x=\"47\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"205\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"18\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                }
            ]
        },
        {
            "desc": "Окружности в правильном треугольнике: описанная окружность",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><circle cx=\"130\" cy=\"88\" r=\"58\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><path d=\"M80,118 L180,118 L130,30 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><circle cx=\"130\" cy=\"88\" r=\"2\" fill=\"black\"/><text x=\"135\" y=\"90\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">O</text></svg>",
            "theory_task": "Сторона правильного треугольника равна $\\sqrt3$. Найдите радиус окружности, описанной около этого треугольника.",
            "theory_sol": "Для правильного треугольника $R=\\frac{a}{\\sqrt3}$.<br><br>$R=\\frac{\\sqrt3}{\\sqrt3}=1$.\\<br><br><b>Ответ:</b> 1",
            "tasks": [
                {
                    "text": "Сторона правильного треугольника равна $\\sqrt3$. Найдите радиус окружности, описанной около этого треугольника.",
                    "answer": "1",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><circle cx=\"130\" cy=\"88\" r=\"58\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><path d=\"M80,118 L180,118 L130,30 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><circle cx=\"130\" cy=\"88\" r=\"2\" fill=\"black\"/><text x=\"135\" y=\"90\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">O</text></svg>"
                },
                {
                    "text": "Сторона правильного треугольника равна $3\\sqrt3$. Найдите радиус окружности, описанной около этого треугольника.",
                    "answer": "3",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><circle cx=\"130\" cy=\"88\" r=\"58\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><path d=\"M80,118 L180,118 L130,30 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><circle cx=\"130\" cy=\"88\" r=\"2\" fill=\"black\"/><text x=\"135\" y=\"90\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">O</text></svg>"
                },
                {
                    "text": "Радиус окружности, описанной около правильного треугольника, равен $2\\sqrt3$. Найдите сторону этого треугольника.",
                    "answer": "6",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><circle cx=\"130\" cy=\"88\" r=\"58\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><path d=\"M80,118 L180,118 L130,30 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><circle cx=\"130\" cy=\"88\" r=\"2\" fill=\"black\"/><text x=\"135\" y=\"90\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">O</text></svg>"
                },
                {
                    "text": "Радиус окружности, описанной около правильного треугольника, равен $3\\sqrt3$. Найдите сторону этого треугольника.",
                    "answer": "9",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><circle cx=\"130\" cy=\"88\" r=\"58\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><path d=\"M80,118 L180,118 L130,30 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><circle cx=\"130\" cy=\"88\" r=\"2\" fill=\"black\"/><text x=\"135\" y=\"90\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">O</text></svg>"
                },
                {
                    "text": "Сторона правильного треугольника равна $5\\sqrt3$. Найдите радиус окружности, описанной около этого треугольника.",
                    "answer": "5",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><circle cx=\"130\" cy=\"88\" r=\"58\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><path d=\"M80,118 L180,118 L130,30 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><circle cx=\"130\" cy=\"88\" r=\"2\" fill=\"black\"/><text x=\"135\" y=\"90\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">O</text></svg>"
                }
            ]
        },
        {
            "desc": "Окружности в правильном треугольнике: вписанная окружность",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M60,135 L200,135 L130,25 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><circle cx=\"130\" cy=\"98\" r=\"37\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"130\" cy=\"98\" r=\"2\" fill=\"black\"/><text x=\"135\" y=\"100\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">O</text></svg>",
            "theory_task": "Радиус окружности, вписанной в правильный треугольник, равен $6$. Найдите высоту этого треугольника.",
            "theory_sol": "В правильном треугольнике радиус вписанной окружности равен трети высоты: $r=\\frac{h}{3}$.<br><br>Значит $h=3r=18$.\\<br><br><b>Ответ:</b> 18",
            "tasks": [
                {
                    "text": "Радиус окружности, вписанной в правильный треугольник, равен $6$. Найдите высоту этого треугольника.",
                    "answer": "18",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M60,135 L200,135 L130,25 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><circle cx=\"130\" cy=\"98\" r=\"37\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"130\" cy=\"98\" r=\"2\" fill=\"black\"/><text x=\"135\" y=\"100\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">O</text></svg>"
                },
                {
                    "text": "Высота правильного треугольника равна $3$. Найдите радиус вписанной окружности.",
                    "answer": "1",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M60,135 L200,135 L130,25 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><circle cx=\"130\" cy=\"98\" r=\"37\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"130\" cy=\"98\" r=\"2\" fill=\"black\"/><text x=\"135\" y=\"100\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">O</text></svg>"
                },
                {
                    "text": "Сторона правильного треугольника равна $2\\sqrt3$. Найдите радиус вписанной окружности.",
                    "answer": "1",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M60,135 L200,135 L130,25 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><circle cx=\"130\" cy=\"98\" r=\"37\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"130\" cy=\"98\" r=\"2\" fill=\"black\"/><text x=\"135\" y=\"100\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">O</text></svg>"
                },
                {
                    "text": "Радиус окружности, вписанной в правильный треугольник, равен $2{,}5$. Найдите высоту этого треугольника.",
                    "answer": "7,5",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M60,135 L200,135 L130,25 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><circle cx=\"130\" cy=\"98\" r=\"37\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"130\" cy=\"98\" r=\"2\" fill=\"black\"/><text x=\"135\" y=\"100\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">O</text></svg>"
                },
                {
                    "text": "Высота правильного треугольника равна $12$. Найдите радиус вписанной окружности.",
                    "answer": "4",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M60,135 L200,135 L130,25 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><circle cx=\"130\" cy=\"98\" r=\"37\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"130\" cy=\"98\" r=\"2\" fill=\"black\"/><text x=\"135\" y=\"100\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">O</text></svg>"
                }
            ]
        },
        {
            "desc": "Прямоугольный треугольник и описанная окружность",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><circle cx=\"130\" cy=\"90\" r=\"70\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><path d=\"M60,140 L200,140 L200,65 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M190,140 L190,130 L200,130\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"47\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"205\" y=\"65\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"205\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>",
            "theory_task": "Гипотенуза прямоугольного треугольника равна $12$. Найдите радиус окружности, описанной около этого треугольника.",
            "theory_sol": "В прямоугольном треугольнике центр описанной окружности — середина гипотенузы, поэтому $R=\\frac{c}{2}$.<br><br>$R=\\frac{12}{2}=6$.\\<br><br><b>Ответ:</b> 6",
            "tasks": [
                {
                    "text": "Гипотенуза прямоугольного треугольника равна $12$. Найдите радиус окружности, описанной около этого треугольника.",
                    "answer": "6",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><circle cx=\"130\" cy=\"90\" r=\"70\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><path d=\"M60,140 L200,140 L200,65 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M190,140 L190,130 L200,130\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"47\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"205\" y=\"65\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"205\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "Радиус окружности, описанной около прямоугольного треугольника, равен $3$. Найдите гипотенузу треугольника.",
                    "answer": "6",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><circle cx=\"130\" cy=\"90\" r=\"70\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><path d=\"M60,140 L200,140 L200,65 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M190,140 L190,130 L200,130\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"47\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"205\" y=\"65\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"205\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "Катеты прямоугольного треугольника равны $6$ и $8$. Найдите радиус окружности, описанной около этого треугольника.",
                    "answer": "5",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><circle cx=\"130\" cy=\"90\" r=\"70\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><path d=\"M60,140 L200,140 L200,65 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M190,140 L190,130 L200,130\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"47\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"205\" y=\"65\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"205\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "Гипотенуза прямоугольного треугольника равна $25$. Найдите радиус окружности, описанной около этого треугольника.",
                    "answer": "12,5",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><circle cx=\"130\" cy=\"90\" r=\"70\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><path d=\"M60,140 L200,140 L200,65 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M190,140 L190,130 L200,130\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"47\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"205\" y=\"65\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"205\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "Катеты прямоугольного треугольника равны $10$ и $24$. Найдите радиус окружности, описанной около этого треугольника.",
                    "answer": "13",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><circle cx=\"130\" cy=\"90\" r=\"70\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><path d=\"M60,140 L200,140 L200,65 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M190,140 L190,130 L200,130\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"47\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"205\" y=\"65\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"205\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                }
            ]
        },
        {
            "desc": "Касательная и хорда",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><circle cx=\"110\" cy=\"90\" r=\"58\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><path d=\"M80,40 L155,125 M20,40 L205,40\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><circle cx=\"110\" cy=\"90\" r=\"2\" fill=\"black\"/><text x=\"113\" y=\"95\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">O</text><text x=\"72\" y=\"38\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"160\" y=\"135\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"210\" y=\"45\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>",
            "theory_task": "Хорда $AB$ стягивает дугу окружности в $92^{\\circ}$. Найдите угол между этой хордой и касательной к окружности, проведённой через точку $B$. Ответ дайте в градусах.",
            "theory_sol": "Угол между касательной и хордой равен половине градусной меры дуги, заключённой между ними.<br><br>Искомый угол равен $\\frac{92^{\\circ}}{2}=46^{\\circ}$.\\<br><br><b>Ответ:</b> 46",
            "tasks": [
                {
                    "text": "Хорда $AB$ стягивает дугу окружности в $92^{\\circ}$. Найдите угол между этой хордой и касательной к окружности, проведённой через точку $B$.",
                    "answer": "46",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><circle cx=\"110\" cy=\"90\" r=\"58\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><path d=\"M80,40 L155,125 M20,40 L205,40\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><circle cx=\"110\" cy=\"90\" r=\"2\" fill=\"black\"/><text x=\"113\" y=\"95\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">O</text><text x=\"72\" y=\"38\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"160\" y=\"135\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"210\" y=\"45\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "Хорда $AB$ стягивает дугу окружности в $80^{\\circ}$. Найдите угол между этой хордой и касательной к окружности, проведённой через точку $B$.",
                    "answer": "40",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><circle cx=\"110\" cy=\"90\" r=\"58\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><path d=\"M80,40 L155,125 M20,40 L205,40\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><circle cx=\"110\" cy=\"90\" r=\"2\" fill=\"black\"/><text x=\"113\" y=\"95\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">O</text><text x=\"72\" y=\"38\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"160\" y=\"135\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"210\" y=\"45\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "Хорда $AB$ стягивает дугу окружности в $110^{\\circ}$. Найдите угол между этой хордой и касательной к окружности, проведённой через точку $B$.",
                    "answer": "55",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><circle cx=\"110\" cy=\"90\" r=\"58\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><path d=\"M80,40 L155,125 M20,40 L205,40\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><circle cx=\"110\" cy=\"90\" r=\"2\" fill=\"black\"/><text x=\"113\" y=\"95\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">O</text><text x=\"72\" y=\"38\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"160\" y=\"135\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"210\" y=\"45\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "Хорда $AB$ стягивает дугу окружности в $34^{\\circ}$. Найдите угол между этой хордой и касательной к окружности, проведённой через точку $B$.",
                    "answer": "17",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><circle cx=\"110\" cy=\"90\" r=\"58\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><path d=\"M80,40 L155,125 M20,40 L205,40\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><circle cx=\"110\" cy=\"90\" r=\"2\" fill=\"black\"/><text x=\"113\" y=\"95\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">O</text><text x=\"72\" y=\"38\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"160\" y=\"135\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"210\" y=\"45\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "Хорда $AB$ стягивает дугу окружности в $150^{\\circ}$. Найдите угол между этой хордой и касательной к окружности, проведённой через точку $B$.",
                    "answer": "75",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><circle cx=\"110\" cy=\"90\" r=\"58\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><path d=\"M80,40 L155,125 M20,40 L205,40\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><circle cx=\"110\" cy=\"90\" r=\"2\" fill=\"black\"/><text x=\"113\" y=\"95\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">O</text><text x=\"72\" y=\"38\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"160\" y=\"135\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"210\" y=\"45\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                }
            ]
        }
    ]
};

    task1Extra.title = "Дополнительно";

    const S = {
        rightTri: `<svg width="250" height="160" viewBox="0 0 250 160" overflow="visible"><g fill="none" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M25,140 L125,40 L225,140 Z"/><path d="M113.7,51.3 L125,62.6 L136.3,51.3"/></g><g font-family="Times New Roman" font-size="16" font-style="italic"><text x="10" y="154">A</text><text x="229" y="154">B</text><text x="120" y="31">C</text></g></svg>`,
        rightHeight: `<svg width="250" height="160" viewBox="0 0 250 160" overflow="visible"><g fill="none" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M25,140 L225,140 L145,40 Z"/><path d="M145,40 L145,140"/><path d="M134.4,53.2 L145,61.7 L158.2,51.1"/><path d="M145,129 L156,129 L156,140"/></g><g font-family="Times New Roman" font-size="16" font-style="italic"><text x="10" y="154">A</text><text x="229" y="154">B</text><text x="140" y="31">C</text><text x="140" y="158">H</text></g></svg>`,
        isoHeight: `<svg width="250" height="160" viewBox="0 0 250 160" overflow="visible"><g fill="none" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M30,140 L220,140 L125,35 Z"/><path d="M125,35 L125,140"/><path d="M125,129 L136,129 L136,140"/><path d="M77,88 l7,6 M173,88 l-7,6"/></g><g font-family="Times New Roman" font-size="16" font-style="italic"><text x="14" y="154">A</text><text x="224" y="154">B</text><text x="120" y="27">C</text><text x="119" y="158">H</text></g></svg>`,
        isoAH: `<svg width="250" height="160" viewBox="0 0 250 160" overflow="visible"><g fill="none" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M25,140 L225,140 L125,35 Z"/><path d="M25,140 L172,91"/><path d="M62,100 l7,6 M187,100 l-7,6"/><path d="M160,95 L164,107 L176,103"/></g><g font-family="Times New Roman" font-size="16" font-style="italic"><text x="9" y="154">A</text><text x="229" y="154">B</text><text x="120" y="27">C</text><text x="176" y="91">H</text></g></svg>`,
        obtuseIso: `<svg width="250" height="160" viewBox="0 0 250 160" overflow="visible"><g fill="none" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M60,25 L115,140 L220,140 Z"/><path d="M60,25 L60,140"/><path d="M60,129 L71,129 L71,140"/><path d="M60,140 L115,140" stroke-dasharray="5 4"/><path d="M87,82 l7,5 M167,140 l0,-8"/></g><g font-family="Times New Roman" font-size="16" font-style="italic"><text x="45" y="22">A</text><text x="224" y="154">B</text><text x="107" y="154">C</text><text x="46" y="154">H</text></g></svg>`,
        trap: `<svg width="260" height="160" viewBox="0 0 260 160" overflow="visible"><g fill="none" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M35,140 L225,140 L180,55 L80,55 Z"/><path d="M80,55 L80,140" stroke-dasharray="5 4"/><path d="M80,129 L91,129 L91,140"/><path d="M57,96 l7,6 M201,96 l-7,6"/></g><g font-family="Times New Roman" font-size="16" font-style="italic"><text x="19" y="154">A</text><text x="70" y="48">B</text><text x="183" y="48">C</text><text x="229" y="154">D</text></g></svg>`,
        square: `<svg width="210" height="170" viewBox="0 0 210 170" overflow="visible"><g fill="none" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M45,140 L165,140 L165,20 L45,20 Z"/><path d="M45,140 L165,20"/></g><g font-family="Times New Roman" font-size="16" font-style="italic"><text x="30" y="154">A</text><text x="30" y="18">B</text><text x="169" y="18">C</text><text x="169" y="154">D</text></g></svg>`,
        rect: `<svg width="250" height="160" viewBox="0 0 250 160" overflow="visible"><g fill="none" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M35,130 L215,130 L215,55 L35,55 Z"/><path d="M35,130 L215,55"/></g><g font-family="Times New Roman" font-size="16" font-style="italic"><text x="20" y="145">A</text><text x="20" y="50">B</text><text x="219" y="50">C</text><text x="219" y="145">D</text></g></svg>`,
        triArea: `<svg width="250" height="160" viewBox="0 0 250 160" overflow="visible"><g fill="none" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M35,140 L215,140 L82,38 Z"/><path d="M57,140 A 25,25 0 0 0 51,124"/></g><g font-family="Times New Roman" font-size="16" font-style="italic"><text x="20" y="154">A</text><text x="219" y="154">B</text><text x="76" y="30">C</text></g></svg>`,
        rightMedHeight: `<svg width="250" height="160" viewBox="0 0 250 160" overflow="visible"><g fill="none" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M25,140 L225,140 L145,40 Z"/><path d="M145,40 L145,140"/><path d="M145,40 L125,140"/><path d="M134.4,53.2 L145,61.7 L158.2,51.1"/><path d="M145,129 L156,129 L156,140"/></g><g font-family="Times New Roman" font-size="16" font-style="italic"><text x="10" y="154">A</text><text x="229" y="154">B</text><text x="140" y="31">C</text><text x="149" y="158">H</text><text x="116" y="158">M</text></g></svg>`,
        rightBisectors: `<svg width="250" height="160" viewBox="0 0 250 160" overflow="visible"><g fill="none" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M35,140 L215,140 L215,50 Z"/><path d="M35,140 L160,111"/><path d="M215,50 L160,111"/><path d="M204,140 L204,129 L215,129"/></g><g font-family="Times New Roman" font-size="16" font-style="italic"><text x="20" y="154">A</text><text x="219" y="47">B</text><text x="219" y="154">C</text></g></svg>`,
        isoSimple: `<svg width="250" height="160" viewBox="0 0 250 160" overflow="visible"><g fill="none" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M35,140 L215,140 L125,35 Z"/><path d="M80,88 l7,6 M170,88 l-7,6"/></g><g font-family="Times New Roman" font-size="16" font-style="italic"><text x="19" y="154">A</text><text x="219" y="154">B</text><text x="120" y="27">C</text></g></svg>`,
        triIncircle: `<svg width="230" height="170" viewBox="0 0 230 170" overflow="visible"><g fill="none" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M45,135 L185,135 L115,25 Z"/><circle cx="115" cy="98" r="36"/></g><g font-family="Times New Roman" font-size="16" font-style="italic"><text x="30" y="150">A</text><text x="189" y="150">B</text><text x="110" y="17">C</text></g></svg>`,
        parRect: `<svg width="280" height="160" viewBox="0 0 280 160" overflow="visible"><g fill="none" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20,125 L115,125 L115,65 L20,65 Z"/><path d="M150,125 L245,125 L270,65 L175,65 Z"/></g><g font-family="Times New Roman" font-size="16" font-style="italic"><text x="136" y="140">A</text><text x="167" y="58">B</text><text x="274" y="70">C</text><text x="249" y="140">D</text></g></svg>`,
        parSimple: `<svg width="250" height="160" viewBox="0 0 250 160" overflow="visible"><g fill="none" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M35,135 L170,135 L215,55 L80,55 Z"/></g><g font-family="Times New Roman" font-size="16" font-style="italic"><text x="20" y="150">A</text><text x="174" y="150">B</text><text x="219" y="60">C</text><text x="70" y="48">D</text></g></svg>`,
        rhombus: `<svg width="230" height="160" viewBox="0 0 230 160" overflow="visible"><g fill="none" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M55,130 L150,130 L185,65 L90,65 Z"/></g><g font-family="Times New Roman" font-size="16" font-style="italic"><text x="40" y="145">A</text><text x="154" y="145">B</text><text x="189" y="70">C</text><text x="80" y="58">D</text></g></svg>`,
        rhombusDiag: `<svg width="220" height="170" viewBox="0 0 220 170" overflow="visible"><g fill="none" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M110,145 L185,85 L110,25 L35,85 Z"/><path d="M110,145 L110,25 M35,85 L185,85"/></g><g font-family="Times New Roman" font-size="16" font-style="italic"><text x="105" y="162">A</text><text x="190" y="90">B</text><text x="105" y="18">C</text><text x="20" y="90">D</text></g></svg>`,
        trapMid: `<svg width="260" height="160" viewBox="0 0 260 160" overflow="visible"><g fill="none" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M35,140 L225,140 L180,55 L80,55 Z"/><path d="M58,97 L203,97"/><path d="M80,55 L80,140" stroke-dasharray="5 4"/><path d="M80,129 L91,129 L91,140"/></g><g font-family="Times New Roman" font-size="16" font-style="italic"><text x="19" y="154">A</text><text x="70" y="48">B</text><text x="183" y="48">C</text><text x="229" y="154">D</text></g></svg>`,
        trapSimple: `<svg width="260" height="160" viewBox="0 0 260 160" overflow="visible"><g fill="none" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M35,140 L225,140 L180,55 L80,55 Z"/></g><g font-family="Times New Roman" font-size="16" font-style="italic"><text x="19" y="154">A</text><text x="70" y="48">B</text><text x="183" y="48">C</text><text x="229" y="154">D</text></g></svg>`,
        trapCirc: `<svg width="260" height="170" viewBox="0 0 260 170" overflow="visible"><g fill="none" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M35,140 L225,140 L180,50 L80,50 Z"/><circle cx="130" cy="95" r="45"/></g><g font-family="Times New Roman" font-size="16" font-style="italic"><text x="19" y="154">A</text><text x="229" y="154">B</text><text x="184" y="43">C</text><text x="70" y="43">D</text></g></svg>`,
        regTriCirc: `<svg width="220" height="170" viewBox="0 0 220 170" overflow="visible"><g fill="none" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="110" cy="85" r="58"/><path d="M60,114 L160,114 L110,27 Z"/></g><circle cx="110" cy="85" r="2" fill="black"/><g font-family="Times New Roman" font-size="16" font-style="italic"><text x="45" y="129">A</text><text x="164" y="129">B</text><text x="105" y="20">C</text><text x="114" y="90">O</text></g></svg>`,
        regTriIn: `<svg width="220" height="170" viewBox="0 0 220 170" overflow="visible"><g fill="none" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M45,135 L175,135 L110,25 Z"/><circle cx="110" cy="92" r="37"/></g><circle cx="110" cy="92" r="2" fill="black"/><g font-family="Times New Roman" font-size="16" font-style="italic"><text x="30" y="150">A</text><text x="179" y="150">B</text><text x="105" y="18">C</text><text x="114" y="97">O</text></g></svg>`,
        rightCirc: `<svg width="250" height="170" viewBox="0 0 250 170" overflow="visible"><g fill="none" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="130" cy="90" r="70"/><path d="M65,120 L195,120 L195,60 Z"/><path d="M184,120 L184,109 L195,109"/></g><g font-family="Times New Roman" font-size="16" font-style="italic"><text x="49" y="135">A</text><text x="199" y="58">B</text><text x="199" y="135">C</text></g></svg>`,
        tangentChord: `<svg width="250" height="170" viewBox="0 0 250 170" overflow="visible"><g fill="none" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="105" cy="90" r="58"/><path d="M75,40 L150,125"/><path d="M20,40 L205,40"/></g><circle cx="105" cy="90" r="2" fill="black"/><g font-family="Times New Roman" font-size="16" font-style="italic"><text x="108" y="96">O</text><text x="67" y="37">B</text><text x="154" y="137">A</text><text x="209" y="45">C</text></g></svg>`
    };

    function extraSvgFor(desc) {
        if (/высота и медиана/.test(desc)) return S.rightMedHeight;
        if (/биссектрисы/.test(desc)) return S.rightBisectors;
        if (/описанная окружность/.test(desc) && /Прямоугольный/.test(desc)) return S.rightCirc;
        if (/Правый треугольник|Прямоугольный треугольник/.test(desc)) return S.rightTri;
        if (/Высота к гипотенузе|известны катет/.test(desc)) return S.rightHeight;
        if (/высота \$AH\$/.test(desc)) return S.isoAH;
        if (/Тупоугольный/.test(desc)) return S.obtuseIso;
        if (/Равнобедренный треугольник: площадь/.test(desc)) return S.isoSimple;
        if (/Равнобедренный треугольник/.test(desc) || /Правильный треугольник: базовые/.test(desc)) return S.isoHeight;
        if (/Равнобедренная трапеция/.test(desc)) return S.trap;
        if (/Квадрат/.test(desc)) return S.square;
        if (/Прямоугольник/.test(desc)) return S.rect;
        if (/Площадь треугольника/.test(desc)) return S.triArea;
        if (/Треугольник и вписанная окружность|Описанный многоугольник/.test(desc)) return S.triIncircle;
        if (/Параллелограмм и прямоугольник/.test(desc)) return S.parRect;
        if (/Параллелограмм/.test(desc)) return S.parSimple;
        if (/Ромб: сторона/.test(desc)) return S.rhombus;
        if (/Ромб/.test(desc)) return S.rhombusDiag;
        if (/средняя линия/.test(desc)) return S.trapMid;
        if (/Трапеция, описанная/.test(desc)) return S.trapCirc;
        if (/Трапеция/.test(desc)) return S.trapSimple;
        if (/описанная окружность/.test(desc)) return S.regTriCirc;
        if (/вписанная окружность/.test(desc)) return S.regTriIn;
        if (/Касательная/.test(desc)) return S.tangentChord;
        return S.rightTri;
    }

    task1Extra.prototypes.forEach(proto => {
        const cleanSvg = extraSvgFor(proto.desc || '');
        proto.svg_code = cleanSvg;
        if (Array.isArray(proto.tasks)) {
            proto.tasks.forEach(task => { task.svg_code = cleanSvg; });
        }
    });


    window.extraDatabase[1] = task1Extra;
    window.extraDatabase.task1 = task1Extra;
})();
