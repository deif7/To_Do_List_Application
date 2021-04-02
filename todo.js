let input = prompt("Enter something");
const todos = ["Collect Chicken Eggs", "Clean Litter Box"];
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log("********");
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}:${todos[i]}`);
        }
        console.log("********");

    } else if (input === "new") {
        const newTodo = prompt("What the new ToDo");
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`);

    } else if (input === 'delete') {
        const index = parseInt(prompt("What do you want to delete"));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`You deleted ${deleted[0]}`);
        } else {
            console.log("Uknown index");
        }
    }

    input = prompt("Enter something");
}
console.log("Ok you quit the app"); 