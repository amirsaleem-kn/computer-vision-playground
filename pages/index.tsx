import Link from "next/link";

const Home = () => {
    return (
        <div>
            <img src="https://img.icons8.com/office/100/000000/construction-worker.png"></img>
            <h1>Website Under Construction</h1>
            <style jsx global>
                {`
                    body {
                        padding: 0;
                        margin: 0;
                    }
                    div {
                        margin-top: 200px;
                        padding: inherit;
                    }
                    img {
                        display: block;
                        margin: 0 auto;
                    }
                `}
            </style>
        </div>
    )
};

export default Home;
