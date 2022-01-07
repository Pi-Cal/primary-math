import React from 'react';
import { Image, ListGroup, ListGroupItem } from 'react-bootstrap';

const Example = ({partId}) => {
    switch (partId) {
        case 1: {
            return (
                <div className='mt-3 container'>
                    <h2><strong>DẠNG 1: BÀI TOÁN TÍNH SỐ CÂY KHI TRỒNG CÂY Ở CẢ 2 ĐẦU ĐƯỜNG.</strong></h2>
                    <i>Video minh họa bài học:</i>
                    <div class="d-flex justify-content-center embed-responsive embed-responsive-16by9">
                        <iframe width="1000" height="515" src="https://www.youtube.com/embed/XdwmXabVLIE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <Image fluid src="/example/anh-1-bai-toan-trong-cay.png" />
                    <p>Khi trồng cây ở cả 2 đầu đường thì số cây sẽ nhiều hơn số khoảng cách là 1. 
                        Như vậy ta có thể áp dụng một số công thức sau để giải các bài toán dạng này:</p>
                    <ListGroup>
                        <ListGroupItem key="rule-1">
                            <p>Số cây = Độ dài đoạn đường / Khoảng cách giữa các cây + 1.</p>
                        </ListGroupItem>
                        <ListGroupItem key="rule-2">
                            <p>Độ dài đoạn đường = (Số cây - 1) x Khoảng cách giữa các cây.</p>
                        </ListGroupItem>
                        <ListGroupItem key="rule-3">
                            <p>Khoảng cách giữa các cây = Độ dài đoạn đường / (Số cây - 1).</p>
                        </ListGroupItem>
                    </ListGroup>
                </div>
            )
        }
        case 2: {
            return (
                <div className='mt-3 container'>
                    <h2><strong>DẠNG 2: BÀI TOÁN TÍNH SỐ CÂY KHI CHỈ TRỒNG CÂY Ở MỘT ĐẦU ĐƯỜNG.</strong></h2>
                    <i>Video minh họa bài học:</i>
                    <div class="d-flex justify-content-center embed-responsive embed-responsive-16by9">
                        <iframe width="1000" height="515" src="https://www.youtube.com/embed/_Ts-koGJORg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <Image fluid src="/example/anh-2-bai-toan-trong-cay.png" />
                    <p>Khi trồng cây ở 1 đầu đường thì số cây sẽ bằng số khoảng cách giữa các cây. 
                        Ta có thể áp dụng một số công thức sau để giải các bài toán dạng này:</p>
                    <ListGroup>
                        <ListGroupItem key="rule-1">
                            <p>Số cây = Độ dài đoạn đường / Khoảng cách giữa các cây.</p>
                        </ListGroupItem>
                        <ListGroupItem key="rule-2">
                            <p>Độ dài đoạn đường = Số cây x Khoảng cách giữa các cây.</p>
                        </ListGroupItem>
                        <ListGroupItem key="rule-3">
                            <p>Khoảng cách giữa các cây = Độ dài đoạn đường / Số cây.</p>
                        </ListGroupItem>
                    </ListGroup>
                </div>
            )
        }
        case 3: {
            return (
                <div className='mt-3 container'>
                    <h2><strong>DẠNG 3: BÀI TOÁN TÍNH SỐ CÂY KHI KHÔNG TRỒNG CÂY Ở CẢ 2 ĐẦU ĐƯỜNG.</strong></h2>
                    <i>Video minh họa bài học:</i>
                    <div class="d-flex justify-content-center embed-responsive embed-responsive-16by9">
                        <iframe width="1000" height="515" src="https://www.youtube.com/embed/2AlWgB6cOfs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <Image fluid src="/example/anh-3-bai-toan-trong-cay.png" />
                    <p>Khi không trồng cây ở 2 đầu đường thì số cây sẽ ít hơn số khoảng cách là 1. 
                        Như vậy ta có thể áp dụng một số công thức sau để giải các bài toán dạng này:</p>
                    <ListGroup>
                        <ListGroupItem key="rule-1">
                            <p>Số cây = Độ dài đoạn đường / Khoảng cách giữa các cây - 1</p>
                        </ListGroupItem>
                        <ListGroupItem key="rule-2">
                            <p>Độ dài đoạn đường = (Số cây + 1) x Khoảng cách giữa các cây.</p>
                        </ListGroupItem>
                        <ListGroupItem key="rule-3">
                            <p>Khoảng cách giữa các cây = Độ dài đoạn đường / (Số cây + 1).</p>
                        </ListGroupItem>
                    </ListGroup>
                </div>
            )
        }
        case 4: {
            return (
                <div className='mt-3 container'>
                    <h2><strong>Dạng 4: BÀI TOÁN TÍNH SỐ CÂY THEO HÌNH KHÉP KÍN.</strong></h2>
                    <i>Video minh họa bài học:</i>
                    <div class="d-flex justify-content-center embed-responsive embed-responsive-16by9">
                        <iframe width="1000" height="515" src="https://www.youtube.com/embed/FmTLJKS5FDM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <Image fluid src="/example/anh-4-bai-toan-trong-cay.png" />
                    <p>Khi trồng cây theo hình khép kín thì số cây sẽ bằng số khoảng cách giữa các cây. 
                        Ta có thể áp dụng một số công thức sau để giải các bài toán dạng này:</p>
                    <ListGroup>
                        <ListGroupItem key="rule-1">
                            <p>Số cây = Chu vi hình khép kín / Khoảng cách giữa các cây.</p>
                        </ListGroupItem>
                        <ListGroupItem key="rule-2">
                            <p>Chu vi hình khép kín = Số cây x Khoảng cách giữa các cây.</p>
                        </ListGroupItem>
                        <ListGroupItem key="rule-3">
                            <p>Khoảng cách giữa các cây = Chu vi hình khép kín / Số cây.</p>
                        </ListGroupItem>
                    </ListGroup>
                </div>
            )
        }
        default: {
            return <div></div>
        }
    }
}

export default Example;