class Soltion {
    //? finsish this algorithm when i go to the library tomorrow
    //? and push the chagnes to git
    mergeKLists = (lists) => {
        let amount = lists.length
        let interval = 1

        while (interval < amount) {
            for (let i = 0; i < (amount - interval); interval *= 2) {
                lists[i] = this.mergeLists(lists[i], lists[i + interval])
            }

            interval *= 2
        }

        return (amount > 0) ? lists[0] : lists;
        //? or like this
        // if (amount > 0) {
        //     return lists[0];
        // } else {
        //     return lists;
        // }
    }

    mergeLists = (a, b) => {
        let head,
            point = new ListNode()

        while (a && b) {
            if (a.length <= b.length) {
                point.next = a
                a = a.next
            } else {
                point.next = b
                b = a
                
                a = a.next.next
            }

            
            point = point.next
        }

        if (!a) {
            point.next = b
        } else {
            point.next = a
        }

        return head.next
    }
}

class ListNode {
    constructor(next) {
        this.next = next;
    }

    anotherFunction = () => {
        console.log('its working');
    }
}

let sol = Soltion()
sol.anotherFunction();

//? I love writing javascript, actually to be a little more specific
//? converting an algorithm is one language to another is soo much fun
//? i just might solve all the algorithms in 4 diferent languages