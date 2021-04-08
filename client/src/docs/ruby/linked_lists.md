## Linked Lists

---

A linked list is a data structure where elements are linked with pointers, therefore not being contiguous in memory.

- Each link, or more commonly referred to as "node", contains a data field and a reference to the next node in the list.
- The last node will point to a null value.
- Variants of linked lists include singly (each node has one pointer) or doubly (each node has two pointers).

---

```rb
class Node
  attr_accessor :val, :next

  def initialize(val)
	@val = val
	@next = nil
  end

end

class SinglyLinkedList
  attr_reader :head, :size

  def initialize
	@head = nil
	@size = 0
  end

  def add_node(val)
	node = Node.new(val)
	node.next = @head unless @head.nil?
	@head = node
	@size += 1
	node
  end

  def delete_node(index)
	raise IndexError if is_out_of_bounds?(index)
	curr = @head
	if index == 0
	  @head = curr.next
	elsif index == @size - 1
	  until curr.next.nil?
	    prev = curr
		curr = curr.next
	  end
	  prev.next = nil
	else
	  while index != 0
	    prev = curr
		index -= 1
		curr = curr.next
	  end
	  prev.next = curr.next
	end
	@size -= 1
  end

  def inspect
	str = ""
	tmp = @head
	until tmp.nil?
	  str += tmp.val.to_s
	  str += " -> " unless tmp.next.nil?
	  tmp = tmp.next
    end
    str
  end

  def is_out_of_bounds?(index)
    index < 0 || index >= @size
  end
end

s = SinglyLinkedList.new
s.add_node(1)
s.add_node(2)
s.add_node(3)
s.add_node(4)
s.add_node(5)

p s
# 5 -> 4 -> 3 -> 2 -> 1

s.delete_node(0)
p s
# 4 -> 3 -> 2 -> 1

s.delete_node(3)
p s
# 4 -> 3 -> 2

s.delete_node(1)
p s
# 4 -> 2

s.delete_node(0)
p s
# 2

s.delete_node(0)
```

---

_Author: Tu Vo_
