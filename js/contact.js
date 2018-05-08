const addDebouncedListener = function(el, handler) {
    const state = {
        e: null,
        interval: null
    };

    el.addEventListener("keyup", e => {
        const keyPressed = e.key;
        clearTimeout(state.interval);
        state.interval = null;
        if (keyPressed !== "Enter" && keyPressed !== "Tab") {
            state.e = e;
            state.interval = setTimeout(function() {
                handler(e);
            }, 1000);
        } else if (keyPressed !== "Tab") {
            handler(e);
        }
    });

    el.addEventListener("keydown", e => {
        const keyPressed = e.key;
        clearTimeout(state.interval);
        state.interval = null;
    });

    el.addEventListener("blur", e => {
        if (state.interval != null) {
            clearTimeout(state.interval);
            state.interval = null;
        }
        handler(state.e ? state.e : e);
    });
};

const elements = [
    {
        id: "name",
        validator: value => {
            return value.trim().length > 0;
        }
    },
    {
        id: "email",
        validator: value => {
            return value.includes("@");
        }
    },
    {
        id: "message",
        validator: value => {
            return value.trim().length > 0;
        }
    }
];

const render = () => {
    const results = elements.map(element => {
        const id = element.id;
        const el = document.getElementById(id);
        const value = el.value;
        el.value = "";
        return { id, value };
    });
    const nodes = results.map(result => {
        const el = document.createElement("div");
        el.appendChild(document.createTextNode(`${result.id}: ${result.value}`));
        return el;
    });
    const el = document.getElementById("output");
    while (el.firstChild) {
        el.removeChild(el.firstChild);
    }
    nodes.forEach(node => {
        el.appendChild(node);
    });
};

document.addEventListener("readystatechange", e => {
    if (document.readyState === "interactive") {
        elements.forEach(element => {
            const el = document.getElementById(element.id);
            addDebouncedListener(el, e => {
                const valid = element.validator(e.target.value);
                if (valid) {
                    el.classList.remove("invalid");
                } else {
                    el.classList.add("invalid");
                }
            });
        });

        const el = document.getElementById("form");
        el.addEventListener("submit", e => {
            e.preventDefault();
            let allValid = true;
            for (let i = 0; i < elements.length; i++) {
                const element = elements[i];
                const el = document.getElementById(element.id);
                if (!element.validator(el.value)) {
                    el.classList.add("invalid");
                    allValid = false;
                }
            }
            if (allValid) {
                render();
            }
        });
    }
});
