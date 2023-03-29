import React from "react";
import PropTypes from 'prop-types';
import Link from 'next/link';
// react에서는 router를 사용했지만 next에서는 next/link를 사용

const AppLayout = ({children}) => {
    return (
        <div>
            <div>공통메뉴</div> 
            <Link href="/">스타버드</Link>
            <Link href="/profile">프로필</Link>
            <Link href="/signup">회원가입</Link>
            <br/>
            {children} {/* children 렌더링 */}
        </div>
    );
}

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AppLayout;