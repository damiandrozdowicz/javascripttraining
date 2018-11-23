const sections = ['introduction', 'setup', 'game'];
const colors = [{
        value: 'red',
        label: 'Red'
    },
    {
        value: 'green',
        label: 'Green'
    },
    {
        value: 'blue',
        label: 'Blue'
    },
    {
        value: 'yellow',
        label: 'Yellow'
    },
    {
        value: 'orange',
        label: 'Orange'
    },
    {
        value: 'purple',
        label: 'Purple'
    },
    {
        value: '#123456',
        label: 'SpecialBlue'
    }
];
const players = [];

window.onload = function () {
    const select = document.getElementById('color');
    colors.forEach(function (color) {
        select.innerHTML += `<option value="${color.value}">${color.label}</option>`;
    });
};

/**
 * @param {Event} e Event from onsubmit
 */
function addPlayer(e) {
    e.preventDefault();

    //Check if the maximum player limit wasn't reached yet
    if (players.length >= 4) {
        return;
    }

    const playerNameInput = document.getElementById('name');
    const playerColorInput = document.getElementById('color');
    const playerName = playerNameInput.value.trim();
    const playerColor = getColorByValue(playerColorInput.value);

    //Check if player name contains at least 3 characters
    if (playerName.length < 3) {
        alert('Player name should contain at least 3 characters');
        return;
    }

    //Check if the player name is not used yet
    if (isNameUsed(playerName)) {
        alert('No two players can have the same name');
        return;
    }

    //Check if color is from predefined color list
    if (playerColor == null) {
        alert('Unknown color. Please select color from select.');
        return;
    }

    //Check if the player color is not used yet
    if (isColorUsed(playerColor)) {
        alert('No two players can have the same color');
        return;
    }

    //Create object of class Player with player details
    const player = new Player(playerName, playerColor);

    //Reset form values
    e.target.reset();

    players.push(player);
    addPlayerRowToTable(player);
    onPlayerAddOrRemove();
}

/**
 * @param {Player} player
 */
function addPlayerRowToTable(player) {
    let tablePlayersBody = document.getElementById('players');

    const row = `<tr>
        <td></td>
        <td>${player.name}</td>
        <td><span class="colorCircle" style="background-color:${player.color.value};"></span>${player.color.label}</td>
        <td><button class="removePlayer" onclick="removePlayer(event, ${player.id});"><i class="material-icons">clear</i></button></td>
    </tr>`;

    tablePlayersBody.innerHTML += row;
}

/**
 * @param {Event} e Event from onclick
 * @param {number} playerID ID of player do remove
 */
function removePlayer(e, playerID) {
    e.target.parentElement.parentElement.remove();
    const playerIndex = getPlayerIndexByID(playerID);
    players.splice(playerIndex, 1);

    onPlayerAddOrRemove();
}

/**
 * Execute functions to make changes on website related to adding or removing player
 */
function onPlayerAddOrRemove() {
    showHideVisibleColorOptions();
    enableOrDisablePlayerAddButton();
    enableOrDisableStartGameButton();
}

/**
 * Shows unused colors and hides used colors in color select
 */
function showHideVisibleColorOptions() {
    let firstVisibleOption = 1000;
    const select = document.getElementById('color');
    const options = select.options;

    for (let i = 0; i < options.length; i++) {
        const option = options[i];
        const _isColorUsed = isColorUsed(getColorByValue(option.value))

        option.style.display = _isColorUsed ? 'none' : '';
        option.disabled = _isColorUsed

        if (!_isColorUsed) {
            firstVisibleOption = Math.min(firstVisibleOption, i);
        }
    }

    //Select first non hidden option
    select.selectedIndex = firstVisibleOption;
}

/**
 * Disables the button for adding more players if length of player list is 4
 * Otherwise enable the button
 */
function enableOrDisablePlayerAddButton() {
    const button = document.getElementById('player-add');
    button.disabled = players.length == 4;
}

/**
 * Disables the button for starting game if length of player list is less than 3
 * Otherwise enable the button
 */
function enableOrDisableStartGameButton() {
    const button = document.getElementById('start-game');
    button.disabled = players.length < 3;
}

/**
 * @param {number} id ID of player to find
 * @returns {number} index of player in "players" list
 */
function getPlayerIndexByID(id) {
    return players.findIndex(function (p) {
        return p.id == id;
    });
}
/**
 * @param {value} value Color value to find
 * @returns {object{value : string, label : string}} Color object
 */
function getColorByValue(value) {
    return colors.find(function (p) {
        return p.value == value;
    });
}

/**
 * Check if player with this name already exists
 * @param {string} name Check for this name
 * @returns {boolean} true if name is already used, false otherwise
 */
function isNameUsed(name) {
    return players.find(function (p) {
        return p.name == name;
    }) != null;
}

/**
 * Check if player with this color already exists
 * @param {string} color Check for this color
 * @returns {boolean} true if color is already used, false otherwise
 */
function isColorUsed(color) {
    return players.find(function (p) {
        return p.color == color;
    }) != null;
}

/**
 * @param {string} section ID of section to show, other sections from "sections" array will be hidden
 */
function goToSection(section) {
    sections.forEach(function (e) {
        let element = document.getElementById(e);

        if (e == section) {
            removeClass(element, 'hidden');
        } else {
            addClass(element, 'hidden');
        }
    });
}

/**
 * @param {object} element Reference to element where to add class
 * @param {*} className Name of the class that will be added to element
 */
function addClass(element, className) {
    let classList = element.className.split(" ");
    if (classList.indexOf(className) == -1) {
        classList.push(className);
    }
    element.className = classList.join(" ");
}

/**
 * @param {object} element Reference to element where to remove class
 * @param {*} className Name of the class that will be removed from element
 */
function removeClass(element, className) {
    let classList = element.className.split(" ");
    const position = classList.indexOf(className);

    if (position > 0) {
        classList.splice(position, 1);
    }
    element.className = classList.join(" ");
}