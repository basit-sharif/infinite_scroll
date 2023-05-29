"use client"
import InfiniteScroll from 'react-infinite-scroll-component';
import { Component, ReactNode } from "react";



export default class Fetcherc extends Component<{ data: Array<any> }>{
    start: number = 10;
    end: number = 20;
    state: any = {
        items: [...this.props.data],
        hasMore: true
    };

    fetchBlogDataGragually = async (start: number, end: number) => {
        let res = await fetch(`http://localhost:3000/api/blogs?start=${start}&end=${end}`);
        let dataExtracted = await res.json();

        if (dataExtracted.sortedData === "Not found") {
            this.setState({ hasMore: false });
            return dataExtracted
        }
        return dataExtracted;
    }

    fetchMore = async () => {
        let mixedResponse = await this.fetchBlogDataGragually(this.start, this.end);
        if (mixedResponse.sortedData !== "Not found") {
            this.setState({
                items: this.state.items.concat(mixedResponse.sortedData)
            });
            this.start = this.start + 10;
            this.end = this.end + 10;
        } else {
            this.state.hasMore = false;
        }

    }

    render() {
        return (
            <InfiniteScroll
                dataLength={this.state.items.length}
                next={this.fetchMore}
                hasMore={this.state.hasMore}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
                loader={<h4>Loading...</h4>}
            >
                {this.state.items.map((item: { name: string }) => (
                    <div className='text-center my-5 text-white h-80 bg-gray-900 border-4 border-yellow-300'>{item.name}</div>
                ))}
            </InfiniteScroll>
        )
    }
};