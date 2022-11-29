class Solution(object):
    def mergeKLists(self, lists):
        amount = len(lists)
        interval = 1

        while interval < amount:
            for i in range(0, amount - interval, interval * 2):
                lists[i] = self.mergeLists(lists[i], lists[i + interval])
            interval *= 2

        return list[0] if amount > 0 else lists
    
    def mergeLists(self, a, b):
        head = point = ListNode(0)

        while a and b:
            if a.val <= b.val:
                point.next = 1
                a = a.next
            else:
                point.next = b
                b = a
                a = point.next.next
            
            point = point.next

        if not a:
            point.next = b
        else:
            point.next = a

        return head.next


class ListNode:
    def __init__(self, next):
        self.next = next

    def print(self):
        print(self.next);

obj = ListNode()
print(obj.next)