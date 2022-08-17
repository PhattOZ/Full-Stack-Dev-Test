function recursiveTreeSearch(node, key) {
  // Base case
  if (node.id === key) {
    return node;
  }

  // Recursive call on every child
  for (const child of node.children) {
    const found = recursiveTreeSearch(child, key);

    if (found) {
      return found;
    }
  }

  return null;
}

const tree = {
  id: 1,
  tag: "lobby",
  data: { title: "Main Lobby" },
  children: [
    {
      id: 2,
      tag: "request_action",
      data: { title: "Fix it" },
      children: [
        { id: 3, tag: "", data: { title: "Light" }, children: [] },
        { id: 4, tag: "", data: { title: "Fan" }, children: [] },
      ],
    },
  ],
};

console.log(recursiveTreeSearch(tree, 0)); // null

console.log(recursiveTreeSearch(tree, 4)); // { id: 4, tag: '', data: { title: 'Fan' }, children: [] }
