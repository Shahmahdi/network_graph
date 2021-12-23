import { CafeDataTree } from "../Data";

const recursiveChildrens = (rootNodes, node) => {
  for (const treeNode of rootNodes) {
    if (treeNode.id === node.parent) {
      treeNode.children.push({
        ...node,
        children: []
      });
    } else {
      recursiveChildrens(treeNode.children, node);
    }
  }
};

export const manupulateBoxTree = () => {
  const rootNodes = [];
  for (const node of CafeDataTree) {
    if (!node.parent) {
      rootNodes.push({
        ...node,
        children: []
      });
    } else {
      recursiveChildrens(rootNodes, node);
    }
  }
  return rootNodes;
};
