"use client"
import { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const style = {
    height: 30,
    border: "1px solid green",
    margin: 6,
    padding: 8
};

export default class InfiniteScrollCo extends Component {
    state: any = {
        items: Array.from({ length: 20 })
    };
    fetchMoreData = () => {
        setTimeout(() => {
            this.setState({
                items: this.state.items.concat(Array.from({ length: 20 }))
            });
            console.log(this.state.items.length)
        }, 1500);
    };

    render() {
        return (
            <div>
                <h1>demo: react-infinite-scroll-component</h1>
                <hr />
                <InfiniteScroll
                    dataLength={this.state.items.length}
                    next={this.fetchMoreData}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                >
                    {this.state.items.map((i: number, index: number) => (
                        <div style={style} key={index}>
                            div - #{index}
                        </div>
                    ))}
                </InfiniteScroll>
            </div>
        );
    }
}