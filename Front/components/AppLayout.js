import React, { useState } from "react";
import PropTypes from 'prop-types';
import Link from 'next/link';
// react에서는 router를 사용했지만 next에서는 next/link를 사용

import { Menu, Input, Row, Col } from 'antd'; // ant design 사용
// antd 에서 반응형 웹페이지를 지원해준다 (Row, Col)
// 모바일 디자인을 먼저 해야 편리하다! 브레이크포인트 설정 편안
// 가로 먼저 그다음 세로를 나눈다


const AppLayout = ({ children }) => {

    const { isLoggedIn, setIsLoggedIn } = useState(false);

    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/">스타버드</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile">프로필</Link>
                </Menu.Item>
                <Menu.Item>
                    <Input.Search placeholder="검색할 단어를 입력해주세요" enterButton style={{ verticalAlign: "middle", width: "250px", }} />
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signup">회원가입</Link>
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                {/** xs : 모바일 , sm : 태블릿, md : 작은 데스크탑 24등분 한다고 생각하면 편안
                  * 합쳐서 24이상이면 서로 다른줄에 표시되고, 합쳐서 24이하면 같은줄에 표시
                 *  column 사이에 간격을 두는 옵션 -> gutter 
                 *  target blank -> 새창에서 열기 옵션인데 보안위협이 있어서 rel noreferrer noopener 필수 */}
                <Col xs={24} md={6}>왼쪽 메뉴
                    {isLoggedIn ? <UserProfile /> : <LoginForm />}
                </Col>
                <Col xs={24} md={12}>{children}</Col>
                <Col xs={24} md={6}> <a href="https://github.com/sh0114" target="_blank" rel="noreferrer noopener">썽히는 공부중 | Made by Sunghee</a></Col>
            </Row>

        </div>
    );
}

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AppLayout;