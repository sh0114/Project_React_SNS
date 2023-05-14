import React, { useCallback } from "react";
import { Card, Avatar, Button } from "antd";
import styled from "styled-components";

const LogoutButton = styled(Button)`
margin-top : 10px; 
color : pink;
`

const UserProfile = ({ setIsLoggedIn }) => {

    const onLogout = useCallback(() => {
        console.log("logout~~!!");
        setIsLoggedIn(false);
    }, []);

    return (
        <Card
            actions={[
                <div key="twit">반짝반짝<br />0</div>,
                <div key="followings">folling<br />20</div>,
                <div key="followers">follower<br />50</div>
            ]}
        >
            <Card.Meta avatar={<Avatar>CC</Avatar>}
                title="ChaeChae" />
            <LogoutButton onClick={onLogout}>LogOut</LogoutButton>
        </Card>
    )
};

export default UserProfile;