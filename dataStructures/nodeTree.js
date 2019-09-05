class Node {
    constructor(data){
        this.data = data;
        this.parent = null;
        this.children = [];
    }
}

class Tree {
    constructor(data){
        this.node = new Node(data);
        this._root = this.node;
    }

    //рекурсынй метод для поиска в глубину
    traverseDF(callback) {
        (function recurse(currentNode) {
            for (let i = 0, length = currentNode.children.length; i < length; i++) {
                recurse(currentNode.children[i]);
            }
            callback(currentNode);
        })(this._root);
    };

    //  метод для нахождения конкретного значения в дереве
    contains = function(callback, traversal) {
        traversal.call(this, callback);
    };

    // метод для добавления элемента в дерево
    add(data, toData, traversal) {
        let child = new Node(data),
            parent = null,
            callback = function(node) {
                if (node.data === toData) {
                    parent = node;
                }
            };

        this.contains(callback, traversal);

        if (parent) {
            parent.children.push(child);
            child.parent = parent;
        } else {
            throw new Error('Cannot add node to a non-existent parent.');
        }
    };

}

let tree = new Tree('one');

tree._root.children.push(new Node('two'));
tree._root.children[0].parent = tree;

tree._root.children.push(new Node('three'));
tree._root.children[1].parent = tree;

tree._root.children.push(new Node('four'));
tree._root.children[2].parent = tree;

tree._root.children[0].children.push(new Node('five'));
tree._root.children[0].children[0].parent = tree._root.children[0];

tree._root.children[0].children.push(new Node('six'));
tree._root.children[0].children[1].parent = tree._root.children[0];

tree._root.children[2].children.push(new Node('seven'));
tree._root.children[2].children[0].parent = tree._root.children[2];

tree.traverseDF(function(node) {
    console.log(node.data)
});
