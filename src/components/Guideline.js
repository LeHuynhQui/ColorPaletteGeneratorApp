import React from 'react'

export default function Guideline() {
    // convert RGB => HEX
    const componentToHex = (c) => {
        let hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }

    const rgbToHex = (r, g, b) => {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }

    // GET COLOR API
    const getColorAPI = () => {
        var url = "http://colormind.io/api/";
        var data = {
            model: "default",
            input: ["N", "N", "N", "N", "N"]
        }

        var http = new XMLHttpRequest();


        http.onreadystatechange = function () {
            if (http.readyState === 4 && http.status === 200) {
                var palette = JSON.parse(http.responseText).result;
                renderColor(palette)
            }

        }

        http.open("POST", url, true);
        http.send(JSON.stringify(data));
    }


    // RENDER COLORS
    const renderColor = (colorList) => {
        let content = ''
        colorList.forEach((rgb, index) => {
            let hexValue = (rgbToHex(rgb[0], rgb[1], rgb[2])).toUpperCase();
            content += `
        <div class="color-item" onclick="copyHex('${hexValue}')">
        <div class="color color-1" style="background-color: ${hexValue};"></div>
        <hr class="m-0">
        <h1 class="hex">${hexValue}</h1>
        </div>
        `
        })

        document.querySelector(".color-list").innerHTML = content;
    }


    // EVENT ONCLICK GENERATE BTN
    const generateColor = () => {
        getColorAPI()
    }

    return (
        <div>
            <hr className="m-0"/>
            <section className="guideline">
                <div>
                    <button className="generate-btn" onClick={generateColor}><i className="fas fa-sync mr-2" /> Generate</button>
                </div>
                <div>
                    <p>Press <b>Spacebar</b> to generate new color palettes!</p>
                    <p>Press <b>Ctr + C/ ⌘ + C</b> to copy all color HEX!</p>
                    <p>Select color tag to copy the color HEX!</p>
                </div>
            </section>
            <hr className="m-0"/>
        </div>
    )
}
