import {makeAutoObservable} from 'mobx'

export default class UserStore {
    constructor() {
        this._isAuth = false
        this._user = {}
        makeAutoObservable(this) // будет следить за компонентами выше и при изменении компоненты будут перерендороваться
    }

    setIsAuth(bool) {
        this._isAuth = bool
    } // action который изменяет состоние переменной _isAuth

    setUser(user) {
        this._user = user
    }

    get isAuth() {
        return this._isAuth
    } // вызывается только в том случае, если _isAuth изменилась

    get user() {
        return this._user
    }
}