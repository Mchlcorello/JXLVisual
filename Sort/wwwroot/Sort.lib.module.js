function eventArgsCreatorOnDragStart(event) {
    const b = event.target.id;
    event.dataTransfer.setData('text/plain', b);
    return {
        Id: event.srcElement.id,
    };
}
function eventArgsCreatorOnDrop(event) {
    event.target.classList.remove('dragging');
    function findAncestorWithId(element) {
        while (element && !element.id) {
            element = element.parentElement;
        }
        return element;
    }

    // Find the closest ancestor with an ID starting from the event target
    const targetElement = findAncestorWithId(event.target);
    const targetId = targetElement ? targetElement.id : null;

    const srcId = event.dataTransfer.getData('text/plain');
    event.dataTransfer.clearData('text/plain');

    return {
        srcId: srcId,
        targetId: targetId,
    };
}


export function afterStarted(blazor) {
    blazor.registerCustomEventType('customdragstart', {
        browserEventName: 'dragstart', // Specify the native event to wrap
        createEventArgs: eventArgsCreatorOnDragStart,
    });

    blazor.registerCustomEventType('customdrop', {
        browserEventName: 'drop', // Specify the native event to wrap
        createEventArgs: eventArgsCreatorOnDrop,
    });

    //document.querySelectorAll('.child').forEach(child => {
    //    child.addEventListener('dragover', (event) => {
    //        event.stopPropagation();
    //    });
    //    child.addEventListener('drop', (event) => {
    //        event.stopPropagation();
    //    });
    //});
}


//function eventArgsCreatorOnDrop(event) {
//    const targetId = event.target.id;
//    if (targetId !== "dropzone") {
//        return null; // Ignore the event
//    }
//    const srcId = event.dataTransfer.getData('text/plain')
//    event.dataTransfer.clearData('text/plain')
//    return {
//        srcId: srcId,
//        targetId: targetId
//    };
//}