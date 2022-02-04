// import L from "leaflet";

const AttributionInfo = function(){

    let localMap;

    let containerDom;

    let infoDom;

    function init(map){

        localMap = map;

        const ctrl = L.control({ position: "bottomleft" });

        ctrl.onAdd = () => onAdd();

        ctrl.addTo(localMap);

        localMap.on('layeradd', updateInfo);

        localMap.on('layerremove', updateInfo);

    }

    function onAdd() {

        containerDom = L.DomUtil.create("div", "chmap-attributions-container");

        const icon = L.DomUtil.create("i", "icon");

        icon.onclick = expand;

        containerDom.appendChild(icon);

        infoDom = L.DomUtil.create("div", "chmap-attributions");

        containerDom.appendChild(infoDom);

        // if (!L.Browser.touch) {
        L.DomEvent.disableClickPropagation(containerDom);
        L.DomEvent.on(containerDom, 'mousewheel', L.DomEvent.stopPropagation);
        // } else {
        //     L.DomEvent.on(containerDom, 'click', L.DomEvent.stopPropagation);
        // }

        return containerDom;
    }

    function expand(e){

        const classList = containerDom.classList

        classList.toggle('expand');

        if(classList.contains('expand')) {
            updateInfo();
        } else {
            infoDom.innerHTML = '';
        }

    }

    function updateInfo(e){

        if(e && !containerDom.classList.contains('expand')) return;

        const html = [];

        localMap.eachLayer(function(layer){

            const att = layer.options.attribution;

            if(att) html.push(att);

        });

        infoDom.innerHTML = html.join('');

    }

    return {
        init
    }

}();

export default AttributionInfo;
