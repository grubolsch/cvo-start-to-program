// Deze file mag je niet aanpassen!
let fruits = [
    {
        "name": "Mango",
        "color": "Yellow",
        "taste": "Sweet",
        "nutrition": {
            "calories": 60,
            "carbs": 15,
            "fiber": 1.6
        }
    },
    {
        "name": "Orange",
        "color": "Orange",
        "taste": "Citrusy",
        "nutrition": {
            "calories": 62,
            "carbs": 15,
            "fiber": 3
        }
    },
    {
        "name": "Pear",
        "color": "Green",
        "taste": "Sweet",
        "nutrition": {
            "calories": 101,
            "carbs": 27,
            "fiber": 6
        }
    },
    {
        "name": "Kiwi",
        "color": "Brown",
        "taste": "Tart",
        "nutrition": {
            "calories": 61,
            "carbs": 15,
            "fiber": 3
        }
    },
    {
        "name": "Apple",
        "color": "Red",
        "taste": "Sweet",
        "nutrition": {
            "calories": 95,
            "carbs": 25,
            "fiber": 4
        }
    },
    {
        "name": "Grapes",
        "color": "Purple",
        "taste": "Sweet",
        "nutrition": {
            "calories": 62,
            "carbs": 16,
            "fiber": 0.8
        }
    },
    {
        "name": "Banana",
        "color": "Yellow",
        "taste": "Sweet",
        "nutrition": {
            "calories": 105,
            "carbs": 27,
            "fiber": 3
        }
    },
    {
        "name": "Pineapple",
        "color": "Yellow",
        "taste": "Tangy",
        "nutrition": {
            "calories": 50,
            "carbs": 13,
            "fiber": 1.4
        }
    },
    {
        "name": "Strawberry",
        "color": "Red",
        "taste": "Sweet",
        "nutrition": {
            "calories": 32,
            "carbs": 8,
            "fiber": 2
        }
    },
    {
        "name": "Peach",
        "color": "Orange",
        "taste": "Sweet",
        "nutrition": {
            "calories": 59,
            "carbs": 15,
            "fiber": 2.3
        }
    }
];
function flatten(arr) {
    return arr.reduce((flat, toFlatten) => {
        return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
}

function convertToString(value) {
    if (typeof value === 'object') {
        return JSON.stringify(value);
    }
    return value;
}

function arrayToHtmlTable(data) {
    let table = '<table class="table table-striped">';

    // Generating table header
    table += '<thead><tr>';
    for (let key in data[0]) {
        table += '<th>' + key + '</th>';
    }
    table += '</tr></thead>';

    // Generating table body
    table += '<tbody>';
    data.forEach(item => {
        table += '<tr>';
        for (let key in item) {
            let value = item[key];
            if (Array.isArray(value)) {
                value = flatten(value).map(convertToString).join(', ');
            } else {
                value = convertToString(value);
            }
            table += '<td>' + value + '</td>';
        }
        table += '</tr>';
    });
    table += '</tbody>';

    table += '</table>';

    return table;
}