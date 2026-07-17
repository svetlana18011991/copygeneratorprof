(function() {
    window.extraDatabase = window.extraDatabase || {};

    const task3Extra = {
    "title": "Дополнительно",
    "source": "27 дополнительных прототипов из файла «ZADANIE3_FINAL_BEZ_STAROGO_PROTO3_27_PROTOTIPOV.tex»",
    "prototypes": [
        {
            "desc": "Прототип 1. Площадь поверхности составного многогранника",
            "svg_code": "<svg width=\"320\" height=\"240\" viewBox=\"0 0 320 240\" xmlns=\"http://www.w3.org/2000/svg\" overflow=\"visible\"><rect width=\"320\" height=\"240\" fill=\"white\"/><polygon points=\"80.0,179.0 160.0,179.0 160.0,139.0 120.0,139.0 120.0,59.0 80.0,59.0\" fill=\"#edf4ff\" stroke=\"#111\" stroke-width=\"2\"/><polygon points=\"55.0,200.0 135.0,200.0 135.0,160.0 95.0,160.0 95.0,80.0 55.0,80.0\" fill=\"#fff5e7\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"55.0\" y1=\"200.0\" x2=\"80.0\" y2=\"179.0\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"135.0\" y1=\"200.0\" x2=\"160.0\" y2=\"179.0\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"135.0\" y1=\"160.0\" x2=\"160.0\" y2=\"139.0\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"95.0\" y1=\"160.0\" x2=\"120.0\" y2=\"139.0\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"95.0\" y1=\"80.0\" x2=\"120.0\" y2=\"59.0\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"55.0\" y1=\"80.0\" x2=\"80.0\" y2=\"59.0\" stroke=\"#111\" stroke-width=\"2\"/><text x=\"95.0\" y=\"224\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"15\" fill=\"#111\">2</text><text x=\"34\" y=\"140.0\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"15\" fill=\"#111\">3</text><text x=\"75.0\" y=\"71.0\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"15\" fill=\"#111\">1</text><text x=\"109.0\" y=\"120.0\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"15\" fill=\"#111\">2</text><text x=\"115.0\" y=\"152.0\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"15\" fill=\"#111\">1</text><text x=\"67.5\" y=\"189.5\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"15\" fill=\"#111\">1</text><text x=\"255\" y=\"222\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"14\" fill=\"#111\">толщина 1</text></svg>",
            "theory_task": "Найдите площадь поверхности многогранника, изображённого на рисунке. Все двугранные углы многогранника прямые.",
            "theory_sol": "Рассмотрим многогранник как прямую призму толщиной $1$ с $\\Gamma$-образным основанием.<br> Площадь основания равна сумме площадей двух прямоугольников: $S_{\\mathrm{osn}}=1\\cdot3+1\\cdot1=4$.<br> Периметр основания: $P=2+1+1+2+1+3=10$.<br> Тогда площадь поверхности призмы равна $S=2S_{\\mathrm{osn}}+P\\cdot h=2\\cdot4+10\\cdot1=18$.<br><br><b>Ответ:</b> 18",
            "tasks": [
                {
                    "text": "Найдите площадь поверхности многогранника, изображённого на рисунке. Все двугранные углы многогранника прямые.",
                    "answer": "118",
                    "svg_code": "<svg width=\"320\" height=\"240\" viewBox=\"0 0 320 240\" xmlns=\"http://www.w3.org/2000/svg\" overflow=\"visible\"><rect width=\"320\" height=\"240\" fill=\"white\"/><polygon points=\"100.0,167.0 196.0,167.0 196.0,119.0 148.0,119.0 148.0,47.0 100.0,47.0\" fill=\"#edf4ff\" stroke=\"#111\" stroke-width=\"2\"/><polygon points=\"55.0,200.0 151.0,200.0 151.0,152.0 103.0,152.0 103.0,80.0 55.0,80.0\" fill=\"#fff5e7\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"55.0\" y1=\"200.0\" x2=\"100.0\" y2=\"167.0\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"151.0\" y1=\"200.0\" x2=\"196.0\" y2=\"167.0\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"151.0\" y1=\"152.0\" x2=\"196.0\" y2=\"119.0\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"103.0\" y1=\"152.0\" x2=\"148.0\" y2=\"119.0\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"103.0\" y1=\"80.0\" x2=\"148.0\" y2=\"47.0\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"55.0\" y1=\"80.0\" x2=\"100.0\" y2=\"47.0\" stroke=\"#111\" stroke-width=\"2\"/><text x=\"103.0\" y=\"224\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"15\" fill=\"#111\">4</text><text x=\"34\" y=\"140.0\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"15\" fill=\"#111\">5</text><text x=\"79.0\" y=\"71.0\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"15\" fill=\"#111\">2</text><text x=\"117.0\" y=\"116.0\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"15\" fill=\"#111\">3</text><text x=\"127.0\" y=\"144.0\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"15\" fill=\"#111\">2</text><text x=\"77.5\" y=\"183.5\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"15\" fill=\"#111\">5</text><text x=\"255\" y=\"222\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"14\" fill=\"#111\">толщина 5</text></svg>"
                },
                {
                    "text": "Найдите площадь поверхности многогранника, изображённого на рисунке. Все двугранные углы многогранника прямые.",
                    "answer": "74",
                    "svg_code": "<svg width=\"320\" height=\"240\" viewBox=\"0 0 320 240\" xmlns=\"http://www.w3.org/2000/svg\" overflow=\"visible\"><rect width=\"320\" height=\"240\" fill=\"white\"/><polygon points=\"90.0,173.0 162.0,173.0 162.0,101.0 138.0,101.0 138.0,53.0 90.0,53.0\" fill=\"#edf4ff\" stroke=\"#111\" stroke-width=\"2\"/><polygon points=\"55.0,200.0 127.0,200.0 127.0,128.0 103.0,128.0 103.0,80.0 55.0,80.0\" fill=\"#fff5e7\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"55.0\" y1=\"200.0\" x2=\"90.0\" y2=\"173.0\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"127.0\" y1=\"200.0\" x2=\"162.0\" y2=\"173.0\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"127.0\" y1=\"128.0\" x2=\"162.0\" y2=\"101.0\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"103.0\" y1=\"128.0\" x2=\"138.0\" y2=\"101.0\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"103.0\" y1=\"80.0\" x2=\"138.0\" y2=\"53.0\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"55.0\" y1=\"80.0\" x2=\"90.0\" y2=\"53.0\" stroke=\"#111\" stroke-width=\"2\"/><text x=\"91.0\" y=\"224\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"15\" fill=\"#111\">3</text><text x=\"34\" y=\"140.0\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"15\" fill=\"#111\">5</text><text x=\"79.0\" y=\"71.0\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"15\" fill=\"#111\">2</text><text x=\"117.0\" y=\"104.0\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"15\" fill=\"#111\">2</text><text x=\"115.0\" y=\"120.0\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"15\" fill=\"#111\">1</text><text x=\"72.5\" y=\"186.5\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"15\" fill=\"#111\">3</text><text x=\"255\" y=\"222\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"14\" fill=\"#111\">толщина 3</text></svg>"
                },
                {
                    "text": "Найдите площадь поверхности многогранника, изображённого на рисунке. Все двугранные углы многогранника прямые.",
                    "answer": "104",
                    "svg_code": "<svg width=\"320\" height=\"240\" viewBox=\"0 0 320 240\" xmlns=\"http://www.w3.org/2000/svg\" overflow=\"visible\"><rect width=\"320\" height=\"240\" fill=\"white\"/><polygon points=\"100.0,167.0 220.0,167.0 220.0,107.0 160.0,107.0 160.0,47.0 100.0,47.0\" fill=\"#edf4ff\" stroke=\"#111\" stroke-width=\"2\"/><polygon points=\"55.0,200.0 175.0,200.0 175.0,140.0 115.0,140.0 115.0,80.0 55.0,80.0\" fill=\"#fff5e7\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"55.0\" y1=\"200.0\" x2=\"100.0\" y2=\"167.0\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"175.0\" y1=\"200.0\" x2=\"220.0\" y2=\"167.0\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"175.0\" y1=\"140.0\" x2=\"220.0\" y2=\"107.0\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"115.0\" y1=\"140.0\" x2=\"160.0\" y2=\"107.0\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"115.0\" y1=\"80.0\" x2=\"160.0\" y2=\"47.0\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"55.0\" y1=\"80.0\" x2=\"100.0\" y2=\"47.0\" stroke=\"#111\" stroke-width=\"2\"/><text x=\"115.0\" y=\"224\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"15\" fill=\"#111\">4</text><text x=\"34\" y=\"140.0\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"15\" fill=\"#111\">4</text><text x=\"85.0\" y=\"71.0\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"15\" fill=\"#111\">2</text><text x=\"129.0\" y=\"110.0\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"15\" fill=\"#111\">2</text><text x=\"145.0\" y=\"132.0\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"15\" fill=\"#111\">2</text><text x=\"77.5\" y=\"183.5\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"15\" fill=\"#111\">5</text><text x=\"255\" y=\"222\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"14\" fill=\"#111\">толщина 5</text></svg>"
                },
                {
                    "text": "Найдите площадь поверхности многогранника, изображённого на рисунке. Все двугранные углы многогранника прямые.",
                    "answer": "64",
                    "svg_code": "<svg width=\"320\" height=\"240\" viewBox=\"0 0 320 240\" xmlns=\"http://www.w3.org/2000/svg\" overflow=\"visible\"><rect width=\"320\" height=\"240\" fill=\"white\"/><polygon points=\"85.0,176.0 181.0,176.0 181.0,128.0 133.0,128.0 133.0,56.0 85.0,56.0\" fill=\"#edf4ff\" stroke=\"#111\" stroke-width=\"2\"/><polygon points=\"55.0,200.0 151.0,200.0 151.0,152.0 103.0,152.0 103.0,80.0 55.0,80.0\" fill=\"#fff5e7\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"55.0\" y1=\"200.0\" x2=\"85.0\" y2=\"176.0\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"151.0\" y1=\"200.0\" x2=\"181.0\" y2=\"176.0\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"151.0\" y1=\"152.0\" x2=\"181.0\" y2=\"128.0\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"103.0\" y1=\"152.0\" x2=\"133.0\" y2=\"128.0\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"103.0\" y1=\"80.0\" x2=\"133.0\" y2=\"56.0\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"55.0\" y1=\"80.0\" x2=\"85.0\" y2=\"56.0\" stroke=\"#111\" stroke-width=\"2\"/><text x=\"103.0\" y=\"224\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"15\" fill=\"#111\">4</text><text x=\"34\" y=\"140.0\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"15\" fill=\"#111\">5</text><text x=\"79.0\" y=\"71.0\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"15\" fill=\"#111\">2</text><text x=\"117.0\" y=\"116.0\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"15\" fill=\"#111\">3</text><text x=\"127.0\" y=\"144.0\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"15\" fill=\"#111\">2</text><text x=\"70.0\" y=\"188.0\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"15\" fill=\"#111\">2</text><text x=\"255\" y=\"222\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"14\" fill=\"#111\">толщина 2</text></svg>"
                },
                {
                    "text": "Найдите площадь поверхности многогранника, изображённого на рисунке. Все двугранные углы многогранника прямые.",
                    "answer": "74",
                    "svg_code": "<svg width=\"320\" height=\"240\" viewBox=\"0 0 320 240\" xmlns=\"http://www.w3.org/2000/svg\" overflow=\"visible\"><rect width=\"320\" height=\"240\" fill=\"white\"/><polygon points=\"85.0,176.0 181.0,176.0 181.0,80.0 157.0,80.0 157.0,56.0 85.0,56.0\" fill=\"#edf4ff\" stroke=\"#111\" stroke-width=\"2\"/><polygon points=\"55.0,200.0 151.0,200.0 151.0,104.0 127.0,104.0 127.0,80.0 55.0,80.0\" fill=\"#fff5e7\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"55.0\" y1=\"200.0\" x2=\"85.0\" y2=\"176.0\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"151.0\" y1=\"200.0\" x2=\"181.0\" y2=\"176.0\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"151.0\" y1=\"104.0\" x2=\"181.0\" y2=\"80.0\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"127.0\" y1=\"104.0\" x2=\"157.0\" y2=\"80.0\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"127.0\" y1=\"80.0\" x2=\"157.0\" y2=\"56.0\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"55.0\" y1=\"80.0\" x2=\"85.0\" y2=\"56.0\" stroke=\"#111\" stroke-width=\"2\"/><text x=\"103.0\" y=\"224\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"15\" fill=\"#111\">4</text><text x=\"34\" y=\"140.0\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"15\" fill=\"#111\">5</text><text x=\"91.0\" y=\"71.0\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"15\" fill=\"#111\">3</text><text x=\"141.0\" y=\"92.0\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"15\" fill=\"#111\">1</text><text x=\"139.0\" y=\"96.0\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"15\" fill=\"#111\">1</text><text x=\"70.0\" y=\"188.0\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"15\" fill=\"#111\">2</text><text x=\"255\" y=\"222\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"14\" fill=\"#111\">толщина 2</text></svg>"
                }
            ]
        },
        {
            "desc": "Прототип 2. Объём составного многогранника",
            "svg_code": "<svg width=\"320\" height=\"240\" viewBox=\"0 0 320 240\" xmlns=\"http://www.w3.org/2000/svg\" overflow=\"visible\"><rect width=\"320\" height=\"240\" fill=\"white\"/><polygon points=\"89.3,189.04 173.3,189.04 173.3,126.03999999999999 131.3,126.03999999999999 131.3,105.03999999999999 89.3,105.03999999999999\" fill=\"#edf4ff\" stroke=\"#111\" stroke-width=\"2\"/><polygon points=\"62,205 146.0,205 146.0,142.0 104.0,142.0 104.0,121.0 62,121.0\" fill=\"#fff5e7\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"62\" y1=\"205\" x2=\"89.3\" y2=\"189.04\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"146.0\" y1=\"205\" x2=\"173.3\" y2=\"189.04\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"146.0\" y1=\"142.0\" x2=\"173.3\" y2=\"126.03999999999999\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"104.0\" y1=\"142.0\" x2=\"131.3\" y2=\"126.03999999999999\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"104.0\" y1=\"121.0\" x2=\"131.3\" y2=\"105.03999999999999\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"62\" y1=\"121.0\" x2=\"89.3\" y2=\"105.03999999999999\" stroke=\"#111\" stroke-width=\"2\"/><text x=\"104.0\" y=\"228\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"15\" fill=\"#111\">4</text><text x=\"42\" y=\"173.5\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"15\" fill=\"#111\">3</text><text x=\"42\" y=\"131.5\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"15\" fill=\"#111\">1</text><text x=\"83.0\" y=\"113.0\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"15\" fill=\"#111\">2</text><text x=\"75.65\" y=\"197.01999999999998\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"15\" fill=\"#111\">2</text><text x=\"235\" y=\"218\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"14\" fill=\"#111\">4×2×3 + 2×2×1</text></svg>",
            "theory_task": "Найдите объём многогранника, изображённого на рисунке. Все двугранные углы многогранника прямые.",
            "theory_sol": "Разобьём многогранник на два прямоугольных параллелепипеда.<br> Нижняя часть имеет размеры $2\\times4\\times3$, так как полная высота равна $4$, а верхняя часть имеет высоту $1$. Её объём: <br>$V_1=2\\cdot4\\cdot3=24.$<br> Верхняя часть имеет размеры $2\\times2\\times1$, её объём: <br>$V_2=2\\cdot2\\cdot1=4.$<br> Тогда объём всего многогранника: <br>$V=V_1+V_2=24+4=28.$<br><br><b>Ответ:</b> 28",
            "tasks": [
                {
                    "text": "Найдите объём многогранника, изображённого на рисунке. Все двугранные углы многогранника прямые.",
                    "answer": "40",
                    "svg_code": "<svg width=\"320\" height=\"240\" viewBox=\"0 0 320 240\" xmlns=\"http://www.w3.org/2000/svg\" overflow=\"visible\"><rect width=\"320\" height=\"240\" fill=\"white\"/><polygon points=\"93.2,186.76 117.2,186.76 117.2,150.76 105.2,150.76 105.2,102.75999999999999 93.2,102.75999999999999\" fill=\"#edf4ff\" stroke=\"#111\" stroke-width=\"2\"/><polygon points=\"62,205 86.0,205 86.0,169.0 74.0,169.0 74.0,121.0 62,121.0\" fill=\"#fff5e7\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"62\" y1=\"205\" x2=\"93.2\" y2=\"186.76\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"86.0\" y1=\"205\" x2=\"117.2\" y2=\"186.76\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"86.0\" y1=\"169.0\" x2=\"117.2\" y2=\"150.76\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"74.0\" y1=\"169.0\" x2=\"105.2\" y2=\"150.76\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"74.0\" y1=\"121.0\" x2=\"105.2\" y2=\"102.75999999999999\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"62\" y1=\"121.0\" x2=\"93.2\" y2=\"102.75999999999999\" stroke=\"#111\" stroke-width=\"2\"/><text x=\"74.0\" y=\"228\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"15\" fill=\"#111\">2</text><text x=\"42\" y=\"187.0\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"15\" fill=\"#111\">3</text><text x=\"42\" y=\"145.0\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"15\" fill=\"#111\">4</text><text x=\"68.0\" y=\"113.0\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"15\" fill=\"#111\">1</text><text x=\"77.6\" y=\"195.88\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"15\" fill=\"#111\">4</text><text x=\"235\" y=\"218\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"14\" fill=\"#111\">2×4×3 + 1×4×4</text></svg>"
                },
                {
                    "text": "Найдите объём многогранника, изображённого на рисунке. Все двугранные углы многогранника прямые.",
                    "answer": "15",
                    "svg_code": "<svg width=\"320\" height=\"240\" viewBox=\"0 0 320 240\" xmlns=\"http://www.w3.org/2000/svg\" overflow=\"visible\"><rect width=\"320\" height=\"240\" fill=\"white\"/><polygon points=\"95.80000000000001,185.24 130.46666666666667,185.24 130.46666666666667,167.90666666666667 113.13333333333333,167.90666666666667 113.13333333333333,115.90666666666668 95.80000000000001,115.90666666666668\" fill=\"#edf4ff\" stroke=\"#111\" stroke-width=\"2\"/><polygon points=\"62,205 96.66666666666666,205 96.66666666666666,187.66666666666666 79.33333333333333,187.66666666666666 79.33333333333333,135.66666666666669 62,135.66666666666669\" fill=\"#fff5e7\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"62\" y1=\"205\" x2=\"95.80000000000001\" y2=\"185.24\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"96.66666666666666\" y1=\"205\" x2=\"130.46666666666667\" y2=\"185.24\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"96.66666666666666\" y1=\"187.66666666666666\" x2=\"130.46666666666667\" y2=\"167.90666666666667\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"79.33333333333333\" y1=\"187.66666666666666\" x2=\"113.13333333333333\" y2=\"167.90666666666667\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"79.33333333333333\" y1=\"135.66666666666669\" x2=\"113.13333333333333\" y2=\"115.90666666666668\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"62\" y1=\"135.66666666666669\" x2=\"95.80000000000001\" y2=\"115.90666666666668\" stroke=\"#111\" stroke-width=\"2\"/><text x=\"79.33333333333333\" y=\"228\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"15\" fill=\"#111\">2</text><text x=\"42\" y=\"196.33333333333331\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"15\" fill=\"#111\">1</text><text x=\"42\" y=\"161.66666666666669\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"15\" fill=\"#111\">3</text><text x=\"70.66666666666666\" y=\"127.66666666666669\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"15\" fill=\"#111\">1</text><text x=\"78.9\" y=\"195.12\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"15\" fill=\"#111\">3</text><text x=\"235\" y=\"218\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"14\" fill=\"#111\">2×3×1 + 1×3×3</text></svg>"
                },
                {
                    "text": "Найдите объём многогранника, изображённого на рисунке. Все двугранные углы многогранника прямые.",
                    "answer": "32",
                    "svg_code": "<svg width=\"320\" height=\"240\" viewBox=\"0 0 320 240\" xmlns=\"http://www.w3.org/2000/svg\" overflow=\"visible\"><rect width=\"320\" height=\"240\" fill=\"white\"/><polygon points=\"95.80000000000001,185.24 121.80000000000001,185.24 121.80000000000001,159.24 121.80000000000001,159.24 121.80000000000001,133.24 95.80000000000001,133.24\" fill=\"#edf4ff\" stroke=\"#111\" stroke-width=\"2\"/><polygon points=\"62,205 88.0,205 88.0,179.0 88.0,179.0 88.0,153.0 62,153.0\" fill=\"#fff5e7\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"62\" y1=\"205\" x2=\"95.80000000000001\" y2=\"185.24\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"88.0\" y1=\"205\" x2=\"121.80000000000001\" y2=\"185.24\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"88.0\" y1=\"179.0\" x2=\"121.80000000000001\" y2=\"159.24\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"88.0\" y1=\"179.0\" x2=\"121.80000000000001\" y2=\"159.24\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"88.0\" y1=\"153.0\" x2=\"121.80000000000001\" y2=\"133.24\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"62\" y1=\"153.0\" x2=\"95.80000000000001\" y2=\"133.24\" stroke=\"#111\" stroke-width=\"2\"/><text x=\"75.0\" y=\"228\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"15\" fill=\"#111\">2</text><text x=\"42\" y=\"192.0\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"15\" fill=\"#111\">2</text><text x=\"42\" y=\"166.0\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"15\" fill=\"#111\">2</text><text x=\"75.0\" y=\"145.0\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"15\" fill=\"#111\">2</text><text x=\"78.9\" y=\"195.12\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"15\" fill=\"#111\">4</text><text x=\"235\" y=\"218\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"14\" fill=\"#111\">2×4×2 + 2×4×2</text></svg>"
                },
                {
                    "text": "Найдите объём многогранника, изображённого на рисунке. Все двугранные углы многогранника прямые.",
                    "answer": "72",
                    "svg_code": "<svg width=\"320\" height=\"240\" viewBox=\"0 0 320 240\" xmlns=\"http://www.w3.org/2000/svg\" overflow=\"visible\"><rect width=\"320\" height=\"240\" fill=\"white\"/><polygon points=\"95.80000000000001,185.24 134.8,185.24 134.8,146.24 134.8,146.24 134.8,107.24 95.80000000000001,107.24\" fill=\"#edf4ff\" stroke=\"#111\" stroke-width=\"2\"/><polygon points=\"62,205 101.0,205 101.0,166.0 101.0,166.0 101.0,127.0 62,127.0\" fill=\"#fff5e7\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"62\" y1=\"205\" x2=\"95.80000000000001\" y2=\"185.24\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"101.0\" y1=\"205\" x2=\"134.8\" y2=\"185.24\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"101.0\" y1=\"166.0\" x2=\"134.8\" y2=\"146.24\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"101.0\" y1=\"166.0\" x2=\"134.8\" y2=\"146.24\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"101.0\" y1=\"127.0\" x2=\"134.8\" y2=\"107.24\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"62\" y1=\"127.0\" x2=\"95.80000000000001\" y2=\"107.24\" stroke=\"#111\" stroke-width=\"2\"/><text x=\"81.5\" y=\"228\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"15\" fill=\"#111\">3</text><text x=\"42\" y=\"185.5\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"15\" fill=\"#111\">3</text><text x=\"42\" y=\"146.5\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"15\" fill=\"#111\">3</text><text x=\"81.5\" y=\"119.0\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"15\" fill=\"#111\">3</text><text x=\"78.9\" y=\"195.12\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"15\" fill=\"#111\">4</text><text x=\"235\" y=\"218\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"14\" fill=\"#111\">3×4×3 + 3×4×3</text></svg>"
                },
                {
                    "text": "Найдите объём многогранника, изображённого на рисунке. Все двугранные углы многогранника прямые.",
                    "answer": "33",
                    "svg_code": "<svg width=\"320\" height=\"240\" viewBox=\"0 0 320 240\" xmlns=\"http://www.w3.org/2000/svg\" overflow=\"visible\"><rect width=\"320\" height=\"240\" fill=\"white\"/><polygon points=\"94.76,185.848 161.95999999999998,185.848 161.95999999999998,152.248 111.56,152.248 111.56,101.848 94.76,101.848\" fill=\"#edf4ff\" stroke=\"#111\" stroke-width=\"2\"/><polygon points=\"62,205 129.2,205 129.2,171.4 78.8,171.4 78.8,121.0 62,121.0\" fill=\"#fff5e7\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"62\" y1=\"205\" x2=\"94.76\" y2=\"185.848\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"129.2\" y1=\"205\" x2=\"161.95999999999998\" y2=\"185.848\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"129.2\" y1=\"171.4\" x2=\"161.95999999999998\" y2=\"152.248\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"78.8\" y1=\"171.4\" x2=\"111.56\" y2=\"152.248\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"78.8\" y1=\"121.0\" x2=\"111.56\" y2=\"101.848\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"62\" y1=\"121.0\" x2=\"94.76\" y2=\"101.848\" stroke=\"#111\" stroke-width=\"2\"/><text x=\"95.6\" y=\"228\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"15\" fill=\"#111\">4</text><text x=\"42\" y=\"188.2\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"15\" fill=\"#111\">2</text><text x=\"42\" y=\"146.2\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"15\" fill=\"#111\">3</text><text x=\"70.4\" y=\"113.0\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"15\" fill=\"#111\">1</text><text x=\"78.38\" y=\"195.424\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"15\" fill=\"#111\">3</text><text x=\"235\" y=\"218\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"14\" fill=\"#111\">4×3×2 + 1×3×3</text></svg>"
                }
            ]
        },
        {
            "desc": "Прототип 3. Диагональ куба и объём",
            "svg_code": "<svg width=\"320\" height=\"240\" viewBox=\"0 0 320 240\" xmlns=\"http://www.w3.org/2000/svg\" overflow=\"visible\"><rect width=\"320\" height=\"240\" fill=\"white\"/><polygon points=\"115,45 235,45 235,165 115,165\" fill=\"#edf4ff\" stroke=\"#111\" stroke-width=\"2\"/><polygon points=\"70,80 190,80 190,200 70,200\" fill=\"#fff\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"70\" y1=\"80\" x2=\"115\" y2=\"45\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"190\" y1=\"80\" x2=\"235\" y2=\"45\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"190\" y1=\"200\" x2=\"235\" y2=\"165\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"70\" y1=\"200\" x2=\"115\" y2=\"165\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"115\" y1=\"45\" x2=\"235\" y2=\"165\" stroke=\"#111\" stroke-width=\"2\" stroke-dasharray=\"6 5\"/></svg>",
            "theory_task": "Диагональ куба равна $6\\sqrt3$. Найдите объём куба.",
            "theory_sol": "Если ребро куба равно $a$, то диагональ куба равна $d=a\\sqrt3$.<br>По условию $a\\sqrt3=6\\sqrt3$, значит $a=6$.<br>$V=a^3=6^3=216$.<br><br><b>Ответ:</b> 216",
            "tasks": [
                {
                    "text": "Диагональ куба равна $2\\sqrt3$. Найдите объём куба.",
                    "answer": "8"
                },
                {
                    "text": "Диагональ куба равна $3\\sqrt3$. Найдите объём куба.",
                    "answer": "27"
                },
                {
                    "text": "Диагональ куба равна $4\\sqrt3$. Найдите объём куба.",
                    "answer": "64"
                },
                {
                    "text": "Диагональ куба равна $5\\sqrt3$. Найдите объём куба.",
                    "answer": "125"
                },
                {
                    "text": "Диагональ куба равна $10\\sqrt3$. Найдите объём куба.",
                    "answer": "1000"
                }
            ]
        },
        {
            "desc": "Прототип 4. Площадь поверхности куба и объём",
            "svg_code": "<svg width=\"320\" height=\"240\" viewBox=\"0 0 320 240\" xmlns=\"http://www.w3.org/2000/svg\" overflow=\"visible\"><rect width=\"320\" height=\"240\" fill=\"white\"/><polygon points=\"115,45 235,45 235,165 115,165\" fill=\"#edf4ff\" stroke=\"#111\" stroke-width=\"2\"/><polygon points=\"70,80 190,80 190,200 70,200\" fill=\"#fff\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"70\" y1=\"80\" x2=\"115\" y2=\"45\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"190\" y1=\"80\" x2=\"235\" y2=\"45\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"190\" y1=\"200\" x2=\"235\" y2=\"165\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"70\" y1=\"200\" x2=\"115\" y2=\"165\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"115\" y1=\"45\" x2=\"235\" y2=\"165\" stroke=\"#111\" stroke-width=\"2\" stroke-dasharray=\"6 5\"/></svg>",
            "theory_task": "Площадь поверхности куба равна $54$. Найдите объём куба.",
            "theory_sol": "Площадь поверхности куба: $S=6a^2$.<br> $6a^2=54$, значит $a^2=9$, $a=3$.<br>$V=a^3=3^3=27$.<br><br><b>Ответ:</b> 27",
            "tasks": [
                {
                    "text": "Площадь поверхности куба равна $24$. Найдите объём куба.",
                    "answer": "8"
                },
                {
                    "text": "Площадь поверхности куба равна $54$. Найдите объём куба.",
                    "answer": "27"
                },
                {
                    "text": "Площадь поверхности куба равна $96$. Найдите объём куба.",
                    "answer": "64"
                },
                {
                    "text": "Площадь поверхности куба равна $150$. Найдите объём куба.",
                    "answer": "125"
                },
                {
                    "text": "Площадь поверхности куба равна $216$. Найдите объём куба.",
                    "answer": "216"
                }
            ]
        },
        {
            "desc": "Прототип 5. Ребро куба по увеличению объёма",
            "svg_code": "<svg width=\"320\" height=\"240\" viewBox=\"0 0 320 240\" xmlns=\"http://www.w3.org/2000/svg\" overflow=\"visible\"><rect width=\"320\" height=\"240\" fill=\"white\"/><polygon points=\"115,45 235,45 235,165 115,165\" fill=\"#edf4ff\" stroke=\"#111\" stroke-width=\"2\"/><polygon points=\"70,80 190,80 190,200 70,200\" fill=\"#fff\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"70\" y1=\"80\" x2=\"115\" y2=\"45\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"190\" y1=\"80\" x2=\"235\" y2=\"45\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"190\" y1=\"200\" x2=\"235\" y2=\"165\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"70\" y1=\"200\" x2=\"115\" y2=\"165\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"115\" y1=\"45\" x2=\"235\" y2=\"165\" stroke=\"#111\" stroke-width=\"2\" stroke-dasharray=\"6 5\"/></svg>",
            "theory_task": "Если каждое ребро куба увеличить на $1$, то его объём увеличится на $37$. Найдите ребро куба.",
            "theory_sol": "Пусть ребро куба равно $a$. Тогда после увеличения оно станет $a+1$.<br>Разность объёмов: $(a+1)^3-a^3=3a^2+3a+1$.<br>По условию $3a^2+3a+1=37$, значит $3a^2+3a-36=0$, $a^2+a-12=0$, откуда $a=3$.<br><br><b>Ответ:</b> 3",
            "tasks": [
                {
                    "text": "Если каждое ребро куба увеличить на $1$, то его объём увеличится на $7$. Найдите ребро куба.",
                    "answer": "1"
                },
                {
                    "text": "Если каждое ребро куба увеличить на $1$, то его объём увеличится на $19$. Найдите ребро куба.",
                    "answer": "2"
                },
                {
                    "text": "Если каждое ребро куба увеличить на $1$, то его объём увеличится на $37$. Найдите ребро куба.",
                    "answer": "3"
                },
                {
                    "text": "Если каждое ребро куба увеличить на $1$, то его объём увеличится на $61$. Найдите ребро куба.",
                    "answer": "4"
                },
                {
                    "text": "Если каждое ребро куба увеличить на $1$, то его объём увеличится на $91$. Найдите ребро куба.",
                    "answer": "5"
                }
            ]
        },
        {
            "desc": "Прототип 6. Вытеснение жидкости в цилиндрическом сосуде",
            "svg_code": "<svg width=\"320\" height=\"240\" viewBox=\"0 0 320 240\" xmlns=\"http://www.w3.org/2000/svg\" overflow=\"visible\"><rect width=\"320\" height=\"240\" fill=\"white\"/><ellipse cx=\"160\" cy=\"55\" rx=\"72\" ry=\"20\" fill=\"#fff\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"88\" y1=\"55\" x2=\"88\" y2=\"195\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"232\" y1=\"55\" x2=\"232\" y2=\"195\" stroke=\"#111\" stroke-width=\"2\"/><ellipse cx=\"160\" cy=\"195\" rx=\"72\" ry=\"20\" fill=\"#fff\" stroke=\"#111\" stroke-width=\"2\"/><rect x=\"89\" y=\"120\" width=\"142\" height=\"75\" fill=\"#dceeff\" opacity=\".75\"/><ellipse cx=\"160\" cy=\"120\" rx=\"71\" ry=\"19\" fill=\"#dceeff\" stroke=\"#111\" stroke-width=\"1.5\"/></svg>",
            "theory_task": "В цилиндрический сосуд налили $1200$ см$^3$ воды. Уровень воды равен $10$ см. В воду полностью погрузили деталь, и уровень воды поднялся на $4$ см. Найдите объём детали.",
            "theory_sol": "Площадь основания сосуда: $S_{\\mathrm{osn}}=\\frac{1200}{10}=120$ см$^2$.<br>Деталь вытеснила воду на высоту $4$ см, значит её объём равен<br>$V=120\\cdot4=480$ см$^3$.<br><br><b>Ответ:</b> 480",
            "tasks": [
                {
                    "text": "В цилиндрический сосуд налили $1800$ см$^3$ воды. Уровень воды равен $12$ см. После погружения детали уровень поднялся на $5$ см. Найдите объём детали.",
                    "answer": "750"
                },
                {
                    "text": "В сосуд налили $2400$ см$^3$ воды, уровень равен $15$ см. После погружения детали уровень поднялся на $3$ см. Найдите объём детали.",
                    "answer": "480"
                },
                {
                    "text": "В сосуд налили $1600$ см$^3$ воды, уровень равен $8$ см. После погружения детали уровень поднялся на $6$ см. Найдите объём детали.",
                    "answer": "1200"
                },
                {
                    "text": "В сосуд налили $2500$ см$^3$ воды, уровень равен $10$ см. После погружения детали уровень поднялся на $2{,}5$ см. Найдите объём детали.",
                    "answer": "625"
                },
                {
                    "text": "В сосуд налили $900$ см$^3$ воды, уровень равен $6$ см. После погружения детали уровень поднялся на $4$ см. Найдите объём детали.",
                    "answer": "600"
                }
            ]
        },
        {
            "desc": "Прототип 7. Переливание жидкости между цилиндрами",
            "svg_code": "<svg width=\"320\" height=\"240\" viewBox=\"0 0 320 240\" xmlns=\"http://www.w3.org/2000/svg\" overflow=\"visible\"><rect width=\"320\" height=\"240\" fill=\"white\"/><ellipse cx=\"95\" cy=\"80\" rx=\"42\" ry=\"13\" fill=\"#fff\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"53\" y1=\"80\" x2=\"53\" y2=\"190\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"137\" y1=\"80\" x2=\"137\" y2=\"190\" stroke=\"#111\" stroke-width=\"2\"/><ellipse cx=\"95\" cy=\"190\" rx=\"42\" ry=\"13\" fill=\"#fff\" stroke=\"#111\" stroke-width=\"2\"/><ellipse cx=\"230\" cy=\"50\" rx=\"65\" ry=\"13\" fill=\"#fff\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"165\" y1=\"50\" x2=\"165\" y2=\"190\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"295\" y1=\"50\" x2=\"295\" y2=\"190\" stroke=\"#111\" stroke-width=\"2\"/><ellipse cx=\"230\" cy=\"190\" rx=\"65\" ry=\"13\" fill=\"#fff\" stroke=\"#111\" stroke-width=\"2\"/></svg>",
            "theory_task": "В цилиндрическом сосуде уровень жидкости равен $18$ см. Эту жидкость перелили в другой цилиндрический сосуд, диаметр которого в $3$ раза больше диаметра первого. На какой высоте будет находиться уровень жидкости во втором сосуде?",
            "theory_sol": "Если диаметр увеличился в $3$ раза, то площадь основания увеличилась в $3^2=9$ раз.<br>Объём жидкости не изменился, значит высота уменьшится в $9$ раз: $h=\\frac{18}{9}=2$ см.<br><br><b>Ответ:</b> 2",
            "tasks": [
                {
                    "text": "Уровень жидкости равен $16$ см. Жидкость перелили в сосуд, диаметр которого в $2$ раза больше. Найдите новый уровень жидкости.",
                    "answer": "4"
                },
                {
                    "text": "Уровень жидкости равен $27$ см. Диаметр второго сосуда в $3$ раза больше диаметра первого. Найдите новый уровень.",
                    "answer": "3"
                },
                {
                    "text": "Уровень жидкости равен $20$ см. Диаметр второго сосуда в $2$ раза больше. Найдите новый уровень.",
                    "answer": "5"
                },
                {
                    "text": "Уровень жидкости равен $45$ см. Диаметр второго сосуда в $3$ раза больше. Найдите новый уровень.",
                    "answer": "5"
                },
                {
                    "text": "Уровень жидкости равен $32$ см. Диаметр второго сосуда в $4$ раза больше. Найдите новый уровень.",
                    "answer": "2"
                }
            ]
        },
        {
            "desc": "Прототип 8. Переливание между подобными треугольными призмами",
            "svg_code": "<svg width=\"320\" height=\"240\" viewBox=\"0 0 320 240\" xmlns=\"http://www.w3.org/2000/svg\" overflow=\"visible\"><rect width=\"320\" height=\"240\" fill=\"white\"/><polygon points=\"85,65 160,105 245,65\" fill=\"none\" stroke=\"#111\" stroke-width=\"2\"/><polygon points=\"85,190 160,225 245,190\" fill=\"#e7f3ff\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"85\" y1=\"65\" x2=\"85\" y2=\"190\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"160\" y1=\"105\" x2=\"160\" y2=\"225\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"245\" y1=\"65\" x2=\"245\" y2=\"190\" stroke=\"#111\" stroke-width=\"2\"/><polygon points=\"85,130 160,168 245,130\" fill=\"#cfe8ff\" stroke=\"#111\" stroke-width=\"2\"/></svg>",
            "theory_task": "В сосуде формы правильной треугольной призмы уровень жидкости равен $27$ см. Жидкость перелили в сосуд такой же формы, сторона основания которого в $3$ раза больше. Найдите новый уровень жидкости.",
            "theory_sol": "Площади оснований подобных фигур относятся как квадраты коэффициента подобия.<br>Сторона основания увеличилась в $3$ раза, значит площадь основания увеличилась в $3^2=9$ раз.<br>Объём жидкости тот же, поэтому высота уровня уменьшится в $9$ раз: $27:9=3$.<br><br><b>Ответ:</b> 3",
            "tasks": [
                {
                    "text": "Уровень жидкости в сосуде формы правильной треугольной призмы равен $80$ см. Её перелили в сосуд такой же формы, сторона основания которого в $4$ раза больше. Найдите новый уровень.",
                    "answer": "5"
                },
                {
                    "text": "Уровень жидкости равен $45$ см. Сторона основания второго подобного сосуда в $3$ раза больше. Найдите новый уровень.",
                    "answer": "5"
                },
                {
                    "text": "Уровень жидкости равен $72$ см. Сторона основания второго сосуда в $2$ раза больше. Найдите новый уровень.",
                    "answer": "18"
                },
                {
                    "text": "Уровень жидкости равен $100$ см. Сторона основания второго сосуда в $5$ раз больше. Найдите новый уровень.",
                    "answer": "4"
                },
                {
                    "text": "Уровень жидкости равен $64$ см. Сторона основания второго сосуда в $4$ раза больше. Найдите новый уровень.",
                    "answer": "4"
                }
            ]
        },
        {
            "desc": "Прототип 9. Цилиндр в правильной четырёхугольной призме",
            "svg_code": "<svg width=\"320\" height=\"240\" viewBox=\"0 0 320 240\" xmlns=\"http://www.w3.org/2000/svg\" overflow=\"visible\"><rect width=\"320\" height=\"240\" fill=\"white\"/><polygon points=\"105,45 240,45 240,175 105,175\" fill=\"none\" stroke=\"#111\" stroke-width=\"2\"/><polygon points=\"70,75 205,75 205,205 70,205\" fill=\"none\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"70\" y1=\"75\" x2=\"105\" y2=\"45\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"205\" y1=\"75\" x2=\"240\" y2=\"45\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"205\" y1=\"205\" x2=\"240\" y2=\"175\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"70\" y1=\"205\" x2=\"105\" y2=\"175\" stroke=\"#111\" stroke-width=\"2\"/><ellipse cx=\"147\" cy=\"80\" rx=\"54\" ry=\"16\" fill=\"none\" stroke=\"#666\" stroke-width=\"2\"/><line x1=\"93\" y1=\"80\" x2=\"93\" y2=\"190\" stroke=\"#111\" stroke-width=\"1.5\"/><line x1=\"201\" y1=\"80\" x2=\"201\" y2=\"190\" stroke=\"#111\" stroke-width=\"1.5\"/><ellipse cx=\"147\" cy=\"190\" rx=\"54\" ry=\"16\" fill=\"none\" stroke=\"#666\" stroke-width=\"2\"/></svg>",
            "theory_task": "Цилиндр вписан в правильную четырёхугольную призму. Радиус основания цилиндра равен $1$, высота равна $5$. Найдите площадь боковой поверхности призмы.",
            "theory_sol": "В основании призмы квадрат. Окружность радиуса $r$ вписана в квадрат, значит сторона квадрата равна $2r$.<br>При $r=1$ сторона основания равна $2$, периметр основания $P=4\\cdot2=8$.<br>$S_{\\mathrm{b}}=P\\cdot h=8\\cdot5=40$.<br><br><b>Ответ:</b> 40",
            "tasks": [
                {
                    "text": "Цилиндр вписан в правильную четырёхугольную призму. Радиус основания цилиндра равен $1$, высота равна $3$. Найдите площадь боковой поверхности призмы.",
                    "answer": "24"
                },
                {
                    "text": "Радиус основания цилиндра равен $2$, высота равна $4$. Найдите площадь боковой поверхности призмы.",
                    "answer": "64"
                },
                {
                    "text": "Радиус основания цилиндра равен $1{,}5$, высота равна $6$. Найдите площадь боковой поверхности призмы.",
                    "answer": "72"
                },
                {
                    "text": "Радиус основания цилиндра равен $2{,}5$, высота равна $2$. Найдите площадь боковой поверхности призмы.",
                    "answer": "40"
                },
                {
                    "text": "Радиус основания цилиндра равен $4$, высота равна $1{,}5$. Найдите площадь боковой поверхности призмы.",
                    "answer": "48"
                }
            ]
        },
        {
            "desc": "Прототип 10. Цилиндр в правильной шестиугольной призме",
            "svg_code": "<svg width=\"320\" height=\"240\" viewBox=\"0 0 320 240\" xmlns=\"http://www.w3.org/2000/svg\" overflow=\"visible\"><rect width=\"320\" height=\"240\" fill=\"white\"/><polygon points=\"110,35 145,15 215,15 255,35 215,58 145,58\" fill=\"none\" stroke=\"#111\" stroke-width=\"2\"/><polygon points=\"75,65 110,45 180,45 220,65 180,88 110,88\" fill=\"none\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"75\" y1=\"65\" x2=\"110\" y2=\"35\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"110\" y1=\"45\" x2=\"145\" y2=\"15\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"180\" y1=\"45\" x2=\"215\" y2=\"15\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"220\" y1=\"65\" x2=\"255\" y2=\"35\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"180\" y1=\"88\" x2=\"215\" y2=\"58\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"110\" y1=\"88\" x2=\"145\" y2=\"58\" stroke=\"#111\" stroke-width=\"2\"/><ellipse cx=\"147\" cy=\"80\" rx=\"54\" ry=\"16\" fill=\"none\" stroke=\"#666\" stroke-width=\"2\"/><line x1=\"93\" y1=\"80\" x2=\"93\" y2=\"190\" stroke=\"#111\" stroke-width=\"1.5\"/><line x1=\"201\" y1=\"80\" x2=\"201\" y2=\"190\" stroke=\"#111\" stroke-width=\"1.5\"/><ellipse cx=\"147\" cy=\"190\" rx=\"54\" ry=\"16\" fill=\"none\" stroke=\"#666\" stroke-width=\"2\"/></svg>",
            "theory_task": "Цилиндр вписан в правильную шестиугольную призму. Радиус основания цилиндра равен $\\sqrt3$, высота равна $2$. Найдите площадь боковой поверхности призмы.",
            "theory_sol": "Радиус цилиндра равен радиусу окружности, вписанной в правильный шестиугольник.<br>Для правильного шестиугольника $r=\\frac{a\\sqrt3}{2}$, где $a$ - сторона.<br>$\\sqrt3=\\frac{a\\sqrt3}{2}$, значит $a=2$, $P=6a=12$.<br>$S_{\\mathrm{b}}=P\\cdot h=12\\cdot2=24$.<br><br><b>Ответ:</b> 24",
            "tasks": [
                {
                    "text": "Цилиндр вписан в правильную шестиугольную призму. Радиус основания цилиндра равен $\\sqrt3$, высота равна $3$. Найдите площадь боковой поверхности призмы.",
                    "answer": "36"
                },
                {
                    "text": "Радиус основания цилиндра равен $2\\sqrt3$, высота равна $2$. Найдите площадь боковой поверхности призмы.",
                    "answer": "48"
                },
                {
                    "text": "Радиус основания цилиндра равен $3\\sqrt3$, высота равна $1$. Найдите площадь боковой поверхности призмы.",
                    "answer": "36"
                },
                {
                    "text": "Радиус основания цилиндра равен $\\sqrt3$, высота равна $5$. Найдите площадь боковой поверхности призмы.",
                    "answer": "60"
                },
                {
                    "text": "Радиус основания цилиндра равен $2\\sqrt3$, высота равна $4$. Найдите площадь боковой поверхности призмы.",
                    "answer": "96"
                }
            ]
        },
        {
            "desc": "Прототип 11. Правильная треугольная призма, вписанная в цилиндр",
            "svg_code": "<svg width=\"320\" height=\"240\" viewBox=\"0 0 320 240\" xmlns=\"http://www.w3.org/2000/svg\" overflow=\"visible\"><rect width=\"320\" height=\"240\" fill=\"white\"/><ellipse cx=\"160\" cy=\"55\" rx=\"75\" ry=\"22\" fill=\"none\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"85\" y1=\"55\" x2=\"85\" y2=\"195\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"235\" y1=\"55\" x2=\"235\" y2=\"195\" stroke=\"#111\" stroke-width=\"2\"/><ellipse cx=\"160\" cy=\"195\" rx=\"75\" ry=\"22\" fill=\"none\" stroke=\"#111\" stroke-width=\"2\"/><polygon points=\"160,35 95,67 225,67\" fill=\"none\" stroke=\"#111\" stroke-width=\"2\"/><polygon points=\"160,175 95,207 225,207\" fill=\"none\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"160\" y1=\"35\" x2=\"160\" y2=\"175\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"95\" y1=\"67\" x2=\"95\" y2=\"207\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"225\" y1=\"67\" x2=\"225\" y2=\"207\" stroke=\"#111\" stroke-width=\"2\"/></svg>",
            "theory_task": "Найдите площадь боковой поверхности правильной треугольной призмы, вписанной в цилиндр, радиус основания которого равен $2\\sqrt3$, а высота равна $2$.",
            "theory_sol": "Основание призмы — правильный треугольник, вписанный в окружность радиуса $R=2\\sqrt3$. Для правильного треугольника <br>$a=\\sqrt3\\,R.$<br> Тогда <br>$a=\\sqrt3\\cdot2\\sqrt3=6,$<br> а периметр основания равен <br>$P=3a=18.$<br> Площадь боковой поверхности прямой призмы равна произведению периметра основания на высоту: <br>$S_{\\mathrm{бок}}=P\\cdot h=18\\cdot2=36.$<br><br><b>Ответ:</b> 36",
            "tasks": [
                {
                    "text": "Найдите площадь боковой поверхности правильной треугольной призмы, вписанной в цилиндр, радиус основания которого равен $\\sqrt3$, а высота равна $2$.",
                    "answer": "18"
                },
                {
                    "text": "Найдите площадь боковой поверхности правильной треугольной призмы, вписанной в цилиндр, радиус основания которого равен $2\\sqrt3$, а высота равна $3$.",
                    "answer": "54"
                },
                {
                    "text": "Найдите площадь боковой поверхности правильной треугольной призмы, вписанной в цилиндр, радиус основания которого равен $3\\sqrt3$, а высота равна $2$.",
                    "answer": "54"
                },
                {
                    "text": "Найдите площадь боковой поверхности правильной треугольной призмы, вписанной в цилиндр, радиус основания которого равен $4\\sqrt3$, а высота равна $1$.",
                    "answer": "36"
                },
                {
                    "text": "Найдите площадь боковой поверхности правильной треугольной призмы, вписанной в цилиндр, радиус основания которого равен $5\\sqrt3$, а высота равна $2$.",
                    "answer": "90"
                }
            ]
        },
        {
            "desc": "Прототип 12. Боковая поверхность цилиндра через длину окружности",
            "svg_code": "<svg width=\"320\" height=\"240\" viewBox=\"0 0 320 240\" xmlns=\"http://www.w3.org/2000/svg\" overflow=\"visible\"><rect width=\"320\" height=\"240\" fill=\"white\"/><ellipse cx=\"160\" cy=\"55\" rx=\"72\" ry=\"20\" fill=\"#fff\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"88\" y1=\"55\" x2=\"88\" y2=\"195\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"232\" y1=\"55\" x2=\"232\" y2=\"195\" stroke=\"#111\" stroke-width=\"2\"/><ellipse cx=\"160\" cy=\"195\" rx=\"72\" ry=\"20\" fill=\"#fff\" stroke=\"#111\" stroke-width=\"2\"/></svg>",
            "theory_task": "Длина окружности основания цилиндра равна $3$, высота равна $2$. Найдите площадь боковой поверхности цилиндра.",
            "theory_sol": "Боковая поверхность цилиндра равна произведению длины окружности основания на высоту: $S_{\\mathrm{b}}=C\\cdot h$.<br>$S_{\\mathrm{b}}=3\\cdot2=6$.<br><br><b>Ответ:</b> 6",
            "tasks": [
                {
                    "text": "Длина окружности основания цилиндра равна $4$, высота равна $5$. Найдите площадь боковой поверхности цилиндра.",
                    "answer": "20"
                },
                {
                    "text": "Длина окружности основания равна $7$, высота равна $3$. Найдите площадь боковой поверхности.",
                    "answer": "21"
                },
                {
                    "text": "Длина окружности основания равна $2{,}5$, высота равна $8$. Найдите площадь боковой поверхности.",
                    "answer": "20"
                },
                {
                    "text": "Длина окружности основания равна $12$, высота равна $1{,}5$. Найдите площадь боковой поверхности.",
                    "answer": "18"
                },
                {
                    "text": "Длина окружности основания равна $9$, высота равна $4$. Найдите площадь боковой поверхности.",
                    "answer": "36"
                }
            ]
        },
        {
            "desc": "Прототип 13. Образующая конуса",
            "svg_code": "<svg width=\"320\" height=\"240\" viewBox=\"0 0 320 240\" xmlns=\"http://www.w3.org/2000/svg\" overflow=\"visible\"><rect width=\"320\" height=\"240\" fill=\"white\"/><ellipse cx=\"160\" cy=\"190\" rx=\"78\" ry=\"20\" fill=\"#fff\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"82\" y1=\"190\" x2=\"160\" y2=\"35\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"238\" y1=\"190\" x2=\"160\" y2=\"35\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"160\" y1=\"35\" x2=\"160\" y2=\"190\" stroke=\"#111\" stroke-width=\"2\" stroke-dasharray=\"6 5\"/></svg>",
            "theory_task": "Высота конуса равна $4$, диаметр основания равен $6$. Найдите образующую конуса.",
            "theory_sol": "Радиус основания равен половине диаметра: $r=3$.<br>В осевом сечении образующая является гипотенузой прямоугольного треугольника с катетами $h$ и $r$.<br>$l=\\sqrt{4^2+3^2}=5$.<br><br><b>Ответ:</b> 5",
            "tasks": [
                {
                    "text": "Высота конуса равна $12$, диаметр основания равен $10$. Найдите образующую конуса.",
                    "answer": "13"
                },
                {
                    "text": "Высота конуса равна $8$, диаметр основания равен $12$. Найдите образующую.",
                    "answer": "10"
                },
                {
                    "text": "Высота конуса равна $15$, диаметр основания равен $16$. Найдите образующую.",
                    "answer": "17"
                },
                {
                    "text": "Высота конуса равна $24$, диаметр основания равен $14$. Найдите образующую.",
                    "answer": "25"
                },
                {
                    "text": "Высота конуса равна $6$, диаметр основания равен $16$. Найдите образующую.",
                    "answer": "10"
                }
            ]
        },
        {
            "desc": "Прототип 14. Боковая поверхность конуса через окружность основания",
            "svg_code": "<svg width=\"320\" height=\"240\" viewBox=\"0 0 320 240\" xmlns=\"http://www.w3.org/2000/svg\" overflow=\"visible\"><rect width=\"320\" height=\"240\" fill=\"white\"/><ellipse cx=\"160\" cy=\"190\" rx=\"78\" ry=\"20\" fill=\"#fff\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"82\" y1=\"190\" x2=\"160\" y2=\"35\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"238\" y1=\"190\" x2=\"160\" y2=\"35\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"160\" y1=\"35\" x2=\"160\" y2=\"190\" stroke=\"#111\" stroke-width=\"2\" stroke-dasharray=\"6 5\"/></svg>",
            "theory_task": "Длина окружности основания конуса равна $3$, образующая равна $2$. Найдите площадь боковой поверхности конуса.",
            "theory_sol": "Используем формулу площади боковой поверхности конуса $S_{\\mathrm{b}}=\\pi r l$.<br>Так как длина окружности основания $C=2\\pi r=3$, то $\\pi r=\\frac{3}{2}$.<br>Тогда $S_{\\mathrm{b}}=\\pi r l=\\frac{3}{2}\\cdot2=3$.<br><br><b>Ответ:</b> 3",
            "tasks": [
                {
                    "text": "Длина окружности основания конуса равна $6$, образующая равна $4$. Найдите площадь боковой поверхности.",
                    "answer": "12"
                },
                {
                    "text": "Длина окружности основания равна $10$, образующая равна $3$. Найдите площадь боковой поверхности.",
                    "answer": "15"
                },
                {
                    "text": "Длина окружности основания равна $8$, образующая равна $5$. Найдите площадь боковой поверхности.",
                    "answer": "20"
                },
                {
                    "text": "Длина окружности основания равна $12$, образующая равна $6$. Найдите площадь боковой поверхности.",
                    "answer": "36"
                },
                {
                    "text": "Длина окружности основания равна $7$, образующая равна $4$. Найдите площадь боковой поверхности.",
                    "answer": "14"
                }
            ]
        },
        {
            "desc": "Прототип 15. Площадь поверхности шара через площадь большого круга",
            "svg_code": "<svg width=\"320\" height=\"240\" viewBox=\"0 0 320 240\" xmlns=\"http://www.w3.org/2000/svg\" overflow=\"visible\"><rect width=\"320\" height=\"240\" fill=\"white\"/><circle cx=\"160\" cy=\"120\" r=\"82\" fill=\"#fff\" stroke=\"#111\" stroke-width=\"2\"/><ellipse cx=\"160\" cy=\"120\" rx=\"82\" ry=\"22\" fill=\"none\" stroke=\"#111\" stroke-width=\"2\"/></svg>",
            "theory_task": "Площадь большого круга шара равна $3$. Найдите площадь поверхности шара.",
            "theory_sol": "Площадь большого круга равна $\\pi R^2$. Площадь поверхности шара равна $4\\pi R^2$.<br>Значит, площадь поверхности шара в $4$ раза больше площади большого круга: $S=4\\cdot3=12$.<br><br><b>Ответ:</b> 12",
            "tasks": [
                {
                    "text": "Площадь большого круга шара равна $5$. Найдите площадь поверхности шара.",
                    "answer": "20"
                },
                {
                    "text": "Площадь большого круга шара равна $7{,}5$. Найдите площадь поверхности шара.",
                    "answer": "30"
                },
                {
                    "text": "Площадь большого круга шара равна $12$. Найдите площадь поверхности шара.",
                    "answer": "48"
                },
                {
                    "text": "Площадь большого круга шара равна $18$. Найдите площадь поверхности шара.",
                    "answer": "72"
                },
                {
                    "text": "Площадь большого круга шара равна $25$. Найдите площадь поверхности шара.",
                    "answer": "100"
                }
            ]
        },
        {
            "desc": "Прототип 16. Куб, описанный около сферы",
            "svg_code": "<svg width=\"320\" height=\"240\" viewBox=\"0 0 320 240\" xmlns=\"http://www.w3.org/2000/svg\" overflow=\"visible\"><rect width=\"320\" height=\"240\" fill=\"white\"/><polygon points=\"115,45 235,45 235,165 115,165\" fill=\"#edf4ff\" stroke=\"#111\" stroke-width=\"2\"/><polygon points=\"70,80 190,80 190,200 70,200\" fill=\"#fff\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"70\" y1=\"80\" x2=\"115\" y2=\"45\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"190\" y1=\"80\" x2=\"235\" y2=\"45\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"190\" y1=\"200\" x2=\"235\" y2=\"165\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"70\" y1=\"200\" x2=\"115\" y2=\"165\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"115\" y1=\"45\" x2=\"235\" y2=\"165\" stroke=\"#111\" stroke-width=\"2\" stroke-dasharray=\"6 5\"/><circle cx=\"150\" cy=\"125\" r=\"55\" fill=\"none\" stroke=\"#666\" stroke-width=\"2\"/><ellipse cx=\"150\" cy=\"125\" rx=\"55\" ry=\"15\" fill=\"none\" stroke=\"#666\" stroke-width=\"1.5\"/></svg>",
            "theory_task": "Куб описан около сферы радиуса $2$. Найдите объём куба.",
            "theory_sol": "Если куб описан около сферы, то ребро куба равно диаметру сферы: $a=2r$.<br>При $r=2$ получаем $a=4$.<br>$V=a^3=4^3=64$.<br><br><b>Ответ:</b> 64",
            "tasks": [
                {
                    "text": "Куб описан около сферы радиуса $1$. Найдите объём куба.",
                    "answer": "8"
                },
                {
                    "text": "Куб описан около сферы радиуса $1{,}5$. Найдите объём куба.",
                    "answer": "27"
                },
                {
                    "text": "Куб описан около сферы радиуса $2$. Найдите объём куба.",
                    "answer": "64"
                },
                {
                    "text": "Куб описан около сферы радиуса $2{,}5$. Найдите объём куба.",
                    "answer": "125"
                },
                {
                    "text": "Куб описан около сферы радиуса $3$. Найдите объём куба.",
                    "answer": "216"
                }
            ]
        },
        {
            "desc": "Прототип 17. Поверхность прямой призмы с ромбом в основании",
            "svg_code": "<svg width=\"320\" height=\"240\" viewBox=\"0 0 320 240\" xmlns=\"http://www.w3.org/2000/svg\" overflow=\"visible\"><rect width=\"320\" height=\"240\" fill=\"white\"/><polygon points=\"65,70 155,115 245,70 155,25\" fill=\"none\" stroke=\"#111\" stroke-width=\"2\"/><polygon points=\"65,150 155,195 245,150 155,105\" fill=\"none\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"65\" y1=\"150\" x2=\"65\" y2=\"70\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"155\" y1=\"195\" x2=\"155\" y2=\"115\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"245\" y1=\"150\" x2=\"245\" y2=\"70\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"155\" y1=\"105\" x2=\"155\" y2=\"25\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"65\" y1=\"150\" x2=\"245\" y2=\"150\" stroke=\"#111\" stroke-width=\"2\" stroke-dasharray=\"6 5\"/><line x1=\"155\" y1=\"195\" x2=\"155\" y2=\"105\" stroke=\"#111\" stroke-width=\"2\" stroke-dasharray=\"6 5\"/></svg>",
            "theory_task": "В основании прямой призмы лежит ромб с диагоналями $6$ и $8$. Боковое ребро призмы равно $10$. Найдите площадь поверхности призмы.",
            "theory_sol": "Площадь основания ромба: $S_{\\mathrm{osn}}=\\frac{6\\cdot8}{2}=24$.<br>Сторона ромба: $a=\\sqrt{3^2+4^2}=5$, поэтому периметр основания $P=20$.<br>$S_{\\mathrm{b}}=P\\cdot h=20\\cdot10=200$.<br>$S=2S_{\\mathrm{osn}}+S_{\\mathrm{b}}=2\\cdot24+200=248$.<br><br><b>Ответ:</b> 248",
            "tasks": [
                {
                    "text": "В основании прямой призмы лежит ромб с диагоналями $6$ и $8$. Боковое ребро равно $5$. Найдите площадь поверхности призмы.",
                    "answer": "148"
                },
                {
                    "text": "Диагонали ромба равны $10$ и $24$, боковое ребро равно $3$. Найдите площадь поверхности призмы.",
                    "answer": "396"
                },
                {
                    "text": "Диагонали ромба равны $8$ и $6$, боковое ребро равно $7$. Найдите площадь поверхности призмы.",
                    "answer": "188"
                },
                {
                    "text": "Диагонали ромба равны $12$ и $16$, боковое ребро равно $4$. Найдите площадь поверхности призмы.",
                    "answer": "352"
                },
                {
                    "text": "Диагонали ромба равны $14$ и $48$, боковое ребро равно $2$. Найдите площадь поверхности призмы.",
                    "answer": "872"
                }
            ]
        },
        {
            "desc": "Прототип 18. Объём прямой призмы с ромбом в основании",
            "svg_code": "<svg width=\"320\" height=\"240\" viewBox=\"0 0 320 240\" xmlns=\"http://www.w3.org/2000/svg\" overflow=\"visible\"><rect width=\"320\" height=\"240\" fill=\"white\"/><polygon points=\"65,70 155,115 245,70 155,25\" fill=\"none\" stroke=\"#111\" stroke-width=\"2\"/><polygon points=\"65,150 155,195 245,150 155,105\" fill=\"none\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"65\" y1=\"150\" x2=\"65\" y2=\"70\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"155\" y1=\"195\" x2=\"155\" y2=\"115\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"245\" y1=\"150\" x2=\"245\" y2=\"70\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"155\" y1=\"105\" x2=\"155\" y2=\"25\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"65\" y1=\"150\" x2=\"245\" y2=\"150\" stroke=\"#111\" stroke-width=\"2\" stroke-dasharray=\"6 5\"/><line x1=\"155\" y1=\"195\" x2=\"155\" y2=\"105\" stroke=\"#111\" stroke-width=\"2\" stroke-dasharray=\"6 5\"/></svg>",
            "theory_task": "В основании прямой призмы лежит ромб с диагоналями $6$ и $8$. Боковое ребро призмы равно $10$. Найдите объём призмы.",
            "theory_sol": "Площадь основания ромба равна половине произведения диагоналей: $S_{\\mathrm{osn}}=\\frac{6\\cdot8}{2}=24$.<br>Объём прямой призмы: $V=S_{\\mathrm{osn}}\\cdot h=24\\cdot10=240$.<br><br><b>Ответ:</b> 240",
            "tasks": [
                {
                    "text": "В основании прямой призмы лежит ромб с диагоналями $6$ и $8$. Боковое ребро равно $5$. Найдите объём призмы.",
                    "answer": "120"
                },
                {
                    "text": "Диагонали ромба равны $10$ и $24$, боковое ребро равно $3$. Найдите объём призмы.",
                    "answer": "360"
                },
                {
                    "text": "Диагонали ромба равны $12$ и $16$, боковое ребро равно $4$. Найдите объём призмы.",
                    "answer": "384"
                },
                {
                    "text": "Диагонали ромба равны $14$ и $48$, боковое ребро равно $2$. Найдите объём призмы.",
                    "answer": "672"
                },
                {
                    "text": "Диагонали ромба равны $4$ и $6$, боковое ребро равно $9$. Найдите объём призмы.",
                    "answer": "108"
                }
            ]
        },
        {
            "desc": "Прототип 19. Объём прямой треугольной призмы",
            "svg_code": "<svg width=\"320\" height=\"240\" viewBox=\"0 0 320 240\" xmlns=\"http://www.w3.org/2000/svg\" overflow=\"visible\"><rect width=\"320\" height=\"240\" fill=\"white\"/><polygon points=\"110,150 240,150 240,40\" fill=\"none\" stroke=\"#111\" stroke-width=\"2\"/><polygon points=\"75,190 205,190 205,80\" fill=\"none\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"75\" y1=\"190\" x2=\"110\" y2=\"150\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"205\" y1=\"190\" x2=\"240\" y2=\"150\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"205\" y1=\"80\" x2=\"240\" y2=\"40\" stroke=\"#111\" stroke-width=\"2\"/><path d=\"M190 190 L190 175 L205 175\" fill=\"none\" stroke=\"#111\" stroke-width=\"1.5\"/></svg>",
            "theory_task": "Основанием прямой треугольной призмы является прямоугольный треугольник с катетами $3$ и $4$. Боковое ребро призмы равно $10$. Найдите объём призмы.",
            "theory_sol": "Площадь основания: $S_{\\mathrm{osn}}=\\frac12\\cdot3\\cdot4=6$.<br>Объём прямой призмы: $V=S_{\\mathrm{osn}}\\cdot h=6\\cdot10=60$.<br><br><b>Ответ:</b> 60",
            "tasks": [
                {
                    "text": "Основанием прямой треугольной призмы является прямоугольный треугольник с катетами $6$ и $8$. Боковое ребро равно $5$. Найдите объём призмы.",
                    "answer": "120"
                },
                {
                    "text": "Катеты основания равны $5$ и $12$, боковое ребро равно $6$. Найдите объём призмы.",
                    "answer": "180"
                },
                {
                    "text": "Катеты основания равны $7$ и $24$, боковое ребро равно $3$. Найдите объём призмы.",
                    "answer": "252"
                },
                {
                    "text": "Катеты основания равны $9$ и $12$, боковое ребро равно $4$. Найдите объём призмы.",
                    "answer": "216"
                },
                {
                    "text": "Катеты основания равны $8$ и $15$, боковое ребро равно $2$. Найдите объём призмы.",
                    "answer": "120"
                }
            ]
        },
        {
            "desc": "Прототип 20. Площадь поверхности прямой треугольной призмы",
            "svg_code": "<svg width=\"320\" height=\"240\" viewBox=\"0 0 320 240\" xmlns=\"http://www.w3.org/2000/svg\" overflow=\"visible\"><rect width=\"320\" height=\"240\" fill=\"white\"/><polygon points=\"110,150 240,150 240,40\" fill=\"none\" stroke=\"#111\" stroke-width=\"2\"/><polygon points=\"75,190 205,190 205,80\" fill=\"none\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"75\" y1=\"190\" x2=\"110\" y2=\"150\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"205\" y1=\"190\" x2=\"240\" y2=\"150\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"205\" y1=\"80\" x2=\"240\" y2=\"40\" stroke=\"#111\" stroke-width=\"2\"/><path d=\"M190 190 L190 175 L205 175\" fill=\"none\" stroke=\"#111\" stroke-width=\"1.5\"/></svg>",
            "theory_task": "Основанием прямой треугольной призмы является прямоугольный треугольник с катетами $3$ и $4$. Боковое ребро призмы равно $10$. Найдите площадь поверхности призмы.",
            "theory_sol": "Гипотенуза основания: $\\sqrt{3^2+4^2}=5$.<br>Площадь основания: $S_{\\mathrm{osn}}=\\frac12\\cdot3\\cdot4=6$, периметр основания $P=3+4+5=12$.<br>$S=2S_{\\mathrm{osn}}+P\\cdot h=2\\cdot6+12\\cdot10=132$.<br><br><b>Ответ:</b> 132",
            "tasks": [
                {
                    "text": "Основание - прямоугольный треугольник с катетами $6$ и $8$, боковое ребро равно $5$. Найдите площадь поверхности призмы.",
                    "answer": "168"
                },
                {
                    "text": "Катеты основания равны $5$ и $12$, боковое ребро равно $6$. Найдите площадь поверхности призмы.",
                    "answer": "240"
                },
                {
                    "text": "Катеты основания равны $7$ и $24$, боковое ребро равно $3$. Найдите площадь поверхности призмы.",
                    "answer": "336"
                },
                {
                    "text": "Катеты основания равны $9$ и $12$, боковое ребро равно $4$. Найдите площадь поверхности призмы.",
                    "answer": "252"
                },
                {
                    "text": "Катеты основания равны $8$ и $15$, боковое ребро равно $2$. Найдите площадь поверхности призмы.",
                    "answer": "200"
                }
            ]
        },
        {
            "desc": "Прототип 21. Площадь поверхности правильной четырёхугольной пирамиды",
            "svg_code": "<svg width=\"320\" height=\"240\" viewBox=\"0 0 320 240\" xmlns=\"http://www.w3.org/2000/svg\" overflow=\"visible\"><rect width=\"320\" height=\"240\" fill=\"white\"/><polygon points=\"70,180 210,180 255,135 115,135\" fill=\"none\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"165\" y1=\"35\" x2=\"70\" y2=\"180\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"165\" y1=\"35\" x2=\"210\" y2=\"180\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"165\" y1=\"35\" x2=\"255\" y2=\"135\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"165\" y1=\"35\" x2=\"115\" y2=\"135\" stroke=\"#111\" stroke-width=\"2\" stroke-dasharray=\"6 5\"/><line x1=\"165\" y1=\"35\" x2=\"165\" y2=\"158\" stroke=\"#111\" stroke-width=\"2\" stroke-dasharray=\"6 5\"/></svg>",
            "theory_task": "В правильной четырёхугольной пирамиде сторона основания равна $6$, высота равна $4$. Найдите площадь поверхности пирамиды.",
            "theory_sol": "Апофема боковой грани находится по прямоугольному треугольнику: $l=\\sqrt{4^2+3^2}=5$.<br>Площадь основания: $6^2=36$.<br>Площадь боковой поверхности: $S_{\\mathrm{b}}=\\frac12Pl=\\frac12\\cdot24\\cdot5=60$.<br>$S=36+60=96$.<br><br><b>Ответ:</b> 96",
            "tasks": [
                {
                    "text": "В правильной четырёхугольной пирамиде сторона основания равна $8$, высота равна $3$. Найдите площадь поверхности пирамиды.",
                    "answer": "144"
                },
                {
                    "text": "Сторона основания равна $10$, высота равна $12$. Найдите площадь поверхности.",
                    "answer": "360"
                },
                {
                    "text": "Сторона основания равна $12$, высота равна $8$. Найдите площадь поверхности.",
                    "answer": "384"
                },
                {
                    "text": "Сторона основания равна $16$, высота равна $15$. Найдите площадь поверхности.",
                    "answer": "800"
                },
                {
                    "text": "Сторона основания равна $14$, высота равна $24$. Найдите площадь поверхности.",
                    "answer": "896"
                }
            ]
        },
        {
            "desc": "Прототип 22. Объём пирамиды с прямоугольником в основании",
            "svg_code": "<svg width=\"320\" height=\"240\" viewBox=\"0 0 320 240\" xmlns=\"http://www.w3.org/2000/svg\" overflow=\"visible\"><rect width=\"320\" height=\"240\" fill=\"white\"/><polygon points=\"70,180 210,180 255,135 115,135\" fill=\"none\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"165\" y1=\"35\" x2=\"70\" y2=\"180\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"165\" y1=\"35\" x2=\"210\" y2=\"180\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"165\" y1=\"35\" x2=\"255\" y2=\"135\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"165\" y1=\"35\" x2=\"115\" y2=\"135\" stroke=\"#111\" stroke-width=\"2\" stroke-dasharray=\"6 5\"/><line x1=\"165\" y1=\"35\" x2=\"165\" y2=\"158\" stroke=\"#111\" stroke-width=\"2\" stroke-dasharray=\"6 5\"/></svg>",
            "theory_task": "Основанием пирамиды является прямоугольник со сторонами $3$ и $4$. Высота пирамиды равна $6$. Найдите объём пирамиды.",
            "theory_sol": "Площадь основания: $S_{\\mathrm{osn}}=3\\cdot4=12$.<br>Объём пирамиды: $V=\\frac13S_{\\mathrm{osn}}h=\\frac13\\cdot12\\cdot6=24$.<br><br><b>Ответ:</b> 24",
            "tasks": [
                {
                    "text": "Основанием пирамиды является прямоугольник со сторонами $4$ и $5$. Высота равна $6$. Найдите объём пирамиды.",
                    "answer": "40"
                },
                {
                    "text": "Основание - прямоугольник со сторонами $6$ и $8$, высота равна $9$. Найдите объём.",
                    "answer": "144"
                },
                {
                    "text": "Основание - прямоугольник со сторонами $5$ и $12$, высота равна $3$. Найдите объём.",
                    "answer": "60"
                },
                {
                    "text": "Основание - прямоугольник со сторонами $7$ и $9$, высота равна $6$. Найдите объём.",
                    "answer": "126"
                },
                {
                    "text": "Основание - прямоугольник со сторонами $10$ и $11$, высота равна $3$. Найдите объём.",
                    "answer": "110"
                }
            ]
        },
        {
            "desc": "Прототип 23. Изменение объёма при изменении линейных размеров",
            "svg_code": "<svg width=\"320\" height=\"240\" viewBox=\"0 0 320 240\" xmlns=\"http://www.w3.org/2000/svg\" overflow=\"visible\"><rect width=\"320\" height=\"240\" fill=\"white\"/><polygon points=\"70,190 240,180 145,125\" fill=\"none\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"160\" y1=\"35\" x2=\"70\" y2=\"190\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"160\" y1=\"35\" x2=\"240\" y2=\"180\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"160\" y1=\"35\" x2=\"145\" y2=\"125\" stroke=\"#111\" stroke-width=\"2\" stroke-dasharray=\"6 5\"/></svg>",
            "theory_task": "Во сколько раз увеличится объём правильного тетраэдра, если все его рёбра увеличить в $2$ раза?",
            "theory_sol": "При увеличении всех линейных размеров тела в $k$ раз объём увеличивается в $k^3$ раз.<br>Здесь $k=2$, поэтому объём увеличится в $2^3=8$ раз.<br><br><b>Ответ:</b> 8",
            "tasks": [
                {
                    "text": "Во сколько раз увеличится объём правильного тетраэдра, если все его рёбра увеличить в $3$ раза?",
                    "answer": "27"
                },
                {
                    "text": "Во сколько раз увеличится объём правильного тетраэдра, если все его рёбра увеличить в $4$ раза?",
                    "answer": "64"
                },
                {
                    "text": "Во сколько раз увеличится объём правильного тетраэдра, если все его рёбра увеличить в $5$ раз?",
                    "answer": "125"
                },
                {
                    "text": "Во сколько раз увеличится объём правильной пирамиды, если все её линейные размеры увеличить в $6$ раз?",
                    "answer": "216"
                },
                {
                    "text": "Во сколько раз увеличится объём пирамиды, если все её линейные размеры увеличить в $10$ раз?",
                    "answer": "1000"
                }
            ]
        },
        {
            "desc": "Прототип 24. Изменение площади поверхности при изменении линейных размеров",
            "svg_code": "<svg width=\"320\" height=\"240\" viewBox=\"0 0 320 240\" xmlns=\"http://www.w3.org/2000/svg\" overflow=\"visible\"><rect width=\"320\" height=\"240\" fill=\"white\"/><polygon points=\"70,190 240,180 145,125\" fill=\"none\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"160\" y1=\"35\" x2=\"70\" y2=\"190\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"160\" y1=\"35\" x2=\"240\" y2=\"180\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"160\" y1=\"35\" x2=\"145\" y2=\"125\" stroke=\"#111\" stroke-width=\"2\" stroke-dasharray=\"6 5\"/></svg>",
            "theory_task": "Во сколько раз увеличится площадь поверхности правильного тетраэдра, если все его рёбра увеличить в $3$ раза?",
            "theory_sol": "Площадь поверхности зависит от квадрата линейного размера.<br>Если все рёбра увеличить в $k$ раз, то площадь поверхности увеличится в $k^2$ раз.<br>При $k=3$ получаем $3^2=9$.<br><br><b>Ответ:</b> 9",
            "tasks": [
                {
                    "text": "Во сколько раз увеличится площадь поверхности правильного тетраэдра, если все его рёбра увеличить в $2$ раза?",
                    "answer": "4"
                },
                {
                    "text": "Во сколько раз увеличится площадь поверхности правильного тетраэдра, если все его рёбра увеличить в $4$ раза?",
                    "answer": "16"
                },
                {
                    "text": "Во сколько раз увеличится площадь поверхности правильной пирамиды, если все её линейные размеры увеличить в $5$ раз?",
                    "answer": "25"
                },
                {
                    "text": "Во сколько раз увеличится площадь поверхности многогранника, если все его линейные размеры увеличить в $6$ раз?",
                    "answer": "36"
                },
                {
                    "text": "Во сколько раз увеличится площадь поверхности многогранника, если все его линейные размеры увеличить в $10$ раз?",
                    "answer": "100"
                }
            ]
        },
        {
            "desc": "Прототип 25. Объём многогранника из середин рёбер тетраэдра",
            "svg_code": "<svg width=\"320\" height=\"240\" viewBox=\"0 0 320 240\" xmlns=\"http://www.w3.org/2000/svg\" overflow=\"visible\"><rect width=\"320\" height=\"240\" fill=\"white\"/><polygon points=\"70,190 240,180 145,125\" fill=\"none\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"160\" y1=\"35\" x2=\"70\" y2=\"190\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"160\" y1=\"35\" x2=\"240\" y2=\"180\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"160\" y1=\"35\" x2=\"145\" y2=\"125\" stroke=\"#111\" stroke-width=\"2\" stroke-dasharray=\"6 5\"/><circle cx=\"155.0\" cy=\"185.0\" r=\"3.5\" fill=\"#e65100\"/><circle cx=\"107.5\" cy=\"157.5\" r=\"3.5\" fill=\"#e65100\"/><circle cx=\"115.0\" cy=\"112.5\" r=\"3.5\" fill=\"#e65100\"/><circle cx=\"192.5\" cy=\"152.5\" r=\"3.5\" fill=\"#e65100\"/><circle cx=\"200.0\" cy=\"107.5\" r=\"3.5\" fill=\"#e65100\"/><circle cx=\"152.5\" cy=\"80.0\" r=\"3.5\" fill=\"#e65100\"/><line x1=\"155.0\" y1=\"185.0\" x2=\"107.5\" y2=\"157.5\" stroke=\"#111\" stroke-width=\"1.3\"/><line x1=\"107.5\" y1=\"157.5\" x2=\"115.0\" y2=\"112.5\" stroke=\"#111\" stroke-width=\"1.3\"/><line x1=\"115.0\" y1=\"112.5\" x2=\"155.0\" y2=\"185.0\" stroke=\"#111\" stroke-width=\"1.3\"/><line x1=\"155.0\" y1=\"185.0\" x2=\"192.5\" y2=\"152.5\" stroke=\"#111\" stroke-width=\"1.3\"/><line x1=\"192.5\" y1=\"152.5\" x2=\"200.0\" y2=\"107.5\" stroke=\"#111\" stroke-width=\"1.3\"/><line x1=\"200.0\" y1=\"107.5\" x2=\"155.0\" y2=\"185.0\" stroke=\"#111\" stroke-width=\"1.3\"/><line x1=\"107.5\" y1=\"157.5\" x2=\"192.5\" y2=\"152.5\" stroke=\"#111\" stroke-width=\"1.3\"/><line x1=\"192.5\" y1=\"152.5\" x2=\"152.5\" y2=\"80.0\" stroke=\"#111\" stroke-width=\"1.3\"/><line x1=\"152.5\" y1=\"80.0\" x2=\"107.5\" y2=\"157.5\" stroke=\"#111\" stroke-width=\"1.3\"/><line x1=\"115.0\" y1=\"112.5\" x2=\"200.0\" y2=\"107.5\" stroke=\"#111\" stroke-width=\"1.3\"/><line x1=\"200.0\" y1=\"107.5\" x2=\"152.5\" y2=\"80.0\" stroke=\"#111\" stroke-width=\"1.3\"/><line x1=\"152.5\" y1=\"80.0\" x2=\"115.0\" y2=\"112.5\" stroke=\"#111\" stroke-width=\"1.3\"/></svg>",
            "theory_task": "Объём тетраэдра равен $14$. Найдите объём многогранника, вершинами которого являются середины рёбер данного тетраэдра.",
            "theory_sol": "Если соединить середины рёбер тетраэдра, то у каждой вершины отсечётся маленький тетраэдр, подобный исходному с коэффициентом подобия $\\frac12$.<br>Объём каждого такого тетраэдра равен <br>$14\\cdot\\left(\\frac12\\right)^3=14\\cdot\\frac18=\\frac74.$<br> Таких тетраэдров четыре, поэтому их суммарный объём равен <br>$4\\cdot\\frac74=7.$<br> Оставшаяся центральная часть и есть искомый многогранник, значит его объём равен <br>$14-7=7.$<br><br><b>Ответ:</b> 7",
            "tasks": [
                {
                    "text": "Объём тетраэдра равен $8$. Найдите объём многогранника, вершинами которого являются середины рёбер данного тетраэдра.",
                    "answer": "4"
                },
                {
                    "text": "Объём тетраэдра равен $16$. Найдите объём многогранника, вершинами которого являются середины рёбер данного тетраэдра.",
                    "answer": "8"
                },
                {
                    "text": "Объём тетраэдра равен $20$. Найдите объём многогранника, вершинами которого являются середины рёбер данного тетраэдра.",
                    "answer": "10"
                },
                {
                    "text": "Объём тетраэдра равен $30$. Найдите объём многогранника, вершинами которого являются середины рёбер данного тетраэдра.",
                    "answer": "15"
                },
                {
                    "text": "Объём тетраэдра равен $50$. Найдите объём многогранника, вершинами которого являются середины рёбер данного тетраэдра.",
                    "answer": "25"
                }
            ]
        },
        {
            "desc": "Прототип 26. Расстояние в правильной шестиугольной призме",
            "svg_code": "<svg width=\"320\" height=\"240\" viewBox=\"0 0 320 240\" xmlns=\"http://www.w3.org/2000/svg\" overflow=\"visible\"><rect width=\"320\" height=\"240\" fill=\"white\"/><polygon points=\"60,70 105,45 175,45 225,70 175,95 105,95\" fill=\"none\" stroke=\"#111\" stroke-width=\"2\"/><polygon points=\"60,185 105,160 175,160 225,185 175,210 105,210\" fill=\"none\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"60\" y1=\"70\" x2=\"60\" y2=\"185\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"105\" y1=\"45\" x2=\"105\" y2=\"160\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"175\" y1=\"45\" x2=\"175\" y2=\"160\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"225\" y1=\"70\" x2=\"225\" y2=\"185\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"175\" y1=\"95\" x2=\"175\" y2=\"210\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"105\" y1=\"95\" x2=\"105\" y2=\"210\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"105\" y1=\"160\" x2=\"175\" y2=\"95\" stroke=\"#111\" stroke-width=\"2\" stroke-dasharray=\"6 5\"/><text x=\"93\" y=\"178\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"16\" fill=\"#111\">B</text><text x=\"195\" y=\"87\" text-anchor=\"middle\" font-family=\"Times New Roman\" font-size=\"16\" fill=\"#111\">E₁</text></svg>",
            "theory_task": "В правильной шестиугольной призме все рёбра равны $\\sqrt5$. Найдите расстояние между точками $B$ и $E_1$.",
            "theory_sol": "Обозначим через $a$ ребро призмы. В правильном шестиугольнике вершины $B$ и $E$ противоположные, поэтому $BE=2a$.<br>Высота призмы также равна $a$. Тогда $BE_1=\\sqrt{BE^2+EE_1^2}=\\sqrt{(2a)^2+a^2}=a\\sqrt5$.<br>При $a=\\sqrt5$ получаем $BE_1=\\sqrt5\\cdot\\sqrt5=5$.<br><br><b>Ответ:</b> 5",
            "tasks": [
                {
                    "text": "В правильной шестиугольной призме все рёбра равны $\\sqrt5$. Найдите расстояние между противоположными вершинами разных оснований.",
                    "answer": "5"
                },
                {
                    "text": "В правильной шестиугольной призме все рёбра равны $2\\sqrt5$. Найдите расстояние между противоположными вершинами разных оснований.",
                    "answer": "10"
                },
                {
                    "text": "В правильной шестиугольной призме все рёбра равны $3\\sqrt5$. Найдите расстояние между противоположными вершинами разных оснований.",
                    "answer": "15"
                },
                {
                    "text": "В правильной шестиугольной призме все рёбра равны $4\\sqrt5$. Найдите расстояние между противоположными вершинами разных оснований.",
                    "answer": "20"
                },
                {
                    "text": "В правильной шестиугольной призме все рёбра равны $5\\sqrt5$. Найдите расстояние между противоположными вершинами разных оснований.",
                    "answer": "25"
                }
            ]
        },
        {
            "desc": "Прототип 27. Угол между диагоналями правильной четырёхугольной призмы",
            "svg_code": "<svg width=\"320\" height=\"240\" viewBox=\"0 0 320 240\" xmlns=\"http://www.w3.org/2000/svg\" overflow=\"visible\"><rect width=\"320\" height=\"240\" fill=\"white\"/><polygon points=\"110,50 235,50 235,165 110,165\" fill=\"none\" stroke=\"#111\" stroke-width=\"2\"/><polygon points=\"65,90 190,90 190,205 65,205\" fill=\"none\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"65\" y1=\"90\" x2=\"110\" y2=\"50\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"190\" y1=\"90\" x2=\"235\" y2=\"50\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"190\" y1=\"205\" x2=\"235\" y2=\"165\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"65\" y1=\"205\" x2=\"110\" y2=\"165\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"190\" y1=\"205\" x2=\"110\" y2=\"50\" stroke=\"#111\" stroke-width=\"2.4\" stroke-dasharray=\"6 5\"/><line x1=\"110\" y1=\"165\" x2=\"190\" y2=\"90\" stroke=\"#111\" stroke-width=\"2.4\" stroke-dasharray=\"6 5\"/></svg>",
            "theory_task": "В правильной четырёхугольной призме $ABCD A_1B_1C_1D_1$ известно, что $AC_1=2BC$. Найдите угол между диагоналями $BD_1$ и $A_1C$. Ответ дайте в градусах.",
            "theory_sol": "Пусть $BC=a$, а высота призмы равна $h$. Тогда <br>$AC_1^2=AC^2+AA_1^2=(a\\sqrt2)^2+h^2=2a^2+h^2.$<br> По условию $AC_1=2BC=2a$, значит <br>$2a^2+h^2=4a^2 \\quad\\Rightarrow\\quad h^2=2a^2.$<br> Рассмотрим векторы <br>$\\vec{BD_1}=(-a,\\,a,\\,h), \\qquad \\vec{A_1C}=(a,\\,a,\\,-h).$<br> Их скалярное произведение равно <br>$\\vec{BD_1}\\cdot\\vec{A_1C}=-a^2+a^2-h^2=-h^2=-2a^2.$<br> Длины этих векторов одинаковы: <br>$|BD_1|=|A_1C|=AC_1=2a.$<br> Тогда косинус острого угла между диагоналями равен <br>$\\cos\\varphi=\\frac{|{-2a^2}|}{2a\\cdot2a}=\\frac12.$<br> Следовательно, $\\varphi=60^\\circ$.<br><br><b>Ответ:</b> 60",
            "tasks": [
                {
                    "text": "В правильной четырёхугольной призме $ABCD A_1B_1C_1D_1$ известно, что $AC_1=2BC$. Найдите угол между диагоналями $BD_1$ и $A_1C$. Ответ дайте в градусах.",
                    "answer": "60"
                },
                {
                    "text": "В правильной четырёхугольной призме $ABCD A_1B_1C_1D_1$ известно, что $A_1C=2AB$. Найдите угол между диагоналями $BD_1$ и $A_1C$. Ответ дайте в градусах.",
                    "answer": "60"
                },
                {
                    "text": "В правильной четырёхугольной призме $ABCD A_1B_1C_1D_1$ известно, что $BD_1=2AB$. Найдите угол между диагоналями $BD_1$ и $A_1C$. Ответ дайте в градусах.",
                    "answer": "60"
                },
                {
                    "text": "В правильной четырёхугольной призме $ABCD A_1B_1C_1D_1$ известно, что $BD_1=2BC$. Найдите угол между диагоналями $BD_1$ и $A_1C$. Ответ дайте в градусах.",
                    "answer": "60"
                },
                {
                    "text": "В правильной четырёхугольной призме $ABCD A_1B_1C_1D_1$ известно, что $AC_1=2AB$. Найдите угол между диагоналями $AC_1$ и $B_1D$. Ответ дайте в градусах.",
                    "answer": "60"
                }
            ]
        }
    ]
};

    window.extraDatabase[3] = task3Extra;
    window.extraDatabase["task3"] = task3Extra;
})();
