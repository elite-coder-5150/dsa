Tags: #linked-list

<hr>

A linked list is a linear collection of data elements, in which linear order is not giben by their phyical placement in memory. Insead eac, element points to the next. it is a data structure consisting of a group of nodes which together represent a sequence. Under the simplist form, each node is comprsied of data and a reference to the next node in the sequence. 

This allows for efficient insertion or removal of elements from any position in the sequence during insertion. More complex variants add additional links, allowing effecient insertion an removal from arbitrary lists is that access time is linear ( and difficult to pipeline). Faster access, such as random access, it not feasible.  Array's have better cache locallity as compared to linked list.

#### Add method

```pseudocode
add(value)
	pre: value is te value to add to the list
	post: value has been placed at the tail of the list

	n <- node(value)
	if head = 0
		head <- n
		tail <- n
	else
		tail.next <- n
		tail <- n
	end if
end add
```

#### Prepend method

```
```pseudocode
prepend(value)
	pre-condition : value is the value to add to the list
	post-condition: values has been placed at the head of the list
	n <- node(value)
	n.next <- head
	head <- n

	if tail = 0
		tail <- n
	end if
end prepend
```

#### Search method

```pseudocode
contains(head, value)
	pre-condition : head is the head node in the list
					value is te value to search for.
	post-condition: the item is either in the linked list, return true
					otherwise return false

	n <- head
	while n != 0 and n.value != value.
		n <- n.ext
	end while

	if n = 0
		return false
	end if

	return true
end contains
```

#### Delete method

```pseudocode
remove(head, value)
	pre-condition : head is the head node in the list
					the value is the value to search for
	post-condition: value is removed fro teh list, return true 
					otherwise return false

	if head = 0
		return false
	end if 

	n <- head
	if n.value = value
		if head = tail
			head <- 0
			tail <- 0
		else
			head <- head.next
		end if
		return true
	endif

	while n.next != 0 and n.next.value != value
		n <- n.next
	end while

	if n.next != 0
		if n.next != tail
			tail <- n
			tail.next = null
		else
			n.next <- n.next.next
		end if
		return true
	end if
	return false
end remove
```

#### Traversal method

```pseudocode
traverse(head)
	pre-condition : head is the head of the list
	post-condition: the items in te list have been traversed

	n <- head
	
	while n != 0
		yeild n.value
		n <- n.next
	end while
end traverse
```

#### ReverseTraversal method

```pseudocode
reverse_traversal(head, tail)
	pre-condition : head and tail belong to the same list
	post-condition: the items in the list have been traversed in reverse order.

	if tail != 0
		curr <- tail

		while curr != head
			prev <- head
			while prev.next != curr
				prev <- prev.next
			end while
		end while
		yeild curr.value
		curr <- curr.value
	end if
end reverse_traversal
```