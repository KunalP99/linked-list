function Node(data, next = null) {
    this.data = data;
    this.next = next;
  }
  
  function LinkedList() {
    this.head = null;
  
    // Add node at the end of the list
    function append(value) {
      // If the list is empty, then add the node at the head of the list
      if (this.head == null) {
        this.prepend(value);
      } else {
        let node = new Node(value, this.head);
  
        // While the node.next value is not empty, then add the new node to node.next
        while (node.next != null) {
          node = node.next;
        }
  
        // Make next null, as now it is the last item in the list
        node.next = new Node(value, null);
      }
    }
  
    // Add node at the start of the list
    function prepend(value) {
      this.head = new Node(value, this.head);
    }
  
    // Return size of the list
    function size() {
      let size = 0;
      let current = this.head;
  
      while (current != null) {
        size += 1;
        current = current.next;
      }
      return `Size: ${size}`;
    }
  
    // Return node at the head of the list
    function headList() {
      return this.head;
    }
  
    // Return node at the end of the list (tail)
    function tail() {
      let current = this.head;
      while (current.next != null) {
        current = current.next;
      }
  
      return current;
    }
  
    // Returns the node at the given index
    function at(index) {
      let current = this.head;
      let count = 0;
  
      // While there is a head node
      while (current) {
        if (count == index) {
          return `Index ${index}: ${this.head.data}`;
        }
        count++;
        current = current.next;
      }
    }
  
    // Removes last item from the list
    function pop() {
      let current = this.head;
  
      console.log(current.next.next);
      while (current.next.next != null) {
        current = current.next;
      }
      current.next = null;
    }
  
    // Returns true if the value is in the list
    function contains(value) {
      let current = this.head;
  
      while (current != null) {
        if (current.data == value) {
          return `The value ${value} is in the list`;
        }
        current = current.next;
      }
  
      if (current == null) {
        return `Value ${value} was not found`;
      }
    }
  
    // Represents linked list as a string
    function toString() {
      let string = "";
      let current = this.head;
  
      while (current != null) {
        string += `( ${current.data} ) => `;
        current = current.next;
      }
  
      string += `null`;
  
      return string;
    }
  
    return { append, prepend, size, headList, tail, at, pop, contains, toString };
  }
  
  const list = new LinkedList();
  list.append(100);
  list.append(200);
  list.append(250);
  list.append(300);
  list.append(24);
  list.prepend(50);
  
  console.log(list.toString());
  console.log(list.size());
  console.log(list.contains(50));
  console.log(list.at(3));
  list.pop();
  console.log(list.toString());
  
  console.log(list);