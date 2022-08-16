const toDoList = ["Wake up early", "Meditate"];
let input = prompt("Select a command");

while (input.toLowerCase() !== "quit") {
    if (input.toLowerCase() === "new") {
        const newTask = prompt("Enter a task");

        toDoList.push(newTask);
        console.log(`${newTask} added to LIST`);
    } else if (input.toLowerCase() === "list") {
        let design = "********************";
        console.log(design);
        for (let i = 0; i < toDoList.length; i++) {
            console.log(`${i}: ${toDoList[i]}`);
        }
        console.log(design)
    } else if (input.toLowerCase() === "delete") {
        let itemIndex = parseInt(prompt("What is the index of the task you want to delete?"));
        if (!Number.isNaN(itemIndex)) {
            let deleted = toDoList.splice(itemIndex, 1);
            console.log(`To-Do Item ${deleted} Removed`);
        } else {
            console.log("Index not Found");
        }
    }
    input = prompt("Select a command");
}
alert("Exiting... Have a blessed day!");
console.log("OK. Quitting the app.");