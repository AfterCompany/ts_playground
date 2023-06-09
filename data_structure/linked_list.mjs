// 추상 자료형 = 어떠한 데이터와 그 데이터에 대한 연산
// 세탁기
// 옷 = 데이터 
// 기능 = 연산 (빨래 등)

// 연결리스트의 추상자료형 
// 1. 모든 데이터 출력 - printAll()
// 2. 모든 데이터 제거 - clear()
// 3. 인덱스 삽입 - insertAt(index, data)
// 4. 마지막 삽입 - insertLast(data)
// 5. 인덱스 삭제 - deleteAt(index)
// 6. 마지막 삭제 - deleteLast()
// 7. 인덱스 읽기 - getNodeAt(index)

class Node{
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.count = 0;
    }
    printAll() {
        let currentNode = this.head;
        let text = "[";
        while(currentNode != null) {
            text += currentNode.data;
            currentNode = currentNode.next;

            if(currentNode != null) {
                text += ", ";

            }
        }
        text += "]";
        console.log(text);
    }

    clear() {
        this.head = null;
        this.count = 0;
    }

    insertAt(index, data) {
        if(index > this.count || index < 0) {
            throw new Error('범위를 넘어갔습니다.');
        }
        let newNode =  new Node(data);

        if(index == 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            let currentNode = this.head;
            for(let i=0; i <index - 1; i++) {
                currentNode = currentNode.next;
            }
            newNode.next = currentNode.next;
            currentNode.next = newNode;
        }
        this.count++;
    }

    insertLast(data) {
        this.insertAt(this.count, data);
    }

    deleteAt(index) {
        if(index >= this.count || index < 0) {
            throw new Error("제거 할 수 없습니다.");   
        }
        let currentNode = this.head;
        if(index == 0) {
            let deleteNode = this.head;
            this.head = this.head.next;
            this.count--;
            return deleteNode;
        } else {
            for(let i = 0; i < index - 1; i++ ){
                currentNode = currentNode.next;
            }
            let deleteNode = currentNode.next;
            currentNode.next = currentNode.next.next;
            this.count--;
            return deleteNode;
        }
    }

    deleteLast() {
        return this.deleteAt(this.count - 1);
    }

    getNodeAt(index) {
        if(index >= this.count || index < 0) {
            throw new Error("범위를 넘어갔습니다.");
        }
        let currentNode = this.head;
        for(let i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }
}

export { Node, LinkedList };