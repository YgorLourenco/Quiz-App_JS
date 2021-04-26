import {qs, qsa} from '/app/utils/dom.utils.js'
import {randomNumber} from '/app/utils/math.util.js'
import GuessFaceAPI from 'app/modules/GuessFaceAPI/GuessFaceAPI.class.api'

const mainEl = qs('#main')
const loadingEl = qsa('#loading')

function startFakeLoading() {
    mainEl.style.display = 'none'
    loadingEl.style.display = ''

    setTimeout(_ => {
        mainEl.style.display = ''
        loadingEl.style.display = 'none'
    }, randomNumber(10, 5) * 100)
}

startFakeLoading()