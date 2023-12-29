function createChristmasTree(ornaments, height) {
    let result = ''
    let finalOrnaments = ''
    let aux = null

    if (typeof parseInt(height) !== 'number') {
        return ''
    } else if (height <= 0) {
        return "La altura debe ser mayor que zero"
    } else if (ornaments === '') {
        return "Los adornos no pueden estar vacios"
    }

    ornaments = ornaments.split(' ').join('').split('\n').join('')

    for (let i=1; i<=height; i++) {
        aux += i
    }
    for (let i=0; i<aux; i++) {
        finalOrnaments += ornaments[i%ornaments.length]
    }
    for (let i=1; i<=height; i++) {
        result += ' '.repeat(height-i)
        result += finalOrnaments.slice(0, i).split('').join(' ')
        // result += ' '.repeat(height-i)
        result += '\n'
        finalOrnaments = finalOrnaments.slice(i)
    }
    result += " ".repeat(height-1) + "|" + '\n'
    return result
}

function generateTree() {
    const ornamentsInput = document.getElementById('ornaments').value
    const heightInput = document.getElementById('height').value;
    const resultContainer = document.getElementById('result');

    const result = createChristmasTree(ornamentsInput, heightInput);
    resultContainer.textContent = result;
}

function getScrollHeight(elm){
    var savedValue = elm.value
    elm.value = ''
    elm._baseScrollHeight = elm.scrollHeight
    elm.value = savedValue
}
  
function onExpandableTextareaInput({ target:elm }){
    // make sure the input event originated from a textarea and it's desired to be auto-expandable
    if( !elm.classList.contains('autoExpand') || !elm.nodeName == 'TEXTAREA' ) return
    
    var minRows = elm.getAttribute('data-min-rows')|0, rows;
    !elm._baseScrollHeight && getScrollHeight(elm)
  
    elm.rows = minRows
    rows = Math.ceil((elm.scrollHeight - elm._baseScrollHeight) / 16)
    elm.rows = minRows + rows
}
  
  
// global delegated event listener
document.addEventListener('input', onExpandableTextareaInput)