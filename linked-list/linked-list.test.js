import { LinkedListNode } from "./node";

describe('LinkedListNode', () => {
    it('should create a list node with value', () => {
        const node = new LinkedListNode(1)

        expect(node.value).toBe(1)
        expect(node.next).toBeNull()
    });

    it('should create a list node with an object as a value', () => {
        const nodeValue = { value: 1, key: 'test' }
        const node = new LinkedListNode(nodeValue)

        expect(node.value.value).toBe(1)
        expect(node.value.key).toBe('test')
        expect(node.next).toBeNull()
    });

    it('should links nodes together', () => {
        const _node = new LinkedListNode(2);
        const node = new LinkedListNode(1, _node)

        expect(node.next).toBeDefined()
        expect(_node.next).toBeNull()
        expect(node.value).toBe(1)
        expect(node.next.value).toBe(2)
    });

    it('should covert a node to a string', () => {
        const node = new LinkedListNode(1)
        expect(node.toString()).toBe('1')

        node.value = 'string value'
        expect(node.toString()).toBe('string value')
    });

    it('should convert a node to string with custom stringifier', () => {
        const nodeValue = { value: 1, key: 'test' }
        const node = new LinkedListNode(nodeValue)

        const toStringCb = (value) => `value: ${value.value}, key: ${value.key}`
        
        expect(node.toString(toStringCb)).toBe('value: 1, key: test');

        //? I would rather use the built in terminal rather then iTerm
        
    });
});