import * as React from "react"
import {Component} from "flumpt"
import {Card, CardActions, CardTitle, Button, Textfield} from "react-mdl"

export interface LoginInfo {
    url: string
    token?: string
    username?: string
    password?: string
}

export class LoginView extends Component<LoginInfo, LoginInfo> {
    state: LoginInfo = this.props

    onChangeUrl = (e: any) => {
        this.setState({ url: e.target.value } as any)
    }
    onChangeToken = (e: any) => {
        this.setState({ token: e.target.value } as any)
    }
    onChangeUsername = (e: any) => {
        this.setState({ username: e.target.value } as any)
    }
    onChangePassword = (e: any) => {
        this.setState({ password: e.target.value } as any)
    }
    onLoginClicked = () => {
        this.dispatch("login", this.state)
    }
    
    render() {
        return (
            <div id="login">
                <Card shadow={1} style={{ overflow: "visible", paddingTop: 64 }}>
                    <img id="logo" src="images/labbie.png"/>
                    <CardActions>
                        <Textfield floatingLabel label="GitLab URL" defaultValue={this.props.url} onChange={this.onChangeUrl}/>
                        <Textfield floatingLabel label="Access Token" defaultValue={this.props.token} onChange={this.onChangeToken} inputMode="password"/>
                        {
                            //<Textfield floatingLabel label="Username" defaultValue={this.props.username} onChange={this.onChangeUsername}/>
                            //<Textfield floatingLabel label="Password" defaultValue={this.props.password} onChange={this.onChangePassword}/>
                        }
                        <Button accent style={{ float: "right" }} onClick={this.onLoginClicked}>Login</Button>
                    </CardActions>
                </Card>
            </div>
        )
    }
}
