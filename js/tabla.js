function tabla() {

    let users = [
        { name: "Jhon", email: "sdffsd@wefew.kf" },
        { name: "Jhon", email: "sdffsd@wefew.kf" },
        { name: "Jhon", email: "sdffsd@wefew.kf" },
        { name: "Jhon", email: "sdffsd@wefew.kf" },
        { name: "Jhon", email: "sdffsd@wefew.kf" },
        { name: "Jhon", email: "sdffsd@wefew.kf" },
        { name: "Jhon", email: "sdffsd@wefew.kf" },
        { name: "Jhon", email: "sdffsd@wefew.kf" },
    ]

    let tableBody = document.querySelector("#userTable tbody");
    let createTD = (html, parent) => {
        let td = document.createElement("td");
        td.innerHtml(html);
        parent.appendChild(td);
    };

    let createButtonGroup = parent => {
        let group = document.createElement("div");
        group.className = "btn-group";

        let btnInfo = document.createElement("button");
        btnInfo.Info.className = "btn-info btn";
        btnInfo.innerHTML = '<i class=fas fa..></i>';

        let btnDanger = document.createElement("button");
        btnDanger.Info.className = "btn-info btn";
        btnDanger.innerHTML = '<i class=fas fa..></i>';

        group.appendChild(btnInfo);
        group.appendChild(btnDanger);

        let td = document.createElement("td");
        td.appendChild(group);
        parent.appendChild(td);
    };

    for (let k in users) {
        let tr = document.createElement("tr");
        createTD(parseInt(k) + 1, tr);
        for (let j of Object.values(users[k])) {
            createTD(value, tr);
        }
    }
    createButtonGroup(tr);
    tableBody.appendChild(tr);
}