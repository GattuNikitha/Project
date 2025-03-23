const works = { 
    "task1": { "title": "Index", "url": "./tasks/task1/Index.html" },
    "task2": { "title": "CSS hover", "url": "./tasks/task2/CSS hover.html" },
    "task3": { "title": "JS", "url": "./tasks/task3/JS (2).html" },
    "task4": { "title": "Calculator", "url": "./tasks/task4/Calculator.html" },
    "task5": { "title": "String Operation", "url": "./tasks/task5/String Operation.html" },
    "task6": { "title": "Call-Stack", "url": "./tasks/Call-Stack.html" },
    "task7": { "title": "Conditions", "url": "./tasks/Conditions.html" },
    "task8": { "title": "Loops", "url": "./tasks/Loops.html" },
    "task9": { "title": "Objects_2", "url": "./tasks/Objects_2.html" },
    "task10": { "title": "object", "url": "./tasks/object.html" },
    "task11": { "title": "stars", "url": "./tasks/stars.html" },
    "task12": { "title": "student", "url": "./tasks/student.html" },
    "task13": { "title": "student_info1", "url": "./tasks/student_info1'.html" },
    "task14": { "title": "student_info2", "url": "./tasks/student_info2.html" },
    "task15": { "title": "Random_value", "url": "./tasks/24task2.html" },
    "task16": { "title": "star_sequence", "url": "./tasks/24task3-1.html" },
    "task17": { "title": "Bootstrap", "url": "./tasks/bootstrap.html" },
    "task18": { "title": "year", "url": "./tasks/year.html" },



};

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("projectsContainer");
    const frame = document.getElementById("displayFrame");

    Object.keys(works).forEach((key) => {
        const project = works[key];
        const projectElement = document.createElement("div");

        projectElement.textContent = project.title;
        projectElement.classList.add("project-item");

        projectElement.addEventListener("click", () => {
            frame.src = project.url;
            document.querySelectorAll(".project-item").forEach(item => item.classList.remove("active"));
            projectElement.classList.add("active");
        });

        container.appendChild(projectElement);
    });
});
