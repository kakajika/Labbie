import * as React from "react"
import {Component} from "flumpt"
import {render} from "react-dom"
import {Card, CardActions, CardTitle, Button, Textfield} from "react-mdl"

export interface LoginInfo {
    url: string
    username?: string
    password?: string
}

export class LoginView extends Component<LoginInfo, LoginInfo> {
    componentDidMount() {
        this.setState(this.props)
    }
    onChangeUrl = (e: any) => {
        this.setState({ url: e.target.value } as any)
    }
    onChangeUsername = (e: any) => {
        this.setState({ username: e.target.value } as any)
    }
    onChangePassword = (e: any) => {
        this.setState({ password: e.target.value } as any)
    }
    render() {
        return (
            <div id="login">
                <Card shadow={1} style={{ overflow: "visible", paddingTop: 64 }}>
                    <img id="logo" src="labbie.png"/>
                    <CardActions>
                        <Textfield floatingLabel label="GitLab URL" defaultValue={this.props.url} onChange={this.onChangeUrl}/>
                        <Textfield floatingLabel label="Username" defaultValue={this.props.username} onChange={this.onChangeUsername}/>
                        <Textfield floatingLabel label="Password" defaultValue={this.props.password} onChange={this.onChangePassword}/>
                        <Button accent style={{ float: "right" }}>Login</Button>
                    </CardActions>
                </Card>
            </div>
        )
    }
}
