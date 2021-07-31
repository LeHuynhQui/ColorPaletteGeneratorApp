import React from 'react'

export default function ColorItem() {

    // convert RGB => HEX
    const componentToHex = (c) => {
        let hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }

    const rgbToHex = (r, g, b) => {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }


    //VARIABLE IS USED TO STORE ALL COLOR HEX
    let allHex = '';

    // GET COLOR API
    const getColorAPI = () => {
        allHex = '';
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
            allHex += `${hexValue} `;
            content += `
        <div class="color-item" onclick="copyHex('${hexValue}')">
        <div class="color" style="background-color: ${hexValue};"></div>
        <hr class="m-0">
        <h1 class="hex">${hexValue}</h1>
        </div>
        `
        })

        document.querySelector(".color-list").innerHTML = content;
    }



    // EVENT SAPCEBAR CLICKED
    document.addEventListener("keypress", e => {
        const spaceBar = 32;
        const spaceBarKey = ' '; //Back up solution
        if (e.which === spaceBar || e.key === spaceBarKey) getColorAPI()
    })



    // EVENT CTRL + C or CMD + C CLICKED
    document.addEventListener("keydown", e => {
        // detect C key
        let isCKey = false;
        const cKey = "c";
        const cKeyNumber = 99;

        if (e.key === cKey || e.which === cKeyNumber) {
            isCKey = true;
        }

        let isCMD = false
        //detect COMMAND (macbook) or CTRl key
        if (e.metaKey || e.ctrlKey) {
            isCMD = true
        }

        if (isCKey && isCMD) {
            copyAllHex()
        }

    })



    //COPY HEX BY CLICKING INTO THE COLOR TAG
    const copyHex = (copyHex) => {
        var text = copyHex;
        var elem = document.createElement("textarea");
        document.body.appendChild(elem);
        elem.value = text;
        elem.select();
        document.execCommand("copy");
        document.body.removeChild(elem);


        // SHOW/ HIDE POP UP
        document.querySelector(".success-modal").style.top = "5rem";

        setTimeout(() => {
            document.querySelector(".success-modal").style.top = "-5rem";
        }, 1000);
    }

    window.copyHex = copyHex;

    //COPY HEX BY PRESSING CTRL + C or CMD + C
    const copyAllHex = () => {
        var text = allHex;
        var elem = document.createElement("textarea");
        document.body.appendChild(elem);
        elem.value = text;
        elem.select();
        document.execCommand("copy");
        document.body.removeChild(elem);


        // SHOW/ HIDE POP UP
        document.querySelector(".success-modal").style.top = "5rem";

        setTimeout(() => {
            document.querySelector(".success-modal").style.top = "-5rem";
        }, 1000);
    }


    return (
        <div>
            {getColorAPI()}
        </div>
    )
}
