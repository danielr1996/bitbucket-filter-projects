const storage = browser.storage;

const addProjectToStorage = storage => async project => {
    const projects = (await storage.get(null)).projects || [];
    storage.set({projects: [...projects, project]})
}

const removeProjectFromStorage = storage => async project => {
    const projects = (await storage.get(null)).projects || [];
    storage.set({projects: projects.filter(p => p !== project)})
}

const addProject = addProjectToStorage(storage.local);
const removeProject = removeProjectFromStorage(storage.local);

function updateProjectList(changes, area) {
    if (area === 'local' && 'projects' in changes) {
        const projects = changes.projects.newValue;
        projectlist = document.querySelector('.projectlist');
        projectlist.textContent = '';
        projects.forEach(project => projectlist.appendChild((() => {
            const textNode = document.createElement('span');
            textNode.classList.add('key');
            textNode.textContent = project;
            const btnNode = document.createElement('button');
            btnNode.dataset.key = project;
            btnNode.textContent = 'X';
            btnNode.addEventListener('click', event => {
                removeProject(event.target.dataset.key);
            })
            const liNode = document.createElement('li');
            liNode.appendChild(textNode);
            liNode.appendChild(btnNode);
            return liNode;
        })()))
    }
}


(async () => {
    const projects = (await storage.local.get(null)).projects || [];
    updateProjectList({projects: {newValue: projects}}, 'local');
    browser.storage.onChanged.addListener(updateProjectList);
    document.querySelector('[name=addproject]').addEventListener('keydown', event => {
        if (event.key === 'Enter') {
            addProject(event.target.value);
        }
    });
})();
