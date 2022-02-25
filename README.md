1. Break into different components according to different functional areas of the interface.
2. Determine which state of component to store data. If many child components use the data, then put the data in father component.
3. How to set a "key" when creating lists of elements to identify which item have changed.We often use IDs as keys:
```
     todos.map((todo) => {
                        return < Item key={todo.id} {...todo} />

                    })
```
4. If the element that binds the event and  the element you will manipulate are the same. Don't need to use ref. we can use the parameter "event" returned by the callback function:
```
   handleKeyUp = (event) => {
        if (event.keyCode !== 13) return
        if (event.target.value.trim() === "") {
            alert("The input cannot be null")
            return
        }
```

5. How to transfer data from child component to father component:
    (1) Transfer a function to child component through props
    (2) Child component call this function and transfer data to father component through parameter
    ```
        const todoObj = { id: nanoid(), name: event.target.value, done: false }
        this.props.addTodo(todoObj)
    ```    

6. The conditional (ternary) operator and inline css style with react:
    ```
     style={{ display: mouse ? 'block' : 'none' }}
     ```


   