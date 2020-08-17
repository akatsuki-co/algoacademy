## Binary Trees

---

A binary tree is a data structure that is composed of nodes that have at most two children. The top of the binary tree is referred to as the root.

- Nodes can be also constructed with or without references to the parent, that is dependent on the user. Having a reference to the parent node makes tree traversal easier at the cost of extra space.
- A leaf is a node that has no children (left and right point to null).

---

```java
class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode parent;

    public TreeNode(int val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }

    public TreeNode addLeft(int val) {
        TreeNode newNode = new TreeNode(val);
        newNode.parent = this;
        this.left = newNode;
        return newNode;
    }

    public TreeNode addRight(int val) {
        TreeNode newNode = new TreeNode(val);
        newNode.parent = this;
        this.right = newNode;
        return newNode;
    }
}
```

---

### Tree Traversals

---

```java
class TreeTest {
      public static void preOrderTraversal(TreeNode node) {
            if (node == null)
                  return;
            System.out.print(node.val + " ");
            preOrderTraversal(node.left);
            preOrderTraversal(node.right);
      }

      public static void inOrderTraversal(TreeNode node) {
            if (node == null)
                  return;
            inOrderTraversal(node.left);
            System.out.print(node.val + " ");
            inOrderTraversal(node.right);
      }

      public static void postOrderTraversal(TreeNode node) {
            if (node == null)
                  return;
            postOrderTraversal(node.left);
            postOrderTraversal(node.right);
            System.out.print(node.val + " ");
      }

      public static void main(String[] args) {
            //      1
            //    /   \
            //   2     3
            //  / \   / \
            // 4   5 6   7
            TreeNode head = new TreeNode(1);
            // add rest of nodes
            // ...

            preOrderTraversal(head);
            // 1 2 4 5 3 6 7

            inOrderTraversal(head);
            // 4 2 5 1 6 3 7

            postOrderTraversal(head);
            // 4 5 2 6 7 3 1
      }
}
```

---

_Author: Tu Vo_
