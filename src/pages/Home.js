import React from 'react';

const Home = () => {
    return (
        <div className="App">
            <button type="button" onClick={() => {
                fetch('https://purple-shoes.herokuapp.com/test')
                    .then((res) => {
                        return res.json();
                    })
                    .then((data) => {
                        console.log(data);
                        alert(data.message);
                    });
            }}>get data</button>
        </div>
    );
};

export default Home;