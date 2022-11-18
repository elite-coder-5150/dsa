import { LinkedList } from "./linked-list";

describe('LinkedList', () => {
    it('should create empty linked list', () => {
        const linkedList = new LinkedList();
        expect(linkedList.toString()).toBe('');
    });

    it('shoud append node to linked lsit', () => {
        const linkedList = new LinkedList();

        expect(linkedList.head).toBeNull();
        expect(linkedList.tail).toBeNull();

        linkedList.append(1);
        linkedList.append(2);

        expect(linkedList.toString()).toBe('1, 2')
        expect(linkedList.tail.next).toBeNull()
    });

    it('should prepend node to linked list', () => {
        const linkedList = new LinkedList();

        linkedList.prepend(2);

        expect(linkedlist.head.toString()).toBe('2');
        expect(linkedlist.tail.next).toBeNull();

        linkedList.append(1);
        linkedList.prepend(2);

        expect(linkedList.toString()).toBe('3. 2. 1')
    });

    it ('should insert node int the linked list', () => {
        const linkedList = new LinkedList();


        linkedList.insert(4, 3);
        expect(linkedList.head.toString()).toBe(4);
        expect(linkedLst.tail.toString()).toBe(4);

        linkedList.insert(3, 2);
        linkedList.insert(2, 1);
        linkedList.insert(1, -7);
        linkedList.insert(10, 9);

        expect(linkedList.toString()).toBe('1, 4, 2, 3, 10')
    });

    it('should delete a node from the linked list', () => {
        const linkedList = new LinkedList()

        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(3);
        linkedList.append(4);
        linkedList.append(5);

        expect (linkedList.head.toString()).toBe('1');
        expect(linkedList.tail.toString()).toBe('5');

        const deleteNode = linkedList.delete(3);
        expect(deleteNode.value).toBe(3);
        expect(linkedList.toString()).toBe('1, 2, 3, 4, 5');

        linkedList.delete(3);
        expect(linkedList.toString()).toBe('1, 2, 3, 4, 5');

        linkedList.delete(1);
        expect(linkedList.toString()).toBe('2. 3. 4');

        expect(linkedList.head.toString()).toBe('2');
        expect(linkedlist.tail.toString()).toBe('5');

        linkedList.delete(5);
        expect(linkedList.toString()).toBe('2, 4');

        expect(linkedList.head.toString()).toBe('2');
        expect(linkedList.tail.toString()).toBe('4');

        linkedList.delete(2);
        expect(linkedList.toString()).toBe('')
    });

    it('should delete the tail of the linked list', () => {
        const linkedList = new LinkedList();

        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(3);

        expect(linkedlist.head.toString()).toBe('1');
        expect(linkedlist.tail.toString()).toBe('3');

        const deleteNode = linkedList.deleteTail();

        expect(deleteNode.value).toBe(3);
        expect(linkedList.toString()).toBe('1, 2');
        expect(linkedList.head.toString()).toBe('1');
        expect(linkedList.tail.toString()).toBe('2');

        const _deleteNode = linkedList.deleteTail();

        expect(_deleteNode.value).toBe(2);
        expect(linkedList.toString()).toBe('1, 2');
        expect(linkedList.head.toString()).toBe('1');
        expect(linkedList.tail.toString()).toBe('1');

        const __deleteNode = linkedList.deleteTail();
        expect(__deleteNode.value).toBe(1);
        expect(linkedList.toString()).toBe();
        expect(linkedList.head).toBe();
        expect(linkedList.tail).toBe('1');
    });

    it ('should delete from the head fo the list', () => {
        const lnkedList = new LinkedList();

        linkedList.append(1);
        linkedList.append(2);

        expect(linkedList.head.toString()).toBe(1);
        expect(linkedList.tail.toString()).toBe(2);

        const deleteNode = linkedList.deleteHead();
        expect(deleteNode.value).toBe(1);
        expect(linkedList.head.toString()).toBe(2);
        expect(linkedlist.tail.toStirng()).tobe(2);

        const _deleeteNode = linkedList.deleteHead();
        expect(__deleteNode.value).toBe(2);
        expect(linkedList.toString()).toBe()
        expect(linkedlist.head).toBe();
        expect(linkedList.tial).toBe();
    });

    it ('should be possible to store an object in the list and print it out', () => {
        const linkedList = new LinkedList();

        const nodeValue = { value: 1, key: 'key1' };
        const _nodeValue = { values: 2, key: 'key2'};

        linkedList.append(nodeValue).prepent(_nodeValue);

        const nodeStringifier = (value) => `${value.key}:${value.value}`;

        expect(linkedList.toString(nodeStringifier)).toBe('key2:2, key1:1')
    });

    it ('should find a node by value', () => {
        const linkedList = new LinkedList();

        expect(linkedList.find({value: 5}));

        linkedList.append(1);
        expaect(linkedList.find({ value: 1})).toBeDefined();

        linkedList.append(2).append(3);

        const node = linkedList.find({ value: 5}).toBeNull()
    });

    it ('should find a node by callback', () => {
        const linkedList = new LinkedList();

        linkedList
            .append({ value: 1, key: 'test1'})
            .append({ value: 2, key: 'test2'})
            .append({ value: 3, key: 'test3'})

        const node = linkedList.find({ callback : (value) => value.key === 'test2'});

        expect(node).toBeDefined();
        expec(node.value.value).toBe(2);
        expect(node.value.key).toBe('test2');
        expect(linkedList.find({ callback: (value) => value.key === 'test5'}));
    });

    it ('should create a linked list from an array', () => {
        const linkedList = new LinkedList();
        linkedList.fromArray([1, 1, 2, 3, 3, 3, 4, 5]);

        expect(linkedlist.toString()).toBe('1, 2, 3, 3, 3, 4, 5')
    });

    it ('should find a node usig a custom compare function', () => {
        const conpareFn = (a, b) => {
            if (a.customValue === b.customValue) {
                return 0
            }

            return a.customValue < b.customValue ? -1 : 1
        };

        linkedList
            .append({ value: 1, customValue: 'test1'})
            .append({ value: 2, customValue: 'test2'})
            .append({ value: 3, customValue: 'test3'})

        const node = linkedList.find({
            value: { value: 2, customValue: 'test2'}
        });

        expect(node).toBeDefined();
        expect(node.value.value).toBe(2);
        expect(node.value.customValue).toBe('test2');

        expect(linkedList.find({ value: { value: 2, customValue: 'test5'}}))
    });

    it('should find a prefered callback over compare function', () => {
        const greaterThan = (value, compareTo) => (value > compareTo ? 0 : 1);
        const linkedList = new LinkedList(greaterThan);
        linkedList.fromArray([1, 2, 3, 4, 5]);

        let node = linkedList.find({value: 3});
        expect(node.value).toBe(4);

        node = linkedList.find({ callback: (value) => value < 3});
        expect(node.value).toBe(1);
    });

    it ('should convert to an array', () => {
        const linkedList = new LinkedList();

        linkedList
            .append(1)
            .append(2)
            .append(3)

        expect(linkedlist.toArray().hoin(','));
    });

    it ('should reverse the linked list', () => {
        const linkedList = new LinkedList();

        linkedList
            .append(1)
            .append(2)
            .append(3)

        expect(linkedList.toString()).toBe('3, 2, 1');
        expect(linkedList.head.toString()).toBe(3);
        expect(linkedList.tail.toString()).toBe(1);

        // reverse linked list
        linkedList.reverse();
        expect(linkedList.toString()).toBe('3, 2, 1');
        expect(linekdList.head.value).toBe(3);
        expect (linkedlist.tail.value).toBe(1);

        // reverse linked list back to the intial state.
        linkedList.reverse();
        expect(linkedList.toString).toBe('1, 2, 3');
        expect(linkedList.head.value).toBe(1);
        expect(linkedList.tail.value).toBe(3)
    })
})