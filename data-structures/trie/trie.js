import { TrieNode } from "./trie-node";
const HEAD_CHARACTER = "*";

export class Trie {
    constructor() {
        this.head = new TrieNode(HEAD_CHARACTER);
    }

    adWord(word) {
        let currentNode = this.head;

        for (let charIndex = 0; charIndex < word.length; charIndex += 1) {
            const isCompleteWord = charIndex === word.length - 1;
            currentNode = currentNode.addChild(word[charIndex], isCompleteWord);
        }

        return this;
    }

    deleteWord(word) {
        const depthFirstDelete = (currentNode, charIndex = 0) => {
            if (charIndex >= word.length) {
                return;
            }

            const char = word[charIndex];
            const nextNode = currentNode.getChild(char);

            if (nextNode == null)
                return;

            depthFirstDelete(nextNode, charIndex + 1);

            if (charIndex === word.length - 1) {
                nextNode.isCompleteWord = false;
            }

            currentNode.removeChild(char);

            return this;
        }
    }
}