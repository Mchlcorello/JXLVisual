function getElementById(elementId) {
    const elem = document.getElementById(elementId);
    return {
        id: elem.id,
        tagName: elem.tagName,
        innerText: elem.innerText,
        innerHTML: elem.innerHTML,
        outerHTML: elem.outerHTML,
        // Add more properties as needed
    };
}