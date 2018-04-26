const getUsers = () => {
    return $.get("https://jsonplaceholder.typicode.com/users");
};

const loadTodos = userId => {
    return $.get("https://jsonplaceholder.typicode.com/todos", { userId });
};

const loadAlbums = userId => {
    return $.get("https://jsonplaceholder.typicode.com/albums", { userId });
};

const createTodosElement = todos => {
    const ul = $(`<ul></ul>`);
    ul.addClass("todos");

    for (const todo of todos) {
        const li = $("<li></li>");
        li.text(todo.title);
        li.addClass("todo");
        const crossOrCheck = todo.completed ? `<i class="fas fa-check"></i>` : `<i class="fas fa-times"></i>`;
        li.prepend($(crossOrCheck));
        ul.append(li);
    }

    ul.hide();
    return ul;
};

const createAlbumsElement = albums => {
    const ol = $(`<ol></ol>`);
    ol.addClass("albums");

    for (const album of albums) {
        const li = $("<li></li>");
        li.text(album.title);
        li.addClass("album");
        ol.append(li);
    }

    ol.hide();
    return ol;
};

const createUserElement = user => {
    const div = $("<div></div>");
    div.data("userId", user.id);
    div.data("loadedTodos", false);
    div.data("loadedAlbums", false);
    div.addClass("user");

    const span = $(`<span>${user.name}, (${user.email}, ${user.company.name})</span>`);
    span.addClass("name");
    div.append(span);

    const todoButton = $("<button>Todos</button>");
    todoButton.on("click", async e => {
        const el = $(e.currentTarget).parent(".user");
        if (!el.data("loadedTodos")) {
            const todos = await loadTodos(el.data("userId"));
            el.append(createTodosElement(todos));
            el.data("loadedTodos", true);
        }
        el.children(".albums").hide();
        el.children(".todos").toggle();
    });
    div.append(todoButton);

    const albumButton = $("<button>Albums</button>");
    albumButton.on("click", async e => {
        const el = $(e.currentTarget).parent(".user");
        if (!el.data("loadedAlbums")) {
            const albums = await loadAlbums(el.data("userId"));
            el.append(createAlbumsElement(albums));
            el.data("loadedAlbums", true);
        }
        el.children(".todos").hide();
        el.children(".albums").toggle();
    });
    div.append(albumButton);

    return div;
};

$(async () => {
    const users = await getUsers();
    users.forEach(u => {
        $("body").append(createUserElement(u));
    });
});
