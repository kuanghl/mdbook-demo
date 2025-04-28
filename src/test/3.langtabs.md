# mdbook-langtabs

## Some code

let's try with a simple example:

<!-- langtabs-start -->

```swift reds
LogChannel(n"DEBUG", "hello world");
```

```swift
print("Hello, World!") 
```

```rust
fn main() { println!("hello world"); }
```

```lua
print("Hello World")
```

```cpp
#include <iostream>

int main() {
    std::cout << "Hello World!";
    return 0;
}
```

```yaml
some:
  interesting:
    - property
```

```json
{
  "some": { "interesting": ["property"] }
}
```

```xml
<some>
  <interesting>
    <property />
  </interesting>
</some>
```

<!-- langtabs-end -->

contrary to code blocks,
`inline` and ```fenced``` are left untouched.

it should also work when deeply nested:

1. outer:
   1. inner:

      ```swift reds
      GameInstance
        .GetStatusEffectSystem(this.GetGame())
        .ApplyStatusEffect(
          this.GetEntityID(),
          t"BaseStatusEffect.SplinterAddicted",
          this.GetRecordID(),
          this.GetEntityID());
      ```

## Hello World

Here's a simple "Hello World" example in different languages:

<!-- langtabs-start -->
```rust
fn main() {
    println!("Hello, World!");
}
```

```python
def main():
    print("Hello, World!")

if __name__ == "__main__":
    main()
```

```javascript
function main() {
    console.log("Hello, World!");
}

main();
```

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
```

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```
<!-- langtabs-end -->

## Simple Function Example

Here's how you might define a function to calculate factorial in different languages:

<!-- langtabs-start -->
```rust
fn factorial(n: u64) -> u64 {
    match n {
        0 | 1 => 1,
        _ => n * factorial(n - 1)
    }
}

fn main() {
    println!("5! = {}", factorial(5)); // Outputs: 5! = 120
}
```

```python
def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)

print(f"5! = {factorial(5)}")  # Outputs: 5! = 120
```

```javascript
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

console.log(`5! = ${factorial(5)}`);  // Outputs: 5! = 120
```

```go
package main

import "fmt"

func factorial(n uint64) uint64 {
    if n <= 1 {
        return 1
    }
    return n * factorial(n-1)
}

func main() {
    fmt.Printf("5! = %d\n", factorial(5))  // Outputs: 5! = 120
}
```

```java
public class FactorialExample {
    static long factorial(int n) {
        if (n <= 1) return 1;
        return n * factorial(n - 1);
    }
    
    public static void main(String[] args) {
        System.out.println("5! = " + factorial(5));  // Outputs: 5! = 120
    }
}
```
<!-- langtabs-end -->

## Data Structures Example

Here's how you might implement a simple stack in different languages:

<!-- langtabs-start -->
```rust
struct Stack<T> {
    items: Vec<T>,
}

impl<T> Stack<T> {
    fn new() -> Self {
        Stack { items: Vec::new() }
    }
    
    fn push(&mut self, item: T) {
        self.items.push(item);
    }
    
    fn pop(&mut self) -> Option<T> {
        self.items.pop()
    }
    
    fn is_empty(&self) -> bool {
        self.items.is_empty()
    }
}

fn main() {
    let mut stack = Stack::new();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    
    while let Some(item) = stack.pop() {
        println!("Popped: {}", item);
    }
}
```

```python
class Stack:
    def __init__(self):
        self.items = []
        
    def push(self, item):
        self.items.append(item)
        
    def pop(self):
        if not self.is_empty():
            return self.items.pop()
        return None
        
    def is_empty(self):
        return len(self.items) == 0

# Usage
stack = Stack()
stack.push(1)
stack.push(2)
stack.push(3)

while not stack.is_empty():
    print(f"Popped: {stack.pop()}")
```

```javascript
class Stack {
    constructor() {
        this.items = [];
    }
    
    push(item) {
        this.items.push(item);
    }
    
    pop() {
        if (!this.isEmpty()) {
            return this.items.pop();
        }
        return null;
    }
    
    isEmpty() {
        return this.items.length === 0;
    }
}

// Usage
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

while (!stack.isEmpty()) {
    console.log(`Popped: ${stack.pop()}`);
}
```

```go
package main

import "fmt"

type Stack struct {
    items []int
}

func (s *Stack) Push(item int) {
    s.items = append(s.items, item)
}

func (s *Stack) Pop() (int, bool) {
    if s.IsEmpty() {
        return 0, false
    }
    
    index := len(s.items) - 1
    item := s.items[index]
    s.items = s.items[:index]
    return item, true
}

func (s *Stack) IsEmpty() bool {
    return len(s.items) == 0
}

func main() {
    stack := Stack{}
    stack.Push(1)
    stack.Push(2)
    stack.Push(3)
    
    for !stack.IsEmpty() {
        item, _ := stack.Pop()
        fmt.Printf("Popped: %d\n", item)
    }
}
```

```java
import java.util.ArrayList;

public class StackExample {
    static class Stack<T> {
        private ArrayList<T> items = new ArrayList<>();
        
        public void push(T item) {
            items.add(item);
        }
        
        public T pop() {
            if (isEmpty()) {
                return null;
            }
            return items.remove(items.size() - 1);
        }
        
        public boolean isEmpty() {
            return items.isEmpty();
        }
    }
    
    public static void main(String[] args) {
        Stack<Integer> stack = new Stack<>();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        
        while (!stack.isEmpty()) {
            System.out.println("Popped: " + stack.pop());
        }
    }
}
```
<!-- langtabs-end -->