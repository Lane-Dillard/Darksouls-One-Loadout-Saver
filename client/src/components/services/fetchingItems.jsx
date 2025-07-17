export const getWeapons = () => {
    return fetch('http://localhost:8088/weapons').then((res) => {
        if (!res.ok) throw new Error('Network response error.');
        return res.json();
    }).catch ((err) => {
        console.error('Fetch error:', err);
    })
}

export const getHelmets = () => {
    return fetch('http://localhost:8088/helmets').then((res) => {
        if (!res.ok) throw new Error('Network response error.');
        return res.json();
    }).catch ((err) => {
        console.error('Fetch error:', err);
    })
}

export const getChestplate = () => {
    return fetch('http://localhost:8088/chestplate').then((res) => {
        if (!res.ok) throw new Error('Network response error.');
        return res.json();
    }).catch ((err) => {
        console.error('Fetch error:', err);
    })
}

export const getGauntlets = () => {
    return fetch('http://localhost:8088/gauntlets').then((res) => {
        if (!res.ok) throw new Error('Network response error.');
        return res.json();
    }).catch ((err) => {
        console.error('Fetch error:', err);
    })
}

export const getLegs = () => {
    return fetch('http://localhost:8088/legs').then((res) => {
        if (!res.ok) throw new Error('Network response error.');
        return res.json();
    }).catch ((err) => {
        console.error('Fetch error:', err);
    })
}

export const getRings = () => {
    return fetch('http://localhost:8088/rings').then((res) => {
        if (!res.ok) throw new Error('Network response error.');
        return res.json();
    }).catch ((err) => {
        console.error('Fetch error:', err);
    })
}

export const getSpells = () => {
    return fetch('http://localhost:8088/spells').then((res) => {
        if (!res.ok) throw new Error('Network response error.');
        return res.json();
    }).catch ((err) => {
        console.error('Fetch error:', err);
    })
}