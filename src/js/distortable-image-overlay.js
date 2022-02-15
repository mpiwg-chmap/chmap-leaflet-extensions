// import L from "leaflet";
import 'leaflet-distortableimage/dist/vendor';
import 'leaflet-distortableimage/dist/leaflet.distortableimage';

function getOpts({layerId, mode, sUrl, corners, extraActions, editable, ...rest}) {

    const actions = (editable) ? [] : null;

    if (editable) {

        if (extraActions?.loadAction) actions.push(extraActions.loadAction);

        actions.push(L.OpacityAction);
        // actions.push(L.DragAction);
        // actions.push(L.RotateAction);
        actions.push(L.ScaleAction);
        actions.push(L.DistortAction);
        actions.push(L.FreeRotateAction);
        // actions.push(L.BorderAction);
        // actions.push(L.LockAction);
        // actions.push(L.StackAction);
        // actions.push(L.RestoreAction);
        // actions.push(L.ExportAction);
        // actions.push(L.DeleteAction);

        if (extraActions?.exportAction) actions.push(extraActions.exportAction);
        if (extraActions?.saveAction) actions.push(extraActions.saveAction);
    }

    return {
        layerId,
        // (WIP) add a toolbarType field with values 'popup' (default) or 'control'
        // add a keymapper_position field with combinations of 'top', 'bottom', 'left' or 'right'
        mode, //default mode is "distort"
        editable,
        actions,
        corners,
        keymapper: false,
        selected: true,
        // fullResolutionSrc: (sUrl) ? `${sUrl}/full/full/0/default.jpg` : null,
        ...rest
    }

}

export function build({imgURL, ...rest}) {

    return L.distortableImageOverlay(
        imgURL,
        getOpts({
            ...rest
        })
    );

}

