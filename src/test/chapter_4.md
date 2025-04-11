# mdbook-whichlang


<!-- langtabs-start -->
```c
#include <stdio.h>

int main(void) {
	printf("Hello World\n");
}
```
<!-- langtabs-end -->

<!-- langtabs-start -->
```cpp
#include <iostream>

int main()
{
   std::cout << "Hello World" << std::endl;
}
```
<!-- langtabs-end -->

<!-- langtabs-start -->
```javascript
console.log("Hello World");
```
<!-- langtabs-end -->

<!-- langtabs-start -->
```typescript
console.log("Hello World");
```
<!-- langtabs-end -->

<!-- langtabs-start -->
```rescript
Console.log("Hello World")
```
<!-- langtabs-end -->

<!-- langtabs-start -->
```css
h1 {
  color: blue;
}
```
<!-- langtabs-end -->

<!-- langtabs-start -->
```vim
set syntax=ruby
```
<!-- langtabs-end -->

<!-- langtabs-start -->
```lua,fp=init.lua
print("Hello World")
```
<!-- langtabs-end -->

<!-- langtabs-start -->
```python
print("Hello World")
```
<!-- langtabs-end -->

<!-- langtabs-start -->
```nim
echo "Hello World"
```
<!-- langtabs-end -->

<!-- langtabs-start -->
```zig,fp=hello.zig
const std = @import("std");

pub fn main() !void {
    const stdout = std.io.getStdOut().writer();
    try stdout.print("Hello, {s}!\n", .{"world"});
}
```
<!-- langtabs-end -->

<!-- langtabs-start -->
```odin
package main

import "core:fmt"

main :: proc() {
	fmt.println("Hellope!")
}
```
<!-- langtabs-end -->

<!-- langtabs-start -->
```wat,fp=hello.wat,icon=%webassembly
(module
    (import "wasi_unstable" "fd_write"
        (func $fd_write (param i32 i32 i32 i32) (result i32))
    )

    (memory 1)
    (export "memory" (memory 0))

    (data (i32.const 0) "\08\00\00\00\0c\00\00\00Hello World\n")

    (func $main (export "_start")
        i32.const 1
        i32.const 0
        i32.const 1
        i32.const 20
        call $fd_write
        drop
    )
)
```
<!-- langtabs-end -->