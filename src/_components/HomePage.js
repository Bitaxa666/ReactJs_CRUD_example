/**
 * Created by user on 3/30/18.
 */
import React, {Component} from 'react';


class HomePage extends Component {


    constructor(props) {
        super(props);
        this.state = {
            title: '' /*//в самом обьекте есть поле, но при тесте оно не активно?*/
        };
    };

    handleChange = (e) => {
        this.setState({title: e.target.value});

    };


    render() {
        return(
            <div className="home_page_class">
                <h1>This is Home Page</h1>
                <div className="ui container">
                    <form>
                       <h1>Home page test</h1>
                        <div className="home-form">
                            <label htmlFor="title">Title</label>
                            <input
                                name="title"
                                value={this.state.title}
                                onChange={this.handleChange}
                                id="title"
                            />
                            <br/>
                            <span>Errors</span><br />
                            <span>Test snapshoot Errors</span>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
export default HomePage;