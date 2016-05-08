import * as React from "react"
import {Flux, Component} from "flumpt"
import {render} from "react-dom"

import {LoginInfo, LoginView} from "./login"

interface AppState {
    loginInfo?: LoginInfo
}

class App extends Flux<AppState> {
    subscribe() {
        this.on("login", (info: LoginInfo) => {
            this.update((s: AppState) => {
                return { loginInfo: info }
            })
        })
    }
    render(state: AppState) {
        if (state.loginInfo) {
            // TODO: Go to Dashboard page...
        }
        return <LoginView url=""/>
    }
}

var app = new App({
    renderer: (el: any) => {
        render(el, document.querySelector("#container"))
    },
    initialState: {}
})

// Initial render
app.update(() => ({}))

export default app