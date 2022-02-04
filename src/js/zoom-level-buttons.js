// import L from "leaflet";

export function addTo(map) {

    const ctrl = L.control({position: 'topleft'});

    ctrl.onAdd = function (map) {

        const div = L.DomUtil.create('div', 'zoom-level-value');

        div.innerHTML =
        `<button class="zoom-button zoom-in">＋</button><div  class="zoom-button" title="Zoom level">${map.getZoom()}</div><button class="zoom-button zoom-out">－</button>`;

        const zoomInDom = div.children[0];
        const labelDom = div.children[1];
        const zoomOutDom = div.children[2];

        zoomInDom.onclick = (e) => {
            map.setZoom(map.getZoom() + 1);
        }

        zoomOutDom.onclick = (e) => {
            map.setZoom(map.getZoom() - 1);
        }

        map.on("zoomend", (evt) => {

            const nowLvl = map.getZoom();

            labelDom.innerText = nowLvl;

            zoomOutDom.disabled = (nowLvl === map.getMinZoom());

            zoomInDom.disabled = (nowLvl === map.getMaxZoom());

        });

        return div;

    };

    ctrl.addTo(map);
}




