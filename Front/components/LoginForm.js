import React, { useCallback, useState } from "react";
import { Form, Input, Button } from 'antd';
import Link from "next/link";
import styled from 'styled-components';

/** react 특성상 기존객체 != 새로생성한 객체 이므로
 *  style 객체를 div에 바로 만드는 경우 새로생성한 객체로 취급을 하기 때문에
 *  아무런 변화가 없더라도 재렌더링하는 아주 불필요한 상황이 생긴다
 *  따라서 style-component를 생성하여 style을 적용해 주어야 한다
 *
 * 
 * 함수형 컴포넌트에서 리렌더링 -> 함수안의 내용은 다 리렌더링 된다
 * useCallback은 캐싱하는 내용이므로 똑같은 내용(바뀐것이없음)으로 판단함
 * return부분중에서 바뀌는 부분만 리렌더링 된다
 */

const LoginButton = styled(Button)`
margin-right: 10px;
color: pink;
`
const SignupButton = styled(Button)`
color: black;
`

const ButtonWrapper = styled.div`
margin-top: 10px;
`

/** css 적듯이 작성해주어야한다.
 *  div 컴포넌트이면서 css가 적용된 buttonwrapper 컴포넌트가 생긴다 */
const LoginForm = ({ setIsLoggedIn }) => {

    const [id, setId] = useState('');
    const [pw, setPw] = useState('');


    //컴포넌트 props를 쓰는경우 꼭 usecallback을 사용할 것 
    // -> 왜? 그래야 최적화 된다!
    const onChangeId = useCallback((e) => {
        setId(e.target.value);
    }, []);

    const onChangePw = useCallback((e) => {
        setPw(e.target.value);
    }, []);

    const onSubmitForm = useCallback(() => {
        console.log(id, pw);
        setIsLoggedIn(true);
    }, [id, pw]);

    return (
        <Form onFinish={onSubmitForm}>
            {/** 버튼에 html type submit을 해야 form이 넘겨지는데, 이때 onFinish가 호출된다 
             * ant-design에서는 e.preventDefault가 이미 적용되어있으므로 사용하면 안된다!
             * e.preventDefalut : 이벤트의 기본 동작을 막는역할 (새로고침을 막는다!)
            */}
            <div>
                <label htmlFor="user-id">아이디</label>
                <br />
                <Input name="user-id" value={id} onChange={onChangeId} required />
            </div>
            <div>
                <label htmlFor="user-pw">비밀번호</label>
                <br />
                <Input name="user-pw" value={pw} type="password" onChange={onChangePw} required />
            </div>
            <ButtonWrapper>
                <LoginButton type="primary" htmlType="submit" loading={false}>로그인</LoginButton>
                <Link href="/signup"><SignupButton>회원가입</SignupButton></Link>
            </ButtonWrapper>
        </Form>
    )
};

export default LoginForm;