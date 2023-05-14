//page들의 공통되는 것들을 처리해줄 수 있다!
// import, 공통적용되는 components 등등 
// antd 웹팩이 css 스타일을 html에 알아서 적용해준다! 간편하다!
// antd 5버전 부터는 css를 import안해도 자동으로 적용된다고함 

import React from "react";
import PropTypes from 'prop-types'; // props를 점검

import Head from "next/head";  // head를 수정하고 싶을때, next에서 제공하는 component 


const StarBird = ({ Component }) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>StarBird</title>
            </Head>

            <div>공통메뉴</div>
            <Component />
        </>
    )
};

StarBird.propTypes = {
    Component: PropTypes.elementType.isRequired,
}

export default StarBird;