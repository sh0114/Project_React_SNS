import AppLayout from "../components/AppLayout";
import Head from "next/head";

const Profile = () => {
    return (
        <>
            <Head><title>내 프로필 | StarBird</title></Head>
            <AppLayout>
                <NicknameEditForm />
                <FollowList header="following list" />
                <FollowerList header="follower list" />
            </AppLayout>
        </>
    );
}

export default Profile;