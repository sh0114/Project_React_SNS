// Next가 pages 폴더를 인식해서 코드 split해서 각각의 페이지로 만들어준다 
// pages는 무조건 pages로 이름 지어야함

import AppLayout from "../components/AppLayout";

const Home = () => {
    return (
        <AppLayout>Hello, Next!!</AppLayout>
    );
}

export default Home;