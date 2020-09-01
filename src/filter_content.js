(async ()=> {
    const projects = (await browser.storage.local.get(null)).projects || [];
    updateProjectList({projects: {newValue: projects}}, 'local');

})();
browser.storage.onChanged.addListener(updateProjectList);


function updateProjectList(changes, area) {
    if (area === 'local' && 'projects' in changes) {
        const projects = changes.projects.newValue;
        [...document.querySelectorAll("table.aui.paged-table.entity-table tbody tr td.project-key")]
            .filter(n => !projects.includes(n.innerHTML))
            .forEach(n => n.parentNode.style.display = 'none');
    }
}
