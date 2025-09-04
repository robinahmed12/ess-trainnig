
// Topic Category	Key Concepts to Cover	Why It's Important
// 1. What is the DOM?	- The DOM as a tree of nodes (elements, text, comments).
// - The document object as the entry point.
// - It's a live, mutable representation.	This mental model is crucial for everything that follows.
// 2. Selecting Elements	- getElementById()
// - querySelector() (for single elements)
// - querySelectorAll() (for NodeLists of elements)
// - getElementsByClassName() / getElementsByTagName() (know they exist, but querySelector is more modern).	This is how you "find" the elements you want to change. querySelector is the most powerful and versatile.
// 3. Traversing the DOM	- Moving between nodes: parentElement, children, nextElementSibling, previousElementSibling.
// - Know the difference between children (elements only) and childNodes (all nodes).	Essential for finding elements relative to others, especially when you don't have a direct selector.
// 4. Manipulating Content	- textContent vs. innerText (and their differences).
// - innerHTML (understand the security risk of XSS when using it with user input).	The primary way to change what's displayed on the page.
// 5. Manipulating Styles	- The style property (element.style.color = 'red';).
// - Using classList (add(), remove(), toggle(), contains()).
// - Prefer classList over directly changing style.	classList is more powerful and maintainable for complex styles.
// 6. Creating/Adding Elements	- document.createElement()
// - append() / appendChild() (know that append is more modern).
// - prepend(), before(), after().	How to dynamically add new content to the page.
// 7. Handling Events	- addEventListener() (the modern standard).
// - Know basic events: 'click', 'submit', 'mouseover', 'keydown'.
// - The event object and its properties (e.g., event.target).


// ✅ Main Loop Patterns (you already saw)

// Simple iteration (go through items)

// Index-based iteration

// Transform (map)

// Filter

// Reduce / accumulate

// Find element

// Find index

// Some / Every

// For…in (indexes)

// ForEach
