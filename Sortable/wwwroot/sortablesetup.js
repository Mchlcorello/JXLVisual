window.createNestedSortable = function () {

    new Sortable(document.getElementById('source-list'), {
        group: {
            name: 'shared',
            pull: 'clone',  // Enable cloning
            put: false,     // Don't allow items to be moved into this list
        },
        animation: 150,
        sort: false,  // Disable sorting on the source list
    });

    // Call the function to build the nested list
    createInitialNestedList();

    function addNestedSortable(element, allowPut = true) {
        new Sortable(element, {
            group: {
                name: 'shared',
                pull: true,
                put: allowPut,
            },
            animation: 150,
            fallbackOnBody: true,
            swapThreshold: 0.35,
            handle: 'li',  // Make entire list item draggable
            draggable: 'li:not(.static-item)', // Exclude static items from being draggable
            onAdd: function (evt) {
                var itemEl = evt.item; // The added HTMLElement
                var parentEl = evt.to; // The parent element where the item is added
                console.log('Item added:', itemEl);

                // Prevent adding items directly to the "Receipt" element's top-level nested <ul>
                if (parentEl.id === 'item-receipt' || parentEl.closest('#item-receipt > ul') === parentEl) {
                    parentEl.removeChild(itemEl);
                    console.log('Cannot add items directly to the Receipt element.');
                    return;
                }

                // Assign a unique ID to the new item
                itemEl.id = 'item-' + Date.now() + '-' + Math.floor(Math.random() * 1000);

                // Add an onclick listener to toggle selection
                itemEl.onclick = function (event) {
                    event.stopPropagation(); 
                    toggleSelection(itemEl);
                };

                // Check if the <li> already has a nested <ul>
                var existingNestedUl = itemEl.querySelector('ul.nested-sortable');

                // Only add a new nested <ul> if one does not already exist
                if (!existingNestedUl) {
                    var nestedUl = document.createElement('ul');
                    nestedUl.classList.add('nested-sortable');

                    itemEl.appendChild(nestedUl);

                    // Initialize Sortable on the newly added nested <ul>
                    addNestedSortable(nestedUl);
                }
            },
            onUpdate: function (evt) {
                var itemEl = evt.item; // Updated HTMLElement
                console.log('Item updated:', itemEl);
            },
        });
    }

    // Select all nested sortable elements
    var nestedSortables = document.querySelectorAll('#root .nested-sortable');

    for (var i = 0; i < nestedSortables.length; i++) {
        const parentElement = nestedSortables[i].closest('li');

        // If this is the nested <ul> inside the "Receipt" element, disable adding items
        if (parentElement && parentElement.id === 'item-receipt') {
            addNestedSortable(nestedSortables[i], false); // Disable adding items
        } else {
            addNestedSortable(nestedSortables[i]); // Enable adding items
        }
    }
    document.querySelectorAll('#root > li, #root .nested-sortable > li').forEach(function (item) {
        item.classList.add('static-item');
    });
};

window.deleteNestedSortableItem = function (elementId) {
    var item = document.getElementById(elementId);
    if (item) {
        item.parentNode.removeChild(item);
        console.log('Item deleted:', elementId);
    } else {
        console.log('Item not found:', elementId);
    }
};

document.addEventListener('keydown', function (event) {
    if (event.key === 'Delete') {
        // Find all selected items
        var selectedItems = document.querySelectorAll('.selected');

        selectedItems.forEach(function (item) {
            // Remove the selected item from the DOM
            item.parentNode.removeChild(item);
        });

        console.log('Selected items deleted.');
    }
});

function toggleSelection(element) {
    // Check if the clicked element is already selected
    const isAlreadySelected = element.classList.contains('selected');

    // Unselect all already selected elements
    document.querySelectorAll('.selected').forEach(function (selectedElement) {
        selectedElement.classList.remove('selected');
    });

    // If the clicked element was already selected, just unselect it and return
    if (isAlreadySelected) {
        return;
    }

    // Toggle the 'selected' class for this element
    element.classList.toggle('selected');

    // Find all child <li> elements and toggle their 'selected' class
    element.querySelectorAll('li').forEach(function (child) {
        child.classList.toggle('selected', element.classList.contains('selected'));
    });
}

function createInitialNestedList() {
    // Find the root <ul> element
    const rootUl = document.getElementById('root');

    // Create the root list item
    const rootLi = document.createElement('li');
    rootLi.id = 'item-receipt';
    rootLi.textContent = 'Receipt';

    // Create nested list items
    const dataContextLi = createListItem('DataContext');
    const resourcesLi = createListItem('Resources');
    const bodyLi = createListItem('Body');

    // Append nested items to the root item's nested <ul>
    const rootNestedUl = document.createElement('ul');
    rootNestedUl.classList.add('nested-sortable');
    rootNestedUl.appendChild(dataContextLi);
    rootNestedUl.appendChild(resourcesLi);
    rootNestedUl.appendChild(bodyLi);

    // Append the nested <ul> to the root <li>
    rootLi.appendChild(rootNestedUl);

    // Append the root <li> to the root <ul>
    rootUl.appendChild(rootLi);
}

function createListItem(content) {
    const li = document.createElement('li');
    li.id = 'item-' + Date.now() + '-' + Math.floor(Math.random() * 1000);
    li.textContent = content;

    const nestedUl = document.createElement('ul');
    nestedUl.classList.add('nested-sortable');
    li.appendChild(nestedUl);

    return li;
}