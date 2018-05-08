const api = "http://calapi.inadiutorium.cz/api/v0/en";
const cal = "general-en";

const calendar = [];
const displayedDates = 5;
let currentIndex = 0;

const text = str => {
    return document.createTextNode(str);
};

const dayToDom = day => {
    const container = document.createElement("div");
    container.classList.add("date");
    container.appendChild(text(day.date));
    day.celebrations.forEach(celebration => {
        const el = document.createElement("div");
        el.classList.add("celebration");
        el.classList.add(celebration.colour);
        el.appendChild(text(celebration.title));
        container.appendChild(el);
    });
    return container;
};

const render = () => {
    const el = document.getElementById("calendar");
    while (el.firstChild) {
        el.removeChild(el.firstChild);
    }
    for (let i = 0; i < displayedDates; i++) {
        const day = calendar[currentIndex + i];
        el.appendChild(dayToDom(day));
    }
};

const extractYMD = date => {
    return {
        year: date.getUTCFullYear(),
        month: date.getUTCMonth() + 1,
        day: date.getUTCDate()
    };
};

const parseDay = raw => {
    const d = new Date(raw.date);
    const { celebrations } = raw;
    const prev = new Date(d);
    prev.setDate(d.getDate() - 1);
    const next = new Date(d);
    next.setDate(d.getDate() + 1);
    return {
        date: d.toUTCString().split(" 00")[0],
        prev: extractYMD(prev),
        next: extractYMD(next),
        celebrations
    };
};

const get = async (year, month, day) => {
    const response = await fetch(`${api}/calendars/${cal}/${year}/${month}/${day}`);
    const json = await response.json();
    return parseDay(json);
};

const loadPrev = async () => {
    const { year, month, day } = calendar[0].prev;
    const prev = await get(year, month, day);
    calendar.unshift(prev);
};

const loadNext = async() => {
    const { year, month, day } = calendar[calendar.length - 1].next;
    const next = await get(year, month, day);
    calendar.push(next);
};

const main = async () => {
    const today = new Date();
    calendar.push(await get(today.getFullYear(), today.getMonth() + 1, today.getDate()));
    await loadPrev();
    await loadPrev();
    await loadNext();
    await loadNext();
    render();
};

document.addEventListener("readystatechange", e => {
    if (document.readyState === "interactive") {
        document.getElementById("backwards").addEventListener("click", async e => {
            if (currentIndex === 0) {
                await loadPrev();
            } else {
                currentIndex--;
            }
            render();
        });

        document.getElementById("forwards").addEventListener("click", async e => {
            if (currentIndex + displayedDates === calendar.length) {
                await loadNext();
            }
            currentIndex++;
            render();
        });

        main();
    }
});
